<template>

  <AqilioTransition :aqilioData="
  {
    component_data: {
      title: 'When was the last time you went out for dinner?', 
      subtext: '(Some extra text goes here)', 
      show_back_button: true,
      imageUrl: 'https://media.tenor.com/8cYYJ-kVkbQAAAAM/cats.gif',
      transitionTime: 2500,
    }
  }"/>
  <!-- <ShortAnswer :aqilioData="{component_data: {title: 'When was the last time you went out for dinner?', show_back_button: true}}"/> -->
  <!-- <LongAnswer :aqilioData="{component_data: {title: 'When was the last time you went out for dinner?', show_back_button: true}}"/> -->
  <!-- <RadioButton :aqilioData="{
    component_data: {
      title: 'When was the last time you went out for dinner?', show_back_button: true,
      options: [{optionText: 'option1'},{optionText: 'option2'},{optionText: 'option3'}]
     }
    }"/> -->
  <!-- <CheckBox :aqilioData="{
    component_data: {
      title: 'When was the last time you went out for dinner?', show_back_button: true,
      options: [{optionText: 'option1'},{optionText: 'option2'},{optionText: 'option3'}]
     }
    }"/> -->

</template>


<script>

// import AqilioTransition from './components/AqilioTransition.vue'

export default {
  name: 'App',
  props: [],
  components: {
    // AqilioTransition
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
