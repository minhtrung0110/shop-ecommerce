import * as request from '~/utils/httpRequest';

export const getNewArrivals = async () => {
    try {
        const res = await request.get('products/'/*, {
            params: {
               createdAt,
            },
        }*/);
        return res;
    } catch (error) {
        console.log(error);
    }
};