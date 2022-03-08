export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                // Send down all the transactions except the one that was deleted, filtering out the transaction that has the id clicked on
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) 
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                // opened up transactions array and added the new transaction object to the state
                transactions: [...state.transactions, action.payload]
            }
        case 'CHANGE_BUDGET':
            return {
                ...state,
                budgetLimit: state.budgetLimit = action.payload
                
            }
        default:
            return state
    }
}

// Reducer is a means to change your state and send it down to a component!