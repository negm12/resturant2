<template>
    <div class="phones" v-if="!nav_top">
        <div class="container">
            <div class="phone"><i class="fa-solid fa-phone-flip"></i> 01276107348</div>
            <a href="mailto:negmm7588@gmail.com"><i class="fa-solid fa-envelope"></i> negmm7588@gmail.com</a>
        </div>
    </div>
    <div class="nav-bar" :class="[nav_top? 'nav-top':'']">
        <router-link class="logo" to="/">Restaurantly</router-link>
        <div class="links" :class="[!mobile_nav? 'toggle-mobile-nav':'']">
            <ul>
                <router-link @click="[active_link = 'home']"
                    :class="[active_link === 'home' ?'active-link':'']" to="/">home</router-link>
                <router-link @click="[active_link = 'dishes']"
                    :class="[active_link === 'dishes' ?'active-link':'']" to="/">dishes</router-link>
                <router-link @click="[active_link = 'about']"
                    :class="[active_link === 'about' ?'active-link':'']" to="/">about us</router-link>
                <router-link @click="[active_link = 'menu']"
                    :class="[active_link === 'menu' ?'active-link':'']" :to="{name:'menu'}">menu</router-link>
                <router-link @click="[active_link = 'preview']"
                    :class="[active_link === 'preview' ?'active-link':'']" to="/"> preview</router-link>
                <router-link @click="[active_link = 'gallary']"
                    :class="[active_link === 'gallarycontact' ?'active-link':'']" to="/">gallary</router-link>
                <router-link @click="[active_link = 'contact']"
                :class="[active_link === 'contact' ?'active-link':'']" to="/">contact</router-link>
            </ul>
        </div>
        <div class="icons">
            <div v-if="show_menu" @click="mobile_nav = !mobile_nav" class="icon">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="icon">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="icon" @click="show_loves = !show_loves;show_car = 0">
                <i class="fa-solid fa-heart"></i>
            </div>
            <div class="icon" @click="show_car = !show_car;show_loves = 0">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="icon">
                <i class="fa-solid fa-user"></i>
            </div>
        </div>
    </div>
    <lovecom v-if="show_loves" :loves="global_loves"></lovecom>
    <carcom v-if="show_car" :car="global_car"></carcom>
    
</template>

<script>
import lovecom from '../components/loves.vue'
import carcom from '../components/car.vue'
export default {
    components:{
        lovecom,carcom
    },
    data(){
        return{
            window_width:null,
            show_menu: null,
            mobile_nav: false,
            window_heght: null,
            nav_top:null,
            active_link:'home',
            show_loves: 0,
            show_car: 0
        }
    },
    methods:{
        check_window_width(){
            this.window_width = window.innerWidth;
            if(this.window_width <= 768){
                this.show_menu = true
                this.mobile_nav = false
            }else{
                this.show_menu = false
            }
        },
        check_window_heght(){
            this.window_heght = window.scrollY
            if(this.window_heght >= 100){
                this.nav_top = true
            }else{
                this.nav_top = false
            }
            // console.log(this.nav_top,this.window_heght)
        }

    },
    created(){
        window.addEventListener('resize' , this.check_window_width)
        this.check_window_width()

        document.addEventListener('scroll' , this.check_window_heght)
        this.check_window_heght
        
    },
    computed:{
        global_loves(){
            return this.$store.state.loves
        },
        global_car(){
            return this.$store.state.car
        }
    }

}
</script>

<style lang="scss" scoped>
    .phones{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        transition: all .6s ease-in-out;
        padding: 10px 0;
        z-index: 210;
        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--secondcolor);
            a{
                color: var(--secondcolor);
            }
        }
    }
    .nav-bar{
        width: 100%;
        height: 60px;
        background-color: rgba(12, 11, 9, 0.6);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        position: fixed;
        top: 50px;
        left: 0;
        transition: all .4s ease-in-out; 
        z-index: 210;
        &.nav-top{
            top: 0;
        }
        .logo{
            font-size: 23px;
            text-transform: capitalize;
            font-weight: 400;
            color: var(--secondcolor);
        }
        .links{
            flex: .6;
            font-size: 14px;
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                a{
                    color: var(--color);
                    transition: all .3s ease-in-out;
                    padding: 10px;
                    border-radius: 5px;
                    color: #fff;
                    &.active-link,
                    &:hover{
                        color: #fff;
                        background-color: var(--secondcolor);

                    }
                }
            }
            @media (max-width:992px) {
                flex: .8;
                font-size: 11px;
            }

            @media (max-width:768px) {
                &{
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 250px;
                    height: 100vh;
                    background-color: var(--maincolor);
                    transition: all .5s ease-in-out;
                    padding: 10px 20px;
                    &.toggle-mobile-nav{
                        left: -250px;
                    }
                    ul{
                        flex-direction: column;
                        height: auto;
                        width: 100%;
                        margin-top: 50px;
                        a{
                            display: block;
                            width: 100%;
                            text-align: center;
                            font-size: 18px;
                            transition: all .3s ease-in-out;
                            margin-bottom: 5px;
                        }
                        a.active-link,
                        a:hover{
                            background-color: #fff;
                            color: var(--maincolor);

                        }
                    }
                    
                }
                
            }

        }
        .icons{
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            .icon{
                width: 45px;
                height: 45px;
                border-radius: 50%;
                background-color: #eee;
                margin-left: 8px;
                display: grid;
                place-items: center;
                cursor: pointer;
                transition: all .3s ease-in-out;
                color: var(--secondcolor);
                &:hover{
                    background-color: var(--secondcolor);
                    color: #fff;
                    transform: rotate(360deg);
                }
            }
        }
    }
</style>