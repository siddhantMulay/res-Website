
import React, { Component } from 'react';
import './Section.css';
import productImg from '../../../../assets/images/Product.png';

class Section extends Component {

    render() {
        return (
            <div className="section">
                <div className="row">
                    <div className="col-lg-6 col-xl-6 imgContainer">
                        <img src={productImg} alt="" />
                    </div>
                    <div className="col-lg-6 col-xl-6 dataContainer">
                        Test
                    </div>
                </div>

            </div>
        )
    }
}

export default Section;