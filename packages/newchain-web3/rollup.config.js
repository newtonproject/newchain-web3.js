import pkg from './package.json';
import rollupConfig from '../../rollup.config';

export default rollupConfig('Web3', pkg.name, {
    'newchain-web3-core': 'newchain-web3-core',
    'web3-core-helpers': 'web3-core-helpers',
    'newchain-web3-core-method': 'newchain-web3-core-method',
    'web3-providers': 'web3-providers',
    'newchain-web3-utils': 'newchain-web3-utils',
    'web3-eth': 'web3-eth',
    'web3-eth-personal': 'web3-eth-personal',
    'web3-shh': 'web3-shh',
    'web3-bzz': 'web3-bzz',
    'web3-net': 'web3-net'
});
