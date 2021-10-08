import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Trans = ({trans}) => {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = trans.amount < 0 ? '-' : '+';
    trans.confirm = sign
    console.log(sign)
    // let sign
    // if(trans.amount > 0){
    //     sign ='+';
    //     trans.confirm ='+'
    // }
    // if(trans.amount < 0){
    //     sign ='-';
    //     trans.confirm ='-'
    // }
    return (
        <li className={trans.amount < 0 ? 'red' : 'green'}><button onClick={() => deleteTransaction(trans.id)} className="tran_icon">Delete</button><br /><span className="food">{trans.text}</span><br /><span className="pricenum">{sign}${Math.abs(trans.amount)}</span><br /> <small>march 16th, 2021</small></li>
    )
}

export default Trans
