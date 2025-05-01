// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.29;

import {IERC1155Items} from "./IERC1155Items.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {MessageHashUtils} from "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract UnboundBookStore is Ownable {
    using SafeERC20 for IERC20;

    IERC1155Items public immutable items;
    IERC20 public immutable paymentToken;
    address public signer;

    struct Book {
        uint256 id;
        uint256 price;
        uint256 before;
    }

    error AuthorizationFailed();

    constructor(
        address items_,
        address paymentToken_,
        address signer_
    ) Ownable(msg.sender) {
        items = IERC1155Items(items_);
        paymentToken = IERC20(paymentToken_);
        signer = signer_;
    }

    function purchase(
        address to,
        Book calldata book,
        bytes calldata signature
    ) external payable {
        bytes32 messageHash = keccak256(
            abi.encode(book.id, book.price, book.before)
        );
        bytes32 ethSignedMessageHash = MessageHashUtils.toEthSignedMessageHash(
            messageHash
        );
        address recoveredSigner = ECDSA.recover(
            ethSignedMessageHash,
            signature
        );
        require(
            recoveredSigner == signer && block.timestamp < book.before,
            AuthorizationFailed()
        );
        paymentToken.safeTransferFrom(msg.sender, address(this), book.price);

        items.mint(to, book.id, 1, "");
    }

    function setSigner(address signer_) external onlyOwner {
        signer = signer_;
    }

    function withdraw(address to, uint256 amount) external onlyOwner {
        paymentToken.safeTransfer(to, amount);
    }
}
