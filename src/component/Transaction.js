import React, { useContext } from 'react'
import './Transaction.css'
import { GlobalContext } from '../context/GlobalState'
import Trans from './Trans'

const Transaction = () => {

    const { transaction } = useContext(GlobalContext)
    
    return (
        <div className="tran">
            <h1 className="tran__header">My Transaction</h1>
            <ul className="tran__card">
                {transaction.map(trans => (<Trans key={trans.id} trans={trans} />))}
                
            </ul>
        </div>
    )
}

export default Transaction
