/*
import {SearchCategoryBar} from "./SearchBar";
import {useState} from "react";

import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
*
 */

/*
function TaskDesk({tasks}) {
    return <h1>Create Task</h1>
}
*/

    /*
    function searchValueChanged(propName, value) {
        setSearchValues({
            ...searchValues,
            [propName]: value
        });
    }



    const [searchValues, setSearchValues] = useState({filterText: ''});

    // при каждой отрисовке компонента - будут считывать переменные из состояния и фильтровать данные
    const filteredTasks= [];

    tasks.forEach((task) => {
        // будет ли добавлена задача для отображения
        var canAdd = true;

        // сначала фильтруем по тексту
        if (searchValues.filterText.length > 0 &&
            task.title.toLowerCase().indexOf(searchValues.filterText.toLowerCase()) === -1 )
        {// если задача НЕ содержит поисковый текст
            canAdd = false;
        }


        if (canAdd) {
            console.log("filteredTasks");
            filteredTasks.push(task);
        }
    });

    return (
        <div>
            <SearchCategoryBar
                searchValues={searchValues} // все значения для поиска
                onFilterCategoryChange={searchValueChanged} // ссылка на метод
            />
            <StageTable tasks={filteredTasks}/>
        </div>

    );
}


function StageTable({tasks}) {
    const rows = [];
    let lastCategory = null;

    // проходим по всем продуктам и формируем из них React компонент ProductRow
    tasks.forEach((task) => {
        // отображение категории
        if (task.category !== lastCategory) { // если категория задач изменилась - тогда отображаем ее
            rows.push( <TaskCategoryRow  category={task.category}  key={task.category}/> );
        }
        // отображение задачи в виде строки

        lastCategory = task.category;
    });


    return (
        <div className="sTable">
            <table>
                <thead>
                <tr>
                    <th> Поставленные задачи</th>
                    <th> В процессе </th>
                    <th> Завершено </th>
                </tr>
                </thead>
                <tbody> </tbody>
            </table>
        </div>
    );
}



export {TaskDesk}*/