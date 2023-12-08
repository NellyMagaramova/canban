import  {useState, useEffect} from "react";
import TaskDataService from "../../services/TaskService";
import { Link } from "react-router-dom";
import "./style.css";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        console.log("useEffect");
        retrieveTasks();
    }, []);

    const onChangeSearchTitle = e => {
        console.log("onChangeSearchTitle");
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const retrieveTasks = () => {
        console.log("retrieveTasks");
        TaskDataService.getAll()
            .then(response => {
                setTasks(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveTasks();
        setCurrentTask(null);
        setCurrentIndex(-1);
    };

    const setActiveTask = (task, index) => {
        setCurrentTask(task);
        setCurrentIndex(index);
    };

    const removeTask = () => {
        TaskDataService.remove()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByTitle = () => {
        TaskDataService.findByCategory(searchTitle)
            .then(response => {
                setTasks(response.data);
                console.log(response.data);
            })
            .catch(e => { console.log(e); } );
    };

    return (

        <div className="container">
            <form role="search" id="form">
                <input  type="search"  placeholder="Искать по названию"  value={searchTitle}
                    onChange={onChangeSearchTitle} />
                <button   type="button"  onClick={findByTitle} > Ok </button>
            </form>

            <h4> Список задач </h4>

            <ul className="taskstr">
                    {tasks &&
                        tasks.map((task, index) => (
                            <li
                                className={ "active" + (index === currentIndex ? "active" : "") }
                                onClick={() => setActiveTask(task, index)}
                                key={index}
                            >
                                {task.title}
                            </li>
                        ))}
            </ul>

                <button  type="button" className="button"  onClick={removeTask} > Delete Task </button>


                <div className="container">
                    {currentTask ?
                    (
                        <div>
                            <h4>Task 2</h4>
                            <div>
                                <label> <strong> Title: </strong>  </label>{" "}
                                {currentTask.title}
                            </div>

                            <div>
                                <label>  <strong>Task Date:</strong>  </label>{" "}
                                {currentTask.taskDate}
                            </div>

                            <div>
                                 <label>  <strong> Status: </strong>  </label>{" "}
                                 {currentTask.published ? "Published" : "Pending"}
                            </div>

                           <Link to={"/task/" + currentTask.id}  className="linktotask" > Edit  </Link>
                        </div>
                    ) :
                    (
                        <div>
                            <br />
                            <p>Please click on a Task...</p>
                        </div>
                   )
                }
            </div>
        </div>
    );
};

export default TaskList;