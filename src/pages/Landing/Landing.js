
import React, { Component } from 'react';
import AllBreadcrumbs from '../../components/Common/Breadcrumbs/AllBreadcrumbs';
import Sidebar from '../../components/Common/Sidebar/Sidebar';
import './Landing.css';
import ProductCard from '../../components/PageComponents/Landing/ProductCard/ProductCard';

import productImg from '../../assets/images/Product.png';
import roomImg from '../../assets/images/Room.jpg';
import roomImg2 from '../../assets/images/Room2.jpg';
import roomImg3 from '../../assets/images/Room3.jpg';
import roomImg4 from '../../assets/images/Room4.jpg';

import prodImg from '../../assets/images/relatedProd/Bamboo.png';
import prodImg2 from '../../assets/images/relatedProd/Pearly.png';
import prodImg3 from '../../assets/images/relatedProd/Oled.png';
import prodImg4 from '../../assets/images/relatedProd/Bamboo2.png';

import Section from '../../components/PageComponents/Landing/Section/Section';

const descData = [{
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore>Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip`,
    hasVideo: false,
    img: roomImg,
    download: false,
    secImg: '',
    secDesc: '',
    suggested: false
}, {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: '',
    hasVideo: true,
    img: roomImg2,
    download: false,
    secImg: '',
    secDesc: '',
    suggested: false
}, {
    title: '',
    desc: '',
    hasVideo: false,
    img: roomImg3,
    download: true,
    secImg: roomImg4,
    secTitle: 'Suggested Accomodation',
    suggested: true
}]

class Landing extends Component {

    renderDescriptionSections = () => {
        let retArr = [];
        descData.map((item, index) => {
            retArr.push(<Section
                key={`sec${index}`}
                title={item.title}
                desc={item.desc}
                img={item.img}
                hasVideo={item.hasVideo}
                download={item.download}
                secImg={item.secImg}
                suggested={item.suggested}
                secTitle={item.secTitle}
            />)
        });
        return retArr;
    }

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

        const relatedProdData = [{
            name: 'Bamboo Filter Gobo',
            img: prodImg,
            oldPrice: "$169",
            newPrice: "$149"
        }, {
            name: 'Pearly White Gold',
            img: prodImg2,
            oldPrice: "$169",
            newPrice: "$149"
        }, {
            name: 'Oled Ringlight',
            img: prodImg3,
            oldPrice: "$169",
            newPrice: "$149"
        }, {
            name: 'Bamboo Filter Gobo',
            img: prodImg4,
            oldPrice: "$169",
            newPrice: "$149"
        }]

        return (
            <div className="page">
                <AllBreadcrumbs data={breadcrumbData} />
                <Sidebar />
                <div className="landingContent">
                    <div className="allSections">
                        <ProductCard
                            data={productData}
                        />
                        {this.renderDescriptionSections()}
                        <Section
                            relatedProds={true}
                            relatedProdData={relatedProdData} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;