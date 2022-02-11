"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BlockCrypto_1 = __importDefault(require("./classes/BlockCrypto"));
var BlockChain_1 = __importDefault(require("./classes/BlockChain"));
var thecoin = new BlockChain_1.default();
thecoin.addNewBlock(new BlockCrypto_1.default(1, "06/04/2021", { sender: "Rabin Yitzack", recipient: "Loyd Eve", quantity: 20 }));
thecoin.addNewBlock(new BlockCrypto_1.default(2, "07/04/2021", { sender: "Anita Vyona", recipient: "Felix Mush", quantity: 349 }));
console.log(JSON.stringify(thecoin, null, 4));
