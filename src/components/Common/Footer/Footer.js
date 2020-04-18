
import React, { Component } from 'react';
import './Footer.css'
import Logo from '../../../assets/images/LogoY.png';
import LineIcon from 'react-lineicons';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="newsletter">
                    <input type="text" placeholder="Grab our Newsletter" />
                </div>

                <div className="footerNav">
                    <div className="navItems">
                        <a className="nav text active" href="#">Bedroom</a>
                        <a className="nav text" href="#">Living Room</a>
                        <a className="nav text" href="#">Office</a>
                        <a className="nav text" href="#">Kitchen</a>
                        <a className="nav text" href="#">Bathroom</a>
                    </div>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="socialLinks">
                        <a>
                            <LineIcon name="facebook-filled" />
                        </a>
                        <a>
                            <LineIcon name="twitter-filled" />
                        </a>
                        <a>
                            <LineIcon name="pinterest" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;