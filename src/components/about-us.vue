<template>
    <div class="about">
        <div class="overlay"></div>
        <div class="container">
            <div class="info" data-aos="zoom-in">
                <h3 class="title">
                    Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                </h3>
                <p class="lead p1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div class="features">
                    <div class="feat">
                        <span><i class="fa-regular fa-circle-check"></i></span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>

                    <div class="feat">
                        <span><i class="fa-regular fa-circle-check"></i></span>
                        Duis aute irure dolor in reprehenderit in voluptate velit.
                    </div>

                    <div class="feat">
                        <span><i class="fa-regular fa-circle-check"></i></span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </div>
                </div>

                <p class="lead p2">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>

            </div>
            <div class="image" data-aos="zoom-in-up">
                <img src="../assets/about.jpg" alt="">
            </div>
        </div>

        <div class="why-us">
            <div class="container">
                <div class="title" data-aos="zoom-in-right">
                    <div class="title1">WHY US .......</div>
                    <h3 class="title2">Why Choose Our Restaurant</h3>
                </div>


                <div class="features">
                    <div class="card" data-aos="fade-up" data-aos-duration="1000" v-for="(feat, index) in feature" :key="index">
                        <div class="number">{{feat.number}}</div>
                        <div class="title">{{feat.title}}</div>
                        <p>{{feat.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // props:['feature'],
    data(){
        return{
            feature: [
                {
                    "number": "01",
                    "title": "Lorem Ipsum",
                    "content": "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
                },
                {
                    "number": "02",
                    "title": "Repellat Nihil",
                    "content": "Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest"
                },
                {
                    "number": "03",
                    "title": "Ad ad velit qui",
                    "content": "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis"
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    .about{
        width: 100%;
        height: auto;
        background-image: url('../assets/about-bg.jpg');
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        position: relative;
        padding: 70px 0 0;
        // height: 500px;
        .overlay{
            opacity: .6;
        }
        .container{
            position: relative;
            z-index: 110;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            color: #fff;
            @media (max-width:992px) {
                flex-direction: column-reverse; 
            }
            .info{
                width: 50%;
                @media (max-width:992px) {
                    width: 100%;
                }
                .title{
                    font-weight: 600;
                    font-size: 26px;
                    font-family: "Playfair Display", serif;
                }
                .p1{
                    font-style: italic !important ;
                    font-size: 15px;
                    margin-top: 10px;
                }
                .features{
                    margin-bottom: 10px;
                    .feat{
                        padding-bottom: 10px;
                        line-height: 1.8;
                        font-size: 14px;
                        span{
                            margin-right: 8px;
                            font-size: 20px;
                            color: var(--secondcolor);
                        }
                    }
                }
                .p2{
                    margin-top: 20px;
                    font-size: 16px;
                }
            }
            .image{
                width: 45%;
                height: 100%;
                position: relative;
                transition: all .4s linear;
                @media (max-width:992px) {
                    width: 100%;
                    margin-bottom: 20px;
                }
                &:hover{
                    transform: scale(1.09);
                    &::before{
                        left: 10px;
                        top: 10px;
                    }
                    &::after{
                        right: 10px;
                        bottom: 10px;
                    }
                }
                &::before{
                    position: absolute;
                    left: 20px;
                    top: 20px;
                    width: 60px;
                    height: 60px;
                    z-index: 110;
                    content: "";
                    border-left: 5px solid #cda45e;
                    border-top: 5px solid #cda45e;
                    transition: 0.5s;
                }
                &::after{
                    position: absolute;
                    right: 20px;
                    bottom: 20px;
                    width: 60px;
                    height: 60px;
                    z-index: 2;
                    content: "";
                    border-right: 5px solid #cda45e;
                    border-bottom: 5px solid #cda45e;
                    transition: 0.5s;
                }
                img{
                    width: 100%;
                    height: 100%;
                    border: 4px solid rgba(255, 255, 255, 0.2);
                    transition: all .3s ease-in-out;
                    // &:hover{
                    //     transform: scale(1.1);
                    //     .image{
                    //         &::before{
                    //             left: 5px;
                    //             top: 5px;
                    //         }
                    //         &::after{
                    //             right: 5px;
                    //             bottom: 5px;
                    //         }
                    //     }
                    // }
                }
            }
        }

        .why-us{
            width: 100%;
            background-color: #0c0b09;
            padding: 50px 0;
            .container{
                // width: 100%;
                display: block;
                .title{
                    .title1{
                        color: rgb(185, 185, 185);
                    }
                    .title2{
                        font-size: 36px;
                        font-weight: 700;
                        font-family: "Playfair Display", serif;
                        color: var(--secondcolor);
                        margin-top: 10px;
                    }
                }
                .features{
                    display: grid;
                    width: 100%;
                    gap: 20px;
                    grid-template-columns: repeat(auto-fill , minmax(300px , 1fr));
                    padding: 20px 0;
                    .card{
                        height: 300px;
                        background-color: #1a1814;
                        padding: 50px 20px;
                        text-align: center;
                        transition: all .6s ease-in-out;
                        .number{
                            color: var(--secondcolor);
                            font-size: 25px;
                            margin-bottom: 10px;
                        }
                        .title{
                            font-size: 25px;
                            margin-bottom: 15px;
                        }
                        p{
                            font-size: 15px;
                            color: rgb(156, 156, 156);
                        }
                        &:hover{
                            background-color: var(--secondcolor);
                            padding-top: 20px;
                            .number{
                                color: #fff;
                            }
                            p{
                                color: #fff;
                            }

                        }
                    }
                }
            }
        }
    }
</style>