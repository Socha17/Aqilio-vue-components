<template>
  <div class="parent">
    <div class="child">
      <label v-if="!aqilioData" for="shortAnswer">component_data not found</label>

      <label v-if="aqilioData" for="shortAnswer"> {{ aqilioData.component_data.title }} </label>
      <div class="container" v-if="aqilioData.component_data.options">

        <template v-for="(radioButton, index) in this.aqilioData.component_data.options">

          <div class="checkBoxContainer">
            <input class="inp-cbx" :id="index" type="checkbox" style="display: none" v-model="value" :value="radioButton.optionText"/>
            <label class="cbx" :for="index"><span>
                <svg width="12px" height="10px" viewbox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg></span><span> {{ radioButton.optionText }} </span></label>
                <br/>
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
  name: 'CheckBox',
  props: ['aqilioData'],
  components: {},
  computed: {},
  data() {
    return {
      value: [],
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

.checkBoxContainer {
  margin-top: 25px;
  margin-bottom: 25px;
}


.cbx {
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #9098A9;
  transition: all 0.2s ease;
}
.cbx span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #FFFFFF;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #506EEC;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
}
.cbx span:last-child {
  padding-left: 8px;
}
.cbx:hover span:first-child {
  border-color: #506EEC;
}

.inp-cbx:checked + .cbx span:first-child {
  background: #506EEC;
  border-color: #506EEC;
  animation: wave 0.4s ease;
}
.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.inp-cbx:checked + .cbx span:first-child:before {
  transform: scale(3.5);
  opacity: 0;
  transition: all 0.6s ease;
}

@keyframes wave {
  50% {
    transform: scale(0.9);
  }
}



.parent {

font-family: "Open Sans", sans-serif;
font-size: 16px;
color: #223254;


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
