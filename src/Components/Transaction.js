import { GlobalContext } from '../context/GlobalState'
import React, { useContext } from 'react'


function Transaction({transaction}) {
    const { deleteTransaction } = useContext(GlobalContext)
    
    return (
        <li>
          <span>{transaction.text}</span>
          <div>
            <span>${transaction.amount}</span>
            <button className="delete-btn" onClick={() => {
                deleteTransaction(transaction.id)
              }}>x</button>
          </div>
        </li>
    );
}




export default Transaction;