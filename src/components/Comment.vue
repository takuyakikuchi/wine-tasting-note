<template>
  <div>
    <el-input type="textarea" v-model="generatedComment" />
    <el-button type="primary" native-type="button" @click="copyComment"
      >Copy</el-button
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Button, Input } from "element-ui";

// Types
import { FormFields } from "@/types/types";

@Component({
  components: {
    "el-button": Button,
    "el-input": Input
  }
})
export default class Comment extends Vue {
  @Prop({ default: null }) formInput!: FormFields;

  private generatedComment = "";

  public buildComment() {
    console.log("in");
    this.generatedComment =
      // Appearance
      `清澄度は、${this.formInput.appearance?.clarity?.toString()}。` +
      `輝きは、${this.formInput.appearance?.shades?.toString()}。` +
      `色調は、${this.formInput.appearance?.tone?.toString()}。` +
      `濃淡は、${this.formInput.appearance?.brightness?.toString()}。` +
      `粘性は、${this.formInput.appearance?.viscosity?.toString()}。` +
      `外観の印象は、${this.formInput.appearance?.appearanceImpression?.toString()}。` +
      // Aroma
      `第一印象は、${this.formInput.aroma?.firstImpression?.toString()}。` +
      `果実は、${this.formInput.aroma?.fruit?.toString()}。` +
      `花/植物は、${this.formInput.aroma?.flower?.toString()}。` +
      `芳香/香辛料/化学物質は、${this.formInput.aroma?.spice?.toString()}。` +
      `香りの印象は、${this.formInput.aroma?.aromaImpression?.toString()}。` +
      // Taste
      `アタックは、${this.formInput.taste?.attack?.toString()}。` +
      `甘みは、${this.formInput.taste?.sweetness?.toString()}。` +
      `酸味は、${this.formInput.taste?.acidity?.toString()}。` +
      `タンニンは、${this.formInput.taste?.tannin?.toString()}。` +
      `バランスは、${this.formInput.taste?.balance?.toString()}。` +
      `アルコールは、${this.formInput.taste?.alcohol?.toString()}。` +
      `余韻は、${this.formInput.taste?.aftertaste?.toString()}。` +
      // Conclusion
      `評価は、${this.formInput.conclusion?.evaluation?.toString()}。` +
      `適正温度は、${this.formInput.conclusion?.temperature?.toString()}。` +
      `グラスは、${this.formInput.conclusion?.glass?.toString()}。` +
      `デキャンタージュは、${this.formInput.conclusion?.decantage?.toString()}。` +
      `収穫年は、${this.formInput.conclusion?.vintage?.toString()}。` +
      `生産国は、${this.formInput.conclusion?.country?.toString()}。` +
      `主なブドウ品種は、${this.formInput.conclusion?.grape?.toString()}。`;
  }

  private copyComment() {
    const copyText = document.querySelector("textarea");
    copyText?.select();
    document.execCommand("copy");
    this.$message({
      message: "Copied!",
      type: "success"
    });
  }
}
</script>
