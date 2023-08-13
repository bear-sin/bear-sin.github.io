import { navbar } from "vuepress-theme-hope";

export default navbar([
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
          { text: "OUTING", icon: "pen-to-square", link: "with_deer" }

        ],
      },
    ],
  },

  {
    text: "编程",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Coding",
        icon: "pen-to-square",
        prefix: "Coding/",
        children: [
          { text: "OUTING", icon: "pen-to-square", link: "1" }

        ],
      },
    ],
  },


  {
    text: "悦读",
    icon: "read",
    prefix: "/posts/",
    children: [
      {
        text: "books",
        icon: "pen-to-square",
        prefix: "books/",
        children: [
          { text: "BOOK", icon: "pen-to-square", link: "book" }

        ],
      },
    ],
  },

  {
    text: "和基友们",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "books",
        icon: "pen-to-square",
        prefix: "With_Friends/",
        children: [
          { text: "OUTING", icon: "pen-to-square", link: "playing" }

        ],
      },
    ],
  },

  
]);
