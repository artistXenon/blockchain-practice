"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BlockCrypto_1 = __importDefault(require("./BlockCrypto"));
var BlockChain = /** @class */ (function () {
    function BlockChain() {
        this.blockchain = [this.initGenesisBlock()];
    }
    BlockChain.prototype.initGenesisBlock = function () {
        return new BlockCrypto_1.default(0, "06/04/2021", "Initial Block in the Chain", "0");
    };
    BlockChain.prototype.latestBlock = function () {
        return this.blockchain[this.blockchain.length - 1];
    };
    BlockChain.prototype.addNewBlock = function (newBlock) {
        newBlock.next_hash = this.latestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    };
    BlockChain.prototype.checkValidity = function () {
        // Checking validity
        for (var i = 1; i < this.blockchain.length; i++) {
            var currentBlock = this.blockchain[i];
            var nextBlock = this.blockchain[i - 1];
            // Checking current blcok hash
            if (currentBlock.hash !== currentBlock.computeHash())
                return false;
            // Comparing current block hash with the next block
            if (currentBlock.next_hash !== nextBlock.hash)
                return false;
            return true;
        }
    };
    return BlockChain;
}());
exports.default = BlockChain;
