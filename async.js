// async file 
import fs from 'fs'
// const fs = require(fs) // use this whten you use common js not with modules!!!!
fs.writeFile("text.txt", "this is bs" , (err) => {
    if(err) console.log("error")
        else console.log("done")
})

console.log("file created!!!")


