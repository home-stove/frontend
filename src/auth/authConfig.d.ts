declare module './authConfig' {
  export const msalConfig: {
    auth: {
      clientId: string;
      authority: string;
      redirectUri: string;
    };
    cache: {
      cacheLocation: string;
      storeAuthStateInCookie: boolean;
    };
    system: {
      loggerOptions: {
        loggerCallback: (level: any, message: string, containsPii: boolean) => void;
      };
    };
  };

  export const loginRequest: {
    scopes: string[];
  };
}
