const hre = require("hardhat");

async function main() {

  const OnePeeNFT = await hre.ethers.getContractFactory("OnePeeNFT");
  const onePeeNFT = await OnePeeNFT.deploy();

  await onePeeNFT.deployed();

  console.log("OnePees deployed to:", onePeeNFT.address); 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });