// + Imports +

// Base
import { async } from 'regenerator-runtime';

// Custom
import * as config from './config';
import * as utils from './helper/model/utils';

// + Objects +

// State
export const state: any = {};

// + Functions +

// Initialize
export const init = async function () {
  try {
    // Add endpoints
    state.getProductData = async () => {
      const xanoId = document.querySelector('body')?.getAttribute('xano-id');

      if (!xanoId) {
        throw 'No Xano ID found';
      }

      const res = await getProductData(xanoId);
      state.productData = res;
      return res;
    };

    // Await initial data
    await state.getProductData();
  } catch (err) {
    throw 'model.ts -> init: ' + err;
  }
};

// Get product data
const getProductData = async function (productId: string) {
  try {
    // Await test data
    return await utils.getJson(`${config.PRODUCT_API_URL}/${productId}`);
  } catch (err) {
    throw 'model.ts -> init: ' + err;
  }
};
