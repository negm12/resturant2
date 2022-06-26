<template>
    <div class="dishes">
        <!-- {{global_loves}} -->
        <div class="container">
            <div class="title1" data-aos="zoom-in-right">best dishes ...........</div>
            <div class="title2" data-aos="zoom-in-right">our Delicious dishes</div>
            <div class="dishes-cont">
                <div class="card" v-for="(dish , i) in dishes" :key="i"  data-aos="zoom-in-up" :data-aos-delay="i*100">
                    <div @click="update_loves(dish)" class="love"><i class="icon fa-solid fa-heart"></i></div>
                    <img :src="dish.image" alt="">
                    <h2>{{dish.food_name}}</h2>
                    <div class="desc">{{dish.descreption}}</div>
                    <div class="price">{{dish.price}} $</div>
                    <div class="order">
                        <input type="number" v-model="dish.amount">
                        <div class="btn" @click="update_car(dish)">add to card</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data(){
        return{
            dishes: [
                {
                    image: require('../assets/specials-1.png'),
                    food_name: "food 1",
                    descreption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident",
                    price: 20,
                    amount:0,
                },
                {
                    image: require('../assets/specials-2.png'),
                    food_name: "food 2",
                    descreption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident",
                    price: 10,
                    amount:0
                },
                {
                    image: require('../assets/specials-3.png'),
                    food_name: "food 3",
                    descreption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident",
                    price: 24,
                    amount:0
                },
                {
                    image: require('../assets/specials-4.png'),
                    food_name: "food 4",
                    descreption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident",
                    price: 22,
                    amount:0
                },
                {
                    image: require('../assets/specials-5.png'),
                    food_name: "food 5",
                    descreption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident",
                    price: 20,
                    amount:0
                },
                {
                    image: require('../assets/specials-1.png'),
                    food_name: "food 1",
                    descreption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident",
                    price: 5,
                    amount:0
                },
            ]
        }
    },
    methods: {
        update_loves(love){
            this.$store.commit('updateloves' , love)
        },
        update_car(car){
            if(car.amount>0){
                this.$store.commit('updatecar' , car)
            }
            
        }
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
    .dishes{
        background-color: #0c0b09;
        padding: 50px 0;
        .dishes-cont{
            display: grid;
            grid-template-columns: repeat(auto-fill , minmax(250px , 1fr));
            gap: 20px;
            padding-top: 50px;
            .card{
                // height: 300px;
                background-color: #1a1814;
                border-radius: 5px;
                color: #fff;
                position: relative;
                overflow: hidden;
                padding: 20px 10px;
                transition: all .3s ease-in-out;
                &:hover{
                    background-color: #0c0b09;
                    border: 2px solid var(--secondcolor);
                    .love{
                        top: 20px;
                    }
                }
                .love{
                    position: absolute;
                    top: -70px;
                    text-align: center;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: all .3s ease-in-out;
                    font-size: 30px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: #0c0b09;
                    display: grid;
                    place-items: center;
                    cursor: pointer;
                    color: var(--secondcolor);
                    .icon{
                        transition: all .3s ease-in-out;
                    }
                    &:hover{
                        .icon{
                            transform: rotate(360deg);
                        }
                        
                    }
                }
                img{
                    width: 100%;
                    max-height: 300px;
                }
                h2{
                    margin: 10px 0;
                    color: var(--secondcolor);
                    text-align: center;
                }
                .desc{
                    font-size: 15px;
                }
                .price{
                    margin: 10px 0;
                    padding: 10px;
                    background-color: var(--secondcolor);
                    text-align: center;
                    font-size: 22px;
                    border-radius: 5px;
                }
                .order{
                    display: flex;
                    justify-content: center;
                    input{
                        width: 100px;
                        margin-right: 10px;
                    }
                    .btn{
                        color: #fff;
                        background-color: var(--secondcolor);
                    }
                }
            }
        }
    }
</style>