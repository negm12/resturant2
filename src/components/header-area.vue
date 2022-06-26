<template>


    <div class="header-area">
        <div class="overlay"></div>
        <div class="container" data-aos="zoom-in" data-aos-offset="200">
            <div class="intro">
                <h1 class="title">
                    Welcome to <span>Restaurantly</span> 
                </h1>
                <h2 class="text">
                    Delivering great food for more than 18 years!
                </h2>
                <div class="btns">
                    <div class="btn">our menu</div>
                    <div class="btn">book a table</div>
                </div>
            </div>
            <div class="video-icon">
                <div class="icon-cont1">
                    <div class="icon-cont2">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            </div>


            <!--                 
            <div class="video">
                <video src="https://www.youtube.com/watch?v=u6BOC7CDUTQ"></video>
            </div> -->
        </div>


    </div>
</template>


<script>
import AOS from "aos";
export default {
    mounted(){
        AOS.init();
    }

}
</script>

<style lang="scss" scoped>
    .header-area{
        background-image: url('../assets/hero-bg.jpg');
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        width: 100%;
        height: 100vh;
        position: relative;
        .container{
            position: relative;
            z-index: 110;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            height: 100%;
            .intro{
                .title{
                    font-size: 48px;
                    font-weight: 700;
                    line-height: 56px;
                    color: #fff;
                    font-family: "Poppins", sans-serif;
                    span{
                        color: var(--secondcolor);
                    }
                }
                .text{
                        font-size: 22px;
                        color: #fff;
                }
                .btns{
                    display: flex;
                    margin-top: 15px;
                    .btn{
                        border: 2px solid var(--secondcolor);
                        border-radius: 100px;
                        color: #fff;
                        transition: all .3s ease-in-out;
                        &:hover{
                            background-color: var(--secondcolor);
                        }
                        &:nth-of-type(2){
                            margin-left: 30px;
                        }
                    }
                }
                @media (max-width:800px) {
                    &{
                        width: 100%;
                    }
                    
                }
            }
            .video-icon{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-color: rgb(255, 217, 146);
                cursor: pointer;
                display: grid;
                place-items: center;
                color: #fff;
                font-size: 22px;
                .icon-cont1{
                    width: 63px;
                    height: 63px;
                    border-radius: 50%;
                    background-color: rgb(255, 217, 146);
                    display: grid;
                    place-items: center;
                    border: 2px solid rgb(255, 195, 85);
                    animation: video 1s linear  infinite .7s;
                    @keyframes video {
                        from{ width: 63px; height: 63px; }
                        to{ width: 100%; height: 100%;} 
                    }
                    .icon-cont2{
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        background-color: rgb(255, 195, 85);
                        display: grid;
                        place-items: center;
                        transition: all .4s ease-in-out;
                    }
                } 
                &:hover{
                    .icon-cont{
                        .icon{
                            font-size: 100px;
                        }
                    }
                }
                &:hover{
                    .icon-cont1{
                        .icon-cont2{
                            transform: scale(1.7);
                        }
                    }
                }
            }
        }
    }
</style>