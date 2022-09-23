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



export default {
  name: 'App',
  props: [],
  components: {
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
