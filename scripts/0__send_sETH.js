
  

const hre = require("hardhat");

async function main() {
    const amount = hre.ethers.utils.parseEther("0.01");
  
    const [signer] = await hre.ethers.getSigners();
    const tx = await signer.sendTransaction({
        to: "0x288e8C9d74d7046d70421402aa7DadD7E0764B4F",
        value: amount
    });

    console.log(tx);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  