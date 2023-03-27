const hre = require("hardhat");

const LOCK_ADDRESS = '0xA27d9C60B3a0194E30A62b6d32d6B2413852DD8B';

async function main() {
    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.attach(LOCK_ADDRESS);
    const tx = await lock.withdraw();
    console.log(tx);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
