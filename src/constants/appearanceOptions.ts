export function appearanceOptions(wineType: string) {
  if (wineType === "red") {
    return {
      clarityOptions: ["澄んだ", "深みのある", "やや濁った", "濁った"],
      brightnessOptions: ["輝きのある", "落ち着いた", "モヤがかかった"],
      toneOptions: [
        "紫がかった",
        "黒みを帯びた",
        "オレンジがかった",
        "縁が明るい",
        "ルビー",
        "ガーネット",
        "レンガ",
        "ラズベリーレッド",
        "ダークチェリーレッド"
      ],
      shadesOptions: [
        "無色に近い",
        "明るい",
        "やや明るい",
        "やや濃い",
        "濃い",
        "非常に濃い"
      ],
      viscosityOptions: ["さらっとした", "やや軽い", "やや強い", "強い"],
      appearanceImpressionOptions: [
        "若々しい",
        "若い状態を抜けた",
        "やや熟成した",
        "熟成した",
        "酸化熟成のニュアンス",
        "軽快な",
        "成熟度が高い",
        "濃縮感が強い"
      ]
    }
  } else { // White
    return {
      clarityOptions: ["澄んだ", "やや濁った", "濁った"],
      brightnessOptions: ["輝きのある", "落ち着いた", "モヤがかかった"],
      toneOptions: [
        "グリーンがかった",
        "黄金がかった",
        "レモンイエロー",
        "イエロー ",
        "黄金色",
        "トパーズ",
        "アンバー"
      ],
      shadesOptions: [
        "無色に近い",
        "淡い",
        "やや淡い",
        "やや濃い",
        "濃い",
        "非常に濃い"
      ],
      viscosityOptions: ["さらっとした", "やや軽い", "やや強い", "強い"],
      appearanceImpressionOptions: [
        "若々しい",
        "やや熟成した",
        "熟成した",
        "酸化熟成のニュアンス",
        "軽快な",
        "成熟度が高い",
        "濃縮感がある"
      ]
    }
  }
}
