const { readFileSync } = require("fs")

class Read {
    static
    readFileSync() {
        const read = readFileSync("../src/controllers/controller")    
        const data = JSON.parse(read)

        return data
    }
}

module.exports = Read