import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./auth/authConfig.ts";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <MsalProvider instance={msalInstance}>
      <Provider store={store}>
      <App />
      </Provider>
      </MsalProvider>
    </Router>
  </React.StrictMode>
);
