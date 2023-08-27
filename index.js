/* express */
require('dotenv').config();
console.log(process.env.RPC_USERNAME);
console.log(process.env.RPC_PASSWORD);
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//const fetch = require('node-fetch');

const url = 'http://127.0.0.1:27486/';
const auth = 'Basic ' + Buffer.from(process.env.RPC_USERNAME+':'+process.env.RPC_PASSWORD).toString('base64');
const data = JSON.stringify({
jsonrpc: '1.0',
id: 'curltest',
method: 'getaddressbalance',
params: {
addresses: ['RCdXBieidGuXmK8Tw2gBoXWxi16UgqyKc7']
}
});
const headers = {
'Content-Type': 'text/plain',
'Authorization': auth
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getmininginfo', (req, res) => {
  fetch(url, {
    method: 'POST',
    headers,
    body: data
    })
    .then(response => {
    if (response.ok) {
    return response.json();
    }
    console.log({message:"Request failed!"});
    res.json({message:"Request failed!"})
   
   // throw new Error('Request failed!');
    })
    .then(jsonData => {
    console.log(jsonData);
    })
    .catch(error => {
    console.error(error);
    });
 // res.send('getmininginfo')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

