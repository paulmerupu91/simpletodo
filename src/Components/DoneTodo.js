import React from 'react'
import DeleteIcon from './DeleteIcon'

function DoneTodo( {doneTodo, removeDoneTodo}) {
    return (
        <div className="done-todo">
            <span className="text-decoration-line-through">
                { doneTodo }

            </span>

            <button className='action-button' onClick={ ()=>removeDoneTodo(doneTodo) }><DeleteIcon /></button>
        </div>
    )
}

export default DoneTodo
