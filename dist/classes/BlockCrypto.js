"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sha256_1 = __importDefault(require("crypto-js/sha256"));
var BlockCypto = /** @class */ (function () {
    function BlockCypto(index, current_time, info, next_hash) {
        if (next_hash === void 0) { next_hash = " "; }
        this.index = index;
        this.current_time = current_time;
        this.info = info;
        this.next_hash = next_hash;
        this.hash = this.computeHash();
    }
    BlockCypto.prototype.computeHash = function () {
        return (0, sha256_1.default)(this.info + this.next_hash + this.current_time + JSON.stringify(this.info)).toString();
    };
    return BlockCypto;
}());
exports.default = BlockCypto;
