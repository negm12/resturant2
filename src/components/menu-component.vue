<template>
    <div class="menu-wrapper">
        
        <div class="container">
            <div class="title1" data-aos="zoom-in-right"> MENU .................</div>
            <h3 class="title2" data-aos="zoom-in-right">Check Our Tasty Menu</h3>

            <div class="menu">
                <div class="links" data-aos="zoom-out-left">
                    <!-- {{g_loves}} -->
                    <ul>
                        <li>all</li>
                        <li>Starters</li>
                        <li>Salads</li>
                        <li>Specialty</li>
                        <li>sandwetch</li>
                    </ul>
                </div>

                <div class="foods">
                    <div class="food" data-aos="zoom-in-up" v-for="(food , index) in foods" :key="index">
                        <!-- <img src="../assets/caesar.jpg" alt=""> -->

                        <img :src="food.image" alt="">
                        <div class="info">
                            <div class="title-price">
                                <div class="title">{{food.title}} </div>
                                <div class="price"> {{food.price}}$</div>
                            </div>
                            <div class="text">{{food.content}}</div>
                        </div>
                        <div class="order">
                            <!-- <div class="add">+</div> -->
                            <input class="amount" type="number" v-model="food.amount">
                            <div class="add" @click="update_car(food)">add</div>
                            <!-- <div class="decrease">-</div> -->
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="special">
        <div class="container">
            <div class="title1" data-aos="zoom-in-right"> specials .................</div>
            <h3 class="title2" data-aos="zoom-in-right">Check Our Specials</h3>

            <div class="special-cont" data-aos="fade-up" data-aos-duration="1000">
                <div class="tabs-links">
                    <ul>
                        <li @click="active_tab = 1" :class="[active_tab === 1? 'active-tab':'']">Modi sit est</li>
                        <li @click="active_tab = 2" :class="[active_tab === 2? 'active-tab':'']">Unde praesentium sed</li>
                        <li @click="active_tab = 3" :class="[active_tab === 3? 'active-tab':'']">Pariatur explicabo vel</li>
                        <li @click="active_tab = 4" :class="[active_tab === 4? 'active-tab':'']">Nostrum qui quasi</li>
                        <li @click="active_tab = 5" :class="[active_tab === 5? 'active-tab':'']">Iusto ut expedita aut</li>
                    </ul>
                </div>
                <div class="tabs">
                    <div class="tab" v-for="tab in tabs" :key="tab.id" v-show="active_tab === tab.id">
                        <div class="descreption">
                            <div class="title">{{tab.title}}</div>
                            <div class="p1">{{tab.p1}}</div>
                            <div class="p2">{{tab.p2}}</div>

                        </div>
                        <div class="image">
                            <img :src="tab.image" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            foods:[
                {
                    "image": require("../assets/caesar.jpg"),
                    "title": "title1",
                    "price": 20,
                    "content": "negm",
                    "amount": 0
                },
                {
                    "image": require("../assets/about-bg.jpg"),
                    "title": "title2",
                    "price": 10,
                    "content": "nrgm",
                    "amount": 0
                },
                {
                    "image": require("../assets/caesar.jpg"),
                    "title": "title1",
                    "price": 20,
                    "content": "negm",
                    "amount": 0
                }
            ],
            active_tab: 1,
            tabs:[
                {
                    id: 1,
                    title: "Architecto ut aperiam autem id",
                    p1: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
                    p2: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
                    image: require("../assets/specials-1.png")
                },
                                {
                    id: 2,
                    title: "Et blanditiis nemo veritatis excepturi",
                    p1: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
                    p2: "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
                    image: require('../assets/specials-2.png')
                },
                                {
                    id: 3,
                    title: "Impedit facilis occaecati odio neque aperiam sit",
                    p1: "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
                    p2: "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
                    image: require('../assets/specials-3.png')
                },
                                {
                    id: 4,
                    title: "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
                    p1: "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
                    p2: "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
                    image: require('../assets/specials-4.png')
                },
                                {
                    id: 5,
                    title: "Est eveniet ipsam sindera pad rone matrelat sando reda",
                    p1: "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
                    p2: "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel",
                    image: require('../assets/specials-5.png')
                }
            ]
        }
    },
    methods: {
        update_car(car){
            if(car.amount>0){
                this.$store.commit('updatecar' , car)
            }
            
        }
    },

}
</script>

