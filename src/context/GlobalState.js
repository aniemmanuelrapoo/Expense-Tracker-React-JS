import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

// inital state
const initialState = {
    transaction: [
        // { id: 1, text:'Fower', amount: -20, confirm: '-' },
        // { id: 2, text:'Glory', amount: 60, confirm: '+' },
        // { id: 3, text:'mark', amount: -10, confirm: '-' },
        // { id: 4, text:'joy', amount: 600, confirm: '+' },
    ]
}

//create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Action
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(trans){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: trans
        })
    }

    return(<GlobalContext.Provider value={{
        transaction:state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}