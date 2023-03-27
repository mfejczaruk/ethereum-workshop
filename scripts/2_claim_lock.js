const hre = require("hardhat");

const LOCK_ADDRESS = '';

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
