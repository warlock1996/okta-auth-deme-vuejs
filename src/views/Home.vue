<script>
import axios from "@/axiosConfig.js";
import { getToken } from "@okta/okta-auth-js";
import { useAuth } from "@okta/okta-vue";

export default {
  methods: {
    fetchAPI() {
      axios
        .get("https://jsonplaceholder.ir/users")
        .then((json) => console.log(json));
    },
    getToken() {
      const token = this.$auth.getAccessToken();
      console.log(token);
    },

    async login() {
      await this.$auth.signInWithRedirect();
    },
  },
};
</script>

<template>
  <header>
    <button @click="login()">login</button>
    <button @click="fetchAPI()">fetch</button>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
button {
  zoom: 4;
}
</style>
