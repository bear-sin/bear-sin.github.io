import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Sin的博客",
  description: "Sin 的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
