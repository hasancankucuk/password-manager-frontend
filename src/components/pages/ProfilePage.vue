<template>
  <div class="profilePageMain">
    <div class="profilePageInfo" :class="{ blurredProfilePage: isSaved }">
      <a class="profilePageIcon" />
      <span class="userNameInfo">User Name</span>
      <input
        class="changeUserName"
        type="email"
        v-model="userInfoModel.userName"
      />
      <span class="emailInfo">E-mail</span>
      <input
        class="changeMail"
        type="email"
        v-model="userInfoModel.userEmail"
      />
      <span class="passwordInfo">Password</span>
      <input
        class="changePassword"
        type="password"
        v-model="userInfoModel.userPassword"
      />
      <button class="cancelChangesButton" type="reset" @click="resetChanges()">
        Cancel
      </button>
      <button class="saveChangesButton" type="submit" @click="saveChanges()">
        Update
      </button>
      <button class="deleteButton" type="submit" @click="deleteUser()">
        Delete
      </button>
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
    this.userInfoModel.userName = localStorage.getItem("username");
    this.userInfoModel.userEmail = localStorage.getItem("token");
    this.userInfoModel.id = localStorage.getItem("tokenId");
    this.userInfoModel.userPassword = "";
    console.log(this.userInfoModel);
  },
  methods: {
    resetChanges() {
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>