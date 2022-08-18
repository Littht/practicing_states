<template>
    <div class="container">
        <h1>Number state:{{number}}</h1>
        <button @click="increment">+</button>
        <button @click="decrement">-</button><br>
        <h2>Name state: {{name}}</h2>
        <input type="text" v-model="name">
        <MapSon/>
    </div>
</template>

<script>
import MapSon from './MapSon.vue'
import { mapState, mapMutations } from 'vuex';

    export default{
        name:'MapFather',
        components:{
            MapSon
        },
        data(){
            return{

            }
        },
        computed:{
            ...mapState(["number","name"])
        },
        methods:{
            ...mapMutations(["increment", "decrement"])
        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
        padding: 20px;
        background-color: #363636;

    }
</style>