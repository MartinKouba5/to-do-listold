// App.js
import AllTasks from "./COMPONENTS/AllTasks"
import { useState } from "react"
import data from "./data"

const App = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState(data)

    const addTaskHandler = () => {
        const newTask = { id: tasks.length + 1, name: task }
        setTasks([...tasks, newTask])
        setTask('')
    }

    const allDeleteHandler = () => {
        setTasks([])
    }

    return (
        <div>
          <h1>To Do List</h1>
            <AllTasks tasks={tasks} setTasks={setTasks}/>
            <div class="d-flex justify-content-center">
            <input class="text" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            
            <button onClick={addTaskHandler} class="btn btn-success">Přidat úkol</button>
            </div>
            <div class="d-flex justify-content-center">
            <div id="add">
            <button type="button" className="main-button" onClick={allDeleteHandler} class="btn btn-danger" >Vše vymazat</button>
        </div>
        </div>
        </div>
    )
}

export default App
