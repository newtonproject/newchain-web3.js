const jestConfig = require('../../jest.config');

module.exports = jestConfig({
    'hexToBytes': 'web3-utils',
    'isHexStrict': 'web3-utils',
    'Utils': 'web3-utils',
    'formatters': 'web3-core-helpers',
    'EthAccount': 'newchain-lib/lib/account',
    'scryptsy': 'scrypt.js'
});
