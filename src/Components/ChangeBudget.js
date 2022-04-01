import { GlobalContext } from '../context/GlobalState'
import React, { useContext, useState } from 'react'

function ChangeBudget({isEditing, setIsEditing}) {
    const { changeBudget } = useContext(GlobalContext)
    const [ newBudget, setNewBudget ] = useState(0)


    function handleSubmit (event) {
        event.preventDefault()

        setNewBudget(newBudget)

        changeBudget(parseInt(newBudget))

        setIsEditing(false)

        setNewBudget(0)
    }

    
    
    

    return (
        <form className="edit-budget-container" action="#" onSubmit={handleSubmit}>
            <div className="budget">
                <label htmlFor="new-budget" className="sr-only">New Budget</label>
                <input type="number"
                value={newBudget}
                onChange={ (event) => {
                    console.log(event.target.value);
                    setNewBudget(event.target.value)
                }}/>
            </div>

            <button>Save</button>
        </form>
    );
}




export default ChangeBudget;