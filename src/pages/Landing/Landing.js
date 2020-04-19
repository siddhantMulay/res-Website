
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Landing.css';

import AllBreadcrumbs from '../../components/Common/Breadcrumbs/AllBreadcrumbs';
import Sidebar from '../../components/Common/Sidebar/Sidebar';
import ProductCard from '../../components/PageComponents/Landing/ProductCard/ProductCard';
import Section from '../../components/PageComponents/Landing/Section/Section';

import { getProductData } from '../../redux/actions/productActions';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.relatedProdRef = React.createRef();
        this.state = {
            loaded: false,
            sidebarStyle: {
                position: 'fixed',
                bottom: 'inital'
            }
        }
    }

    renderDescriptionSections = () => {
        let retArr = [];
        const { descData } = this.props;
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

    componentDidMount() {
        getProductData().then(() => {
            this.setState({
                loaded: true
            })
        });
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
        const data = this.relatedProdRef.current.getBoundingClientRect();
        if (data.y <= 355 || data.top <= 0) {
            this.setState({
                sidebarStyle: {
                    position: 'absolute',
                    bottom: '0'
                }
            })
        }
        else {
            this.setState({
                sidebarStyle: {
                    position: 'fixed',
                    bottom: 'initial'
                }
            })
        }
    }

    render() {
        const { loaded } = this.state;
        const { productData, relatedProdData } = this.props;

        const breadcrumbData = [{
            text: 'Catalog',
            current: false
        }, {
            text: 'Sofas',
            current: false
        }, {
            text: 'Beige Nudie Sofa',
            current: true
        }];

        return (
            loaded ?
                <div style={{ position: 'relative' }}>
                    <AllBreadcrumbs data={breadcrumbData} />
                    <Sidebar style={this.state.sidebarStyle} />
                    <div className="landingContent">
                        <div className="allSections">
                            <ProductCard
                                data={productData}
                            />
                            {this.renderDescriptionSections()}
                            <div ref={this.relatedProdRef}>
                                <Section
                                    relatedProds={true}
                                    relatedProdData={relatedProdData} />
                            </div>
                        </div>
                    </div>
                </div>
                : null
        )
    }
}

const mapStateToProps = (state) => {
    const productStore = state.product;
    const prodData = productStore.productData;
    return {
        productData: prodData,
        descData: prodData.descData || {},
        relatedProdData: prodData.relatedProdData || {}
    }
}

export default connect(mapStateToProps)(Landing);