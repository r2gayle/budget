import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

function SearchTransaction() {
    const { transactions } = useContext(GlobalContext)
    const [ expense, setExpense ] = useState('')

    console.log(transactions);

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleChange(event) {
        const value = event.target.value;
        setExpense(value)
        console.log(expense);
        transactions.filter()
        
    }


    return (
        <div>
            <h3>Expenses</h3>
            <input type="text"
            placeholder="Search Expense Here.."
            value={expense}
            onChange={handleChange}/>
        </div>
    )
}

export default SearchTransaction;