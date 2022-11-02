export const msalConfig = {
  auth: {
    clientId: "cd47fe21-adc8-4153-ab99-60d0087fb70a",
    authority:
      "https://login.microsoftonline.com/a8701aac-a4d8-4911-af16-c671ebd048f7", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
