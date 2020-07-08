<template>
  <el-form label-width="120px">
    <appearance @updateForm="updateForm" />
    <el-form-item>
      <el-button type="primary">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form, FormItem, Button } from "element-ui";

import Appearance from "@/components/Apperance.vue";

@Component({
  components: {
    "el-button": Button,
    "el-form-item": FormItem,
    "el-form": Form,
    Appearance
  }
})
export default class MainForm extends Vue {
  formInput = {};

  private updateForm(formInput) {
    this.formInput = formInput;
  }
}
</script>
