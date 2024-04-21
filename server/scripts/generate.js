const secp = require ("ethereum-cryptography/secp256k1")
const {toHex} = require("ethereum-cryptography/utils")

const private = secp.utils.randomPrivateKey();

console.log('private key:', toHex(private));

const publickey = secp.getPublicKey(privateKey);

console.log('public key:', toHex(publickey));