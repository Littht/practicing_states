<template>
    <div class="container_son">
        <h1>Son State: {{$store.state.number}}</h1>
        <button @click="$store.commit('increment')">+</button>
        <button @click="$store.commit('decrement')">-</button>
        <h2>Name state: {{$store.state.name}}</h2>
        <input type="text" v-model="$store.state.name">
    </div>
</template>

<script>
export default{
    name:'Son',

}
</script>

<style scoped>
    .container_son{
        background-color: #4d9b4d;
        padding: 20px;
    }
    button{
        padding:10px 20px;
        color: #363636;
    }
        input{
        color: #363636;
        outline: none;
    }
</style>