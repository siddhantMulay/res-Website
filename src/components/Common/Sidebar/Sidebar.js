
import React, { Component } from 'react';
import './Sidebar.css';
import LineIcon from 'react-lineicons';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div className="currentView">
                    <span>Details</span>
                </div>
                <div className="pageNav">
                    <a className="text active">
                        Details
                    </a>
                    <a className="text">
                        Description
                    </a>
                    <a className="text">
                        Reviews
                    </a>
                    <a className="text">
                        Custom Tab
                    </a>
                    <div className="socialLinks">
                        <a>
                            <LineIcon name="facebook-filled" />
                        </a>
                        <a>
                            <LineIcon name="twitter-filled" />
                        </a>
                        <a>
                            <LineIcon name="pinterest" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;