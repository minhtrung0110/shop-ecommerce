import * as request from '~/utils/httpRequest';

export const checkLogin = async (email) => {
    try {
        const res = await request.get('customers?', {
            params: {
               email:email,

            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
