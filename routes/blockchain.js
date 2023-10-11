const config = require('../config');
const express = require('express');
const router = express.Router();

  router.get('/getblock/:height', async (req, res) => {
    try {
        const response = await fetch(config.VERUS_NODE_ADDRESS, {
            method: 'POST',
            headers: {
              'content-type': 'text/plain;',
              'Authorization': 'Basic ' + btoa(config.RPC_USERNAME + ':' + config.RPC_PASSWORD)
            },
            body: '{"jsonrpc": "1.0", "id":"'+config.ID+'", "method": "getblock", "params": ["'+req.params.height+'", 2] }'
          });
         const results = await response.json();
         res.json(results);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  })

module.exports = router;