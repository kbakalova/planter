const express = require('express');
const db = require('../database');
const app = express();
const port = 3000

app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.get('/plants', (req, res) => {
  db.getAllAccountInfo();
  res.send('Hello World!')
});

app.post('/plants', (req, res) => {
  console.log("body", req.body);
  db.updatePlantPage(req, res);
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})