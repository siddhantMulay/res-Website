
import React from 'react';
import './Review.css';

import AllRatings from '../../../Common/Ratings/AllRatings';

function Review(props) {

    const { data } = props;

    return (
        <div className='review row'>
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 userData">
                <div className="userImg">
                    <img src={data.userImg} alt="" />
                </div>
                <div className="userInfo">
                    <div className="name">
                        {data.user}
                    </div>
                    <div className="reviewDate">
                        {data.reviewDate}
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-8 col-lg-8 col-xl-8 reviewData">
                <div className="remark">{data.remark}</div>
                <AllRatings rating={data.rating} />
                <div className="reviewInfo">{data.review}</div>
                <div className="addComment">
                    <span>Add Comment</span>
                </div>
            </div>
        </div>
    )
}

export default Review;