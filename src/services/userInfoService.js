export default class UserInfoService {
    axios = require("axios");
    apiPath = "https://localhost:5001/api/";

// #region UserInfoModel
    sendLoginRequest(model) {
        var config = {
            method: "POST",
            url: `${this.apiPath}userinfo/login`,
            headers: {},
            data: model,
        };
        return this.axios(config);
    }

    sendSignupRequest(model) {
        var config = {
            method: "POST",
            url: `${this.apiPath}userinfo/signup`,
            headers: {},
            data: model,
        };
        return this.axios(config);
    }

    updateUser(model) {
        var config = {
            method: "PUT",
            url: `${this.apiPath}userinfo/${model.id}`,
            header: {},
            data: model
        };
        return this.axios(config);
    }

    deleteUser(userId) {
        var config = {
            method: "DELETE",
            url: `${this.apiPath}userinfo/${userId}`,
            header: {}
        };
        return this.axios(config);
    }
// #endregion

// #region SaveAccountInfo
    getAllPasswords(userName) {
        var config = {
            method: "GET",
            url: `${this.apiPath}SaveAccountInfo/allAccounts/${localStorage.getItem('tokenId')}`,
            headers: {},
            data: userName
        };
        return this.axios(config);
    }

    saveAccount(model) {
        var config = {
            method: "POST",
            url: `${this.apiPath}SaveAccountInfo`,
            headers: {},
            data: model,
        };
        return this.axios(config);
    }

    updateAccountInfo(model) {
        var config = {
            method: "PUT",
            url: `${this.apiPath}SaveAccountInfo/${model.id}`,
            headers: {},
            data: model,
        };
        return this.axios(config);
    }
// #endregion
}