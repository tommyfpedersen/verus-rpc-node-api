require('dotenv').config();

/* express */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

/* common */
const fetch = require('cross-fetch');
const btoa = require('btoa');

/* routes */
const addressindexRouter = require('./routes/addressindex');
app.use('/addressindex', addressindexRouter);

const miningRouter = require('./routes/mining');
app.use('/mining', miningRouter);

app.get('/', (req, res) => {
  res.send('verus rest api')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

/* mongodb */
// const mongoose = require('mongoose');
// mongoose.connect(process.env.DATABASE_URL);
// const db = mongoose.connection;
// db.on('error',(error) => console.error(error));
// db.once('open',() => console.log("Connected to Database"))
