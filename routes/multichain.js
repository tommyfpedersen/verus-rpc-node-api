const config = require('../config');
const express = require('express');
const router = express.Router();

  router.get('/getcurrency/:chainname', async (req, res) => {
    try {
        const response = await fetch(config.VERUS_NODE_ADDRESS, {
            method: 'POST',
            headers: {
              'content-type': 'text/plain;',
              'Authorization': 'Basic ' + btoa(config.RPC_USERNAME + ':' + config.RPC_PASSWORD)
            },
            body: '{"jsonrpc": "1.0", "id":"'+config.ID+'", "method": "getcurrency", "params": ["'+req.params.chainname+'"] }'
          });
         const results = await response.json();
         res.json(results);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  })

  router.get('/getcurrencystate/:chainname/:block', async (req, res) => {
    try {
        const response = await fetch(config.VERUS_NODE_ADDRESS, {
            method: 'POST',
            headers: {
              'content-type': 'text/plain;',
              'Authorization': 'Basic ' + btoa(config.RPC_USERNAME + ':' + config.RPC_PASSWORD)
            },
            body: '{"jsonrpc": "1.0", "id":"'+config.ID+'", "method": "getcurrencystate", "params": ["'+req.params.chainname+'", '+req.params.block+'] }'
          });
         const results = await response.json();
         res.json(results);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  })

  router.get('/getimports/:chainname/:blockstart/:blockend', async (req, res) => {
    try {
        const response = await fetch(config.VERUS_NODE_ADDRESS, {
            method: 'POST',
            headers: {
              'content-type': 'text/plain;',
              'Authorization': 'Basic ' + btoa(config.RPC_USERNAME + ':' + config.RPC_PASSWORD)
            },
            body: '{"jsonrpc": "1.0", "id":"'+config.ID+'", "method": "getimports", "params": ["'+req.params.chainname+'", '+req.params.blockstart+', '+req.params.blockend+'] }'
          });
         const results = await response.json();
         res.json(results);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  })

module.exports = router;