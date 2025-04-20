# verus-rpc-node-api
Free to use Verus node express RPC API framework. 

Useful for Javascript developers and can be used as a base RPC API for your dApps.

# Requirements 
A running Verus Node

# Setup 
1. Install and run Verus CLI Wallet / Verus Desktop App
2. Clone or download this repository
3. Find the rpc_user and rpc_password and rpc_port in VRSC.conf

  - windows: %appdata%\Komodo\VRSC 
  - linux: ~/.komodo/VRSC
  - macOS: ~/Library/Application Support/Komodo/VRSC
  - https://wiki.verus.io/#!faq-windows/winfaq-03_verus_desktop_locations.md

  regarding PBaaS
  - linux: cd  ~/.verus/
  vARRR -> e9e10955b7d16031e3d6f55d9c908a038e3ae47d
  vDEX -> 53fe39eea8c06bba32f1a4e20db67e5524f0309d
  CHIPS -> f315367528394674d45277e369629605a1c3ce9f


4. change the config.js variables with your rpc_user and rpc_password and rpc_port
5. Optional: Add your own .env file with with your rpc_user and rpc_password and rpc_port
6. Run NPM install
7. Run node index.js
8. Open your browser and go to the page http://localhost:9009/ and e.g http://localhost:9009/mining/getmininginfo
9. If you want to run multiple blockchains - repeat step 2 to 8 - just use another port in index.js - e.g 9010  

# Options available to the Verus RPC client.
https://wiki.verus.io/#!faq-cli/clifaq-02_verus_commands.md
