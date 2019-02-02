<template>
  <div :class="classes">
    <span class="funding-money"> {{ money }}원 </span>
    <span class="font-red"> {{ count }} 명 </span>
    <span>{{ description }}</span>
  </div>
</template>
<script>
export default {
  name: "ProductFunding",
  props: ["classes", "money", "count", "description"]
};
</script>
