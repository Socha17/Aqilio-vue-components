import ShortAnswer from "./components/ShortAnswer.vue";
import LongAnswer from "./components/LongAnswer.vue";
import CheckBox from "./components/CheckBox.vue";
import RadioButton from "./components/RadioButton.vue";

export default {
 install: (app) => {

  app.component("ShortAnswer", ShortAnswer);
  app.component("LongAnswer", LongAnswer);
  app.component("CheckBox", CheckBox);
  app.component("RadioButton", RadioButton);
  
 }
};
