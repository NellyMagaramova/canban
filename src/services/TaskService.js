import http from "../http-common";


const getAll = () => {
    console.log(" getAll = ()");
    return http.post("/task/search", "test@email.ru");
};

const findByCategory = category => {
    return http.post('/task/search',
        {
            title: "",
            category : {category},
            "sortColumn": "title",
            "sortDirection": "desc"
        })
};

const get = id => {
    // eslint-disable-next-line no-template-curly-in-string
    return http.get('/task/${id}');
};

const create = data => {
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
        get,
        create,
        update,
        remove,
        findByEmail,
        findByCategory
    };

export default TaskService;