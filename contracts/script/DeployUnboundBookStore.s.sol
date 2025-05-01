// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {UnboundBookStore} from "../src/UnboundBookStore.sol";

contract DeployUnboundBookStoreScript is Script {
    UnboundBookStore public book;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        book = new UnboundBookStore(
            0x612e765bED90D0af1C984863eed9c71F79557EeE,
            0xE9A198d38483aD727ABC8b0B1e16B2d338CF0391,
            0x52A537c0bcFFA1F60D10bF2D420307fbC7c260F1
        );

        vm.stopBroadcast();
        console.log("UnboundBookStore deployed at:", address(book));
    }
}
