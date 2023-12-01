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


const findByTitle = title => {
    return http.get(`/task?title=${title}`);
};

const TaskService =
    {
        getAll,
        get,
        create,
        update,
        remove,
        findByTitle
    };

export default TaskService;