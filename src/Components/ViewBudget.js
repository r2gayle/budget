import { GlobalContext } from '../context/GlobalState'
import React, { useContext } from 'react'

function ViewBudget({isEditing, setIsEditing}) {
    const { budgetLimit } = useContext(GlobalContext)
    console.log('view budget rendered');

    return (
        <div>
        <div className="div">
            <p>Budget Limit</p>
            <p>${budgetLimit}</p>
        </div>
        <button onClick={ () => {
            setIsEditing(true)
        }}>Edit</button>
        </div>

    )

}

export default ViewBudget;