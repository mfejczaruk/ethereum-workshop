

const hre = require("hardhat");

async function main() {
    const amount = hre.ethers.utils.parseEther("0.01");
  
    const [signer] = await hre.ethers.getSigners();
    const value = await (await signer.getBalance()).toString();

    console.log(value/(10 ** 18));
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });