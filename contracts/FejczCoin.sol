pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FejczCoin is ERC20 {
    constructor() ERC20("FJCZ Coin", "FJCZ") {
        _mint(msg.sender, 100 * 10**18);
    }
}
