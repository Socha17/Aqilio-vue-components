<template>
  <div class="parent">
    <div class="child">
      <label v-if="!aqilioData" for="LongAnswer">component_data not found</label>

      <p><label v-if="aqilioData" for="LongAnswer"> {{ aqilioData.component_data.title }} </label></p>
      <textarea type="text" id="LongAnswer" name="LongAnswer"></textarea> <br><br>


      <!-- think of logic on when to show back button -->
      <button v-if="aqilioData && aqilioData.component_data.showBackButton" class="button back-btn" style="margin-right: 15px">Back</button>
      <button class="button">Next</button>
    </div>
  </div>
</template>


<script>

export default {
  name: 'LongAnswer',
  props: ['aqilioData'],
  components: {},
  data() {
    return {
      title: '',
      value: null,
    }
  },
  mounted() {
    if (this.aqilioData) {
      this.title = this.aqilioData.value
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
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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

.parent {
  height: 300px;

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

textarea {
  width: 400px;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  margin-bottom: 20px;
}
</style>
