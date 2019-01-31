<template>
  <div class="wrapper">
    <section
      class="brand_cover pl-3 d-flex flex-column justify-content-end"
      :style="backgroundImage"
    >
      <h5 class="about-us font-14 font-lg-20 text-white font-weight-bold">
        <u>about us</u>
      </h5>
      <pre class="about-heading font-24 font-lg-30 text-white font-weight-bold">
투정은
내 삶의 문제를 해결하는
법안쇼핑몰입니다.</pre
      >
    </section>

    <section class="brand-text font-14 font-lg-18 px-3 pt-3 pt-lg-5">
      <pre class="mb-4">
성희롱을 한 직장 상사가 강력히 처벌 받길 원하나요?
아빠도 눈치보지 않고 육아휴직 하고 싶나요?
군대 내 가혹행위 근절해야 한다고 생각하나요?
유기견 문제를 일으키는 개농장 규제하고 싶나요?</pre
      >
      <pre class="mb-4">
여러분의 이러한 문제를 해결해줄 '법'이
국회에선 무관심 속에 잠들어 있습니다.</pre
      >
      <pre class="mb-4">
그러나 우리는,
국회에서 이런 법들이 방치되고 있는 것도 모르고,
알더라도 국회에는 우리의 의견을 표출할 방법이 없습니다.
국회에 청원을 하기 위해서는 국회의원 1명의 추천이라는
말도 안되는 조건이 걸려있죠.</pre
      >
      <h4 class="font-weight-bold font-20 mb-4">
        투정에서 인생법안을 주문해 보세요.
      </h4>
      <pre class="mb-4">
국회에는 심사를 촉구하는 이메일 청원이 보내지고,
입법을 공론화시키는 광고가 지하철역 한복판에 걸립니다.
자랑스러운 내 참여를 상징하는 디자인 굿즈도 받을 수 있습니다.</pre
      >
      <pre class="mb-4">
투정과 투정의 팔로워들은 그동안
데이트폭력법안의 심사지연 사실을 공론화시켜,
네이버메인뉴스에 올리고,
1년동안 잠들어 있던 법안의 공청회 개최와
하반기 국회 심사 약속까지 이끌어냈습니다.</pre
      >
      <pre class="mb-4">
여러분의 문제들도 이렇게 해결해 나가고 싶지 않으세요?
  </pre
      >

      <div class="d-flex sns-img-wrapper justify-content-center mb-5">
        <a href="https://www.facebook.com/tojung.me/" class="d-block">
          <img :src="fbPageImage" class="sns-img" />
        </a>
        <a href="https://www.instagram.com/tojung.official/" class="d-block">
          <img :src="instaPageImage" class="sns-img" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCWow8a8gmEhpyUjksjJLHxw"
          class="d-block"
        >
          <img :src="youtubePageImage" class="sns-img" />
        </a>
        <a
          href="https://post.naver.com/my.nhn?memberNo=4944321"
          class="d-block"
        >
          <img :src="naverPageImage" class="sns-img" />
        </a>
        <a href="" class="d-block">
          <img :src="kakaoPageImage" class="sns-img" />
        </a>
      </div>
    </section>
    <BottomBar />
  </div>
</template>

<script>
import BottomBar from "@/components/Home/BottomBar";
export default {
  name: "Brand",
  components: { BottomBar },
  computed: {
    backgroundImage: function() {
      const brand_cover = require("@/assets/brand_cover.png");
      return `background-image: url('${brand_cover}');`;
    },
    fbPageImage: function() {
      return require("@/assets/fb-page.png");
    },
    instaPageImage: function() {
      return require("@/assets/insta-page.png");
    },
    youtubePageImage: function() {
      return require("@/assets/youtube-page.png");
    },
    naverPageImage: function() {
      return require("@/assets/naver-page.png");
    },
    kakaoPageImage: function() {
      return require("@/assets/kakao-page.png");
    }
  }
};
</script>

<style scoped></style>
