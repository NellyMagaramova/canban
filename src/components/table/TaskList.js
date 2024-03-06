import {useState, Fragment} from "react";
import { useDataApi } from "./useDataApi";
import "./style.css";


const TaskList= () => {

    const [query, setQuery] = useState(' ');

    const [{ data, isLoading, isError }, doFetch] = useDataApi(
             'https://localhost:8080/task/all',
            {  // Enter your IP address here
                method: 'POST',
                mode: 'cors',
                body: ''
            },
        { tasks: [] },
    );


    return (
        <Fragment>
            <form
                onSubmit={event => {

                    doFetch('https://localhost:8080/task/all',
                        {  // Enter your IP address here
                            method: 'POST',
                            mode: 'cors',
                            body:  {query},
                        },
                    );
                    event.preventDefault();
                }}
            >

                <input  type="text"  value={query}  onChange={event => setQuery(event.target.value)} />
                <button type="submit">Search</button>
            </form>

            {isError && <div>Something went wrong ...</div>}

            {isLoading ? ( <div>Loading ...</div>  )
                : (
                    <ul>
                        {
                            data.hits.map(
                                item =>
                                    (
                                        <li key={item.objectID}>
                                            <a href={item.id}>{item.title}</a>
                                        </li>
                                    )
                            )
                        }
                    </ul>
                )
            }
        </Fragment>
    );
}

export default TaskList;