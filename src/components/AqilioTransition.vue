<template>
  <div class="parent" ref="parent">
    <div class="child">
      <p v-if="!aqilioData">component_data not found</p>

      <p v-if="aqilioData" class="titleLabel"> {{ aqilioData.component_data.title }} </p>
    </div>
  </div>
</template>


<script>
import anime from 'animejs';

export default {
  name: 'AqilioTransition',
  props: ['aqilioData'],
  components: {},
  data() {
    return {
      title: '',
    }
  },
  mounted() {
    if (this.aqilioData) {
      this.title = this.aqilioData.component_data.title
    }
    this.startTransition()
  },
  methods: {
    startTransition() {
      let holdTransitionTime = 3250

      anime.timeline({
        targets: this.$refs.parent,
        duration: 400,
        easing: 'easeInOutQuad',
    }).add({
        translateX: -500,
        opacity: 0,
    }).add({
        translateX: 0,
        opacity: 1,
    }).add({
        translateX: 500,
        opacity: 0,
    }, `+=${holdTransitionTime}`).add({
      begin: () => { this.goNext() }
    }, '+=250');

    },
    goNext() {
        this.$aqilio.setCurrentStepValue(true)
        this.$aqilio.nextStep()
    },
    goBack() {
        this.$aqilio.previousStep()
    }
  }
};
</script>

<style scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  max-width: 500px;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  font-family: Verdana,sans-serif;
  font-size: 15px;
  border-radius: 5px;
  padding: 20px;
}

.titleLabel {
  font-family: Arial Black,sans-serif;
  font-size: 40px;
  text-align: center;
}

.parent {
  opacity: 0;
  height: 90vh;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
}

.child {
  max-width: 500px;
  text-align: left;
}

.button {
  background-color: #4f46e5;
  border-radius: 0.375rem;
  border: none;
  color: white;
  padding: 11px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.back-btn {
  color: #94a3b8;
  background-color: white;
  border: 1px solid #94a3b8;
}
</style>
