<template>
  <nav>
    <router-link to="/">Home </router-link> 
    <router-link to="/first"> First method</router-link>
    <router-link to="/second">MapState method</router-link>
  </nav>
  <router-view/>
</template>

<script>

</script>

<style>
*{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
body{
  height: 100vh;
  width: 100%;
}
nav{
  height: 80px;
  width: 100%;
  background-color: #4d9b4d;
  display: flex;
  align-items: center;
  gap:5px;
}
a{
  text-decoration: none;
  color: #363636;
  font-size: 20px;
  background: white;
  padding: 5px;
  border-radius: 4px;
}
a:nth-child(1){
  margin-left: 5px;
}
button{
    padding:10px 20px;
    color: #363636;
}
</style>
