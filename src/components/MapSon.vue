<template>

<div class="container_son">
    <h2>Number state:{{number}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button><br>
    <h2>Name state: {{name}}</h2>
    <input type="text" v-model="name">
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default{
    name:'MapSon',
    data(){
        return{
        }
    },
    computed:{
        ...mapState(["number","name"])
    },
    methods:{
        ...mapMutations(["increment", "decrement","text"])
    }

}
</script>

<style scoped>
    .container_son{
        background-color: #4d9b4d;
        padding: 20px;
    }
</style>