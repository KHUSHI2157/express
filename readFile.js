import fs from 'fs'

fs.readFile('result.txt' , "utf-8" , (err,data) => {
    if(err) console.log("error !!!")
        else console.log("this shyt worked!!!!, ", data)
})


console.log("file read successfully!!!!")

