<template>
    <!-- <transition name="fade-transform" mode="out-in"> -->
    <keep-alive :include="include">
      <router-view />
    </keep-alive>
    <!-- </transition> -->
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'AppMain',
  setup() {
    const store = useStore()
    const include = computed(() => store.state.permission.include)
    return {
      include
    }
  }
})
</script>

<style lang="scss" scoped>
// @import "~@/assets/css/variables.scss";

// .app-main {
//   width: 100%;
//   position: relative;
//   overflow: auto;
//   background: #EDEFF3;

//}
</style>

