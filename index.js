
import express from 'express';
import 'dotenv/config'

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello', (req, res)=> {

    res.send("<h1>Hello Deepak</h1>");
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})