<template>
  <div>
    <div class="profilePageMain">
      <div class="profilePageIcon"></div>
      <div class="profileInfo">
        <input
          type="email"
          placeholder="User Name"
          v-model="userInfoModel.userName"
        />
        <input
          type="email"
          placeholder="E-mail"
          v-model="userInfoModel.userEmail"
        />
        <input
          placeholder="Password"
          type="password"
          v-model="userInfoModel.userPassword"
        />
      </div>
      <div class="buttonGroup">
        <button class="generalDeleteButton" type="submit" @click="deleteUser()">
          Delete
        </button>
        <button class="generalButton" type="reset" @click="resetChanges()">
          Cancel
        </button>
        <button class="generalButton" type="submit" @click="saveChanges()">
          Update
        </button>
      </div>
    </div>
    <div class="savedPopup" v-show="isSaved">
      <button class="closePopupButton" @click="closePopup()"></button>
      <h4 class="savedHeader">Changes Have Been Saved Succesfully</h4>
      <div class="progressBar" :class="{ saved: isDone }">
        <a class="progressBarIcon" />
      </div>
    </div>
  </div>
</template>
<script>
import userInfoModel from "../../models/userInfoModel";
import userInfoService from "../../services/userInfoService";
export default {
  name: "ProfilePage",
  data() {
    return {
      userService: new userInfoService(),
      userInfoModel: new userInfoModel(),
      isSaved: false,
      isDone: false,
    };
  },
  mounted() {
    this.userInfoModel = new userInfoModel();
    this.userInfoModel.userName = localStorage.getItem("username");
    this.userInfoModel.userEmail = localStorage.getItem("token");
    this.userInfoModel.id = localStorage.getItem("tokenId");
    this.userInfoModel.userPassword = "";
  },
  methods: {
    resetChanges() {
    this.userInfoModel = new userInfoModel();
      this.userInfoModel.userName = localStorage.getItem("username");
      this.userInfoModel.userEmail = localStorage.getItem("token");
      this.userInfoModel.id = localStorage.getItem("tokenId");
      this.userInfoModel.userPassword = "";
    },
    saveChanges() {
      this.userService
        .updateUser(this.userInfoModel)
        .then(() => {
          localStorage.setItem("username", this.userInfoModel.userName);
          localStorage.setItem("token", this.userInfoModel.userEmail);
          localStorage.setItem("tokenId", this.userInfoModel.id);
        })
        .catch(() => {
          this.userInfoModel.userPassword = "";
        });
    },
    closePopup() {
      this.isSaved = !this.isSaved;
      this.isDone = !this.isDone;
    },
    deleteUser() {
      this.userService
        .deleteUser(this.userInfoModel.id)
        .then((response) => {
          console.log(response);
          this.$store.commit("LOGIN_USER");
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("tokenId");
          this.$router.push("login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>