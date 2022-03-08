import { GlobalContext } from '../context/GlobalState'
import React, {useContext, useState} from 'react'
import ChangeBudget from './ChangeBudget'
import ViewBudget from './ViewBudget'


// Need have an inital state (is Edit) thats checked on mount, if false than it will show viewbudget component
// On click of edit button it will change to changebudget component by changing value of (isEdit)
// On change budget component once new number set the save button will again change state of isEdit to false and show view again

function Budget() {
    const { budgetLimit } = useContext(GlobalContext)
    const [ isEditing, setIsEditing ] = useState(false)



    return (
        <div>
            {
                isEditing ? 
                <ChangeBudget isEditing={isEditing} setIsEditing={setIsEditing}/> 
                : 
                <ViewBudget isEditing={isEditing} setIsEditing={setIsEditing}/>
            } 
        </div>
    )
}

export default Budget;