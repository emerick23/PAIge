import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = props => {
    let nav = props.user ?
        <nav>
            <div className='nav-wrapper grey lighten-4'>
                <span className='brand-logo'><img id='logo' className='responsive-img' alt='paige icon' src='https://lh6.googleusercontent.com/3B_nTjUkmX9vY_67RddcCqiNS2YC_erAxF97rulHq4xqAdWR0-fFsWZsycl8dVfRbaEzYTrwGPHrOrSvvx7J3Ix-zo3Kclo-xzVU0GbhISpPwxLEAhkPRDEn4BnNAbFmtYFFd4yuNxtF5MXazg' /></span>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/content-library'>Content Library</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='' onClick={props.handleLogout}>Logout</Link></li>
                </ul>
            </div>
        </nav>
        :
        <nav>
            <div className='nav-wrapper grey lighten-4'>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li><Link className='NavBar-link' to='/signup'>SignUp</Link></li>
                    <li><Link className='NavBar-link' to='/login'>Login</Link></li>
                </ul>
            </div>
        </nav>

    return (
        <nav className='NavBar'>
            <ul>
                {nav}
            </ul>
        </nav>
    )
}

export default NavBar