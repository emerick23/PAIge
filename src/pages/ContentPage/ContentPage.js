import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import InfoRow from '../../components/InfoRow/InfoRow'
import Footer from '../../components/Footer/Footer'

const ContentPage = (props) => {
    return (
        <div>
            <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
            />
            <InfoRow />
        </div>
    )
}

export default ContentPage