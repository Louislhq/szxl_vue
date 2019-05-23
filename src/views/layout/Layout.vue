<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container" />
    </div>
</template>


<script>
import { Sidebar } from './components'

export default {
    name: 'Home',
    components: {
        Sidebar
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.app-wrapper{
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    
}
</style>
