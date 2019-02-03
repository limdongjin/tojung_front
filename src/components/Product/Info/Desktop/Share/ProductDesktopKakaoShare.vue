<template>
  <li class="d-block">
    <KakaoShare
      :shareTitle="shareTitle"
      :shareDescription="shareDescription"
      :imageUrl="imageUrl"
      :webUrl="currentUrl"
      :classes="desktopShareClasses"
    />
  </li>
</template>
<script>
import KakaoShare from "@/components/SocialUtil/KakaoShare";

export default {
  name: "ProductDesktopKakaoShare",
  components: { KakaoShare },
  props: ["shareTitle", "shareDescription", "imageUrl"],
  computed: {
    currentUrl: function() {
      console.log(this.shareTitle);
      return `https://tojung.me/${this.$route.path}`;
    },
    desktopShareClasses: function() {
      return "sns-icon d-block mx-auto my-3";
    }
  }
};
</script>
