/* verus node rpc username and password */
require('dotenv').config();
const RPC_USERNAME = process.env.RPC_USERNAME; // <--- Change to your own verus node username 
const RPC_PASSWORD = process.env.RPC_PASSWORD; // <--- Change to your own verus node password 

/* express */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const fetch = require('cross-fetch');
const btoa = require('btoa');

//const ID = "verus-rest-api-1.0.0";

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/getmininginfo', (req, res) => {
  fetch('http://127.0.0.1:27486/', {
    method: 'POST',
    headers: {
      'content-type': 'text/plain;',
      'Authorization': 'Basic ' + btoa(RPC_USERNAME + ':' + RPC_PASSWORD)
    },
    body: '{"jsonrpc": "1.0", "id":"curltest", "method": "getmininginfo", "params": [] }'
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      res.json({ message: "Request failed!" })
    })
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      res.json({ message: "Request failed! - " + error })
    });
})

app.get('/getaddressbalance', (req, res) => {
  fetch('http://127.0.0.1:27486/', {
    method: 'POST',
    headers: {
      'content-type': 'text/plain;',
      'Authorization': 'Basic ' + btoa(RPC_USERNAME + ':' + RPC_PASSWORD)
    },
    body: '{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressbalance", "params": [{"addresses": ["RCdXBieidGuXmK8Tw2gBoXWxi16UgqyKc7"]}] }'
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      res.json({ message: "Request failed!" })
    })
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      res.json({ message: "Request failed! - " + error })
    });
})

app.get('/getdifficulty', (req, res) => {
  fetch('http://127.0.0.1:27486/', {
    method: 'POST',
    headers: {
      'content-type': 'text/plain;',
      'Authorization': 'Basic ' + btoa(RPC_USERNAME + ':' + RPC_PASSWORD)
    },
    body: '{"jsonrpc": "1.0", "id":"curltest", "method": "getdifficulty", "params": [] }'
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      res.json({ message: "Request failed!" })
    })
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      res.json({ message: "Request failed! - " + error })
    });
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

