<template>
    <div class="love">
        <div class="foods">
            <h2>the car .......</h2>
            <div class="header">
                <p>image</p>
                <p>name</p>
                <p>price/piece</p>
                <p>amount</p>
                <p>total</p>
            </div>
            <div @click="show_food(food)" class="food" v-for="(food,i) in car" :key="i">
                <div class="img">
                    <img :src="food.image" alt="">
                </div>
                <div class="food-name">{{food.food_name}}</div>
                <div class="price">{{food.price}}$</div>
                <div class="amount">{{food.amount}}</div>
                <div class="total">{{food.price*food.amount}} $</div>
            </div>
        </div>

        <div class="total-price">total price {{total_price}}</div>
    </div>
    
</template>

<script>
export default {
    props: ['car'],
    data(){
        return{
            show_order_food:0,
            order: false,
            total_price: 0,
            all_price: 0
        }
    },
    methods:{
        show_food(i){
            console.log(this.cars)
        },
        updatetotal(){
            this.$store.commit('updatetotal')
        }
    },
    updated(){
        this.$store.state.car.forEach(item => {
            this.total_price = 0
            this.total_price = this.total_price + (item.amount*item.price) 
        });
        // this.all_price += this.total_price
    }

}
</script>
<style lang="scss" scoped>
    ::-webkit-scrollbar {
        width: 0px;
    }
    .header{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        font-size: 14px;
    }
    .love{
        position: fixed;
        top: 0;
        right: 0;
        width: 450px;
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
                    width: 70px;
                    height: 70%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>