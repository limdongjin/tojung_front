<template>
  <div class="dropdown-share" id="dropdownShare">
    <HeartForm
      :action_link="heartActionLink"
      :hfmethod="heartFormMethod"
      input_id="product_id"
      input_name="product_name"
      :input_value="product.id"
      :mobile="false"
      :description="description"
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
      description = this.product.isLike === true ? "찜 취소하기" : "찜하기";
      return description;
    },
    heartFormMethod: function() {
      if (this.product.isLike) return "put";
      else return "post";
    },
    likeId: function() {
      // 구현중
      return 1;
    },
    heartActionLink: function() {
      if (!this.product.isLike) return "/product_like";
      if (this.likeId) return `/product_like/${this.likeId.toString()}`;
      return "/product_like";
    }
  }
};
</script>