<style lang="scss" scoped>
    .menu-wrapper{
        width: 100%;
        padding: 150px 0 60px;
        background-color: #1a1814;
        min-height: 100vh;
        .container{
            height: 100%;
            .title1{
                color: rgb(143, 143, 143);
                margin-bottom: 10px;
            }
            .title2{
                font-size: 36px;
                font-weight: 700;
                font-family: "Playfair Display", serif;
                color: var(--secondcolor);
            }
            .menu{
                .links{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-top: 25px;
                    ul{
                        flex: .4;
                        display: flex;
                        justify-content: space-between;
                        @media (max-width:768px) {
                            &{
                                flex: .9;
                            }
                            
                        }
                        li{
                            color: #eee;
                            cursor: pointer;
                            text-transform: capitalize;
                            font-family: "Playfair Display", serif;

                        }
                    }
                }
                .foods{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding-top: 80px;
                    .food{
                        width: 48%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        color: #eee;
                        margin-bottom: 25px;
                        background-color: #0f0f0d;
                        padding: 10px;
                        border-radius: 10px;
                        @media (max-width:992px) {
                            &{
                                width: 100%;
                            }
                            
                        }
                        img{
                            width: 100px;
                            height: 100px;
                            border-radius: 50%;
                        }
                        .info{
                            flex: 1;
                            padding: 0 30px 0 10px;
                            .title-price{
                                display: flex;
                                // width: 200px;
                                justify-content: space-between;
                                margin-bottom: 20px;
                            }
                            .text{
                                font-size: 15px;
                            }
                        }
                        .order{
                            padding:0 10px;
                            .add,
                            .decrease{
                                padding: 5px;
                                // width: 30px;
                                display: grid;
                                place-items: center;
                                background-color: var(--secondcolor);
                                border-radius: 3px;
                                cursor: pointer;
                                margin: 5px auto;
                            }
                            .amount{
                                padding: 5px;
                                width: 100px;
                                text-align: center;
                                border-radius: 5px;
                                outline: none;
                            }
                        }

                    }
                }
            }
        }
    }
    .special{
        background-color: #0c0b09;
        width: 100%;
        padding: 70px 0;
        .special-cont{
            display: flex;
            padding: 40px 0;
            justify-content: space-between;
            flex-wrap: wrap;
            .tabs-links{
                width: 20%;
                color: #eee;
                border-right: 2px solid var(--secondcolor);
                @media (max-width:992px) {
                    &{
                        width: 100%;
                        border-right: none;
                        margin-bottom: 60px;
                    }
                    
                }
                ul{
                    width: 100%;
                    height: 100%;
                    li{
                        padding: 10px;
                        cursor: pointer;
                        transition: all .3s ease-in-out;
                        margin-bottom: 3px;
                        &.active-tab,
                        &:hover{
                            background-color: var(--secondcolor);
                            color: #333;
                        }
                    }
                }
            }
            .tabs{
                width: 75%;
                @media (max-width:992px) {
                    &{
                        width: 100%;
                    }
                    
                }
                .tab{
                    display: flex;
                    justify-content: space-between;
                    @media (max-width:992px) {
                        flex-direction: column-reverse;
                        
                    }
                    .descreption{
                        width: 70%;
                        @media (max-width:992px) {
                            width: 100%;
                            margin-top: 50px;
                        
                        }
                        .title{
                            font-size: 26px;
                            font-weight: 600;
                            margin-bottom: 20px;
                            color: #fff;
                        }
                        .p1{
                            font-style: italic;
                            color: #eee;
                            margin-bottom: 30px;
                        }
                        .p2{
                            color: #ddd;
                        }

                    }
                    .image{
                        width: 30%;
                        text-align: right;
                        @media (max-width:992px) {
                            width: 100%;
                            text-align: center;
                        }
                        img{
                            width: 200px;
                            height: 200px;
                            border-radius: 50%;
                            @media (max-width:992px) {
                                width: 80%;
                                height: 80%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>