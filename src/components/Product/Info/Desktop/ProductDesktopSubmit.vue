<template>
  <a
    class="d-block buy-button-lg mt-3"
    id="pay-link-lg"
    v-on:click="packageSelected"
    >내 인생으로 배송받기</a
  >
</template>
<script>
export default {
  name: "ProductDesktopSubmit",
  methods: {
    packageSelected: function() {
      let ment = $("#packageButton > .package-info > span").html();
      if (ment === "패키지 선택하기") {
        alert("패키지를 선택해주세요");
      }
    }
  }
};
</script>
