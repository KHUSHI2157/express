// import http from 'http'

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' })
//   res.write('<h1>Hello world!</h1>')
//   res.end('Done!')
// }).listen(4800)



import fs from 'fs'

import express from 'express'


const App = express();
const port = 4800

App.get('/', (req, resp) => {
    console.log("this is the thing i do when i do not get to see anyone man !!! i don't even now what to do now im going to be 20 in next 2 months but the joy in living is getting ??  <somewhere i do not even know the place man i just need help  ....... to be continued...................>")
fs.readFile('text.txt' , 'utf-8', (err, data) => {
    // resp.writeHead(200, )
    if(err){
        console.log("this is bs man i can't process man !!! some sort of error is going on here!!!!")
        resp.end("err")
    return;
    }
    // resp.end(data);
    resp.send(data)
    
})

})

App.listen(port)
