import BlockCrypto from './BlockCrypto'

export default class BlockChain {

    blockchain : BlockCrypto[]

    constructor() {
        this.blockchain = [this.initGenesisBlock()]     
    }

    initGenesisBlock() : BlockCrypto {
        return new BlockCrypto(0, Date.now(), "Initial Block in the Chain", "0")
    }

    latestBlock() : BlockCrypto {
        return this.blockchain[this.blockchain.length - 1]
    }

    addNewBlock(newBlock) : void {
        newBlock.next_hash = this.latestBlock().hash
        newBlock.hash = newBlock.computeHash()       
        this.blockchain.push(newBlock)
    }

    checkValidity() : boolean {
        // Checking validity
        for(let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const nextBlock = this.blockchain[i-1];
        // Checking current blcok hash
        
            if(currentBlock.hash !== currentBlock.computeHash()) return false;
            
            // Comparing current block hash with the next block
        
            if(currentBlock.next_hash !== nextBlock.hash) return false
            
            return true
        }
    }
}