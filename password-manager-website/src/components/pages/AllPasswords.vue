<template>
    <div >
        <ul class="demo" >
            <li v-for="value in object" :key="value.savedUsername"> 
                {{ value.savedUsername }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'AllPasswords',
    data() {
        return {
            object: []
        }
    },
    mounted () {
        var axios = require('axios');
        var data = '';
        var config = {
            method: 'get',
        url: 'https://192.168.0.28:5001/api/SaveAccountInfo',
        headers: { },
        data : data
        };
        axios(config).then((response) =>{
            console.log(response.data)
            response.data.forEach(element => {
                this.object.push(element);
                this.email = element.savedUsername;
                this.password = element.savedPassword;
                this.url = element.savedUrl;
                // console.log(this.object)
            });
        }).catch(function (error) {
            console.log(error);
        });
    }
}
</script>