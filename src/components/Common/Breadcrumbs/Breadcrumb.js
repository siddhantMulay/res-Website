
import React from 'react';
import './Breadcrumbs.css';

function Breadcrumb(props) {
    const { text, isCurrent } = props;
    return <div className={`breadcrumb text ${isCurrent ? "current" : "prev"}`}>
        {text}
    </div>;
}

export default Breadcrumb;