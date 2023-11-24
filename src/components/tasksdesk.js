import {TaskCard} from "./desk/card";
import {TASKS} from "./desk/test-data";
import {TaskDesk} from "./desk/desk";



export default function Taskdesk(){
    return <h1> <TaskDesk tasks={TASKS}/></h1>
}