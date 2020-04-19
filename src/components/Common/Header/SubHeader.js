
import React, { Component } from 'react';
import './Header.css';

class SubHeader extends Component {

    renderSubHeaderItems = () => {
        const { data, changeView } = this.props;
        let retArr = [];
        data.allData.forEach((item, index) => {
            retArr.push(
                <button className={`subHeadNav text ${item.active ? 'active' : null}`}
                    onClick={() => changeView(item.id)}
                    key={`sb${index}`}
                    data-id={item.id}>
                    {item.title}
                </button>)
        });
        return retArr;
    }

    render() {
        return (
            <div className="subHeader">
                {this.renderSubHeaderItems()}
            </div>
        )
    }
}

export default SubHeader;