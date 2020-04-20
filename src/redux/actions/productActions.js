
import dataStore from '../store';
import config  from '../../common/utils';

//Get Product Data
export const GET_PRODUCT_DATA = 'GET_PRODUCT_DATA';
export async function getProductData() {
    await dataStore.dispatch({
        type: GET_PRODUCT_DATA,
        data: config.productData
    })
}

//Update selected Color
export const UPDATE_SELECTED_COLOR = 'UPDATE_SELECTED_COLOR';
export async function updateSelectedColor(id) {
    await dataStore.dispatch({
        type: UPDATE_SELECTED_COLOR,
        id
    })
}

//Update Product Quantitiy
export const UPDATE_PROD_QTY = 'UPDATE_PROD_QTY';
export async function updateProdQty(action) {
    await dataStore.dispatch({
        type: UPDATE_PROD_QTY,
        action
    })
}

