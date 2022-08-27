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
export const getAllProduct = async (categoryId,_page,_limit) => {
    const paramsCondition=(categoryId==='all')?
        {
            _page,
            _limit,
        }
        :{
                categoryId,
                _page,
                _limit,
            }
    //console.log(paramsCondition)
    try {
        const res = await request.get('products?',{
       params: paramsCondition
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};