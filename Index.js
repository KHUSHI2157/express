import express from 'express';

const port  = 4800

const app = express()

app.set('view engine' , 'ejs');

app.get("/" , (req, resp) => {
//     // console.log("this is bs man ")
//     resp.send(`<h1>this route is root "/" </h1>`)
    

resp.render('index' )
}) 



app.listen(port , () => console.log(`running at ${port}`))