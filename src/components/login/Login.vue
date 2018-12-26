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
import {loginIn} from '@/api/login'

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
    created(){
        // this.$axios.get('/users')
        // .then(res => {
        //     console.log(res.data.data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
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
                    let loginUrl = this.HOST + '/login';
                    loginIn(loginParams).then(res => {
                        console.log(res);
                    })
                    // api.login(loginParams).then(res => {
                    //     this.logining = false;
                    //     if (res.code == 0){
                    //         this.$message.success({
                    //             message: res.msg,
                    //             showClose: false
                    //         })
                    //         sessionStorage.setItem('userName', res.data.username)
                    //         sessionStorage.setItem('userToken', res.data.access_token)
                    //         this.$store.dispatch('setUser', res.data)
                    //         this.$store.dispatch('setToken', res.data.access_token)
                    //         this.$router.push({path:'/home'})
                    //     }
                    // }).catch(err => {
                    //     console.log(err);
                    // })
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
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
}
</style>
