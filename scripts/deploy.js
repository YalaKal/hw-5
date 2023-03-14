
const hre = require("hardhat");

async function main() {

  const BadgerCoinMKM = await hre.ethers.getContractFactory("BadgerCoinMKM");
  const badgerCoinMKM = await BadgerCoinMKM.deploy();

  await badgerCoinMKM.deployed();

  console.log(
    `badgerCoinMKM deployed to ${badgerCoinMKM.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
