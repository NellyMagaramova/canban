import http from "../http-common";


const getAll = () => {
    console.log(" getAll = ()");
    return fetch('https://localhost:8080/task/all',
        {  // Enter your IP address here

            method: 'POST',
            mode: 'cors',
            body: "email1@gmail.ru"
        }
    )

  /*  return http.post("/task/search", "email1@gmail.ru");*/

};

const findByCategory = category => {
    const data = {category: this.category};
    const body = JSON.stringify(data);
    return http.post('/task/search',
        body,
        {
            title: "",
            category : {
                "title": "category"
            },
            "sortColumn": "title",
            "sortDirection": "desc"
        })
};

const findByTitle = title => {
    console.log("find by title "+ title );
    return http.post('/task/search',
        {
            title: {title},
            "sortColumn": "title",
            "sortDirection": "desc"
        })
};

const getById = id => {
    console.log("getById "+id );
    // eslint-disable-next-line no-template-curly-in-string
    const data = {id: this.id};
    const body = JSON.stringify(data);
    return http.post('/task/' , body,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    )
};

const create = data => {
    console.log(" create  "+ data );
    return http.post("/task", data);
};

const update = (id, data) => {
    return http.put('/task/update', data);
};

const remove = id => {
    // eslint-disable-next-line no-template-curly-in-string
    return http.delete('/task/${ id }' );
};
const findByEmail = email => {
    return http.get('/task/all');
};


const TaskService =
    {
        getAll,
        getById,
        create,
        update,
        remove,
        findByEmail,
        findByTitle,
        findByCategory
    };

export default TaskService;