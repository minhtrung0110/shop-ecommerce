import * as request from '~/utils/httpRequest';

export const getNewArrivals = async () => {
    try {
        const res = await request.get('newarrivals/'/*, {
            params: {
               createdAt,
            },
        }*/);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getProductWithID = async (id) => {
    try {
        const res = await request.get('products/',{
            params: {
              id,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getAllProduct = async (_page,_limit) => {
    try {
        const res = await request.get('products?',{
            params: {
                _page,
                _limit
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};