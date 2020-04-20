
import React from 'react';
import './Footer.scss'
import Logo from '../../../assets/images/LogoY.png';
import SocialLinks from '../SocialLinks/SocialLinks'

function Footer() {
    return (
        <div className="footer">
            <div className="newsletter">
                <input type="text" placeholder="Grab our Newsletter" />
            </div>

            <div className="footerNav">
                <div className="navItems">
                    <a className="nav text active" href='/#'>Bedroom</a>
                    <a className="nav text" href='/#'>Living Room</a>
                    <a className="nav text" href='/#'>Office</a>
                    <a className="nav text" href='/#'>Kitchen</a>
                    <a className="nav text" href='/#'>Bathroom</a>
                </div>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <SocialLinks />
            </div>
        </div>
    )
}


export default Footer;