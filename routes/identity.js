const config = require('../config');
const express = require('express');
const router = express.Router();

router.get('/getidentity/:identity', async (req, res) => {
  try {
    const response = await fetch(config.VERUS_NODE_ADDRESS, {
      method: 'POST',
      headers: {
        'content-type': 'text/plain;',
        'Authorization': 'Basic ' + btoa(config.RPC_USERNAME + ':' + config.RPC_PASSWORD)
      },
      body: '{"jsonrpc": "1.0", "id":"' + config.ID + '", "method": "getidentity", "params": ["' + req.params.identity + '"] }'
    });
    const results = await response.json();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/getidentityhistory/:identity', async (req, res) => {
  try {
    const response = await fetch(config.VERUS_NODE_ADDRESS, {
      method: 'POST',
      headers: {
        'content-type': 'text/plain;',
        'Authorization': 'Basic ' + btoa(config.RPC_USERNAME + ':' + config.RPC_PASSWORD)
      },
      body: '{"jsonrpc": "1.0", "id":"' + config.ID + '", "method": "getidentityhistory", "params": ["' + req.params.identity + '"] }'
    });
    const results = await response.json();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router;