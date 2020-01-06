<template>
    <div class="index">
        <van-nav-bar title="主页" />
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <div class="swiperItem"></div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="swiperItem"></div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="swiperItem"></div>
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
            name:''
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
        height: 17vh;
        background: #23a6d5 ;
        background: -webkit-linear-gradient(top left, #23a6d5 0%, #23d5ab 100%);
        background: -moz-linear-gradient(top left, #23a6d5 0%, #23d5ab 100%);
        background: -o-linear-gradient(top left, #23a6d5 0%, #23d5ab 100%);
        background: linear-gradient(to bottom right, #23a6d5 0%, #23d5ab 100%);
    }
}
</style>