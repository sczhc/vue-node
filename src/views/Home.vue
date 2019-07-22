<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
</div>
</template>

<script>
// import axios from 'axios';
export default {
    name: 'home',
    mounted() {
        // this.$axios.get('http://localhost:3000/api/message').then(res => {
        //     console.log(res.data)
        // })
        // this.$axios({
        //     method: 'post',
        //     url: "http://localhost:3000/api/query",
        //     data: 'v'
        // })
        // this.$apis.getMessage().then(res => {
        //     console.log(res.data)
        // }).catch(err => {
        //     console.log(err);
        // })
        let data = { data:'v' }
         this.$apis.search(data).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err);
        })
    }
}
</script>
