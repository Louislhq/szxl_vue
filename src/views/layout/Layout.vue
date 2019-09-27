<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container" />
       <div class="main-container">
        <section class="app-main">
            <transition name="fade-transform" mode="out-in">
                <router-view></router-view>
            </transition>
        </section>
       </div>
    </div>
</template>


<script>
import { Sidebar } from './components'

export default {
    name: 'Home',
    components: {
        Sidebar
    },
    computed: {
        key(){
            return this.$route.fullPath
        }
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
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 84px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
