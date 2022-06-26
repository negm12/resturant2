<template>
    <div class="love">
        
        <div class="foods">
            <h2>the loves .......</h2>
            <div @click="show_food(food)" class="food" v-for="(food,i) in loves" :key="i">
                <div class="img">
                    <img :src="food.image" alt="">
                </div>
                <div class="food-name">{{food.food_name}}</div>
                <div class="price">{{food.price}}$</div>
            </div>
        </div>
    </div>
    <div class="order-food" v-if="order">
        <div class="overlay"></div>
        <div class="food">
            <div class="close" @click="order=!order">X</div>
            <img :src="loves[show_order_food].image" alt="">
            <h2>{{loves[show_order_food].food_name}}</h2>
            <div class="desc">{{loves[show_order_food].descreption}}</div>
            <div class="price">{{loves[show_order_food].price}} $</div>
            <div class="order">
                <input type="number">
                <div class="btn">add to card</div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['loves'],
    data(){
        return{
            show_order_food:0,
            order: false
        }
    },
    methods:{
        show_food(i){
            this.show_order_food = this.loves.indexOf(i)
            this.order = !this.order

        }
    }

}
</script>
<style lang="scss" scoped>
    ::-webkit-scrollbar {
        width: 0px;
    }
    .order-food{
        width: 100%;
        height: 100%;
        z-index: 210;
        position: fixed;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;

        .food{
            width: 400px;
            background-color: #1a1918;
            position: relative;
            z-index: 220 !important;
            border-radius: 10px;
            color: #fff;
            padding: 15px;
            text-align: center;
            overflow: hidden;
            .close{
                position: absolute;
                top: -90px;
                right: 50%;
                transform: translateX(50%);
                width: 55px;
                height: 55px;
                background-color: crimson;
                display: grid;
                place-items: center;
                border-radius: 50%;
                cursor: pointer;
                font-size: 25px;
                transition: all .3s ease-in-out;
            }
            &:hover{
                .close{
                    top: 10px;
                }
            }
            img{
                width: 80%;
                max-height: 200px;
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
    .love{
        position: fixed;
        top: 0;
        right: 0;
        width: 400px;
        height: 100vh;
        background-color: #272623;
        z-index: 200;
        color: #fff;
        padding: 20px;
        overflow-y: scroll;
        .foods{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 100px;
            .food{
                width: 100%;
                height: 100px;
                background-color: #1a1918;
                border-radius: 5px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom:10px ;
                padding: 10px;
                cursor: pointer;
                .order-food{
                    width: 100%;
                    height: 400px;
                    background-color: #fff;
                }
                .img{
                    width: 100px;
                    height: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>