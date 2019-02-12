<template>
  <div id="HeartMobileBox">
    <HeartForm
      :action_link="heartActionLink"
      :hfmethod="heartFormMethod"
      input_id="product_id"
      input_name="product_id"
      :input_value="product.id"
      :mobile="true"
      description="x"
      :like_id="likeId"
      :like_status="likeStatus"
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
    likeStatus: function(){
      return this.product.is_product_like
    },
    likeId: function() {
      console.log("like id!")
      console.log(this.product.like_id)
      return this.product.like_id;
    },
    isLike: function() {
      return this.likeId && this.likeId !== -1;
    },
    heartActionLink: function() {
      if (this.isLike) return `/api/product_like/${this.likeId.toString()}`;
      return "/api/product_like";
    }
  }
};
</script>
