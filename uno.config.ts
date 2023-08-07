import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: "https://esm.sh/",
      extraProperties: {
        display: "inline-block",
        height: "1.2em",
        width: "1.2em",
        "vertical-align": "text-bottom",
      },
    }),
  ],
});
