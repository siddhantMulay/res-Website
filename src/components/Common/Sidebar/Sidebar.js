
import React from 'react';
import './Sidebar.css';
import SocialLinks from '../SocialLinks/SocialLinks'

function Sidebar(props) {

    function renderSidebarItems() {
        const { data, changeView } = props;
        let retArr = [];
        data.allData.forEach((item, index) => {
            retArr.push(<a
                onClick={() => changeView(item.id)}
                className={`text ${item.active ? 'active' : null}`}
                key={`sb${index}`}
                data-id={item.id}
                href={`#${item.title}`}>
                {item.title}
            </a>)
        });
        return retArr;
    }

    const { style, data } = props;
    return (
        <div className="sidebar" style={style}>
            <div className={`currentView ${data.activeItem}`}>
                <span>{data.activeItem}</span>
            </div>
            <div className="pageNav">
                {renderSidebarItems()}
                <SocialLinks />
            </div>
        </div>
    )
}

export default Sidebar;