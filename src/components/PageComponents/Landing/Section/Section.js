
import React, { Component } from 'react';
import './Section.css';
import LineIcon from 'react-lineicons';
import MiniProductCard from '../MiniProductCard/MiniProductCard';

class Section extends Component {

    renderRelatedProducts = () => {
        const { relatedProdData } = this.props;
        let retArr = [];
        relatedProdData.map((item, index) => {
            retArr.push(<MiniProductCard
                key={`rp${index}`}
                name={item.name}
                img={item.img}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
            />)
        });
        return retArr;
    }

    render() {
        const { title, desc,
            hasVideo, img,
            secTitle, download,
            secImg, suggested, relatedProds } = this.props;

        const style = {
            // backgroundImage: `url(${img})`
        }
        const titleInfo = title ? title : secTitle

        return (

            relatedProds ?
                <div className="relatedProdSection">
                    <div className="title">
                        Related Products
                    </div>
                    <div className="allRelatedProducts">
                        {this.renderRelatedProducts()}
                    </div>
                </div>
                :
                <div className={`section ${suggested ? 'suggested' : null}`} style={style}>
                    <img src={img} alt="" className={`sectionImg ${hasVideo ? 'vid' : null}`} />

                    <div className={`${title ? 'title' : 'secTitle'} text`}>
                        <span>{titleInfo}</span>
                    </div>

                    {desc ?
                        <div className="desc">
                            {desc}
                        </div>
                        : null}

                    {hasVideo ?
                        <div className="vidContainer">
                            <div className="playButton"></div>
                        </div>
                        : null}

                    {secImg ?
                        <div className="secImgContainer">
                            <img src={secImg} alt="" className="secImg" />
                        </div>
                        : null}

                    {download ?
                        <button className="downloadContainer">
                            <LineIcon name="download" />
                            <span className="text">Download PDF</span>
                        </button>
                        : null}
                </div>
        )
    }
}

export default Section;