<template>
  <el-form label-width="120px">
    <div>
      <h1>外観</h1>
      <el-form-item label="清澄度">
        <el-checkbox-group v-model="formInput.clarity">
          <el-checkbox
            v-for="(option, index) in clarityOptions"
            :key="index"
            :label="option"
            :value="option"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="輝き">
        <el-checkbox-group v-model="formInput.brightness">
          <el-checkbox
            v-for="(option, index) in brightnessOptions"
            :key="index"
            :label="option"
            :value="option"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="色調">
        <el-checkbox-group v-model="formInput.tone">
          <el-checkbox
            v-for="(option, index) in toneOptions"
            :key="index"
            :label="option"
            :value="option"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="濃淡">
        <el-checkbox-group v-model="formInput.shades">
          <el-checkbox
            v-for="(option, index) in shadesOptions"
            :key="index"
            :label="option"
            :value="option"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="粘性">
        <el-checkbox-group v-model="formInput.viscosity">
          <el-checkbox
            v-for="(option, index) in viscosityOptions"
            :key="index"
            :label="option"
            :value="option"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="外観の印象">
        <el-checkbox-group v-model="formInput.appearanceImpression">
          <el-checkbox
            v-for="(option, index) in appearanceImpressionOptions"
            :key="index"
            :label="option"
            :value="option"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form, FormItem, Checkbox, CheckboxGroup, Button } from "element-ui";

@Component({
  components: {
    "el-button": Button,
    "el-checkbox": Checkbox,
    "el-checkbox-group": CheckboxGroup,
    "el-form-item": FormItem,
    "el-form": Form
  }
})
export default class MainForm extends Vue {
  // Options
  readonly clarityOptions = ["澄んだ", "深みのある", "やや濁った", "濁った"];
  readonly brightnessOptions = ["輝きのある", "落ち着いた", "モヤがかかった"];
  readonly toneOptions = [
    "紫がかった",
    "黒みを帯びた",
    "オレンジが買った",
    "縁が明るい",
    "ルビー",
    "ガーネット",
    "レンガ",
    "ラズベリーレッド",
    "ダークチェリーレッド"
  ];
  readonly shadesOptions = [
    "無色に近い",
    "明るい",
    "やや明るい",
    "やや濃い",
    "濃い",
    "非常に濃い"
  ];
  readonly viscosityOptions = ["さらっとした", "やや軽い", "やや強い", "強い"];
  readonly appearanceImpressionOptions = [
    "若々しい",
    "若い状態を抜けた",
    "やや熟成した",
    "熟成した",
    "酸化熟成のニュアンス",
    "軽快な",
    "成熟度が高い",
    "濃縮感が強い"
  ];

  formInput: any = {
    // Appearence
    clarity: [],
    brightness: [],
    tone: [],
    shades: [],
    viscosity: [],
    appearanceImpression: []
    // Aroma
  };
}
</script>
