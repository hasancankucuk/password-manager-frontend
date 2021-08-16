<template>
  <section>
    <header class="app-header">
      <div class="sidebar-menu" :class="{ sidebarOpen: opened }">
        <a
          class="sidebar-menu-icon"
          v-click-outside="hide"
          @click="opened = !opened"
        />
      </div>
      <div
        id="side-menu"
        class="side-nav"
        :class="{ sidenavopen: opened }"
        v-show="opened"
      >
        <ul class="side-nav-items" @click="opened = !opened">
          <li
            @click="redirect('/all-passwords')"
            class="side-nav-savedAccounts"
          >
            <div class="savedAccountsIcon" />
            <router-link to="/all-passwords"> Accounts </router-link>
          </li>
          <li @click="redirect('/add-account')" class="side-nav-addAccount">
            <div class="addAccountIcon" />
            <router-link to="/add-account"> New Account </router-link>
          </li>
          <li
            @click="redirect('/recently-used-passwords')"
            class="side-nav-addAccount"
          >
            <div class="recentlyUsedIcon" />
            <router-link to="/recently-used-passwords">
              Recently Used Passwords
            </router-link>
          </li>
          <li
            @click="redirect('/password-generator')"
            class="side-nav-passwordGenerator"
          >
            <div class="passwordGeneratorIcon" />
            <router-link to="/password-generator"> Generator </router-link>
          </li>
          <li class="side-nav-passwordGenerator" @click="logOut()">
            <div class="logOutIcon" />
            <router-link to=""> Logout </router-link>
          </li>
        </ul>
      </div>
      <div class="logo-header">
        <h2>
          <router-link class="logo-router" to="/all-passwords"
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
            v-model="searchText"
            @keyup="search()"
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
import ClickOutside from "vue-click-outside";
import router from "../../router";

export default {
  name: "Navbar",
  data() {
    return {
      opened: false,
      searchText: ""
    };
  },
  methods: {
    logOut() {
      this.$store.commit("LOGIN_USER");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("tokenId");
      router.push("login");
    },
    hide() {
      this.opened = false;
    },
    redirect(path) {
      if (this.$route.path != path) this.$router.push(path);
    },
    search() {
      if (this.$route.path !== "/all-passwords") {
        this.$router.push("/all-passwords");
      }
      this.$store.commit("SEARCH_TEXT", this.searchText);
    }
  },
  directives: {
    ClickOutside,
  },
};
</script>
