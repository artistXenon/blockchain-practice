import BlockCrypto from './classes/BlockCrypto'
import BlockChain from './classes/BlockChain'


let thecoin = new BlockChain()

thecoin.addNewBlock(new BlockCrypto(1, Date.now(), {sender: "Rabin Yitzack", recipient: "Loyd Eve", quantity: 20}))

thecoin.addNewBlock(new BlockCrypto(2, Date.now(), {sender: "Anita Vyona", recipient: "Felix Mush", quantity: 349}))

console.log(JSON.stringify(thecoin, null, 4))

