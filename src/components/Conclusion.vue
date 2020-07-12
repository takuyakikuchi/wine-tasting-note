<template>
  <div>
    <h1>評価、結論</h1>
    <el-form-item label="評価">
      <el-checkbox-group v-model="conclusionForm.evaluation">
        <el-checkbox
          v-for="(option, index) in evaluationOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="適正温度">
      <el-checkbox-group v-model="conclusionForm.temperature">
        <el-checkbox
          v-for="(option, index) in temperatureOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="グラス">
      <el-checkbox-group v-model="conclusionForm.glass">
        <el-checkbox
          v-for="(option, index) in glassOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="デカンタージュ">
      <el-checkbox-group v-model="conclusionForm.decantage">
        <el-checkbox
          v-for="(option, index) in decantageOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="収穫年">
      <el-checkbox-group v-model="conclusionForm.vintage">
        <el-checkbox
          v-for="(option, index) in vintageOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="生産国">
      <el-checkbox-group v-model="conclusionForm.country">
        <el-checkbox
          v-for="(option, index) in countryOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="主なブドウ品種">
      <el-checkbox-group v-model="conclusionForm.grape">
        <el-checkbox
          v-for="(option, index) in grapeOptions"
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

import { ConclusionFields } from "@/types/types";

@Component({
  components: {
    "el-checkbox": Checkbox,
    "el-checkbox-group": CheckboxGroup,
    "el-form-item": FormItem
  }
})
export default class Conclusion extends Vue {
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
  readonly evaluationOptions = [
    "シンプル、フレッシュ感を楽しむ",
    "エレガントで余韻の長い",
    "成熟度が高く豊か",
    "濃縮し力強い",
    "ポテンシャルがある"
  ];
  readonly temperatureOptions = [
    "10度未満",
    "10-13度",
    "14-16度",
    "17-20度",
    "21度以上"
  ];
  readonly glassOptions = ["小ぶり", "中庸", "大ぶり"];
  readonly decantageOptions = ["必要なし", "直前", "事前(1時間以上前)"];
  readonly vintageOptions = [
    "今年",
    "1昨年",
    "2年前",
    "5年程前",
    "10年程前",
    "15年以上前"
  ];
  readonly countryOptions = [
    "フランス",
    "オーストラリア",
    "アメリカ",
    "日本",
    "ニュージーランド",
    "ドイツ",
    "スペイン",
    "アルゼンチン",
    "イタリア",
    "チリ"
  ];
  readonly grapeOptions = [
    "カベルネ・ソーヴィニヨン",
    "シラー(シラーズ)",
    "ピノ・ノワール",
    "サンジョベーゼ",
    "メルロ",
    "ガメ",
    "カベルネ・フラン",
    "テンプラニーリョ",
    "グルナッシュ",
    "ネッビオーロ",
    "ジンファンデル"
  ];

  @Watch("conclusionForm.evaluation")
  @Watch("conclusionForm.temperature")
  @Watch("conclusionForm.glass")
  @Watch("conclusionForm.decantage")
  @Watch("conclusionForm.vintage")
  @Watch("conclusionForm.country")
  @Watch("conclusionForm.grape")
  updateForm() {
    this.$emit("updateForm", this.conclusionForm, "conclusion");
  }
}
</script>
