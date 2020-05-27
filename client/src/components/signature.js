
const openpgp = require('openpgp');
const CryptoJS = require("crypto-js");
async function f(sign) {
    const privateKeyArmored = '-----BEGIN PGP PRIVATE KEY BLOCK-----\n' +
        'Version: Keybase OpenPGP v1.0.0\n' +
        'Comment: https://keybase.io/crypto\n' +
        '\n' +
        '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\n' +
        '=c9ND\n' +
        '-----END PGP PRIVATE KEY BLOCK-----'; // encrypted private key
    const passphrase = `12345`; // what the private key is encrypted with

    const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
    await privateKey.decrypt(passphrase);

    const { data: cleartext } = await openpgp.sign({
        message: openpgp.cleartext.fromText('nhom 7'), // CleartextMessage or Message object
        privateKeys: [privateKey]                             // for signing
    });
    //console.log(cleartext);

    sign.json({
        // authenticated: true,
        sign=cleartext
    })

}