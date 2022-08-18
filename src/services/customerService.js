import * as request from '~/utils/httpRequest';

export const checkLogin = async (email,password) => {
    try {
        const res = await request.get('customers?', {
            params: {
               email:email,
                password:password
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
