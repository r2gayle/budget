import React, { useState, useRef, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'



function AddTransaction() {
    const [text, setText ] = useState('')
    const [amount, setAmount] = useState('')

    const { addTransaction } = useContext(GlobalContext)

    function handleSubmit(event) {
        event.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000) + 1,
            text: text,
            amount: parseInt(+amount)
        }
        
        addTransaction(newTransaction)
        setText('')
        setAmount('')
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="expense-name">
                <label htmlFor="name">Expense</label>
                <input 
                type="text"
                value={text}
                onChange={ (event) => {
                    console.log(event.target.value);
                    setText(event.target.value)
                }}/>
            </div>

            <div className="expense-cost">
                <label htmlFor="cost">Cost</label>
                <input 
                type="number"
                value={amount}
                onChange={ (event) => {
                    console.log(event.target.value);
                    setAmount(event.target.value)
                }}/>
            </div>

            <button>Submit</button>
        </form>
    );
}




export default AddTransaction;