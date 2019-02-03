<template>
  <div class="caro-cards mb-4">
    <div class="caro-card" v-for="image of carouselImages">
      <img :src="image.image.url" class="w-100 cardnews-img" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCarousel",
  computed: {
    carouselImages: function () {
      return this.$store.getters.product.product_caro_images
    }
  },
  mounted: function() {
    console.log("caro mount")
    let product = this.$store.getters.product
    console.log(product)
    console.log(product.packages)
    console.log(product.product_caro_images)
    // console.log(this.$store.getters.product)
    $(".caro-cards").slick({
      arrows: false,
      dots: true,
      dotsClass: "d-flex cards-dot justify-content-center pl-0",
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: "linear"
    });
  }
};
</script>

안녕하세요.
Vuex를 공부하고있는데 막히는 부분이 생겨서 질문올립니다.
Axios를 통해서 백엔드 서버로 부터 중첩된 json을 받아서 Vuex의 state에 저장하고있는데,
json의 깊이가 2~3정도로 깊어지게되면 실제 값대신에 Observe라는 객체를 반환하고있네요..

예를들어 { product: {  image: { url: "https://naver.com" }, title: "hello" } }이라는 json을
Axios의 결과로 받은다음 this.$state에 저장하고나서,
this.$state.getters.product.title까지는 정상적으로 값이 나오지만,
this.$state.getters.product.image 부터 Observe라는 객체로 변하고...
this.$state.getters.product.image.url 이 정상적으로 값이 안나옵니다..


