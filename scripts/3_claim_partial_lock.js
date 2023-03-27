const { BigNumber } = require('ethers');
const hre = require("hardhat");

const LOCK_ADDRESS = '0x61f689114D96FA18b2466969d8D9F5C22DC8E5b4';

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

// 0xd4617cae0000000000000000000000000000000000000000000000000000000000000001