import React, { useContext, useEffect, useState } from 'react'
import './Expense.css'
import { GlobalContext } from '../context/GlobalState'

const Expense = () => {
    const { addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const [selection, setSelection] = useState(["+", "-"])
    const [confirm, setConfirm] = useState()

    const Add = selection.map(Add => Add)

    const handleAddrTypeChange = (e) => {
        const add = Add[e.target.value]
        setConfirm(add)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
            confirm
        }

        addTransaction(newTransaction);
    }
   
    // const code = () => {
    //     if(confirm === '+'){
    //         console.log('get money')
    //         setIncome(prev => prev + Number(amount))
    //         setExpense(prev => prev -  Number(amount))
    //     }else if(confirm === '-'){
    //         console.log('remove money')
    //         setIncome(prev => prev - Number(amount))
    //         setExpense(prev => prev +  Number(amount))
    //     }else{
    //         console.log('select get or remove')
    //     }
    //     console.log(`${text} ${amount} ${confirm}`)
    // }

    // useEffect(() => {
    //     code()
    // }, [])
    const { transaction } = useContext(GlobalContext)
    const amounts = transaction.map(trans => trans.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    const expense = (
        amounts.filter( item => item < 0).reduce((acc, item) => (acc += item), 0) * 1
    ).toFixed(2);

    
    
    return (
        <div className="ex">
            <div className="ex__display">
                <h4>Available Budget in September 17, 2021</h4>
                <h1 className="ex__price">${total}</h1>
                <p className="ex__ex">income: <span className="ex__btn">{income}</span></p>
                <p className="ex__ex">Expense: <span className="ex__btn color__brown">{expense}</span></p>
                <h3 className="ex__text">INCOME-EXPENSE</h3>
            </div>
            
            <form className="ex__form" onSubmit={handleSubmit}>
                <select className="ex__input" onClick={handleAddrTypeChange}>
                    {
                        Add.map((address, key) => <option key={key}value={key}>{address}</option>)
                    }
                </select>
                <input type="text" placeholder="Description" className="ex__input" value={text} onChange={(e) => setText(e.target.value)} />
                <input type="number" placeholder="Amount" className="ex__input" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button className="ex__input">sub</button>
            </form>
            </div>
    )
}

export default Expense
