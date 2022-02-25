// For a full list of MSAL.js configuration parameters, 
// visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
export const msalConfig = {
  auth: {
    clientId: "cfa7fd85-2550-4706-94d8-536ec0876eda",
    authority:
      "https://login.microsoftonline.com/626f746a-6a36-4b6b-b355-ee3ad9c373c0",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Coordinates and required scopes for your web API
export const apiConfig = {
  resourceUri: "https://localhost:44351/api/profile",
  resourceScopes: ["api://416bf09f-f763-4982-8930-6542f2d13b9f/.default"],
};

/** 
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters, 
 * visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const loginRequest = {
    scopes: ["openid", "profile", "offline_access", ...apiConfig.resourceScopes]
}

// Add here scopes for access token to be used at the API endpoints.
export const tokenRequest = {
    scopes: [...apiConfig.resourceScopes]
}

// Add here scopes for silent token request
export const silentRequest = {
    scopes: ["openid", "profile", ...apiConfig.resourceScopes]
}
