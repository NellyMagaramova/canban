import  {useState, useEffect} from "react";
import TaskDataService from "../../services/TaskService";
import { Link } from "react-router-dom";
import "./style.css";


const TaskListOld = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => { retrieveTasks(); }, []);


   /*
    const retrieveTasks = () => {
        console.log("1");
        const Response =  TaskDataService.getAll()
            .then((response) => response.json());
        setTasks(Response);
    }
    */


    const retrieveTasks =  async () =>
    {

        console.log("1");
    /*    const Response =  TaskDataService.getAll()
            .then((response) => response.json());
        setTasks(Response);


        console.log("getdata");
        */

        const Response = await  fetch('https://localhost:8080/task/all',
            {  // Enter your IP address here
                method: 'POST',
                mode: 'cors',
                body: "email1@gmail.com"
            }
        )
            .then((response) => response.json());
        setTasks(Response);

    }
    return (
        <div >
            {
                tasks && tasks.map(
                    (record) =>(
                        <div key={record.id}> {record.title} {record.taskDate} {record.priority.title}
                            <br/><br/>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default TaskListOld;

     /*   setTasks(data); */




          /*  .then((data) => {
                console.log("data",data);
                setTasks(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
*/



