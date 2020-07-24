<template>
  <div>
    <el-form-item label="香り" />
    <el-form-item label="第一印象">
      <el-checkbox-group v-model="aromaForm.firstImpression">
        <el-checkbox
          v-for="(option, index) in aromaOptions.firstImpressionOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="果実">
      <el-checkbox-group v-model="aromaForm.fruit">
        <el-checkbox
          v-for="(option, index) in aromaOptions.fruitOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="花/植物">
      <el-checkbox-group v-model="aromaForm.flower">
        <el-checkbox
          v-for="(option, index) in aromaOptions.flowerOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="芳香/香辛料">
      <el-checkbox-group v-model="aromaForm.spice">
        <el-checkbox
          v-for="(option, index) in aromaOptions.spiceOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="香りの印象">
      <el-checkbox-group v-model="aromaForm.aromaImpression">
        <el-checkbox
          v-for="(option, index) in aromaOptions.aromaImpressionOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { FormItem, Checkbox, CheckboxGroup } from "element-ui";

import { AromaFields } from "@/types/types";

import { aromaOptions } from "@/constants/aromaOptions";

@Component({
  components: {
    "el-checkbox": Checkbox,
    "el-checkbox-group": CheckboxGroup,
    "el-form-item": FormItem
  }
})
export default class Aroma extends Vue {
  @Prop({ default: "red" }) wineType!: string;

  private aromaForm: AromaFields = {
    firstImpression: [],
    fruit: [],
    flower: [],
    spice: [],
    aromaImpression: []
  };

  // Options
  private aromaOptions = aromaOptions(this.wineType);

  @Watch("wineType")
  updateOptions() {
    this.aromaOptions = aromaOptions(this.wineType);
  }

  @Watch("aromaForm.firstImpression")
  @Watch("aromaForm.fruit")
  @Watch("aromaForm.flower")
  @Watch("aromaForm.spice")
  @Watch("aromaForm.aromaImpression")
  updateForm() {
    this.$emit("updateForm", this.aromaForm, "aroma");
  }
}
</script>
