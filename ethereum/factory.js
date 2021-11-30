import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xe3164111e28Fc82Dce64F7CEb535D68E666d39BB'
);

export default instance;
