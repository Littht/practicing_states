<template>
    <Father/>
</template>

<script>
    import Father from '../components/Father.vue'

    export default{
        components:{
            Father,
        }
    }
</script>

<style scoped>
    body{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

</style>