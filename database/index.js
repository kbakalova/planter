const { Client } = require('pg');
const postgresConfig = require('./config.js');
const client = new Client(postgresConfig);
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});
const getAllAccountInfo = function() {
  client.query('SELECT * FROM accounts', (err, res) => {
    console.log(err, res.rows)
    client.end()
  });
}
const updatePlantPage = function(req, res) {
  client.query(`INSERT INTO plantPage (lighting) VALUES ('${req.body.lighting}')`, (err, res) => {
    console.log(err);
    //${req.body.lighting}
    console.log(req.body.lighting);
  });
}

module.exports = {
  getAllAccountInfo,
  updatePlantPage,
};