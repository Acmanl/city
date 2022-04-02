<template>
  <component :is="linkProps(url)"></component>
</template>
<script lang="tsx">
import { defineComponent, ref } from 'vue'
import { isExternal } from '@/utils/validate'
export default defineComponent({
  name: 'Link',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    const url = ref(props.to)
    const linkProps = (url: string) => {
      if (isExternal(url)) {
        return {
          render() {
            return <a href={url} target='_blank' rel='noopener'>
              {context.slots.default?.()}
            </a>
          }
        }
      }
      return {
        render() {
          return <span> <router-link to={url} >
            {context.slots.default?.()}
          </router-link></span>
        }
      }
    }
    return {
      url,
      linkProps
    }
  }
})
</script>
