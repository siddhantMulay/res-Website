
import React, { Component } from 'react';
import './Sidebar.css';
import LineIcon from 'react-lineicons';

class Sidebar extends Component {

    render() {
        const { style } = this.props;
        return (
            <div className="sidebar" style={style}>
                <div className="currentView">
                    <span>Details</span>
                </div>
                <div className="pageNav">
                    <a className="text active" href="#">
                        Details
                    </a>
                    <a className="text" href="#">
                        Description
                    </a>
                    <a className="text" href="#">
                        Reviews
                    </a>
                    <a className="text" href="#">
                        Custom Tab
                    </a>
                    <div className="socialLinks">
                        <a href="#">
                            <LineIcon name="facebook-filled" />
                        </a>
                        <a href="#">
                            <LineIcon name="twitter-filled" />
                        </a>
                        <a href="#">
                            <LineIcon name="pinterest" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;