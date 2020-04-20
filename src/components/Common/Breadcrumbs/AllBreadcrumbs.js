
import React from 'react';
import './Breadcrumbs.scss';
import Breadcrumb from './Breadcrumb';
import LineIcon from 'react-lineicons';

function AllBreadcrumbs(props) {

    function renderCrumbs() {
        const { data } = props;
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

    return (
        <div className='allBreadcrumbs'>
            {renderCrumbs()}
        </div>
    )
}

export default AllBreadcrumbs;