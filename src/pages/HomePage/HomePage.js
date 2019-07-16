import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PaigeHeader from '../../components/PaigeHeader/PaigeHeader'


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