import React, { useState } from 'react'

const ToDoList = ({ tasks, handleDelete, handleDone, handleEdit }) => {
    const [editId, setEditId] = useState(null)
    const [editValue, setEditValue] = useState('')

    const handleChange = (event) => {
        setEditValue(event.target.value)
    }

    const saveEdit = (id) => {
        handleEdit({ id, title: editValue })
        setEditId(null)
    }

    const cancelEdit = () => {
        setEditId(null)
        setEditValue('')
    }

    return (
        <div className="todo-list">
            {tasks.map((task) => (
                <div className={`task ${task.completed ? 'completed' : ''}`} key={task.id}>
                    {editId === task.id ? (
                        <div className="edit-task">
                            <input type="text" value={editValue} onChange={handleChange} />
                            <button onClick={() => saveEdit(task.id)}>Save</button>
                            <button onClick={cancelEdit}>Cancel</button>
                        </div>
                    ) : (
                        <>
                            <span>{task.title}</span>
                            <button onClick={() => setEditId(task.id)}>Edit</button>
                        </>
                    )}
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default ToDoList