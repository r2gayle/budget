import { GlobalContext } from '../context/GlobalState'
import React, { useContext } from 'react'

function ViewBudget({isEditing, setIsEditing}) {
    const { budgetLimit } = useContext(GlobalContext)
    console.log('view budget rendered');

    return (
        <div className="view-budget-container">
            <p>Budget Limit: ${budgetLimit}</p>
            <button onClick={ () => {
                setIsEditing(true)
            }}>Edit</button>
        </div>
    )

}

export default ViewBudget;