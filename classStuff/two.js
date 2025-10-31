import express from 'express'


import fs from 'fs'

// const app = express()

const writeStr = fs.createWriteStream('file1.txt')

writeStr.write('line 1')
writeStr.write('line 2')
writeStr.write('line 3')
writeStr.write('line 4')

writeStr.end()


writeStr.on('finish' , ()=>{
    console.log(done)



    // not working


    //transform



})