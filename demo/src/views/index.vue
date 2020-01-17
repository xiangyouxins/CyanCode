<template>
    <div class="index">
        <van-nav-bar title="主页" />
        <van-swipe :autoplay="8000" indicator-color="white">
            <van-swipe-item>
                <div class="swiperItem" :style="{backgroundImage:`url(${banna1})`}"></div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="swiperItem" :style="{backgroundImage:`url(${banna2})`}"></div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="swiperItem" :style="{backgroundImage:`url(${banna3})`}"></div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import Tabbar from '../components/tabbar'
export default {
    components:{
        Tabbar
    },
    data() {
        return {
            name:'',
            banna1:require('../common/img/banna1.jpg'),
            banna2:require('../common/img/banna2.jpeg'),
            banna3:require('../common/img/banna3.jpg'),
        }
    },
    mounted() {
        this.name = this.$route.params.name
    }
}
</script>

<style scoped lang="less">
.index {
    .swiperItem{
        width: 100%;
        height: 20vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}
</style>