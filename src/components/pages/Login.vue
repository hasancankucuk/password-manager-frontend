<template>
  <div class="profilePageMain">
    <div
      class="profilePageInfo"
      :class="{ blurredProfilePage: isLoginStarted }"
    >
      <a class="profilePageIcon" />
      <span class="userNameInfo">User Name</span>
      <input class="changeUserName" type="email" v-model="userModel.userName" />
      <span class="passwordInfo">Password</span>
      <input
        class="changePassword"
        type="password"
        v-model="userModel.userPassword"
      />
      <button class="cancelChangesButton" type="submit" @click="signUp()">
        Sign Up
      </button>
      <button class="saveChangesButton" type="submit" @click="login()">
        Login
      </button>
    </div>
    <div class="savedPopup" v-show="isLoginStarted">
      <div class="progressBar" :class="{ saved: isLoginStarted }">
        <a class="progressBarIcon" />
      </div>
    </div>
  </div>
</template>
<script>
import router from "../../router";
import userInfoModel from "../../models/userInfoModel";
import userInfoService from "../../services/userInfoService";
import { mapGetters } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      isLoginStarted: false,
      userModel: new userInfoModel(),
      userService: new userInfoService(),
    };
  },
  computed: {
    ...mapGetters(["isUserLoggedIn"]),
  },
  mounted() {
    if (!localStorage.getItem("token")) {
      this.$store.commit("LOGOUT_USER");
      if (!router.currentRoute.path.startsWith("/login")) router.push("login");
    } else {
      this.$store.commit("LOGIN_USER");
      if (!router.currentRoute.path.startsWith("/profile"))
        router.push("profile");
    }
  },
  methods: {
    signUp() {
      if (!this.checkUser()) {
        this.isLoginStarted = false;
        return;
      }

      this.userService
        .sendSignupRequest(this.userModel)
        .then(() => {
          this.isLoginStarted = false;
          this.isLogged = true;
          this.$store.dispatch("LOGIN_USER");
          localStorage.setItem("token", this.userModel.userEmail);
          router.push("/all-passwords");
        })
        .catch((err) => {
          this.isLoginStarted = false;
          console.log(err);
        });
    },
    login() {
      if (!this.checkUser()) {
        return;
      }

      this.userModel.userEmail = this.userModel.userName;
      this.userService
        .sendLoginRequest(this.userModel)
        .then(() => {
          this.isLoginStarted = false;
          this.isLogged = true;
          this.$store.commit("LOGIN_USER");
          localStorage.setItem("token", this.userModel.userEmail);
          router.push("/profile");
        })
        .catch(() => {
          this.isLoginStarted = false;
        });
    },
    checkUser() {
      this.isLoginStarted = true;
      this.userModel.userEmail = this.userModel.userName;
      if (!this.userModel.userName || !this.userModel.userPassword) {
        return false;
      }

      if (
        this.userModel.userName.trim().length <= 0 ||
        this.userModel.userPassword.trim().length <= 0
      ) {
        return false;
      }

      return true;
    },
  },
};
</script>