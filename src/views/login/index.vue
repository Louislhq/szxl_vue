<template>
    <el-form :model="account" :rules="rules" ref="accountForm" label-width="100px" class="login">
        <h3>登陆</h3>
        <el-form-item label="用户名" prop="name">
            <el-input v-model="account.name" type="text" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="account.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('accountForm')" :loading="logining">立即登陆</el-button>
            <el-button @click="resetForm('accountForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import md5 from 'js-md5'
import { getToken, setToken, removeToken } from '@/utils/auth'

export default {
    name:'login',
    data(){
        return{
            account: {
                name:'',
                password:''
            },
            rules:{
                name: [
                    {required: true, message: '请输入用户名', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'}
                ]
            },
            logining: false
        }
    },
    watch: {
        // $route: {
        //     handler: function(route) {
        //         console.log(route);
        //     }
        // }
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.logining = true;
                    let loginParams = {
                        username: this.account.name,
                        password: md5(this.account.password)
                    };
                    this.$store.dispatch('LoginByUsername', loginParams).then(() => {
                        this.logining = false
                        this.$router.push({path: '/home'})
                    }).catch(err => {
                        console.log(err)
                    })
                }else {
                    console.log('error submit');
                    return false;
                }
            })
        },
        resetForm(formName){
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style scoped>
.login{
    width: 500px;
    margin: 200px auto 0;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
}
</style>
