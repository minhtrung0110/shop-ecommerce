import * as request from '~/utils/httpRequest';

export const getSliders = async () => {
    try {
        const res = await request.get('sliders', {
            
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
