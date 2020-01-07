<template>
    <div id="login">
        <div class="proname" ref="proname">Demo Pro</div>
        <!-- <div class="prohead">
      <van-icon name="shop" />
        </div>-->
        <!-- <div class="proform">
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入用户名" :error-message="namemsg" clearable label="用户名" />
        <van-field v-model="password" placeholder="请输入密码" :error-message="passmsg" type="password" label="密码" />
      </van-cell-group>
        </div>-->
        <div class="inp">
            <input type="text" v-model="value" placeholder="用户名" />
            <input type="password" v-model="password" placeholder="密码" />
        </div>
        <div class="tips"></div>
        <div class="btn">
            <div class="btnbox">
                <van-button @click="showregist" block>注册</van-button>
            </div>
            <div class="btnbox">
                <van-button @click="tologin" block :loading="isLoading" loading-text="登录">登录</van-button>
            </div>
        </div>
        <van-dialog
            v-model="regist"
            title="注册"
            show-cancel-button
        >
            <div class="inp">
                <input type="text" v-model="registObj.value" placeholder="用户名" />
                <input type="password" v-model="registObj.password1" placeholder="密码" />
                <input type="password" v-model="registObj.password2" placeholder="确认密码" />
            </div>
        </van-dialog>
        <ul class="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
