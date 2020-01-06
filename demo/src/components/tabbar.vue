<template>
    <div class="tabbar">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item icon="search">item</van-tabbar-item>
            <van-tabbar-item icon="friends-o">item</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: ''
        }
    }
}
</script>

<style scoped lang="less">

</style>