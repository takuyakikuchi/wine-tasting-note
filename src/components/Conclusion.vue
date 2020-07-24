<template>
  <div>
    <el-form-item label="評価、結論" />
    <el-form-item :label="`評価(${conclusionForm.evaluation.length}/2)`">
      <el-checkbox-group v-model="conclusionForm.evaluation">
        <el-checkbox
          v-for="(option, index) in conclusionOptions.evaluationOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="`適正温度(${conclusionForm.temperature.length}/1)`">
      <el-checkbox-group v-model="conclusionForm.temperature">
        <el-checkbox
          v-for="(option, index) in conclusionOptions.temperatureOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="`グラス(${conclusionForm.glass.length}/1)`">
      <el-checkbox-group v-model="conclusionForm.glass">
        <el-checkbox
          v-for="(option, index) in conclusionOptions.glassOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item
      :label="`デキャンタージュ(${conclusionForm.decantage.length}/1)`"
      v-if="wineType === 'red'"
    >
      <el-checkbox-group v-model="conclusionForm.decantage">
        <el-checkbox
          v-for="(option, index) in conclusionOptions.decantageOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="`収穫年(${conclusionForm.vintage.length}/1)`">
      <el-checkbox-group v-model="conclusionForm.vintage">
        <el-checkbox
          v-for="(option, index) in conclusionOptions.vintageOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="`生産国(${conclusionForm.country.length}/1)`">
      <el-checkbox-group v-model="conclusionForm.country">
        <el-checkbox
          v-for="(option, index) in conclusionOptions.countryOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="`主なブドウ品種(${conclusionForm.grape.length}/1)`">
      <el-checkbox-group v-model="conclusionForm.grape">
        <el-checkbox
          v-for="(option, index) in conclusionOptions.grapeOptions"
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

import { ConclusionFields } from "@/types/types";

import { conclusionOptions } from "@/constants/conclusionOptions";

@Component({
  components: {
    "el-checkbox": Checkbox,
    "el-checkbox-group": CheckboxGroup,
    "el-form-item": FormItem
  }
})
export default class Conclusion extends Vue {
  @Prop({ default: "red" }) wineType!: string;

  private conclusionForm: ConclusionFields = {
    evaluation: [],
    temperature: [],
    glass: [],
    decantage: [],
    vintage: [],
    country: [],
    grape: []
  };

  // Options
  private conclusionOptions = conclusionOptions(this.wineType);

  @Watch("wineType")
  updateOptions() {
    this.conclusionOptions = conclusionOptions(this.wineType);
  }

  @Watch("conclusionForm", { deep: true })
  updateForm() {
    this.$emit("updateForm", this.conclusionForm, "conclusion");
  }
}
</script>
