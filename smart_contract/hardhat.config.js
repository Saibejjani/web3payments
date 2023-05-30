require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/WdZXSlDT9i7dAMEUT5MAhkf8SBI2kRh4',
      accounts: ['b837aba062343bc406c77ed842de7c4e87f12903a6164cb0f0d69dc1c31ecfd2'],
    },
  },
};