<template>
    <el-form :model="account" ref="accountForm" label-width="100px">
        <h3>登陆</h3>
        <el-form-item label="用户名" prop="name">
            <el-input v-model="account.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="account.password"></el-input>
            <p>{{account.password}}</p>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('accountForm')">立即登陆</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            account: {
                name:'',
                password:''
            }
        }
    },
    methods:{
        submitForm(formName){
            console.log(this.$refs[formName])
        }
    }
}
</script>

<style scoped>

</style>
