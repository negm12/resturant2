<template>
    <div class="menu">
        <menucomp></menucomp>

    </div>
</template>

<script>
import menucomp from '../components/menu-component.vue'
export default {
    components:{
        menucomp
    },
    data(){
        return{
            foods: [],
            foods_images:[],
            food_iamge: null
        }

    },
    mounted(){
        // fetch('http://localhost:3000/foods')
        // .then(res => res.json())
        // .then(data => this.foods = data)
        // .catch(err => {})

    },

}
</script>

<style lang="scss" scoped>
    .menu{
        width: 100%;
        overflow: hidden;
    }
</style>