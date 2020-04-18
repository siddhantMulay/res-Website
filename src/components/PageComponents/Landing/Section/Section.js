
import React, { Component } from 'react';
import './Section.css';
import productImg from '../../../../assets/images/Room.jpg';
import LineIcon from 'react-lineicons';

class Section extends Component {

    radioCheck = () => { }

    render() {
        const style = {
            backgroundImage: `url(${productImg})`
        }
        return (
            <div className="section" style={style}>
                <img src={productImg} alt="" className="sectionImg"/>
                <div className="title text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className="desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                </div>

            </div>
        )
    }
}

export default Section;