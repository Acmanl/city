<template>
    <a-layout-header class="top__bar">
      <div class="top__bar__title" >
        水资源综合管理系统
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
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
.top__bar{
  background: #1890ff;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 72px;
    padding: 0 20px;
  &__title{
    font-size: 38px;
    font-weight: bold;
    color: #fff;
  }
  .ant-menu{
    background: transparent;
    height: 100%;
  }
  .ant-menu-horizontal{
    border: none;
  }
  /deep/.ant-menu-item-selected{
    background: rgba($color: #fff, $alpha: 0.2);
    &::after{
      border: none !important;
    }

  }
  /deep/.ant-menu-item-active:hover{
    background: rgba($color: #fff, $alpha: 0.2);

  }
  /deep/.ant-menu-title-content{
    color: #fff;

  }

}

</style>
