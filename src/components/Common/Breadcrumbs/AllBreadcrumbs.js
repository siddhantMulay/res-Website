
import React, { Component } from 'react';
import './Breadcrumbs.css';
import Breadcrumb from './Breadcrumb';
import LineIcon from 'react-lineicons';

class AllBreadcrumbs extends Component {

    renderCrumbs = () => {
        const { data } = this.props;
        let retArr = [];

        retArr.push(
            <div className="bIcon" key="bHome">
                <LineIcon
                    name="home" />
            </div>)

        data.forEach((item, index) => {
            retArr.push(<Breadcrumb
                key={index}
                text={item.text}
                isCurrent={item.current}
            />)
        });
        return retArr;
    }

    render() {
        return (
            <div className='allBreadcrumbs'>
                {this.renderCrumbs()}
            </div>
        )
    }
}

export default AllBreadcrumbs;