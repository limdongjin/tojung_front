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
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    isLike: function() {
      if (!this.product) return;
      return this.product.isLike;
    },
    heartFormMethod: function() {
      if (this.isLike) return "put";
      else return "post";
    },
    likeId: function() {
      // 구현중
      return 1;
    },
    heartActionLink: function() {
      if (!this.isLike) return "/product_like";
      if (this.likeId) return `/product_like/${this.likeId.toString()}`;
      return "/product_like";
    }
  }
};
</script>
