
import React from 'react';
import './Counter.scss';
import LineIcon from 'react-lineicons';

function Counter(props) {
    const { qty, updateQty } = props;
    return <div className="counter">
        <LineIcon name="minus" onClick={() => updateQty('sub')} />
        <span className='count'>{qty}</span>
        <LineIcon name="plus" onClick={() => updateQty('add')} />
    </div>;
}

export default Counter;