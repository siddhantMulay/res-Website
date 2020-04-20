
import {
    GET_PRODUCT_DATA,
    UPDATE_SELECTED_COLOR,
    UPDATE_PROD_QTY
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

        case UPDATE_SELECTED_COLOR:

            let radArr = [...state.productData.colors];
            radArr.map((item) => {
                if (item.id == action.id) {
                    item.selected = true
                }
                else {
                    item.selected = false
                }
            })

            return {
                ...state,
                productData: Object.assign({}, state.productData, {
                    ['colors']: radArr
                })
            };

        case UPDATE_PROD_QTY:
            var qty = state.productData.qty;

            if (qty > 1) {
                if (action.action === 'sub') {
                    qty--;
                }
            }

            if (action.action === 'add') {
                qty++
            }

            return {
                ...state,
                productData: Object.assign({}, state.productData, {
                    qty: qty
                })
            };

        default:
            return state;
    }

}

export default globalReducer;