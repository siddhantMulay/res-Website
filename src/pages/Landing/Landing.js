
import React, { Component } from 'react';
import AllBreadcrumbs from '../../components/Common/Breadcrumbs/AllBreadcrumbs';
import Sidebar from '../../components/Common/Sidebar/Sidebar';
import './Landing.css';
import ProductCard from '../../components/PageComponents/Landing/ProductCard/ProductCard';
import productImg from '../../assets/images/Product.png';
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

        const productData = {
            img: productImg,
            name: "Nudie Extendable Sofa for 3 persons.",
            oldPrice: "$169",
            newPrice: "$149",
            notes: [{
                title: 'Assembly',
                desc: 'Carpenter Assembly'
            }, {
                title: 'Warranty',
                desc: "12 Months' Warranty"
            }],
            colors: [
                'beige', 'black', 'white'
            ]
        }

        return (
            <div>
                <AllBreadcrumbs data={breadcrumbData} />
                <div className="landingContent">
                    <Sidebar />
                    <div className="allSections">
                        <ProductCard
                            data={productData}
                        />
                        <Section />
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;