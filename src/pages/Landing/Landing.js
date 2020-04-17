
import React, { Component } from 'react';
import AllBreadcrumbs from '../../components/Common/Breadcrumbs/AllBreadcrumbs';
import Sidebar from '../../components/Common/Sidebar/Sidebar';
import './Landing.css';
import Section from '../../components/PageComponents/Landing/Section/Section';

class Landing extends Component {

    render() {

        const breadcrumbData = [{
            text: 'Catalog',
            current: false
        }, {
            text: 'Sofas',
            current: false
        }, {
            text: 'Beige Nudie Sofa',
            current: true
        }]

        return (
            <div>
                <AllBreadcrumbs data={breadcrumbData} />
                <div className="landingContent">
                    <Sidebar />
                    <div className="allSections">
                        <Section />
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;