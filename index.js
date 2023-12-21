require('dotenv').config();

/* express */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9009;
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: '*' // <-- which domains can access this API
}));

/* routes */
const addressindexRouter = require('./routes/addressindex');
app.use('/addressindex', addressindexRouter);

const blockchainRouter = require('./routes/blockchain');
app.use('/blockchain', blockchainRouter);

const identityRouter = require('./routes/identity');
app.use('/identity', identityRouter);

const miningRouter = require('./routes/mining');
app.use('/mining', miningRouter);

const multichainRouter = require('./routes/multichain');
app.use('/multichain', multichainRouter);

const networkRouter = require('./routes/network');
app.use('/network', networkRouter);

app.get('/', (req, res) => {
  res.send('verus rest api')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
