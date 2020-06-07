const express = require('express')
const app = express()
const bodyParser  = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.use(cors())

state = []

app.post('/', function (req, res) {
    state.push({
        "query": req.body.query
    })
})

app.get('/', function (req, res) {
    res.send(state.find(x => x.query != null)[0])
})

app.listen(3000, () => console.log(`app listening at http://localhost:3000`))