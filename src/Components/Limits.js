import { GlobalContext } from '../context/GlobalState'
import React, {useContext, useEffect, useState} from 'react'
import Budget from './Budget'


function Limits() {
    const { budgetLimit } = useContext(GlobalContext)
    
    const {transactions} = useContext(GlobalContext)

    const [spent, setSpent] = useState(0)
    const [remaining, setRemaining] = useState(0)

    useEffect( () => {
        let amounts = transactions.map( (transaction) => 
        transaction.amount
        ); 
    
        setSpent(parseInt(amounts.reduce((prev, curr) => (prev + curr), 0).toFixed(2)))
    
        setRemaining(parseInt((budgetLimit - spent).toFixed(2)))

    })

    

    return (
        <div className="budget-limit-container">
            <Budget />
            <div className="spent-div">
                <p>Spent: ${spent}</p>
            </div>
            <div className={remaining < 100 && remaining > 1 ? `${"remaining-div-warning"}` : remaining <= 0 ? `${"remaining-div-over"}` : `${"remaining-div"}` } >
                
                <p>Remaining: ${remaining}</p>
            </div>
        </div>
    );
}




export default Limits;