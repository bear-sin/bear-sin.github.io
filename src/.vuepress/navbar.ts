import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "日常",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "With_Deer",
        icon: "pen-to-square",
        prefix: "With_Deer/",
        children: [
          { text: "OUTING", icon: "pen-to-square", link: "1" }

        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
