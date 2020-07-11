<template>
  <div>
    <h1>味わい</h1>
    <el-form-item label="アタック">
      <el-checkbox-group v-model="attack">
        <el-checkbox
          v-for="(option, index) in attackOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="甘み">
      <el-checkbox-group v-model="sweetness">
        <el-checkbox
          v-for="(option, index) in sweetnessOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="酸味">
      <el-checkbox-group v-model="acidity">
        <el-checkbox
          v-for="(option, index) in acidityOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="タンニン">
      <el-checkbox-group v-model="tannin">
        <el-checkbox
          v-for="(option, index) in tanninOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="バランス">
      <el-checkbox-group v-model="balance">
        <el-checkbox
          v-for="(option, index) in balanceOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="アルコール">
      <el-checkbox-group v-model="alchole">
        <el-checkbox
          v-for="(option, index) in alcholeOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="余韻">
      <el-checkbox-group v-model="aftertaste">
        <el-checkbox
          v-for="(option, index) in aftertasteOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { FormItem, Checkbox, CheckboxGroup } from "element-ui";

@Component({
  components: {
    "el-checkbox": Checkbox,
    "el-checkbox-group": CheckboxGroup,
    "el-form-item": FormItem
  }
})
export default class Taste extends Vue {
  private tasteForm = {};

  // Each Categories
  private attack = [];
  private sweetness = [];
  private acidity = [];
  private tannin = [];
  private balance = [];
  private alchole = [];
  private aftertaste = [];

  // Options
  readonly attackOptions = [
    "軽い",
    "やや軽い",
    "やや強い",
    "強い",
    "インパクトのある"
  ];
  readonly sweetnessOptions = [
    "ドライ",
    "ソフトな",
    "まろやか",
    "豊かな",
    "残糖がある"
  ];
  readonly acidityOptions = [
    "キメ細かい",
    "やさしい",
    "円みのある",
    "なめらかな",
    "爽やかな",
    "ストレートな",
    "シャープな",
    "力強い"
  ];
  readonly tanninOptions = [
    "サラサラとした",
    "緻密",
    "力強い",
    "収斂性のある",
    "ヴィロードのような",
    "シルキーな",
    "溶け込んだ"
  ];
  readonly balanceOptions = [
    "スマートな",
    "骨格のしっかりした",
    "固い",
    "痩せた、渇いた",
    "豊満な",
    "肉厚な",
    "力強い",
    "流れるような",
    "ふくよかな"
  ];
  readonly alcholeOptions = [
    "軽め",
    "やや軽め",
    "中程度",
    "やや強め",
    "熱さを感じる"
  ];
  readonly aftertasteOptions = ["短い", "やや短い", "やや長い", "長い"];

  private setFormInput() {
    return (this.tasteForm = {
      attack: this.attack,
      sweetness: this.sweetness,
      acidity: this.acidity,
      tannin: this.tannin,
      balance: this.balance,
      alchole: this.alchole,
      aftertaste: this.aftertaste
    });
  }

  @Watch("attack")
  @Watch("sweetness")
  @Watch("acidity")
  @Watch("tannin")
  @Watch("balance")
  @Watch("alchole")
  @Watch("aftertaste")
  updateForm() {
    const updatedForm = this.setFormInput();
    this.$emit("updateForm", updatedForm, "taste");
  }
}
</script>
