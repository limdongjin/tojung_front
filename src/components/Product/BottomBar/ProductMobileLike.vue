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
    heartFormMethod: function() {
      if (this.isLike) return "put";
      else return "post";
    },
    likeId: function() {
      return this.product.like_id;
    },
    isLike: function() {
      return this.likeId && this.likeId !== -1;
    },
    heartActionLink: function() {
      if (this.isLike) return `/product_like/${this.likeId.toString()}`;
      return "/product_like";
    }
  }
};
</script>
