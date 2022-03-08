import { GlobalContext } from '../context/GlobalState'
import React, {useContext} from 'react'
import Transaction from './Transaction'

function TransactionList() {
    // Destructured could be context 
    const {transactions} = useContext(GlobalContext)
    console.log({transactions});
    return (
        <>
        <h2>List Here</h2>
        <ul>
        {transactions.map( (transaction) => { 
            return (
                <Transaction 
                key={transaction.id}
                transaction={transaction}
                />
                
            )
        })}
        </ul>
        </>
        
    );
}




export default TransactionList;