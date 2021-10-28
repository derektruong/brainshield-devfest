// eslint-disable-next-line no-undef
const PictureAssets = artifacts.require("./PictureAssets.sol");

module.exports = function (deployer) {
    deployer.deploy(PictureAssets);
};