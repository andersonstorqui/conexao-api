const { writeFileSync} = require("fs")
// const { request, response } = require("express")

class Write {
    static
    WriteData(dados) {
        writeFileSync(
            "./src/mock/db.json", JSON.stringify({...dados}, null, 2),
        (error) => {
            if(error){
                console.log(error)
            }
        }
            )
    }
    
}

module.exports = Write