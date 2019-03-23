const jestConfig = require('../../jest.config');

module.exports = jestConfig({
    'hexToBytes': 'newchain-web3-utils',
    'isHexStrict': 'newchain-web3-utils',
    'Utils': 'newchain-web3-utils',
    'formatters': 'web3-core-helpers',
    'EthAccount': 'newchain-lib/lib/account',
    'scryptsy': 'scrypt.js'
});
