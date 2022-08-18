<template>
    <div class="container">
        <h1>Father State: {{$store.state.number}}</h1>
        <button @click="$store.commit('increment')">+</button>
        <button @click="$store.commit('decrement')">-</button><br>
        <h2>Name state: {{$store.state.name}}</h2>
        <input type="text" v-model="$store.state.name">
        <Son/>
    </div>
</template>

<script>
import Son from '../components/Son.vue'

export default{
    name:'Father',
    components:{
        Son,
    }
}
</script>

<style scoped>
    .container{
        background-color: #363636;
        padding: 40px 100px;
    }
    button{
        padding:10px 20px;
        color: #363636;
    }
    input{
        color: #363636;
        margin-bottom: 5px;
        outline: none;
    }
</style>
