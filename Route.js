import express from 'express'

const app = express()

const port = 4900

app.get("/" , (req,  resp) => {

    resp.send(`<h1  style="color: blue; font-size: 16px;"> this is bs man</h1>`)
})
app.listen(port);