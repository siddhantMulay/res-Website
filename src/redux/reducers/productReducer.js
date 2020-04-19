
import {
    GET_PRODUCT_DATA
} from '../actions/productActions';

const initialState = {
    productData: {}
}

function globalReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_DATA:
            return {
                ...state,
                productData: action.data
            };

        default:
            return state;
    }

}

export default globalReducer;