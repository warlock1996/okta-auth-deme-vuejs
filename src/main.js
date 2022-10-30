import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router"
import { OktaAuth } from "@okta/okta-auth-js";
import OktaVue from "@okta/okta-vue";
import oktaConfig from "./oktaConfig";
import "./assets/main.css";

const oktaAuthIntance = new OktaAuth({
  clientId: "0oa2u9azxcyBSi6G9697",
  issuer: "https://trial-6184402.okta.com/oauth2/default",
  redirectUri: "http://localhost:5174/login/callback",
});

const app = createApp(App);
app.use(router)
app.use(OktaVue, { oktaAuth: oktaAuthIntance });

app.mount("#app");
