<template>
  <div id="HeartMobileBox">
    <HeartForm
      :action_link="heartActionLink"
      :hfmethod="heartFormMethod"
      input_id="product_id"
      input_name="product_name"
      :input_value="product.id"
      :mobile="true"
      description="x"
    />
  </div>
</template>
<script>
import HeartForm from "@/components/Product/Info/Desktop/HeartForm";
export default {
  name: "ProductMobileLike",
  components: { HeartForm },
  props: ["product", "isLike"],
  computed: {
    heartFormMethod: function() {
      if (this.isLike) return "put";
      else return "post";
    },
    heartActionLink: function() {
      // 구현중
      if (!this.isLike) return "/product_like";
      return "";
    }
  }
};
</script>
