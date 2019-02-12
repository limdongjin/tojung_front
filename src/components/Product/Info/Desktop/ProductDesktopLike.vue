<template>
  <div class="dropdown-share" id="dropdownShare">
    <HeartForm
      :action_link="heartActionLink"
      :hfmethod="heartFormMethod"
      input_id="product_id"
      input_name="product_id"
      :input_value="product.id"
      :mobile="false"
      :description="description"
      :like_id="likeId"
      :like_status="likeStatus"
    />
  </div>
</template>
<script>
import HeartForm from "@/components/Product/Info/Desktop/HeartForm";

export default {
  name: "ProductDesktopLike",
  components: { HeartForm },
  computed: {
    product() {
      return this.$store.getters.product;
    },
    description: function() {
      let description;
      description = this.likeStatus === true ? "찜 취소하기" : "찜하기";
      return description;
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
    likeStatus: function(){
      return this.product.is_product_like
    },
    heartActionLink: function() {
      if (this.isLike) return `/api/product_like/${this.likeId.toString()}`;
      return "/api/product_like";
    }
  }
};
</script>
