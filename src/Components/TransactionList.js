import { GlobalContext } from '../context/GlobalState'
import React, {useContext, useState, useEffect} from 'react'
import Transaction from './Transaction'
import SearchTransaction from './SearchTransaction';

function TransactionList() {
    // Destructured could be context 
    const {transactions} = useContext(GlobalContext)
    const [ expense, setExpense ] = useState('')
    console.log({transactions});

    function onChange(event) {
        // const value = event.target.value;
        setExpense(event.target.value)
        console.log(expense);
        
    }

    useEffect( () => {
        if (transactions.length > 0) {
            return transactions
        } else {
            console.log('hehe');
        }
    })


    return (
        <div className="transaction-container">
            <h2>Expenses</h2>
            <div>
                <input type="text"
                placeholder="Search Expense Here.."
                value={expense}
                onChange={onChange}
                />
            </div>
            <ul>
            {transactions.filter(
                (transaction) => {
                    if(expense === "") {
                        return transactions
                    } else if (transaction.text.toLowerCase().includes(expense.toLowerCase())) {
                        return transactions
                    }
                }
            ).map( (transaction) => { 
                return (
                    <Transaction 
                    key={transaction.id}
                    transaction={transaction}
                    />
                    
                )
            })}
            </ul>
        </div>
        
    );
}




export default TransactionList;