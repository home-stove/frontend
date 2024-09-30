import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "26d54a27-ed6e-4fab-b119-c1b4369838e5",
    authority: "https://login.microsoftonline.com/f755958c-e25b-41f7-82dd-f5dc2c3572fc",
    redirectUri: "http://localhost:5173/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
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
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
