<template>
    <div class="profilePageMain">
       <div class="profilePageInfo" :class="{blurredProfilePage : isSaved}">
           <a class="profilePageIcon"/>
           <span class="userNameInfo">User Name</span>
           <input class="changeUserName" type="email" v-model="userName">
           <span class="emailInfo">E-mail</span>
           <input class="changeMail" type="email" v-model="mail">
           <span class="passwordInfo">Password</span>
           <input class="changePassword" type="password" v-model="password">
           <button class="cancelChangesButton" type="reset" @click="resetChanges()">Cancel</button>
           <button class="saveChangesButton" type="submit" @click="saveChanges()">Save</button>
       </div>
       <div class="savedPopup" v-show="isSaved">
           <button class="closePopupButton" @click="closePopup()"></button>
           <h4 class="savedHeader">Changes Have Been Saved Succesfully</h4>
           <div class="progressBar" :class="{saved: isDone}">
               <a class="progressBarIcon"/>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name: 'ProfilePage',
    data() {
        return {
            userName: "",
            mail: "",
            password: "",
            isSaved: false,
            isDone: false
        }
    },
    methods: {
        resetChanges() {
            this.userName = "";
            this.mail = "";
            this.password = "";
        },
        saveChanges() {
            this.isSaved = "true";
            setTimeout(() => {
                this.isDone = "true";
            }, 2000);
        },
        closePopup() {
            this.isSaved = !this.isSaved;
             this.isDone = !this.isDone;
        }
    }
}
</script>