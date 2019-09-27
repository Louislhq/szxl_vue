<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
            :show-timeout="200"
            :default-active="$route.path"
            mode="vertical"
            background-color="#304156"
            text-color="#bfcbd9"
            active-text-color="#409EFF"
            @open="handleOpen"
            @close="handleClose"
        >
            <div v-for="(router, index) in permission_routers" :key="router.path">
                <div v-if="!router.hidden && router.children">
                    <el-submenu :index="index.toString()">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{router.meta.title}}</span>
                        </template>
                        <div v-for="(child, i ) in router.children" :key="child.path">
                            <router-link :to="child.path" :key="child.name">
                                <el-menu-item :index="index.toString()+'-'+i.toString()">{{child.meta.title}}</el-menu-item>
                            </router-link>
                        </div>
                    </el-submenu>
                </div>
            </div>
            <router-link :to="{path: '/permission/page'}">
                <span>测试</span>
            </router-link>
        </el-menu>
    </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'permission_routers'
        ])
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

<style scoped>
a {
    display: inline-block;
    height: 40px;
    color: rgb(191, 203, 217);
    font-size: 18px;
}
</style>
