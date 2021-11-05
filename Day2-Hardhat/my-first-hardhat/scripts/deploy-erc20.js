async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const ERC20Contract = await ethers.getContractFactory("ERC20Basic");
    const deployedContract = await ERC20Contract.deploy(100000000);
    console.log("Deployed ERC-20 contract address:", deployedContract.address);

    await deployedContract.transfer('0x53b3D1eeb8E2e1943Eb8AAe863bFf2e14763848D', 50000000);
    const balanceWalletDeployer = (deployedContract.balanceOf(deployer.address)).toString();
    const secondWallet = (deployedContract.balanceOf('0x53b3D1eeb8E2e1943Eb8AAe863bFf2e14763848D')).toString();
    console.log("BalanceOf the walletDepoyer is ", balanceWalletDeployer, " and BalanceOf second wallet is ", secondWallet);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

