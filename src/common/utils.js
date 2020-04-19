

import productImg from '../assets/images/Product.png';
import roomImg from '../assets/images/Room.jpg';
import roomImg2 from '../assets/images/Room2.jpg';
import roomImg3 from '../assets/images/Room3.jpg';
import roomImg4 from '../assets/images/Room4.jpg';

import prodImg from '../assets/images/relatedProd/Bamboo.png';
import prodImg2 from '../assets/images/relatedProd/Pearly.png';
import prodImg3 from '../assets/images/relatedProd/Oled.png';
import prodImg4 from '../assets/images/relatedProd/Bamboo2.png';

const config = {

    imgFromAnimation: {
        opacity: 0,
        animation: 'grow-left',
        transform: 'scaleX(0)',
        transformOrigin: 'left'
    },

    toImgAnimation: {
        opacity: 1,
        animation: 'grow-left',
        transform: 'scaleX(1)',
        transformOrigin: 'left'
    },

    titleFromAnimation: {
        opacity: 0,
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        animation: 'grow-left'
    },

    titleToAnimation: {
        opacity: 1,
        transform: 'scaleX(1)',
        transformOrigin: 'left',
        animation: 'grow-left'
    },

    productData: {
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
        ],
        descData: [{
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
        }],
        relatedProdData: [{
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
    },
}

export default config;