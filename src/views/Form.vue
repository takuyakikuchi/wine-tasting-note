<template>
  <div
    class="container rounded-lg m-4"
    :class="wineType === 'red' ? 'bg-red-100' : 'bg-yellow-100'"
  >
    <el-form label-width="120px" size="mini">
      <el-form-item label="タイプ">
        <span
          class="text-lg align-middle"
          :class="wineType === 'red' ? 'text-pink-800' : 'text-gray-300'"
          ><i class="el-icon-goblet-full"></i
        ></span>
        <el-switch
          v-model="wineType"
          inactive-color="#97266d"
          active-color="#faf089"
          inactive-value="red"
          active-value="white"
        />
        <span
          class="text-lg align-middle"
          :class="wineType === 'white' ? 'text-yellow-300' : 'text-gray-300'"
          ><i class="el-icon-goblet-full"></i
        ></span>
      </el-form-item>
      <appearance @updateForm="updateForm" />
      <aroma @updateForm="updateForm" />
      <taste @updateForm="updateForm" />
      <conclusion @updateForm="updateForm" />
      <el-form-item>
        <el-button type="primary" native-type="button" @click="callComment"
          >Create</el-button
        >
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <comment :formInput="formInput" ref="comment" class="m-8" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button, Form, FormItem, Input } from "element-ui";

// Types
import { FormFields } from "@/types/types";

// Custom components
import Appearance from "@/components/Appearance.vue";
import Aroma from "@/components/Aroma.vue";
import Conclusion from "@/components/Conclusion.vue";
import Comment from "@/components/Comment.vue";
import Taste from "@/components/Taste.vue";

@Component({
  components: {
    "el-button": Button,
    "el-form-item": FormItem,
    "el-form": Form,
    "el-input": Input,
    Appearance,
    Aroma,
    Conclusion,
    Comment,
    Taste
  }
})
export default class MainForm extends Vue {
  // -------------- Data --------------
  $refs!: { comment: Comment };

  formInput: FormFields = {
    appearance: null,
    aroma: null,
    taste: null,
    conclusion: null
  };

  wineType = "red";

  // -------------- Methods ------------
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

  private callComment() {
    this.$refs.comment.buildComment();
  }
}
</script>
