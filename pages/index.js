import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    render() {
        return (
            <div>
                <h1>{this.props.campaigns[0]}</h1>
            </div>
        );
    }
}

export default CampaignIndex;
