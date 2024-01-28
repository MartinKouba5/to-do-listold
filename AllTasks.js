// AllTasks.js
import "./AllTasks.css"
import { useState } from "react"

const AllTasks = ({ tasks, setTasks }) => {
    const tasksHandler = (id) => {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks)
    }

    const allDeleteHandler = () => {
        setTasks([])
    }

    return (
        <div>
            {tasks.map((task) => (
                <div className="one-task" key={task.id}>
                    <div class="d-flex justify-content-center">
                    <h4>{task.name}</h4>
                    </div>

                    <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-danger" onClick={() => tasksHandler(task.id)}>Smazat</button>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default AllTasks
