<template>
  <div class="addAccountMain">
    <div class="loginInfoBox">
      <div>
        <input
          placeholder="URL"
          class="userNameInput"
          type="email"
          v-model="saveAccountInfoModel.savedUrl"
        />
      </div>
      <div>
        <input
          placeholder="Username"
          class="userNameInput"
          type="email"
          v-model="saveAccountInfoModel.savedUsername"
        />
      </div>
      <div>
        <input
          placeholder="Password"
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
    </div>
    <div class="buttonGroup">
      <button class="generalButton" @click="clearInfo()">Clear</button>
      <button class="generalButton" @click="saveAccount()">Add</button>
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
      this.saveAccountInfoModel.userInfoModelId =
        localStorage.getItem("tokenId");
      this.userInfoService
        .saveAccount(this.saveAccountInfoModel)
        .then(() => {
          this.$router.push("all-passwords");
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