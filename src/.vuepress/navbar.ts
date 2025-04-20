import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "日常",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      // {
      //   text: "SECRET",
      //   icon: "pen-to-square",
      //   prefix: "With_Deer/",
      //   children: [
      //     { text: "OUTING", icon: "pen-to-square", link: "with_deer" },
      //     { text: "OUTING", icon: "pen-to-square", link: "with_deer2" },
      //     { text: "HIGHLIGHT", icon: "pen-to-square", link: "spot" }

      //   ],
      // },
      {
        text: "With_Friends",
        icon: "pen-to-square",
        prefix: "With_Friends/",
        children: [
          { text: "WITH FRIENDS", icon: "pen-to-square", link: "playing" },
          { text: "WITH HASTIA", icon: "pen-to-square", link: "HASTIA" }


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
          { text: "OVERVIEW", icon: "pen-to-square", link: "coding" },
          { text: "ARDUINO", icon: "pen-to-square", link: "arduino" },
          { text: "C", icon: "pen-to-square", link: "c" },
          { text: "DEEP_LEARNING", icon: "pen-to-square", link: "deep_learning" },
          { text: "GIT", icon: "pen-to-square", link: "git" },
          { text: "PYTHON", icon: "pen-to-square", link: "python" }

        ],
      },
    ],
  },


  {
    text: "悦读",
    icon: "pen-to-square",
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
    text: "资源共享",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "SHARE",
        icon: "pen-to-square",
        prefix: "share/",
        children: [
          { text: "share", icon: "pen-to-square", link: "share" }

        ],
      },
    ],
  },

  {
    text: "涉及观念",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Thinkings",
        icon: "pen-to-square",
        prefix: "Thinkings/",
        children: [
          { text: "Thinkings", icon: "pen-to-square", link: "Thinkings" }

        ],
      },
    ],
  },

  

  
]);
