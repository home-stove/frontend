import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "26d54a27-ed6e-4fab-b119-c1b4369838e5", // Your Azure AD app's client ID
    authority: "https://login.microsoftonline.com/f755958c-e25b-41f7-82dd-f5dc2c3572fc", // Your tenant ID
    redirectUri: "http://localhost:5173/", // Your redirect URI
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set to true if you're having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
          default:
            break;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"], // Scopes to request for the access token
};
