# Bolckchain Unififed Payments System

![HomeScreen](https://raw.githubusercontent.com/Saibejjani/web3payments/main/client/images/sample/HomeScreen.png)
Access this site [here](https://web3payments.netlify.app/).

## Introduction

This README file provides an overview and instructions for using the Web3 Transaction App. The Web3 Transaction App is a React-based application that allows users to send transactions on EVM-based blockchains using simplified addresses called "Bups" instead of long wallet addresses. It utilizes the ethers.js library for interacting with the Ethereum blockchain. The app includes a verification feature to verify a person's identity by entering their wallet address or Bups and clicking on the "Verify" button. The registered name associated with the provided address is displayed, providing an additional layer of security and trust for transactions. All the details and user information are stored on the blockchain using smart contracts, ensuring tamper-proof data.

## Features

The Web3 Transaction App offers the following features:

1. **Simplified Addresses (Bups):** Instead of using long wallet addresses like `0x169fC09281ae3eF29EB050754bE945989B455C29`, users can use Bups addresses like `saibejjani@bups`. This simplifies the process of entering and sharing wallet addresses.

2. **Identity Verification:** Users can verify the identity of a person by entering their wallet address or Bups in the verification section of the app. Clicking on the "Verify" button retrieves the registered name associated with that address. This feature enhances security and allows users to validate the recipient's identity before making transactions.

3. **Secure Data Storage:** All user information and details, including registered names and wallet addresses, are stored on the blockchain using smart contracts. This ensures that the data is secure, tamper-proof, and decentralized.

## Usage

To use the Web3 Transaction App, follow these steps:

1. **Access the App**: Visit the app's [website text](https://web3payments.netlify.app/)
 or deploy it locally on your machine.

2. **Transaction Sending**: To send a transaction, follow these steps:
   - Provide the recipient's Bups address or their full wallet address.
   - Enter the transaction details, such as the amount and any additional information required.
   - Click on the "Send Transaction" button to initiate the transaction.

3. **Identity Verification**: To verify a person's identity, follow these steps:
   - Enter the person's Bups address or their full wallet address in the verification section of the app.
   - Click on the "Verify" button.
   - The app will retrieve and display the registered name associated with the provided address, confirming the identity of the person.

4. **Smart Contract Interaction**: The Web3 Transaction App interacts with smart contracts to store and retrieve user information. The app handles these interactions automatically in the background, allowing you to focus on the transaction and verification process.

## Technology Stack

The Web3 Transaction App is built using the following technologies:

- **Front-end**: React, HTML, CSS, JavaScript.
- **Web3 Library**: The ethers.js library is used for interacting with the Ethereum blockchain.
- **Smart Contracts**: Solidity programming language for creating smart contracts.
- **EVM-based Blockchains**: The app is compatible with Ethereum and other EVM-based blockchains.

## Security Considerations

1. **Secure Wallets**: It is important to use secure wallets to safeguard your funds and protect your private keys. Ensure that you are using reputable wallet providers and follow best practices for wallet security.

2. **Verification Limitations**: The identity verification feature relies on the accuracy of registered names associated with wallet addresses. It's essential to trust the source of the registered name and exercise caution when making transactions based solely on identity verification.

3. **Smart Contract Audits**: The smart contracts used by the app should undergo thorough security audits to minimize the risk of vulnerabilities and ensure the safety of user data and funds.

