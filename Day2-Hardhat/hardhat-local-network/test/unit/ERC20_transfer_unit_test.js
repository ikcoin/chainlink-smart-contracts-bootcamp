/* eslint-disable prettier/prettier */
/* eslint-disable node/no-extraneous-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

// Ensure balance goes down after transfer of tokens

const { expect } = require('chai')
const chai = require('chai')
const BN = require('bn.js')
const skipIf = require('mocha-skip-if')
chai.use(require('chai-bn')(BN))
const { deployments, getChainId } = require('hardhat')
const { networkConfig, developmentChains } = require('../../helper-hardhat-config')


//first get current address information
const accounts = await hre.ethers.getSigners();
const account = await ethers.getSigners();
const sender = account[0].address;
const receiver = account[1].address;

let currentSenderBalance = await erc20.balanceOf(sender);
let currentReceiverBalance = await erc20.balanceOf(receiver);
console.log("Current sender token balance: ", currentSenderBalance.toString());
console.log("Current receiver token balance: ", currentReceiverBalance.toString());

//do the transfer of 100 tokens from sender to receiver
let transfer = await erc20.transfer(receiver, 100);

//check both accounts
let newSenderBalance = await erc20.balanceOf(sender);
let newReceiverBalance = await erc20.balanceOf(receiver);
console.log("New sender token balance: ", newSenderBalance.toString());
console.log("New receiver token balance: ", newReceiverBalance.toString());

//Run the assertion
expect(newSenderBalance.toString()).to.be.a.bignumber.that.is.lessThan(currentSenderBalance.toString())