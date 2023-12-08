import http from "../http-common";


const getAll = () => {
    return http.get("/task/search");
};

const get = id => {
    return http.get(`/task/${id}`);
};

const create = data => {
    return http.post("/task", data);
};

const update = (id, data) => {
    return http.put('/task/update', data);
};

const remove = id => {
    return http.delete(`/task/${id}`);
};


const findByEmail = email => {
    return http.get(`/task/all`);
};

const findByCategory = category => {
    return http.post('/task/all',
        {
            title: "",
            category : {category},
            "sortColumn": "title",
            "sortDirection": "desc"
         })
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