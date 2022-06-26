<template>
  <navbar></navbar>
  <!-- <div class="love-cont"> -->
  <!-- <love :loves="global_loves"></love> -->
  <!-- </div> -->

  <router-view/>
</template>

<script>
import navbar from './components/navbar.vue'
import love from './components/loves.vue'
import AOS from "aos";
export default {
  components:{
    navbar,
    love
  },
  mounted(){
      AOS.init();
  },
  computed:{
    global_loves(){
        return this.$store.state.loves
    }
  }
}
</script>

<style lang="scss">
</style>


