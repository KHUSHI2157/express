import express from 'express'
import fs from 'fs'

import { start } from 'repl'
const app = express()

// const readStream = fs.createReadStream('./file.txt' , 'utf-8'
const readStream = fs.createReadStream('./file.txt', {
    encodeing: 'utf-8', start: 0, end: 4
})

readStream.on('data', (chunk) => {
    console.log("received chunk ", chunk)
})

readStream.on('data', (chunk) => {
    console.log('rec. data ', chunk)
})

readStream.on('data', (chunk) => {
    console.log(`sending data in chunks ${chunk.length} bytes `)
})



readStream.on('end', (chk) => {
    console.log('file reading is done')
})


readStream.on('err', () => {
    console.log("Error ins reading file")
})

app.listen(4800, () => {
    console.log("running on port 4800")
})