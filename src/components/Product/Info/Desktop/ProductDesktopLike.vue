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
  props: ["product", "isLike"],
  computed: {
    description: function() {
      let description;
      description = this.isLike === true ? "찜 취소하기" : "찜하기";
      return description;
    },
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
