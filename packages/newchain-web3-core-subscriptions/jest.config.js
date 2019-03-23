const jestConfig = require('../../jest.config');

module.exports = jestConfig({
    Utils: 'newchain-web3-utils',
    formatters: 'newchain-web3-core-helpers'
});
