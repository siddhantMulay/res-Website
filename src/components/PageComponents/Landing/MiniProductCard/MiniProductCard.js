
import React, { Component } from 'react';
import './MiniProductCard.css';

class MiniProductCard extends Component {

    render() {
        const { name, img,
            oldPrice, newPrice
        } = this.props;
        return (
            <div className='miniProdCard'>
                <img src={img} alt="" />
                <div className="name">
                    {name}
                </div>
                <div className="price">
                    {oldPrice ?
                        <div className="oldPrice">
                            {oldPrice}
                        </div>
                        : null}
                    <div className="newPrice">
                        {newPrice}
                    </div>
                </div>
            </div>
        )
    }
}

export default MiniProductCard;