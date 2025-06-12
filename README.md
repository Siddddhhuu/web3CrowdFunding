# 🪙 Web3 Crowdfunding DApp

This is a functional **Crowdfunding Web Application** built using modern web3 technologies. It allows users to create and fund campaigns securely on the blockchain.

---

## 🚀 Tech Stack

* **Frontend**: React + Vite
* **Smart Contracts**: Solidity + Hardhat
* **Blockchain Network**: XDC Apothem Testnet (Chain ID 51)
* **Web3 Integration**: Thirdweb SDK
* **Wallet Support**: MetaMask
* **Backend Services**: Thirdweb Hosted Contracts (or self-deployed)

---

## 🌐 Features

* ✅ Connect wallet (MetaMask)
* ✅ Create and view campaigns
* ✅ Contribute ETH/TXDC to campaigns
* ✅ View campaign details and donors
* ✅ Smart contract deployed on Apothem (XDC Testnet)
* ✅ Valid image URL check before submission
* ✅ 100% of raised funds go to campaign creators

---

## 🛠️ Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/Siddddhhuu/web3CrowdFunding.git
cd web3-crowdfunding
```

2. Install dependencies
```bash
# Install client dependencies
cd client
npm install

# Install smart contract dependencies
cd ../web3
npm install
```

3. Environment Setup

Create `.env` files in both client and web3 directories:

In `client/.env`:
```
VITE_TEMPLATE_CLIENT_ID=your_thirdweb_client_id
VITE_CONTRACT_ADDRESS=your_deployed_contract_address
```

In `web3/.env`:
```
PRIVATE_KEY=your_wallet_private_key
```

4. Deploy Smart Contract
```bash
cd web3
npm run deploy
```

5. Start the Application
```bash
cd client
npm run dev
```

---

## 📝 Smart Contract Functions

* `createCampaign`: Create a new crowdfunding campaign
* `donateToCampaign`: Donate to an existing campaign
* `getCampaigns`: Get all campaigns
* `getDonators`: Get all donators for a specific campaign

---

## 🔗 Important Links

* [XDC Apothem Testnet Explorer](https://explorer.apothem.network/)
* [Thirdweb Dashboard](https://thirdweb.com/dashboard)
* [MetaMask](https://metamask.io/)
