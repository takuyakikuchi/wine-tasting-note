<template>
  <div>
    <el-form-item label="味わい" />
    <el-form-item :label="`アタック(${tasteForm.attack.length}/1)`">
      <el-checkbox-group v-model="tasteForm.attack">
        <el-checkbox
          v-for="(option, index) in tasteOptions.attackOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="`甘み(${tasteForm.sweetness.length}/1)`">
      <el-checkbox-group v-model="tasteForm.sweetness">
        <el-checkbox
          v-for="(option, index) in tasteOptions.sweetnessOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="`酸味(${tasteForm.acidity.length}/1)`">
      <el-checkbox-group v-model="tasteForm.acidity">
        <el-checkbox
          v-for="(option, index) in tasteOptions.acidityOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item
      :label="
        wineType === 'red'
          ? `タンニン(${tasteForm.tannin.length}/1)`
          : `苦味(${tasteForm.tannin.length}/1)`
      "
    >
      <el-checkbox-group v-model="tasteForm.tannin">
        <el-checkbox
          v-for="(option, index) in tasteOptions.tanninOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="`バランス(${tasteForm.balance.length}/2)`">
      <el-checkbox-group v-model="tasteForm.balance">
        <el-checkbox
          v-for="(option, index) in tasteOptions.balanceOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="`アルコール(${tasteForm.alcohol.length}/1)`">
      <el-checkbox-group v-model="tasteForm.alcohol">
        <el-checkbox
          v-for="(option, index) in tasteOptions.alcoholOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="`余韻(${tasteForm.aftertaste.length}/1)`">
      <el-checkbox-group v-model="tasteForm.aftertaste">
        <el-checkbox
          v-for="(option, index) in tasteOptions.aftertasteOptions"
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

import { TasteFields } from "@/types/types";

import { tasteOptions } from "@/constants/tasteOptions";

@Component({
  components: {
    "el-checkbox": Checkbox,
    "el-checkbox-group": CheckboxGroup,
    "el-form-item": FormItem
  }
})
export default class Taste extends Vue {
  @Prop({ default: "red" }) wineType!: string;

  private tasteForm: TasteFields = {
    attack: [],
    sweetness: [],
    acidity: [],
    tannin: [],
    balance: [],
    alcohol: [],
    aftertaste: []
  };

  // Options
  private tasteOptions = tasteOptions(this.wineType);

  @Watch("wineType")
  updateOptions() {
    this.tasteOptions = tasteOptions(this.wineType);
  }

  @Watch("tasteForm", { deep: true })
  updateForm() {
    this.$emit("updateForm", this.tasteForm, "taste");
  }
}
</script>
