import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { StateContextProvider } from "./context";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";
import App from "./App"; 

const TXDC = {
  chainId: 51, // Apothem chain ID
  rpc: ["https://rpc.apothem.network"],
  nativeCurrency: {
    name: "TXDC",
    symbol: "TXDC",
    decimals: 18,
  },
  slug: "txdc",
  name: "XDC Apothem Testnet",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider 
    activeChain={TXDC}
    clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
    sdkOptions={{
      analytics: false,
    }}
  >
    <Router>
      <StateContextProvider>
        <App/>
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
