
import React, { Component } from 'react';
import AllBreadcrumbs from '../components/Common/Breadcrumbs/AllBreadcrumbs';

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
            </div>
        )
    }
}

export default Landing;