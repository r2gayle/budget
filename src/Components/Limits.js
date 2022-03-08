import { GlobalContext } from '../context/GlobalState'
import React, {useContext, useState} from 'react'
import Budget from './Budget'


function Limits() {
    const { budgetLimit } = useContext(GlobalContext)
    
    const {transactions} = useContext(GlobalContext)

    console.log(budgetLimit);
    
    const amounts = transactions.map( (transaction) => 
    transaction.amount
    ); 

    let spent = parseInt(amounts.reduce((prev, curr) => (prev + curr), 0).toFixed(2))

    let remaining = parseInt((budgetLimit - spent).toFixed(2))

    console.log(transactions, amounts);

    return (
        <div>
            <Budget />
            <div className="div">
                <p>Spent</p>
                <p>${spent}</p>
            </div>
            <div className="div">
                <p>Left</p>
                <p>${remaining}</p>
            </div>
        </div>
    );
}




export default Limits;