<script setup lang='ts'>
import { ref } from 'vue';
import Overlay from './overlay.vue'
//是否需要注册
const isRegistry = ref<boolean>(false)
const getRegistry = () => {
    isRegistry.value = !isRegistry.value
    showVerify.value = true
}

//监听滑动验证模块是否取消
const showVerify = ref<boolean>(false)
const cancel = () => {
    showVerify.value = false
    console.log('已经监听到子组件的事件')
}


</script>
<template>
    <div class="container">
        <el-row align="middle" justify="center" class="top">
            <el-col :span="12">
                <el-row align="middle" justify="center">
                    <el-col :span="12">
                        <ElImage src="https://www.bazhuayu.com/images/bzy-logo.png" />
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="top form" align="middle" justify="center">
            <el-col :span="16">
                <el-form>
                    <el-form-item>
                        <el-input placeholder="请输入手机号/邮箱" />
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item v-if="isRegistry">
                        <el-input placeholder="请再次输入密码" />
                    </el-form-item>
                    <el-form-item v-if="isRegistry">
                        <el-col :span="16">
                            <el-input placeholder="请输入验证码" />
                        </el-col>
                        <el-col :span="4" :push="4">
                            <el-button disabled style="width:100%">1234</el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-col :span="12">
                            <el-radio>记住密码</el-radio>
                        </el-col>
                        <el-col :span="12" style="text-align:end">
                            <span style="cursor:pointer">忘记密码</span>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="width:100%;" type="primary">立即{{ isRegistry? '注册': '登录' }}</el-button>
                    </el-form-item>
                    <el-form-item>
                        <span class="flex" @click="getRegistry">{{ isRegistry? '已有账号立即登录': '没有账号立即注册' }}</span>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
    <Overlay v-if="showVerify" @cancel="cancel" />
</template>
<style scoped>
.container {
    width: 500px;
    height: 450px;
    padding: 10px 20px;
    border-radius: 10px;
    position: absolute;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, .12);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.top {
    margin-top: 20px;
}

.form {
    height: 100px;
    margin-top: 40px;
}

.flex {
    margin: 0 auto;
    cursor: pointer;
}
</style>