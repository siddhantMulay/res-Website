
import React from 'react';
import './MiniProductCard.css';

function MiniProductCard(props) {

    const { name, img,
        oldPrice, newPrice,
        className
    } = props;
    return (
        <div className={`miniProdCard ${className}`}>
            <div className="inner">
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
        </div>
    )
}

export default MiniProductCard;