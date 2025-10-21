import express from 'express'

import fs from 'fs'

const port = 4800;

// fs.readFile('text.txt', 'utf-8')


const app  =express()

app.get('/', (req, resp) => {
    // resp.send(`<h2> this is bs man just reading files on server and counting my remaining days!!! </h2>`)

    const read = fs.readFileSync('text.txt', 'utf-8')//blocking thing here!!!!
    // resp.end(read)
    resp.send(` this form the file ->> ${read}`)
})

app.listen(port, ()=> {
    console.log(`server is running on ${port}`)
})