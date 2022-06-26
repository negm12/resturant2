<template>
  <div class="home">
    <headerarea></headerarea>
    <dishes></dishes>
    <about :feature="feature"></about>
  </div>
</template>

<script>
import headerarea from '../components/header-area.vue'
import dishes from '../components/dishes.vue'
import about from '../components/about-us.vue'

export default {
  components:{
    headerarea,about,dishes
  },
  name: 'HomeView',
  data(){
    return{
      feature: []
    }

  },
  async mounted(){
    // const res = await fetch('http://localhost:3000/whyus')
    // const data = await res.json()
    // this.feature = data
    // this.feature = await (await fetch('http://localhost:3000/whyus')).json()
    // this.feature = await (await fetch('../json/db.json')).json
  }
}
</script>
