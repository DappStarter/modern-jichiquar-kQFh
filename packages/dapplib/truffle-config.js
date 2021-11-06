require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue release pitch home harvest merry flame topic'; 
let testAccounts = [
"0x71baff249494e797b0cb463c18230db8a62a02c6f1b5e6137d8290b9e6836eca",
"0x4eac90c6d4e8984a00a3b6f06fd228aa6d77feff0b602ec730799808c98b5416",
"0x3e5104411f92665e039934b3996bdb9acfb16436eb3645232e0aed5f99f406e3",
"0xc8c4cd79db80ada878de0f58e918bd2d620ab0a881889b20415889cb3505162f",
"0x112703d870c0004072f05f2a3d3af95758868a30e6f0a0ed50cf62a4a50254de",
"0x6f61d2dccf9fda9e8aacded630732b06a23db118ffbc74a8367bf88a08ff8fe5",
"0x7e9f4546efe854520cd4c94fb55262d18b8c25d0f4dc34bc4a6b409af1b48852",
"0xd6cd95806ff524a6a2d1420a13a139de407361a0ea27aaa02b790c01900f023f",
"0xab838d2ab393ad70c0f4c27c116273c63114704970e0fad1ca48d078f845f081",
"0x65364723f73cc4cbbbb8271e37fb16eb96f4a5983f1ca0d5ec448d8be68e7047"
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
            version: '^0.8.0'
        }
    }
};

