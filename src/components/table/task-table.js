import {SearchBar} from "./task-search";
import {useState} from "react";
import {TaskCategoryRow, TaskRow} from "./task-row";
import "./style.css"

function FilterableTaskTable({tasks}) {


    function searchValueChanged(propName, value) {
        setSearchValues({
            ...searchValues,
            [propName]: value
        });
    }

    // код инициализации состояния выполняется только 1 раз при первой отрисовке компонента
    // затем при повторной отрисовке - просто будет браться оттуда значение searchValues


    const [searchValues, setSearchValues] = useState({filterText: '', inCompletedOnly: false});

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
        else if (searchValues.inCompletedOnly && !task.completed) { canAdd = false; }
        else canAdd = true;
        // фильтруем по переключателю (в наличии или нет)

        if (canAdd) {
            console.log("filteredTasks");
            filteredTasks.push(task);
        }
    });


    return (
        <div>
            <SearchBar
                searchValues={searchValues} // все значения для поиска
                onInUnCompletedOnlyChange={searchValueChanged} // ссылка на метод
                onFilterTextChange={searchValueChanged} // ссылка на метод
            />
            <TaskTable tasks={filteredTasks}/>
        </div>
    );
}

// таблица с данными товаров
function TaskTable({tasks}) {
    // массив React компонентов TaskRow
    const rows = [];
    let lastCategory = null;

    // проходим по всем задачам
    tasks.forEach((task) => {
        // отображение категории
        if (task.category !== lastCategory) { // если категория задач изменилась - тогда отображаем ее
            rows.push( <TaskCategoryRow  category={task.category}  key={task.category}/> );
        }
        // отображение задачи в виде строки
        rows.push( <TaskRow  task={task}  key={task.title}/> );
        lastCategory = task.category;
    });

    return (
        <div className="container">
            <table>
                <thead>
                <tr>
                    <th>Категория</th>
                    <th>Название</th>
                    <th>Номер</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export {FilterableTaskTable}