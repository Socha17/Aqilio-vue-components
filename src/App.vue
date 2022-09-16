<template>

  <ShortAnswer :aqilioData="{component_data: {title: 'title here123', showBackButton: true}}"/>

</template>


<script>

import ShortAnswer from './components/ShortAnswer.vue'

export default {
  name: 'App',
  props: [],
  components: {
    ShortAnswer
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log("userTextInput mount");
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
