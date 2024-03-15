
import './App.css';
import Navbar from "./components/Navbar"
import Taskdesk from "./components/tasksdesk";
import Createtask from "./components/createtask";
import Tasklist  from "./components/taskslist";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <> <Navbar/>
            <div className="container">
                <Routes>
                    <Route  path="/home"            element={<Home/>} />
                    <Route  path="/create_task"     element={<Createtask/>} />
                    <Route  path="/show_desk"       element={<Taskdesk/>} />
                    <Route  path="/show_all_tasks"  element={<Tasklist/>} />
               </Routes>
            </div>
        </>
    )
}

export default App;
