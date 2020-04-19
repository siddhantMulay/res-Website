
import React, { Component } from 'react';
import './Rating.css';
import Rating from './Rating';

class AllRatings extends Component {

    renderRatings = () => {
        const { rating } = this.props;
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

    render() {
        return (
            <div className={`allRatings`}>
                {this.renderRatings()}
            </div>
        )
    }
}

export default AllRatings;