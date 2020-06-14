const express = require('express')
const app = express()
const bodyParser  = require('body-parser')
const cors = require('cors')
const { promises: fs } = require("fs")
var path = require('path')

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/', async (req, res) => {
    console.log('here')
    const filepath = path.join(process.cwd(), "", "data.json")
    let data = await fs.readFile(filepath, "utf-8")
    console.log(data)
    let queries = []
    if (data) {
        queries = JSON.parse(data)
        if(!queries){
            queries = []
        }
    }
    queries.push({
        "query": req.body.query
    })
    await fs.writeFile(filepath, JSON.stringify(queries))
    res.sendStatus(200)
})

app.get('/', async (req, res) => {
    const filepath = path.join(process.cwd(), "", "data.json")
    let data = await fs.readFile(filepath, "utf-8")
    const queries = JSON.parse(data)
    console.log('--queries: ', queries)
    res.send(queries)
})

app.listen(3001, () => console.log(`app listening at http://localhost:3001`))
