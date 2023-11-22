import {SearchBar} from "./task-search";
import {useState} from "react";

function FilterableTaskTable({products}) {

    function searchValueChanged(propName, value) {
        setSearchValues({
            ...searchValues,
            [propName]: value
        });
    }

    // код инициализации состояния выполняется только 1 раз при первой отрисовке компонента
    // затем при повторной отрисовке - просто будет браться оттуда значение searchValues

    const [searchValues, setSearchValues] = useState({filterText: '', inStockOnly: false});

    // при каждой отрисовке компонента - будут считывать переменные из состояния и фильтровать данные
    const filteredProducts = [];

    products.forEach((product) => {

        // будет ли добавлен товар для отображения
        var canAdd = true;

        // сначала фильтруем по тексту
        if (searchValues.filterText.length > 0 &&
            product.name.toLowerCase().indexOf(searchValues.filterText.toLowerCase()) === -1 // если товар НЕ содержит поисковый текст
        ) {
            canAdd = false;
        }


        // фильтруем по переключателю (в наличии или нет)
        if (searchValues.inStockOnly && !product.stocked) {
            canAdd = false;
        }

        if (canAdd) { filteredProducts.push(product); }


    });


    return (
        <div>
            <SearchBar
                searchValues={searchValues} // все значения для поиска
                onInStockOnlyChange={searchValueChanged} // ссылка на метод
                onFilterTextChange={searchValueChanged} // ссылка на метод
            />

        </div>
    );
}

export {FilterableTaskTable}