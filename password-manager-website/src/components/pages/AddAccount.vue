<template>
    <div>
        <div class="addAccountMain">
        <div class="urlList">
            <span class="urlListSpan">URL:</span>
            <input class="urlListInput" type="url" v-model="urlList">
            <span class="urlName">Name:</span>
            <input class="urlNameInput" type="text" v-model="urlName">
        </div>
        <div class="loginInfoBox">
            <span class="userName">Username:</span>
            <input class="userNameInput" type="email" v-model="userName">
            <span class="password">Password:</span>
            <input class="passwordInput" :type="type" v-model="password">
            <a class="passwordShow" @click="showPassword()" :class="{active: isActive }"/>
        </div>
        <button class="clearButton" @click="clearInfo()">Clear</button>
        <button class="saveButton" @click="saveAccount()">Save</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddAccount',
    data() {
        return {
            urlList: "",
            urlName: "",
            userName: "",
            password: "",
            type: 'password',
            isActive: false
        }
    },
    methods: {
        clearInfo () {
            this.urlList = "";
            this.urlName = "";
            this.userName = "";
            this.password = "";
        },
        saveAccount () {
            this.$router.push({path: '/all-password'});
        },
        showPassword () {
            if(this.type == 'password') {
                this.type = 'text';
            }
            else {
                this.type = 'password';
            }
            return this.isActive = !this.isActive;
        }
    }
}
</script>