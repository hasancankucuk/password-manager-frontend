export default class UserInfoService {
    axios = require("axios");
    apiPath = "https://localhost:5001/api/";
    sendLoginRequest(model) {
        var config = {
            method: "POST",
            url: "https://localhost:5001/api/userinfo/login",
            headers: {},
            data: model,
        };
        return this.axios(config);
    }

    sendSignupRequest(model) {
        var config = {
            method: "POST",
            url: "https://localhost:5001/api/userinfo/signup",
            headers: {},
            data: model,
        };
        return this.axios(config);
    }

    getAllPasswords(userName) {
        var config = {
            method: "GET",
            url: "https://localhost:5001/api/SaveAccountInfo",
            headers: {},
            data: userName
        };
        return this.axios(config);
    }

    saveAccount(model) {
        var config = {
            method: "POST",
            url: "https://localhost:5001/api/SaveAccountInfo",
            headers: {},
            data: model,
        };
        return this.axios(config);
    }

    updateAccountInfo(model) {
        var config = {
            method: "PUT",
            url: `https://localhost:5001/api/SaveAccountInfo/${model.id}`,
            headers: {},
            data: model,
        };
        return this.axios(config);
    }
}