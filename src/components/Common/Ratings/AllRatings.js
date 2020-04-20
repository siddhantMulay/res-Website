
import React from 'react';
import './Rating.css';
import Rating from './Rating';

function AllRatings(props) {

    function renderRatings() {
        const { rating } = props;
        let count = rating;
        let retArr = [];
        for (var i = 0; i < 5; i++) {
            retArr.push(<Rating
                key={`starRate${i}`}
                active={count !== 0 ? 'active' : null}
            />);
            if (count !== 0) {
                count--
            }
        }
        return retArr;
    }

    return (
        <div className={`allRatings`}>
            {renderRatings()}
        </div>
    )
}

export default AllRatings;