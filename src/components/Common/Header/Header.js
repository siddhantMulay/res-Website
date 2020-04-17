
import React, { Component } from 'react';
import './Header.css';
import Logo from '../../../assets/images/Logo.png';
import LineIcon from 'react-lineicons';

class Header extends Component {

    render() {
        return (
            <div className="pageHeader">
                <div className="header">
                    <button className="iconAction menu">
                        <span className="menuIcon"></span>
                    </button>

                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="navItems">
                        <a className="nav text active" href="#">Bedroom</a>
                        <a className="nav text" href="#">Living Room</a>
                        <a className="nav text" href="#">Office</a>
                        <a className="nav text" href="#">Kitchen</a>
                        <a className="nav text" href="#">Bathroom</a>
                        <button className="iconAction">
                            <LineIcon name="search-alt" />
                        </button>
                        <button className="iconAction">
                            <LineIcon name="heart" />
                        </button>
                        <button className="iconAction">
                            <LineIcon name="cart" />
                            <div className="badge">
                                2
                        </div>
                        </button>
                    </div>
                </div>
                <div className="subHeader">
                    <button className="subHeadNav text active">
                        Details
                    </button>
                    <button className="subHeadNav text">
                        Description
                    </button>
                    <button className="subHeadNav text">
                        Reviews
                    </button>
                    <button className="subHeadNav text">
                        Related
                    </button>
                </div>
            </div>
        )
    }
}

export default Header;