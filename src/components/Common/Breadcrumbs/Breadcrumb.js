
import React, { Component } from 'react';
import './Breadcrumbs.css';

class Breadcrumb extends Component {

    render() {
        const { text, isCurrent } = this.props;
        return (
            <div className={`breadcrumb text ${isCurrent ? "current" : "prev"}`}>
                {text}
            </div>
        )
    }
}

export default Breadcrumb;