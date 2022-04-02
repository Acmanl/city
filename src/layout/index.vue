<template>
  <a-layout class="app__wrapper">
    <Topbar></Topbar>
    <a-layout>
      <Sidebar></Sidebar>
      <a-layout >
        <a-layout-content
          class="main-container"
        >
          <AppMain></AppMain>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Topbar from './Topbar/index.vue'
import Sidebar from './Sidebar/index.vue'
import AppMain from './AppMain/index.vue'
export default defineComponent({
  components: {
    Topbar,
    Sidebar,
    AppMain
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(['sub1'])
    }
  }
})
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.app__wrapper{
  @include clearfix;
  position: relative;
  height: $appWrapperHeight;
  width: 100%;
}
.main-container{
  min-height: 280px;

}
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
