// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {IERC1155Items} from "./IERC1155Items.sol";

contract UnboundBookStore {
    IERC1155Items public immutable items;

    constructor(address items_) {
        items = IERC1155Items(items_);
    }

    function purchase() external payable {}
}
