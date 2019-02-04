<template>
  <div class="container-fluid">
    <div class="row">
      <!-- 상품들 -->
      <div
        class="col-6 col-md-3 col-lg-3 px-0"
        v-for="product_option in product_options"
      >
        <div class="pro-card">
          <img
            v-lazy="product_option.image0.url"
            class="desc-pro-img lazy-blur"
          />
          <div class="card-body2 py-4 text-center">
            <h4 class="pro-num mb-2">
              {{ product_option.name }}
            </h4>
            <p class="font-grey font-12 mb-4">
              {{ packageNamesStr(product_option) }}패키지에 포함
            </p>
            <pre
              class="font-14 font-weight-bold mb-2"
              v-html="htmlSafe(product_option.content)"
            ></pre>
            <p class="cost font-12 font-grey">
              <span class="font-14 font-weight-bold text-dark">
                {{ product_option.price }} </span
              >원~
            </p>
            <a
              :href="product_option_url(product_option)"
              class="pro-link font-14 font-weight-bold d-block"
              >자세히 보기></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductOptions",
  mounted() {
    console.log("opt!");
    console.log(this.$store.getters.product.product_options);
  },
  computed: {
    product_options: function() {
      console.log("opt");
      console.log(this.$store.getters.product);
      return this.$store.getters.product.product_options;
    }
  },
  methods: {
    product_option_url: function(product_option) {
      return `/product_option/${product_option.id}`;
    },
    packageNamesStr: function(product_option) {
      let res = "";
      if (product_option.package_names === undefined) return res;
      product_option.package_names.forEach(name => {
        res += name + " ";
      });
      return res;
    },
    htmlSafe: function(content) {
      var res = content;
      for (var i = 0; i < content.length; i++) {
        res = res.replace("\r\n", "<br />");
      }
      return res;
    }
  }
};
</script>
