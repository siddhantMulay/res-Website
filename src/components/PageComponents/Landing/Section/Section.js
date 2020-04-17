
import React, { Component } from 'react';
import './Section.css';
import productImg from '../../../../assets/images/Product.png';
import LineIcon from 'react-lineicons';

class Section extends Component {

    render() {
        return (
            <div className="section">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6 imgContainer">
                        <img src={productImg} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 dataContainer">
                        <div className="productDetails">
                            <div className="name text">
                                Nudie Extendable <br /> Sofa for 3 persons.
                            </div>

                            <div className="price">
                                <div className="oldPrice">
                                    $169
                                </div>
                                <div className="newPrice">
                                    $149
                                </div>
                            </div>

                            <div className="notes">
                                <ul>
                                    <li>
                                        <span className="title">Assembly:</span>
                                        <span className="desc"> Carpenter Assembly</span>
                                    </li>
                                    <li>
                                        <span className="title">Warranty:</span>
                                        <span className="desc"> 12 Months' Warranty</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="attributes">
                                <div className="feature">
                                    <div className="icon">
                                        <LineIcon name="car" />
                                    </div>
                                    <div className="title">
                                        SAME DAY DISPATCH
                                    </div>
                                </div>

                                <div className="feature">
                                    <div className="icon">
                                        <LineIcon name="reload" />
                                    </div>
                                    <div className="title">
                                        EASY - 30 DAY RETURN POLICY
                                    </div>
                                </div>
                            </div>
                        
                            <div className="color">
                                <div className="title">Color:</div>
                                <div className="colorSelection">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Section;