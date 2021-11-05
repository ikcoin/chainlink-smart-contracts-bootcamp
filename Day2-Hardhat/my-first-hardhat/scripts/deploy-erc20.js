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

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

