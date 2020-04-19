
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