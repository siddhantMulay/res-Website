
import React from 'react';
import './Rating.css';
import LineIcon from 'react-lineicons';

function Rating(props) {

    const { active } = props;
    return (
        <div className={`star ${active ? 'active' : 'inactive'}`}>
            <LineIcon name='star-filled' />
        </div>
    )
}

export default Rating;