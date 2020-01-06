<template>
  <div class="my">
      <van-nav-bar title="我的" right-text="退出" @click-right="onClickRight" />
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        onClickRight() {
            Dialog.confirm({
                title: '确定',
                message: '是否确定退出登录'
            }).then(() => {
                this.$router.push({name: 'login'})
            }).catch(() => {

            });
        }
    }
}
</script>

<style scoped lang="less">
.my {

}
</style>