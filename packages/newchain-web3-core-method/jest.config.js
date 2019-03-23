const jestConfig = require('../../jest.config');

module.exports = jestConfig({
    'WebsocketProvider': 'newchain-web3-providers',
    'HttpProvider': 'newchain-web3-providers',
    'AbstractWeb3Module': 'newchain-web3-core',
    'Utils': 'newchain-web3-utils',
    'formatters': 'newchain-web3-core-helpers',
    'AbstractSubscription': 'newchain-web3-core-subscriptions',
    'NewHeadsSubscription': 'newchain-web3-core-subscriptions'
});
