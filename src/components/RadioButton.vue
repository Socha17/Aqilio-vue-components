<template>
  <div class="parent">
    <div class="child">
      <label v-if="!aqilioData" for="shortAnswer">component_data not found</label>

      <label v-if="aqilioData" for="shortAnswer"> {{ aqilioData.component_data.title }} </label>
      <div class="container" v-if="aqilioData.component_data.options">

        <template v-for="(radioButton, index) in this.aqilioData.component_data.options">
          <div class="radio">
            <input :id="index" name="radio" type="radio" v-model="value" :value="radioButton.optionText">
            <label :for="index" class="radio-label">{{ radioButton.optionText }}</label>
          </div>
        </template>

      </div>

      <button v-if="aqilioData && aqilioData.component_data.showBackButton" @click="goBack" class="button back-btn" style="margin-right: 15px">Back</button>
      <button class="button" @click="goNext">Next</button>
    </div>
  </div>
</template>


<script>

export default {
  name: 'RadioButton',
  props: ['aqilioData'],
  components: {},
  computed: {},
  data() {
    return {
      value: null,
    }
  },
  mounted() {
    if (this.aqilioData) {
      this.title = this.aqilioData.component_data.title
      this.value = this.aqilioData.value
    }
  },
  methods: {
    goNext() {
        this.$aqilio.setCurrentStepValue(this.value)
        this.$aqilio.nextStep()
    },
    goBack() {
        this.$aqilio.previousStep()
    }
  }
};
</script>

<style scoped>

.container {
  margin-top: 40px;
  margin-bottom: 40px;
}

.radio {
  margin: 0.9rem;
}
.radio input[type=radio] {
  position: absolute;
  opacity: 0;
}
.radio input[type=radio] + .radio-label:before {
  content: "";
  background: #f4f4f4;
  border-radius: 100%;
  border: 1px solid #b4b4b4;
  display: inline-block;
  width: 1.4em;
  height: 1.4em;
  position: relative;
  top: -0.2em;
  margin-right: 1em;
  vertical-align: top;
  cursor: pointer;
  text-align: center;
  transition: all 250ms ease;
}
.radio input[type=radio]:checked + .radio-label:before {
  background-color: #3197EE;
  box-shadow: inset 0 0 0 4px #f4f4f4;
}
.radio input[type=radio]:focus + .radio-label:before {
  outline: none;
  border-color: #3197EE;
}
.radio input[type=radio]:disabled + .radio-label:before {
  box-shadow: inset 0 0 0 4px #f4f4f4;
  border-color: #b4b4b4;
  background: #b4b4b4;
}
.radio input[type=radio] + .radio-label:empty:before {
  margin-right: 0;
}

.parent {
  margin-top: 50px;
  font-family: Verdana,sans-serif;
  font-size: 15px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
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
