
import React, { Component } from 'react';
import './ProductCard.css';
import LineIcon from 'react-lineicons';
import { Tween, Timeline } from 'react-gsap';
import { config } from '../../../../common/utils';

class ProductCard extends Component {

    radioCheck = () => { }

    renderNotes = () => {
        const { data } = this.props;
        const notes = data.notes;
        let retArr = [];
        if (notes.length > 0) {
            notes.map((item, index) => {
                retArr.push(<li key={`lol${index}`}>
                    <span className="title">{item.title}:</span>
                    <span className="desc">{item.desc}</span>
                </li>)
            });
        }
        return retArr;
    }

    renderColorSelection = () => {
        const { data } = this.props;
        const colors = data.colors;
        let retArr = [];
        if (colors.length > 0) {
            colors.forEach((item, index) => {
                retArr.push(<div key={`color${index}`} className={`colorSelect ${item}`}>
                    <input type="radio" name="colorsel" id="" onChange={this.radioCheck} />
                    <div className={`checkMark ${item}`}></div>
                </div>)
            });
        }
        return retArr;
    }

    render() {
        const { data } = this.props;

        return (
            <div className="productCard">
                <div className="row">
                    <Timeline>
                        <div className="col-md-6 col-lg-6 col-xl-6 imgContainer">
                            <Tween
                                duration={1}
                                from={config.imgFromAnimation} to={config.toImgAnimation}>
                                <img src={data.img} alt="" />
                            </Tween>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6 dataContainer">
                            <Tween duration={1.2} from={{ opacity: 0, transform: `translateX(-125px)` }} to={{ opacity: 1, transform: `translateX(0)` }}>
                                <div className="productDetails">
                                    <div className="name text">
                                        {data.name}
                                    </div>

                                    <div className="price">
                                        {data.oldPrice ?
                                            <div className="oldPrice">
                                                {data.oldPrice}
                                            </div>
                                            : null}
                                        <div className="newPrice">
                                            {data.newPrice}
                                        </div>
                                    </div>

                                    <div className="notes">
                                        <ul>
                                            {this.renderNotes()}
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
                                            {this.renderColorSelection()}
                                        </div>
                                    </div>

                                    <div className="cardActions">
                                        <div className="counter">
                                            <LineIcon name="minus" />
                                            <span className='count'>1</span>
                                            <LineIcon name="plus" />
                                        </div>
                                        <button className="custButton">
                                            Add to Cart
                                </button>
                                    </div>
                                </div>
                            </Tween>
                        </div>

                    </Timeline>
                </div>

            </div>
        )
    }
}

export default ProductCard;