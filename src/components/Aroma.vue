<template>
  <div>
    <h1>香り</h1>
    <el-form-item label="第一印象">
      <el-checkbox-group v-model="firstImpression">
        <el-checkbox
          v-for="(option, index) in firstImpressionOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="果実">
      <el-checkbox-group v-model="fruit">
        <el-checkbox
          v-for="(option, index) in fruitOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="花/植物">
      <el-checkbox-group v-model="flower">
        <el-checkbox
          v-for="(option, index) in flowerOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="芳香/香辛料/化学物質">
      <el-checkbox-group v-model="spice">
        <el-checkbox
          v-for="(option, index) in spiceOptions"
          :key="index"
          :label="option"
          :value="option"
        ></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="香りの印象">
      <el-checkbox-group v-model="aromaImpression">
        <el-checkbox
          v-for="(option, index) in aromaImpressionOptions"
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
export default class Aroma extends Vue {
  private aromaForm = {};

  // Each Categories
  private firstImpression = [];
  private fruit = [];
  private flower = [];
  private spice = [];
  private aromaImpression = [];

  // Options
  readonly firstImpressionOptions = [
    "閉じている",
    "控えめ",
    "開いている",
    "強い",
    "チャーミングな",
    "華やかな",
    "濃縮感がある",
    "深みのある",
    "複雑な"
  ];
  readonly fruitOptions = [
    "イチゴ",
    "ラズベリー",
    "ブルーベリー",
    "カシス",
    "ブラックベリー",
    "ブラックチェリー",
    "干しプラム",
    "乾燥イチジク"
  ];
  readonly flowerOptions = [
    "バラ",
    "すみれ",
    "牡丹",
    "ゼラニウム",
    "赤ピーマン",
    "メントール",
    "シダ",
    "ローリエ",
    "杉",
    "針葉樹",
    "ユーカリ",
    "ドライハーブ",
    "タバコ",
    "紅茶",
    "キノコ",
    "腐葉土",
    "土"
  ];
  readonly spiceOptions = [
    "血液",
    "生肉",
    "乾いた肉",
    "なめし革",
    "ロースト",
    "コーヒー",
    "カカオ",
    "バニラ",
    "黒胡椒",
    "丁子",
    "シナモン",
    "ナツメグ",
    "甘草",
    "杜松の実",
    "タール",
    "樹脂",
    "ヨード"
  ];
  readonly aromaImpressionOptions = [
    "若々しい",
    "嫌気的な",
    "熟成感があらわれている",
    "酸化熟成の段階",
    "酸化している",
    "第1アロマが強い",
    "第2アロマが強い",
    "ニュートラル",
    "木樽からのニュアンス"
  ];

  private setFormInput() {
    return (this.aromaForm = {
      firstImpression: this.firstImpression,
      fruit: this.fruit,
      flower: this.flower,
      spice: this.spice,
      aromaImpression: this.aromaImpression
    });
  }

  @Watch("firstImpression")
  @Watch("fruit")
  @Watch("flower")
  @Watch("spice")
  @Watch("aromaImpression")
  updateForm() {
    const updatedForm = this.setFormInput();
    this.$emit("updateForm", updatedForm, "aroma");
  }
}
</script>
