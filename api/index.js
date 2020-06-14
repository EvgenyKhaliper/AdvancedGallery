const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { promises: fs } = require("fs");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const filepath = path.join(process.cwd(), "data.json");
  let data = await fs.readFile(filepath, "utf-8");
  let queries = [];
  
  if (data) {
    queries = JSON.parse(data);
    if (!queries) {
      queries = [];
    }
  }

  queries.push({
    query: req.body.query || '',
  });
  await fs.writeFile(filepath, JSON.stringify(queries));
  res.sendStatus(200);
});

app.get("/", async (req, res) => {
  const filepath = path.join(process.cwd(), "api", "data.json");
  let data = fs.readFile(filepath, "utf-8");
  const queries = JSON.parse(data);
  res.send(queries[0]);
});

app.listen(3000, () => console.log(`app listening at http://localhost:3000`));
