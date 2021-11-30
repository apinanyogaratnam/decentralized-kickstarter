import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x18dEe2aD2C54f8F29EF148CC019f520D76a4421a'
);

export default instance;
