<template>
  <a id="kakao-link-btn" href="javascript:;">
    <img :src="kakaoSvg" :class="classes" />
  </a>
</template>
<script>
export default {
  name: "KakaoShare",
  props: ["shareTitle", "shareDescription", "imageUrl", "webUrl", "classes"],
  computed: {
    kakaoSvg: function() {
      return require("@/assets/kakao.svg");
    }
  },
  created: function() {
    try {
      Kakao.init("d88e4ac3d481a3491b72e73fcb0ae1fc");
    } catch (e) {
      console.log(e);
      console.log("kakao init ok");
    }
  },
  mounted: function() {
    this.kakaoShareCall();
  },
  methods: {
    kakaoShareCall: function() {
      console.log(this.shareTitle);
      Kakao.Link.createDefaultButton({
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: this.shareTitle,
          description: this.shareDescription,
          imageUrl: this.imageUrl,
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com"
          }
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: this.webUrl,
              webUrl: this.webUrl
            }
          }
        ]
      });
    }
  }
};
</script>
