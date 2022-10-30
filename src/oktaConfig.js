const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = import.meta.env;

const BASENAME =
  process.env.NODE_ENV === "production" ? "/okta-hosted-login" : "";
const REDIRECT_URI = `http://localhost:5174/login/callback`;

export default {
  oidc: {
    clientId: "0oa2u9azxcyBSi6G9697",
    issuer: "https://outlook-trial-6184402.okta.com/oauth2/default",
    redirectUri: REDIRECT_URI,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    testing: {
      disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
    },
  },
  resourceServer: {
    messagesUrl: "http://localhost:8000/api/messages",
  },
  app: {
    basename: BASENAME,
  },
};
