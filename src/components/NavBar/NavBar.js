import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
    let nav = props.user ?
        <div>
            <li>Welcome {props.user.name}</li>
            <Link to='' onClick={props.handleLogout}>Logout</Link>
        </div>
        :
        <div>
            <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </div>

    return (
        <nav>
            <ul>
                {nav}
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar