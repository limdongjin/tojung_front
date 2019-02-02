<template>
  <section class="delivery mb-5 mx-4 font-14">
    <h4 class="font-18 font-weight-bold mb-4">배송 예정일</h4>
    <div class="delivery text pl-1">
      <!-- 광고 펀딩중-->
      <p class="mb-0" v-if="!isend">현재 광고 펀딩중입니다.</p>
      <p class="mb-0" v-if="!isend">
        지금 주문하시면
        <span>{{ days }}</span>
        일 배송예정입니다.
      </p>
      <p v-if="!isend">배송이 시작되면 문자로 알려드립니다.</p>
      <!-- 상시 펀딩 중-->
      <p class="mb-0" v-if="isend">현재 상시 펀딩중입니다.</p>
      <p v-if="isend">배송은 3~7일(영업일기준) 소요됩니다.</p>
    </div>
  </section>
</template>
<script>
export default {
  name: "ProductDiliveryDesc",
  props: ["isend", "days"]
};
</script>
