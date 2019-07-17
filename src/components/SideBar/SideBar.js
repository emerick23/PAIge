import React from 'react'
import './SideBar.css'

const SideBar = () => {
    return (
        <div className='col s4 sidebar'>
            <h3 className='center'>Contact</h3>
            <ul className='center'>
                <li><img className='responsive-img circle' alt='lowpic' src='https://lh4.googleusercontent.com/SY0B7q0UZIyZ-t1Pg6g2MLlG1-dteNCFBbrBh1fG2wXLUuTK51T1iFHngLze_mX1E5NfDLIK7OjUkWJCv7RvRJl-b30ZnZGbaaMC9Nt5JRmpHzXmXWoZ46HUuoEjnjLzSuLI_sJoQIIptowPdA' /><h6>Lowell Smith</h6></li>
                <li><i className="medium material-icons">email</i><h6>lowell@blresults.com</h6></li>
                <li><i className="medium material-icons">local_phone</i><h6>512-971-2349</h6></li>
            </ul>
        </div>
    )
}

export default SideBar