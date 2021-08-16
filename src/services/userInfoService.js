export default class UserInfoService {
    axios = require("axios");
    apiPath = "https://localhost:5001/api/";

    // #region UserInfoModel
    sendLoginRequest(model) {
        if (!model) {
            return;
        }

        var config = {
            method: "POST",
            url: `${this.apiPath}userinfo/login`,
            headers: {},
            data: model,
        };
        return this.axios(config);
    }

    sendSignupRequest(model) {
        if (!model) {
            return;
        }

        var config = {
            method: "POST",
            url: `${this.apiPath}userinfo/signup`,
            headers: {},
            data: model,
        };
        return this.axios(config);
    }

    updateUser(model) {
        if (!model) {
            return;
        }

        var config = {
            method: "PUT",
            url: `${this.apiPath}userinfo/${model.id}`,
            header: {},
            data: model
        };
        return this.axios(config);
    }

    deleteUser(userId) {
        if (!userId) {
            return;
        }

        var config = {
            method: "DELETE",
            url: `${this.apiPath}userinfo/${userId}`,
            header: {}
        };
        return this.axios(config);
    }
    // #endregion

    // #region SaveAccountInfo
    getAllPasswords(searchText) {
        if (!searchText) {
            searchText = "";
        }

        var config = {
            method: "GET",
            url: `${this.apiPath}SaveAccountInfo/allAccounts/${localStorage.getItem('tokenId')}/${searchText}`,
            headers: {}
        };
        return this.axios(config);
    }

    saveAccount(model) {
        if (!model) {
            return;
        }

        var config = {
            method: "POST",
            url: `${this.apiPath}SaveAccountInfo`,
            headers: {},
            data: model,
        };
        return this.axios(config);
    }

    updateAccountInfo(model) {
        if (!model) {
            return;
        }

        var config = {
            method: "PUT",
            url: `${this.apiPath}SaveAccountInfo/${model.id}`,
            headers: {},
            data: model,
        };
        return this.axios(config);
    }

    deleteAccountInfo(id) {
        if (!id) {
            return;
        }

        var config = {
            method: "DELETE",
            url: `${this.apiPath}SaveAccountInfo/${id}`,
            headers: {},
        };
        return this.axios(config);
    }
    // #endregion

    // #region RecentlyUsedPassword
    getRecentlyUsedPasswords(userId) {
        if (!userId) {
            return;
        }

        var config = {
            method: "GET",
            url: `${this.apiPath}SaveAccountInfo/recentlyUsedPasswords/${userId}`,
            headers: {},
        };
        return this.axios(config);
    }

    recentlyUsedPassword(recentlyUsedPasswordId) {
        if (!recentlyUsedPasswordId) {
            return;
        }

        var config = {
            method: "POST",
            url: `${this.apiPath}SaveAccountInfo/recentlyUsedPassword/${recentlyUsedPasswordId}`,
            headers: {},
        };
        return this.axios(config);
    }
    // #endregion

}