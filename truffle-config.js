const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic =
    "tilt anxiety eager smile output range casino lab coffee journey loyal core";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*", // Match any network id
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(
                    mnemonic,
                    "https://ropsten.infura.io/v3/241f03331919423cba6145c7a2bcc61a",
                );
            },
			// from: "0xB94853CD3d617B1294DA4Dd6000a98E5D047FAf7",
			// gas: "6500000",
    		// gasPrice: "10000000000",
			networkCheckTimeout: 10000,
            network_id: "3",
        },
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },
    compilers: {
        solc: {
            version: "^0.8.7",
        },
    },
};
