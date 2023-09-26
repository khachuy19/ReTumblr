import * as httpRequest from '~/utils/httpRequest';

export const getPost = async (name, limit) => {
    try {
        const res = await httpRequest.get(`${name}/posts`, {
            params: {
                api_key: 'fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4',
                limit: limit,
            },
        });
        return res.response;
    } catch (error) {
        console.log(error);
    }
};
