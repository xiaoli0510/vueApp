<template>
<div id="app">{{txt}}
   <router-view />
   <router-link to="/a">到a页面</router-link>
    <router-link to="/b">到b页面</router-link>
     <router-link to="/c">到c页面</router-link>
</div>
</template>
<script>
export default {
    name:'App',
    data(){
        return {
            txt:'这是App.vue'
        }
    }
}
</script>
<style>
div{
    color:red;
}
</style>
