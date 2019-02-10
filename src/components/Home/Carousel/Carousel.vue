/* eslint-disable */
<template>
  <section class="cover loaded">
    <!--<%= render 'notice' %> &lt;!&ndash; 팝업 partial &ndash;&gt;-->
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
      data-interval="2000"
    >
      <ol class="carousel-indicators mb-1">
        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <CarouselItem
          active="false"
          resource="https://s3-ap-northeast-2.amazonaws.com/tojung2018/uploads/mainimage/image0/13/1.mp4"
          description="법안 배송받기를 클릭하면
국회에 심사촉구청원이
보내집니다"
          text-class="text-1"
        />
        <CarouselItem
          active="true"
          resource="https://s3-ap-northeast-2.amazonaws.com/tojung2018/uploads/mainimage/image1/13/2.mp4"
          description="내 삶을 바꾸는
법안쇼핑몰"
          text-class="text-2"
        />
        <CarouselItem
          active="false"
          resource="https://s3-ap-northeast-2.amazonaws.com/tojung2018/uploads/mainimage/image2/13/3.mp4"
          description="참여를 인증하는
예쁜 굿즈를 받고
내 문제를 공론화하는
지하철광고를 실어보아요"
          text-class="text-3"
        />
      </div>
    </div>
  </section>
</template>
<script>
import CarouselItem from "@/components/Home/Carousel/CarouselItem.vue";
export default {
  name: "Carousel",
  components: { CarouselItem },
  data: function() {
    return {
      mainimage0:
        "https://s3-ap-northeast-2.amazonaws.com/tojung2018/uploads/mainimage/image1/13/2.mp4"
    };
  },
  mounted: function() {
    // $(".cover").unwrap();
  }
};
</script>
