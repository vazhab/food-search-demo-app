import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer f8-XbbJuhTgsRlLg105m7dRUGn52HX1jalG1KQDpFNCr4uIsaTi42m5H4sf9mA2-j7bpRQ2nQ07SNFNx0-Ny5a8AMGBNLcS2dBOdxTBkp_pVfmHAPiEp1peUd6p9Y3Yx'
    }
});
