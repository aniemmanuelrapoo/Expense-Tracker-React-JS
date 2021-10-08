import React from 'react'
import './Header.css'
import girl_img from '../assets/iconfinder_users-3_984116.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header__all">
            <img src={girl_img} alt="" className="girl__image" />
            <p className="header__name"> Micheal jamie</p>
            <p className="header__bar">transaction History</p>
            </div>
        </div>
    )
}

export default Header
