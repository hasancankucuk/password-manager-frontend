<template>
  <div class="allAccountsPageMain">
    <div class="accountsSection">
      <ul class="accountList">
        <h4>Accounts</h4>
        <li
          v-for="value in accounts"
          :key="value.savedUsername"
          @click="setSelected(value)"
          :class="{ selected: value.selected }"
        >
          {{ value.savedUsername }}
        </li>
      </ul>
    </div>
    <div class="addAccountMain">
      <div class="loginInfoBox">
        <div>
          <input placeholder="URL" type="email" class="userNameInput" />
        </div>
        <div>
          <input placeholder="Username" type="email" class="userNameInput" />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            class="passwordInput"
          /><a class="passwordShow"></a>
        </div>
      </div>
      <div class="buttonGroup">
        <button class="generalButton">Clear</button
        ><button class="generalButton">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import saveAccountInfoModel from "../../models/saveAccountInfoModel";

import userInfoService from "../../services/userInfoService";

export default {
  name: "AllPasswords",
  data() {
    return {
      accounts: [],
      saveAccountInfoModel: new saveAccountInfoModel(),
      userService: new userInfoService(),
      type: "password",
      isActive: false,
    };
  },
  methods: {
    clearInfo() {
      this.saveAccountInfoModel = new saveAccountInfoModel();
      this.accounts.forEach((x) => (x.selected = false));
    },
    setSelected(info) {
      this.accounts.forEach((x) => (x.selected = false));
      info.selected = true;
      this.saveAccountInfoModel = new saveAccountInfoModel();
      this.setModel(info);
      this.saveAccountInfoModel.selected = info.selected;
    },
    showPassword() {
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
      return (this.isActive = !this.isActive);
    },
    updateInfo() {
      this.setModel(this.saveAccountInfoModel);
      this.userService
        .updateAccountInfo(this.saveAccountInfoModel)
        .then(() => {
          this.getAccounts();
          this.clearInfo();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setModel(info) {
      this.saveAccountInfoModel = new saveAccountInfoModel();
      this.saveAccountInfoModel.id = info.id;
      this.saveAccountInfoModel.savedUsername = info.savedUsername;
      this.saveAccountInfoModel.savedUrl = info.savedUrl;
      this.saveAccountInfoModel.savedPassword = info.savedPassword;
    },
    getAccounts() {
      this.userService
        .getAllPasswords(localStorage.getItem("token"))
        .then((response) => {
          this.accounts = response.data ? response.data : [];
          this.accounts.forEach((x) => (x.selected = false));
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getAccounts();
  },
};
</script>