<template>
  <div>
    <div class="addAccountMain">
      <div class="urlList">
        <span class="urlListSpan">URL:</span>
        <input
          class="urlListInput"
          type="url"
          v-model="saveAccountInfoModel.savedUrl"
        />
        <!-- <span class="urlName">Name:</span>
            <input class="urlNameInput" type="text" v-model="saveAccountInfoModel.savedUrl"> -->
      </div>
      <div class="loginInfoBox">
        <span class="userName">Username:</span>
        <input
          class="userNameInput"
          type="email"
          v-model="saveAccountInfoModel.savedUsername"
        />
        <span class="password">Password:</span>
        <input
          class="passwordInput"
          :type="type"
          v-model="saveAccountInfoModel.savedPassword"
        />
        <a
          class="passwordShow"
          @click="showPassword()"
          :class="{ active: isActive }"
        />
      </div>
      <button class="clearButton" @click="clearInfo()">Clear</button>
      <button class="saveButton" @click="saveAccount()">Save</button>
    </div>
  </div>
</template>
<script>
import saveAccountInfoModel from "../../models/saveAccountInfoModel";
import UserInfoService from "../../services/userInfoService";

export default {
  name: "AddAccount",
  data() {
    return {
      type: "password",
      isActive: false,
      saveAccountInfoModel: new saveAccountInfoModel(),
      userInfoService: new UserInfoService(),
    };
  },
  methods: {
    clearInfo() {
      this.saveAccountInfoModel = new saveAccountInfoModel();
    },
    saveAccount() {
      this.userInfoService
        .saveAccount(this.saveAccountInfoModel)
        .then(() => {
          this.$router.push({ path: "/all-passwords" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showPassword() {
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
      return (this.isActive = !this.isActive);
    },
  },
};
</script>