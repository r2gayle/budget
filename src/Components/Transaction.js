import { GlobalContext } from '../context/GlobalState'
import React, { useContext } from 'react'


function Transaction({transaction}) {
    const { deleteTransaction } = useContext(GlobalContext)
    
    return (
        <li>
            {transaction.text} <span>${transaction.amount}</span>  
              <button className="delete-btn" onClick={() => {
                deleteTransaction(transaction.id)
              }}>x</button>
        </li>
    );
}




export default Transaction;