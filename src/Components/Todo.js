import React from 'react'
import DeleteIcon from './DeleteIcon'
import DoneIcon from './DoneIcon'

function Todo( { todo, removeTodo, addToDone } ) {
    return (
        <div className="todo">
            <span>
                { todo }
            </span>

            <div className="todo-actions">
                <button className='action-button' onClick={ ()=>addToDone(todo) }><DoneIcon /></button>
                <button className='action-button' onClick={ ()=>removeTodo(todo) }><DeleteIcon /></button>
            </div>
        </div>
    )
}

export default Todo
