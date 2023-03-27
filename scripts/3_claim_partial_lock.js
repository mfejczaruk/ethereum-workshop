const { BigNumber } = require('ethers');
const hre = require("hardhat");

const LOCK_ADDRESS = '';

async function main() {
    const amountToWithdraw = BigNumber.from(1);
    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.attach(LOCK_ADDRESS);
    const tx = await lock.withdrawPartially(amountToWithdraw);
    console.log(tx);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});