import { login } from "api/login";
import { Toast } from "vant";
import md5 from 'js-md5';
export default {
    data() {
        return {
            value: "",
            password: "",
            color: "",
            isLoading: false,
            namemsg: "",
            passmsg: "",
            regist:false,
            registObj: {
                value: '',
                password1: '',
                password2: '    '
            }
        };
    },
    mounted() {
        // setTimeout(() => {
        //   this.$refs.proname.style.color = "#777";
        // }, 1000);
    },
    methods: {
        tologin() {
            if (this.value == "") {
                Toast("请输入用户名");
                return;
            }
            if (this.password == "") {
                Toast("请输入密码");
                return;
            }
            if(this.value)
            this.isLoading = true;
            login(this.value, md5(this.password)).then((res) => {
                this.isLoading = false;
                if (res.code == 200) {
                    Toast(res.msg);
                    this.$router.push(
                        {
                            name: "index",
                            params: { name: this.value }
                        },
                    );
                } else {
                    Toast(res.msg);
                }
            })
        },
        showregist(){
            this.regist = true
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#login {
    position: relative;
    height: 100vh;
    overflow: hidden;
    // background-color: cadetblue;
    background-color: #f7f8fa;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    background: #23a6d5;
    background: -webkit-linear-gradient(top left, #23a6d5 0%, #23d5ab 100%);
    background: -moz-linear-gradient(top left, #23a6d5 0%, #23d5ab 100%);
    background: -o-linear-gradient(top left, #23a6d5 0%, #23d5ab 100%);
    background: linear-gradient(to bottom right, #23a6d5 0%, #23d5ab 100%);

    .proname {
        // color: deepskyblue;
        color: #fff;
        // text-shadow: 2px 1px 0rem hotpink;
        padding: 0.7rem 0 0.3rem 0;
        // font-weight: bold;
        font-family: fantasy;
        font-size: 0.2rem;
        text-align: center;
        // transition: all .7s;
        // animation: fontcolor 70s linear infinite;
        position: relative;
        z-index: 99;
    }
    .inp{
        box-sizing: border-box;
        padding: 0.1rem;
        position: relative;
        z-index: 99;
        input {
            display: block;
            box-sizing: border-box;
            width: 100%;
            margin-bottom: 10px;
            background: rgba(0, 0, 0, 0.1);
            border: none;
            outline: none;
            padding: 10px;
            font-size: 0.17rem;
            color: #fff;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.1),
                0 1px 1px rgba(255, 255, 255, 0.1);
            -webkit-transition: box-shadow 0.5s ease;
            -moz-transition: box-shadow 0.5s ease;
            -o-transition: box-shadow 0.5s ease;
            -ms-transition: box-shadow 0.5s ease;
            transition: box-shadow 0.5s ease;
        }
        input::-webkit-input-placeholder {
            /* WebKit browsers */
            color: #d2e5e6;
        }

        input::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #d2e5e6;
        }

        input:-ms-input-placeholder {
            /* Internet Explorer 10+ */
            color: #d2e5e6;
        }
    }
    .btn {
        box-sizing: border-box;
        padding: 0.1rem;
        position: relative;
        z-index: 99;
        display: flex;
        justify-content: space-between;
        .btnbox{
            width: 50%;
            &:nth-child(1){
                padding-right: 0.1rem;
            }
            &:nth-child(2){
                padding-left: 0.1rem;
            }
        }
        .van-button__text {
            color: #00bfc3;
            font-weight: bold;
        }
        .van-loading__spinner {
            color: #00bfc3;
        }
    }
    .van-dialog{
        input {
            display: block;
            box-sizing: border-box;
            width: 100%;
            margin-bottom: 10px;
            background: rgba(217, 255, 255, 0.1);
            border: none;
            outline: none;
            padding: 10px;
            font-size: 0.17rem;
            color: #303133;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.1),
                0 1px 1px rgba(255, 255, 255, 0.1);
            -webkit-transition: box-shadow 0.5s ease;
            -moz-transition: box-shadow 0.5s ease;
            -o-transition: box-shadow 0.5s ease;
            -ms-transition: box-shadow 0.5s ease;
            transition: box-shadow 0.5s ease;
        }
        input::-webkit-input-placeholder {
            /* WebKit browsers */
            color: #909399;
        }

        input::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #909399;
        }

        input:-ms-input-placeholder {
            /* Internet Explorer 10+ */
            color: #909399;
        }
    }
    .bg-bubbles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        z-index: 1;

        li {
            position: absolute;
            list-style: none;
            display: block;
            width: 40px;
            height: 40px;
            background-color: fade(white, 15%);
            bottom: -160px;

            -webkit-animation: square 37s infinite;
            animation: square 37s infinite;

            -webkit-transition-timing-function: linear;
            transition-timing-function: linear;

            &:nth-child(1) {
                left: 10%;
            }

            &:nth-child(2) {
                left: 20%;

                width: 80px;
                height: 80px;

                animation-delay: 2s;
                animation-duration: 17s;
            }

            &:nth-child(3) {
                left: 25%;
                animation-delay: 4s;
            }

            &:nth-child(4) {
                left: 40%;
                width: 60px;
                height: 60px;

                animation-duration: 22s;

                background-color: fade(white, 25%);
            }

            &:nth-child(5) {
                left: 70%;
            }

            &:nth-child(6) {
                left: 80%;
                width: 120px;
                height: 120px;

                animation-delay: 3s;
                background-color: fade(white, 20%);
            }

            &:nth-child(7) {
                left: 32%;
                width: 160px;
                height: 160px;

                animation-delay: 7s;
            }

            &:nth-child(8) {
                left: 55%;
                width: 20px;
                height: 20px;

                animation-delay: 15s;
                animation-duration: 40s;
            }

            &:nth-child(9) {
                left: 25%;
                width: 10px;
                height: 10px;

                animation-delay: 2s;
                animation-duration: 40s;
                background-color: fade(white, 30%);
            }

            &:nth-child(10) {
                left: 90%;
                width: 160px;
                height: 160px;

                animation-delay: 11s;
            }
        }
    }

    @-webkit-keyframes square {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-150vh) rotate(600deg);
        }
    }
    @keyframes square {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-150vh) rotate(600deg);
        }
    }
    @keyframes fontcolor {
        0% {
            color: deepskyblue;
            text-shadow: 2px 1px 0rem hotpink;
        }
        25% {
            color: hotpink;
            text-shadow: 2px 1px 0rem lightgreen;
        }
        50% {
            color: lightgreen;
            text-shadow: 2px 1px 0rem steelblue;
        }
        75% {
            color: steelblue;
            text-shadow: 2px 1px 0rem peru;
        }
        100% {
            color: peru;
            text-shadow: 2px 1px 0rem deepskyblue;
        }
    }
}
</style>
