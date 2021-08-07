<template>
  <section>
    <header class="app-header">
      <div class="sidebar-menu" :class="{ sidebarOpen: opened }">
        <a class="sidebar-menu-icon" @click="opened = !opened" />
      </div>
      <div
        id="side-menu"
        class="side-nav"
        :class="{ sidenavopen: opened }"
        v-show="opened"
      >
        <ul class="side-nav-items" @click="opened = !opened">
          <li class="side-nav-savedAccounts">
            <div class="savedAccountsIcon" />
            <router-link to="/all-passwords"> Accounts </router-link>
          </li>
          <li class="side-nav-addAccount">
            <div class="addAccountIcon" />
            <router-link to="/add-account"> New Account </router-link>
          </li>
          <li class="side-nav-passwordGenerator">
            <div class="passwordGeneratorIcon" />
            <router-link to="/password-generator"> Generator</router-link>
          </li>
          <li class="side-nav-passwordGenerator" @click="logOut()">
            <div class="logOutIcon" />
            Log Out
          </li>
        </ul>
      </div>
      <div class="logo-header">
        <h2>
          <router-link class="logo-router" to="/"
            >Password <span> Manager</span></router-link
          >
        </h2>
      </div>
      <nav class="menu">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <router-link to="/profile">
          <button class="user-info">
            <a class="user-info-icon" />
          </button>
        </router-link>
      </nav>
    </header>
  </section>
</template>

<script>
import router from "../../router";
export default {
  name: "Navbar",
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    logOut() {
      this.$store.commit("LOGIN_USER");
      localStorage.removeItem("token");
      router.push("login");
    },
  },
};
</script>
