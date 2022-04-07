import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../Assets/logo.png'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    const { showModal } = props

    return (
        <div className={classes.main}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <div className={classes.links}>
                <NavLink to="/" className={(navData) => (navData.isActive ? classes.active : '')}>Dashboard</NavLink>
                <NavLink to="/calculator" className={(navData) => (navData.isActive ? classes.active : '')}>Calculator</NavLink>
                <NavLink to="/swap" className={(navData) => (navData.isActive ? classes.active : '')}>Swap</NavLink>
            </div>
            <Button onClick={showModal} className={classes.connectBut}>Connect Wallet</Button>
        </div>
    )
}

export default Navbar