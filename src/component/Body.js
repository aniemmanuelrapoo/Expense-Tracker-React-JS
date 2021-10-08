import React from 'react'
import './Body.css'
import Transaction from './Transaction'
import Expense from './Expense'

import { GlobalProvider } from '../context/GlobalState'

const Body = () => {
    return (
        <GlobalProvider>
            <div className="flex__all">
                <div className="flex__left">
                    <Transaction />
                </div>
                <div className="flex__right">
                    <Expense />
                </div>
            </div>
        </GlobalProvider>
    )
}

export default Body
