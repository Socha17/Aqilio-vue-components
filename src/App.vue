<template>

  <!-- <ShortAnswer :aqilioData="{component_data: {title: 'title here123', showBackButton: true}}"/> -->
  <!-- <LongAnswer :aqilioData="{component_data: {title: 'title here123', showBackButton: true}}"/> -->
  <!-- <RadioButton :aqilioData="{
    component_data: {
      title: 'title here123', showBackButton: true,
      options: [{optionText: 'option1'},{optionText: 'option2'},{optionText: 'option3'}]
     }
    }"/> -->
  <CheckBox :aqilioData="{
    component_data: {
      title: 'title here123', showBackButton: true,
      options: [{optionText: 'option1'},{optionText: 'option2'},{optionText: 'option3'}]
     }
    }"/>

</template>


<script>

import ShortAnswer from './components/ShortAnswer.vue'
import LongAnswer from './components/LongAnswer.vue'
import CheckBox from './components/CheckBox.vue'
import RadioButton from './components/RadioButton.vue'

export default {
  name: 'App',
  props: [],
  components: {
    ShortAnswer,
    LongAnswer,
    RadioButton,
    CheckBox,
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style scoped>

</style>
