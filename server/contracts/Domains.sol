// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import {StringUtils} from "./StringUtils.sol";

import "hardhat/console.sol";

// We inherit the contract we imported. This means we'll have access
// to the inherited contract's methods.
contract Domains {
    // Here's our domain TLD!
    string public tld;
    error Unauthorized();
    error AlreadyRegistered();
    error InvalidName(string name);
    //A mapping data type to store their names to address
    mapping(string => address) public domains;
    mapping(address => string) public addressToDomain;
    //This will store our values
    mapping(string => string) public names;

    // We make the contract "payable" by adding this to the constructor
    constructor(string memory _tld) {
        tld = _tld;
    }

    //A register function to add their names to our mapping
    // Added "payable" modifier to register function
    function register(
        string calldata domain,
        string calldata userName
    ) public payable {
        string memory _name = string(abi.encodePacked(domain, "@", tld));
        if (domains[_name] != address(0)) revert AlreadyRegistered();
        if (!valid(domain)) revert InvalidName(domain);
        domains[_name] = msg.sender;
        addressToDomain[msg.sender] = _name;
        names[_name] = userName;
    }

    //this will gives us domain owners address
    function getAddress(string calldata name) public view returns (address) {
        return domains[name];
    }

    function setRecord(
        string calldata domain,
        string calldata yourName
    ) public {
        // Check that the owner is the transaction sender
        if (domains[domain] != msg.sender) revert Unauthorized();
        names[domain] = yourName;
    }

    function getRecord(
        string calldata domain
    ) public view returns (string memory) {
        return names[domain];
    }

    function getDomain(
        address userAddress
    ) public view returns (string memory) {
        return addressToDomain[userAddress];
    }

    function valid(string calldata name) public pure returns (bool) {
        return StringUtils.strlen(name) >= 3 && StringUtils.strlen(name) <= 10;
    }
}
