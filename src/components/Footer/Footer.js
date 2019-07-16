import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        // <footer>
        //     <div className="footer-copyright">
        //         <div className="container">
        //             <ul class="list-inline">
        //                 <li><img class="responsive-img circle" src="https://lh4.googleusercontent.com/SY0B7q0UZIyZ-t1Pg6g2MLlG1-dteNCFBbrBh1fG2wXLUuTK51T1iFHngLze_mX1E5NfDLIK7OjUkWJCv7RvRJl-b30ZnZGbaaMC9Nt5JRmpHzXmXWoZ46HUuoEjnjLzSuLI_sJoQIIptowPdA" /><h6>Lowell M. Smith</h6></li>
        //                 <li><i class="small material-icons">email</i><h6>lowell@blresults.com</h6></li>
        //                 <li><h6>(512) 971-2349</h6></li>
        //             </ul>
        //         </div>
        //     </div>
        // </footer>
        <div class="row">
            <div class="col s5 push-s7"><span class="flow-text">This div is 7-columns wide on pushed to the right by 5-columns.</span></div>
            <div class="col s7 pull-s5"><span class="flow-text">5-columns wide pulled to the left by 7-columns.</span></div>
        </div>
    )
}

export default Footer