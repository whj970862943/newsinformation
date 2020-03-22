<template>
<div id="app">
    <transition>
        <keep-alive>
            <!-- v-cloak解决加载闪动 -->
            <router-view v-cloak></router-view>
        </keep-alive>
    </transition>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'app',
    mounted () {
        this.getUserInfo()
    },
    methods: {
        ...mapActions([ 'getUserInfo'])
    },
}
</script>

<style lang="less">
[v-cloak] {
    display: none;
}
</style>
