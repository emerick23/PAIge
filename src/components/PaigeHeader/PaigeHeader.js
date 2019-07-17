import React from 'react'
import './PaigeHeader.css'
import PaigeHeaderImg from './img/PaigeHeader.png'

const PaigeHeader = () => {
    return (
        <div className='container'>
            <img className='responsive-img center' alt='paige' src={PaigeHeaderImg}></img>
        </div>
    )
}

export default PaigeHeader