<template>
  <el-form label-width="120px">
    <appearance @updateForm="updateForm" />
    <aroma @updateForm="updateForm" />
    <taste @updateForm="updateForm" />
    <conclusion @updateForm="updateForm" />
    <el-form-item>
      <el-button type="primary">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form, FormItem, Button } from "element-ui";

// Categories
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
  formInput = {
    appearance: {},
    aroma: {},
    taste: {},
    conclusion: {}
  };

  private updateForm(input: any, category: string) {
    this.formInput[category] = input;
  }
}
</script>
