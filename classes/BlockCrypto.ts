import SHA256 from 'crypto-js/sha256'

export default class BlockCypto {
    index : number
    current_time : number
    info : string | object
    next_hash : string
    hash : string

    constructor(index : number, current_time : number, info : string | object, next_hash=" ") {
        this.index = index
        this.current_time = current_time
        this.info = info
        this.next_hash = next_hash
        this.hash = this.computeHash()
    }

    computeHash() :string {
        return SHA256(this.info + this.next_hash + this.current_time + JSON.stringify(this.info)).toString()
    }   
}
