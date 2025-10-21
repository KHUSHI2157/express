console.log("starting the rest api thing")


import express from 'express'
// import data from {'./data.json' : 'utf-8'}
import users from './data.json' assert {type : 'json'}
import fs from 'fs'

const app = express()


app.get('/',(req, resp) => {
    // resp.end(`<h1>this is home page you wanna get to the data use the /api/:id thing thath will take you to dynamic route </h1>`)
    return resp.send(data)
})

// app.route('/api/:id').get( (req, resp) => {
//     resp.end(`<h1>this is home page you wanna get to the data use the /api/:id thing thath will take you to dynamic route </h1>`)
// }).post((req, resp) => {
//     return resp.end("this is patch route man !!!! using /api/:id")
// })
//     // return resp.json('winder')
    



app.listen(4800 , () =>{
    console.log("server is running on port -> 4800")
})

