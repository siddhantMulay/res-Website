
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Landing.css';

//Gather all the components
import Subheader from '../../components/Common/Header/SubHeader';
import AllBreadcrumbs from '../../components/Common/Breadcrumbs/AllBreadcrumbs';
import Sidebar from '../../components/Common/Sidebar/Sidebar';
import ProductCard from '../../components/PageComponents/Landing/ProductCard/ProductCard';
import Section from '../../components/PageComponents/Landing/Section/Section';

//Call the action
import { getProductData } from '../../redux/actions/productActions';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.productRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.relatedProdRef = React.createRef();
        this.state = {
            loaded: false,
            sidebarStyle: {
                position: 'fixed',
                bottom: 'inital'
            },
            sidebarData: {
                activeItem: 'Details',
                allData: [{
                    id: 0,
                    title: 'Details',
                    ref: this.productRef,
                    active: true
                }, {
                    id: 1,
                    title: 'Description',
                    ref: this.descriptionRef,
                    active: false
                }, {
                    id: 2,
                    title: 'Reviews',
                    ref: this.productRef,
                    active: false
                }, {
                    id: 3,
                    title: 'Related',
                    ref: this.relatedProdRef,
                    active: false
                }]
            }
        }
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
        if (this.isInViewport(0, this.productRef.current)) {
            this.updateView(0, true)
        }

        else if (this.isInViewport(0, this.descriptionRef.current)) {
            this.updateView(1, true)
        }

        else if (this.isInViewport(0, this.relatedProdRef.current)) {
            this.updateView(3, true)
        }


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

    renderDescriptionSections = () => {
        let retArr = [];
        const { descData } = this.props;
        descData.forEach((item, index) => {
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

    updateView = (id, triggeredViaScroll) => {
        let sbData = { ...this.state.sidebarData };
        let selRef = '';
        sbData.allData.forEach((item, index) => {
            if (item.id === id) {
                sbData.allData[index].active = true;
                sbData['activeItem'] = item.title;
                selRef = sbData.allData[index].ref;
            }
            else {
                sbData.allData[index].active = false;
            }
        });
        this.setState({
            sidebarData: sbData
        }, () => {
            if (!triggeredViaScroll) {
                selRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })

    }

    isInViewport = (offset = 0, elem) => {
        if (!elem) return false;
        const top = elem.getBoundingClientRect().top;
        return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
    }

    render() {
        const { loaded, sidebarStyle, sidebarData } = this.state;
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
                    <Subheader
                        changeView={(id) => this.updateView(id)}
                        data={sidebarData}
                    />
                    <AllBreadcrumbs data={breadcrumbData} />
                    <Sidebar
                        changeView={(id) => this.updateView(id)}
                        data={sidebarData}
                        style={sidebarStyle} />
                    <div className="landingContent">
                        <div className="allSections">
                            <div className='secContainer' ref={this.productRef}>
                                <ProductCard
                                    data={productData}
                                />
                            </div>

                            <div className='secContainer' ref={this.descriptionRef}>
                                {this.renderDescriptionSections()}
                            </div>


                            <div className='secContainer' ref={this.relatedProdRef}>
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