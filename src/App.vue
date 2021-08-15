<template>
  <div>
    <Navbar v-if="this.isUserLoggedIn"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/shared/Navbar.vue";
import router from "./router";
import { mapGetters, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isUserLoggedIn"]),
    ...mapState(["isLogged"]),
  },
  components: {
    Navbar,
  },
  mounted() {
    if (!localStorage.getItem("token")) {
      this.$store.commit("LOGOUT_USER");
      if (!router.currentRoute.path.startsWith("/login")) router.push("login");
    } else {
      this.$store.commit("LOGIN_USER");
      if (router.currentRoute.path.startsWith("/login") || router.currentRoute.path.trim().length == 0)
        router.push("all-passwords");
    }
  },
  methods: {
    getUser() {
      return this.isUserLoggedIn;
    },
  },
};
</script>

<style>
@import url("./assets/style/main.scss");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
