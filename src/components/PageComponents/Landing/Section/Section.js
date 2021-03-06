
import React, { Component } from 'react';
import './Section.scss';
import { Tween } from 'react-gsap';
import config from '../../../../common/utils';

import LineIcon from 'react-lineicons';
import MiniProductCard from '../MiniProductCard/MiniProductCard';
import Review from '../Review/Review';

class Section extends Component {

    renderRelatedProducts = () => {
        const { relatedProdData } = this.props;
        let retArr = [];
        relatedProdData.forEach((item, index) => {
            retArr.push(<MiniProductCard
                key={`rp${index}`}
                className='col-6 col-md-6 col-lg-4 col-xl-3'
                name={item.name}
                img={item.img}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
            />)
        });
        return retArr;
    }

    renderReviews = () => {
        const { reviewData } = this.props;
        let retArr = [];
        reviewData.forEach((item, index) => {
            retArr.push(<Review
                data={item}
                key={`rev${index}`} />)
        });
        return retArr;
    }

    render() {
        const { title, desc,
            hasVideo, img,
            secTitle, download,
            secImg, suggested, relatedProds, reviews, reviewData } = this.props;

        const titleInfo = title ? title : secTitle

        return (

            relatedProds ?
                <div className="relatedProdSection">
                    <div className="title">
                        Related Products
                    </div>
                    <div className="allRelatedProducts row">
                        {this.renderRelatedProducts()}
                    </div>
                </div>
                :
                reviews ?
                    <div className="reviewSection">
                        <div className="title">
                            {reviewData.length} Reviews
                        </div>
                        {this.renderReviews()}
                        {/* <div className="loadMoreComments">
                            <span>Load More</span>
                        </div> */}
                    </div>
                    :
                    <div className={`section ${suggested ? 'suggested' : null}`}>
                        <Tween
                            duration={1}
                            from={config.imgFromAnimation} to={config.imgToAnimation}>
                            <img src={img} alt="" className={`sectionImg ${hasVideo ? 'vid' : null}`} />
                        </Tween>

                        <div className={`${title ? 'title' : 'secTitle'} text`}>
                            <Tween
                                duration={1}
                                from={config.titleFromAnimation} to={config.titleToAnimation}>
                                <span>{titleInfo}</span>
                            </Tween>
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
                                <Tween
                                    duration={1}
                                    from={config.imgFromAnimation} to={config.imgToAnimation}>
                                    <img src={secImg} alt="" className="secImg" />
                                </Tween>
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