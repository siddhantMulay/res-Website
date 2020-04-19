
import React, { Component } from 'react';
import './Sidebar.css';
import LineIcon from 'react-lineicons';

class Sidebar extends Component {

    renderSidebarItems = () => {
        const { data, changeView } = this.props;
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

    render() {
        const { style, data } = this.props;
        return (
            <div className="sidebar" style={style}>
                <div className={`currentView ${data.activeItem}`}>
                    <span>{data.activeItem}</span>
                </div>
                <div className="pageNav">
                    {this.renderSidebarItems()}
                    <div className="socialLinks">
                        <a href='/#'>
                            <LineIcon name="facebook-filled" />
                        </a>
                        <a href='/#'>
                            <LineIcon name="twitter-filled" />
                        </a>
                        <a href='/#'>
                            <LineIcon name="pinterest" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;