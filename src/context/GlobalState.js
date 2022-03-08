import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State any global state will go in this object

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: 20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: 10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
    budgetLimit: 1000
}

// try changing the structure of the limits, maybe each value can just be its own key value pair in initalState obj


// Create context
export const GlobalContext = createContext(initialState)

// Provider component. Children is deconstructed from props.children
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function changeBudget(budgetLimit) {
        dispatch({
            type: 'CHANGE_BUDGET',
            payload: budgetLimit
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            budgetLimit: state.budgetLimit,
            deleteTransaction,
            addTransaction,
            changeBudget
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}