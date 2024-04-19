import { defineStore } from "pinia";
export const usePostsStore = defineStore("posts", {
  state: () => {
    return {
      posts: [
        {
          link: "https://www.instagram.com/p/CzKAZi-tIqC/embed",
        },
        {
          link: "https://www.instagram.com/p/C0uec_mN5EB/embed",
        },
        {
          link: "https://www.instagram.com/p/C0ERC3ot5me/embed",
        },
      ],
    };
  },
});
