import * as request from '~/utils/httpRequest';

export const getCategories = async () => {
    try {
        const res = await request.get('categories', {
            
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getCategoryWithId = async (id) => {
    try {
        const res = await request.get('categories/', {
            params: {
                id,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};