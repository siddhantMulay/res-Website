
import React, { Component } from 'react';
import './Rating.css';
import LineIcon from 'react-lineicons';

class Rating extends Component {

    render() {
        const { active } = this.props;
        return (
            <div className={`star ${active ? 'active' : 'inactive'}`}>
                <LineIcon name='star-filled' />
            </div>
        )
    }
}

export default Rating;