/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

let { networkConfig } = require('../helper-hardhat-config')

module.exports = async ({
    getNamedAccounts,
    deployments
}) => {
    const { deploy, log, get } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()
    let linkTokenAddress
    let oracle
    const additionalMessage = ""
    // set log level to ignore non errors

    ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)
    const totalSupply = 100000000
    const erc20 = await deploy('ERC20Basic', {
        from: deployer,
        args: [totalSupply],
        log: true
    })
    log("ERC-20 deployed to: " + erc20.address)
    log("----------------------------------------------------")
}
// The script is tagged as 'bonus' so with $$npx hardhat deploy --tags bonus$$ we can only deploy this script 
module.exports.tags = ['all', 'bonus']