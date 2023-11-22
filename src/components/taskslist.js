import {FilterableTaskTable} from "./table/task-table"

import {TASKS} from "./table/test-data";

function Taskslist(){
    return   < FilterableTaskTable  tasks={TASKS}/>
}

export {Taskslist}