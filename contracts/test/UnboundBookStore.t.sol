// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {UnboundBookStore} from "../src/UnboundBookStore.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC1155Items} from "../src/IERC1155Items.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {MessageHashUtils} from "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol";

contract MockERC20 is ERC20 {
    constructor() ERC20("Mock Token", "MTK") {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

contract MockERC1155Items is IERC1155Items {
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external {}

    function batchMint(
        address to,
        uint256[] memory tokenIds,
        uint256[] memory amounts,
        bytes memory data
    ) external {}
}

contract UnboundBookStoreTest is Test {
    UnboundBookStore public store;
    MockERC20 public paymentToken;
    MockERC1155Items public items;
    address signer;
    uint256 signerPk;

    function setUp() public {
        (signer, signerPk) = makeAddrAndKey("signer");

        items = new MockERC1155Items();
        paymentToken = new MockERC20();

        store = new UnboundBookStore(
            address(items),
            address(paymentToken),
            signer
        );
    }

    function test_purchase() public {
        uint256 bookId = 1;
        uint256 bookPrice = 100_000_000_000_000_000_000;
        uint256 bookBefore = block.timestamp + 1 days;

        // Create a book
        UnboundBookStore.Book memory book = UnboundBookStore.Book({
            id: bookId,
            price: bookPrice,
            before: bookBefore
        });

        // Sign the book
        bytes32 messageHash = keccak256(
            abi.encode(book.id, book.price, book.before)
        );
        bytes32 ethSignedMessageHash = MessageHashUtils.toEthSignedMessageHash(
            messageHash
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(
            signerPk,
            ethSignedMessageHash
        );
        bytes memory signature = abi.encodePacked(r, s, v);

        // Mint payment tokens to the user
        paymentToken.mint(address(this), bookPrice);

        // Approve the store to spend the payment tokens
        paymentToken.approve(address(store), bookPrice);

        // Purchase the book
        store.purchase(address(this), book, signature);
    }
}
