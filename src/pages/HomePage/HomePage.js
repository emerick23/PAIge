import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PaigeHeader from '../../components/PaigeHeader/PaigeHeader'
import Footer from '../../components/Footer/Footer'

const HomePage = props => {
    return (
        <div>
            <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
            />
           <PaigeHeader />
        </div>
    )
}

export default HomePage