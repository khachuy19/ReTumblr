import * as httpRequest from '~/utils/httpRequest';

export const getFollowing = async () => {
    try {
        const res = await httpRequest.get('khachuy23/following', {
            params: {
                api_key: 'fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4',
            },
        });
        return res.response;
    } catch (error) {
        console.log(error);
    }
};
