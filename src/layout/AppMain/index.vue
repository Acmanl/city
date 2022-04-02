<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <keep-alive :include="include">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
// import { useStore } from 'vuex'
export default defineComponent({
  name: 'AppMain',
  setup() {
    // const store = useStore()
    // const include = computed(() => store.state.permission.include)
    const include = computed(() => [])
    return {
      include
    }
  }
})
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
}
</style>

