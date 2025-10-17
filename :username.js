import express from 'express'

const app = express();

const port = 4900;


app.set("view engine" , "ejs")

app.get('/' , (req, resp) => {
    // resp.send(`<h1> this is home page route is  /  </h1>`)
    resp.render("index")
})



app.get('/profile' , (req, resp) => {
    resp.send(` this is route profile`)
})


app.get('/profile/:username' , (req, resp) => {
    resp.send(` this is bs man my name is : ${req.params.username}`)
})


app.get('/contact', (rq,rp ) => {
    rp.render("contact");
})



app.listen(port)