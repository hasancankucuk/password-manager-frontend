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
    <div class="addAccountMainInside">
      <div class="loginInfoBox">
        <div>
          <input
            placeholder="URL"
            type="email"
            class="userNameInput"
            v-model="saveAccountInfoModel.savedUrl"
          />
        </div>
        <div>
          <input
            placeholder="Username"
            type="email"
            class="userNameInput"
            v-model="saveAccountInfoModel.savedUsername"
          />
        </div>
        <div>
          <input
            placeholder="Password"
            :type="type"
            class="passwordInput"
            v-model="saveAccountInfoModel.savedPassword"
          /><a
            class="passwordShow"
            @click="showPassword()"
            :class="{ active: isActive }"
          ></a>
          <a class="copyPassword" @click="copyPassword()"></a>
        </div>
      </div>
      <div class="buttonGroup">
        <button :disabled="isNoneSelected" @click="deleteInfo()" class="generalDeleteButton">
          Delete
        </button>
        <button :disabled="isNoneSelected" class="generalButton" @click="clearInfo()">Clear</button>
        <button :disabled="isNoneSelected" class="generalButton" @click="updateInfo()">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import saveAccountInfoModel from "../../models/saveAccountInfoModel";
import userInfoService from "../../services/userInfoService";
import { mapState } from "vuex";

export default {
  name: "AllPasswords",
  data() {
    return {
      isNoneSelected: true,
      accounts: [],
      saveAccountInfoModel: new saveAccountInfoModel(),
      userService: new userInfoService(),
      type: "password",
      isActive: false,
    };
  },
  computed: {
    ...mapState(["searchText"]),
  },
  methods: {
    deleteInfo() {
      this.isNoneSelected = true;
      this.userService
        .deleteAccountInfo(this.saveAccountInfoModel.id)
        .then(() => {
          this.getAccounts();
          this.clearInfo();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clearInfo() {
      this.isNoneSelected = true;
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
      this.isNoneSelected = false;
      this.saveAccountInfoModel = new saveAccountInfoModel();
      this.saveAccountInfoModel.id = info.id;
      this.saveAccountInfoModel.savedUsername = info.savedUsername;
      this.saveAccountInfoModel.savedUrl = info.savedUrl;
      this.saveAccountInfoModel.savedPassword = info.savedPassword;
    },
    getAccounts() {
      this.userService
        .getAllPasswords("")
        .then((response) => {
          this.isNoneSelected = true;
          this.accounts = response.data ? response.data : [];
          this.accounts.forEach((x) => (x.selected = false));
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
    copyPassword() {
      this.userService
        .recentlyUsedPassword(this.saveAccountInfoModel.id)
        .then()
        .catch();
      if (!this.saveAccountInfoModel.savedPassword) {
        this.saveAccountInfoModel.savedPassword = "";
        return;
      }

      var textArea = document.createElement("textarea");
      textArea.value = this.saveAccountInfoModel.savedPassword;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      textArea.remove();
    },
  },
  mounted() {
    this.getAccounts();
  },
  watch: {
    searchText: function(newValue) {
      this.userService
        .getAllPasswords(newValue)
        .then((response) => {
          this.isNoneSelected = true;
          this.accounts = response.data ? response.data : [];
          this.accounts.forEach((x) => (x.selected = false));
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>