
import  styles  from "./task-row.module.css"
function TaskCategoryRow({category}) {
    return (
        <tr className={styles.category}>
            <th colSpan="3">
                {category}
            </th>
        </tr>
    );
}

function TaskRow({task}) {

    // можем вернуть зачеркнутый тег с названием задачи
    const name = task.completed ? task.title :
        <s> {task.title} </s>;

    return (

        <tr>
            <td> </td>
            <td>{name}</td>
            <td>{task.number}</td>
        </tr>

    );
}
export {TaskRow, TaskCategoryRow}
