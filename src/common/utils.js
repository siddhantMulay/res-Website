
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
    }
}

module.exports = { config }