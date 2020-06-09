const express = require('express')
const app = express()
const bodyParser  = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.use(cors())

state = { query: "" };

app.listen(3001, () => console.log(`app listening at http://localhost:3001`))

app.post('/', function (req, res) {
    state.query = req.body.query;
    res.send("Search Term Was Saved");
})

app.get('/', function (req, res) {
    res.send({ term: state.query })
})

