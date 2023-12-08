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
        retrieveTasks();
    }, []);

    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const retrieveTasks = () => {
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
        TaskDataService.findByTitle(searchTitle)
            .then(response => {
                setTasks(response.data);
                console.log(response.data);
            })
            .catch(e => { console.log(e); } );
    };

    return (
        <div className="container">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input  type="search"  placeholder="Search by title"  value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />

                    <button   type="button"  onClick={findByTitle} > Ok </button>

                </div>
            </div>
            <div className="col-md-6">
                <h4>Task List</h4>

                <ul className="list-group">
                    {tasks &&
                        tasks.map((task, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveTask(task, index)}
                                key={index}
                            >
                                {task.title}
                            </li>
                        ))}
                </ul>

                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeTask}
                >
                    Delete Task
                </button>
            </div>

            <div className="col-md-6">
                {currentTask ? (
                    <div>
                        <h4>Task 2</h4>
                        <div>
                            <label> <strong>Title:</strong>  </label>{" "}
                            {currentTask.title}
                        </div>

                        <div>
                            <label>  <strong>Task Date:</strong>  </label>{" "}
                            {currentTask.taskDate}
                        </div>

                        <div>
                            <label>  <strong>Status:</strong>  </label>{" "}
                            {currentTask.published ? "Published" : "Pending"}
                        </div>

                        <Link to={"/task/" + currentTask.id}  className="linktotask" > Edit  </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Task...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskList;