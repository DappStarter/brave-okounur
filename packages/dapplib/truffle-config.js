require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski street remember saddle punch install muscle army gaze'; 
let testAccounts = [
"0x1b2e3587ee0cde35bfef7eb78c2e04506aca79376fcbd13317fc223fa03ea201",
"0xacfa0a8cc335408f4534d088047b49b3cfc0650acc571873aeb53f5ef480fea3",
"0x41890802c153b320d2076d14ea7c08c7dafbde46e1ac7959a5bf1d832b4de55c",
"0x5b1b16140d6aa3e4e51b044354f9b8d62278afbe39f8a966ff4586c07d76f8e0",
"0x09741af9655f4006579042c037968ed88d55241736fcfd639ca8995feec67ca2",
"0x1e979d064889b762fff4dde3d57b3fe3c7d74f2606b73c85fff17e0f4935b26c",
"0x8ee59dac559caf0c806cd07464db5ea83cf445c25a73b3add4405de37b185fed",
"0x9c876f891a5acf0cb9d19d6724e7c2b2cfbc69595ffcbfa7aaff993d1591fa4b",
"0x765ba8cfe0f4a92350be7a0e9b20285e74aa2235533d8c13623be63a085bdc53",
"0x3678a1ae6c3c964a77d18e13a408743c536d0a398929fe079d3bb5cbd787b0f8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
