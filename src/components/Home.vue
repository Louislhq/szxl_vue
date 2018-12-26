<template>
    <el-container class="lt-body">
        <Aside-left></Aside-left>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
import AsideLeft from './Aside'
export default {
    name: 'Home',
    components: {
        AsideLeft
    }
}
</script>

<style scoped>
.lt-body{
    height: 100%;
}
</style>
