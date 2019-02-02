<template>
  <section class="package my-5 mx-4">
    <h4 class="font-18 font-weight-bold mb-4">PACKAGE 정리</h4>
    <progressive-img
      :src="image"
      :placeholder="image"
      :blur="30"
      class="d-block package-set"
    >
    </progressive-img>
  </section>
</template>
<script>
export default {
  name: "PackageSummaryImage",
  props: ["image"]
};
</script>
