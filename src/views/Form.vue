<template>
  <el-form label-width="120px">
    <appearance @updateForm="updateForm" />
    <aroma @updateForm="updateForm" />
    <taste @updateForm="updateForm" />
    <conclusion @updateForm="updateForm" />
    <el-form-item>
      <el-button type="primary" native-type="button">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form, FormItem, Button } from "element-ui";

// Types
import { FormFields } from "@/types/types";

// Custom components
import Appearance from "@/components/Appearance.vue";
import Aroma from "@/components/Aroma.vue";
import Conclusion from "@/components/Conclusion.vue";
import Taste from "@/components/Taste.vue";

@Component({
  components: {
    "el-button": Button,
    "el-form-item": FormItem,
    "el-form": Form,
    Appearance,
    Aroma,
    Conclusion,
    Taste
  }
})
export default class MainForm extends Vue {
  formInput: FormFields = {
    appearance: null,
    aroma: null,
    taste: null,
    conclusion: null
  };

  // TODO: Type needs to be change
  private updateForm(input: any, category: string) {
    switch (category) {
      case "appearance":
        this.formInput.appearance = input;
        break;
      case "aroma":
        this.formInput.aroma = input;
        break;
      case "taste":
        this.formInput.taste = input;
        break;
      case "conclusion":
        this.formInput.conclusion = input;
        break;
    }
  }

  // -------------- Comment ----------
  // private buildComment() {
  //   const test = this.appearanceComment();
  //   console.log(test);
  // }

  // private appearanceComment() {
  //   const appearanceInput = { ...this.formInput.appearance };
  //   let comment = "";
  //   appearanceInput.clarity.forEach(element => {
  //     comment = `清澄度は、${element}`;
  //   });
  //   return comment;
  // }
}
</script>
