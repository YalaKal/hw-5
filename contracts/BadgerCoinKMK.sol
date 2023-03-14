// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BadgerCoinMKM is ERC20, Ownable {
  constructor() ERC20 ("BadgerCoinMKM", "BCK"){
    _mint(msg.sender, 1000000 * 10 ** decimals());
  }
}