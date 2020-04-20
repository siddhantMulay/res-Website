
import React from 'react';
import './Header.scss';

function SubHeader(props) {

    function renderSubHeaderItems() {
        const { data, changeView } = props;
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

    return (
        <div className="subHeader">
            {renderSubHeaderItems()}
        </div>
    )
}

export default SubHeader;