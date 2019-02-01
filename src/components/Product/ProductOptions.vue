<template>
  <div class="container-fluid">
    <div class="row">
      <!-- 상품들 -->
      <div
        class="col-6 col-md-3 col-lg-3 px-0"
        v-for="product_option in product_options"
      >
        <div class="pro-card">
          <progressive-img
            src="https://d1eq7v76s8dt2n.cloudfront.net/email.png"
            placeholder="https://d1eq7v76s8dt2n.cloudfront.net/email.png"
            class="w-100"
          ></progressive-img>
          <progressive-img
            :src="product_option.image"
            :placeholder="product_option.image"
            class="desc-pro-img"
          ></progressive-img>
          <div class="card-body2 py-4 text-center">
            <h4 class="pro-num mb-2"><%= product_option.name %></h4>
            <p class="font-grey font-12 mb-4">
              {{ packageNamesStr }}패키지에 포함
            </p>
            <pre class="font-14 font-weight-bold mb-2">
              <!--<%= product_option.content.gsub("\r\n", "<br/>").html_safe %> -->
              {{ product_option.content }}
            </pre>
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
  props: ["product_options"],
  methods: {
    product_option_url: function(product_option) {
      return `/product_option/${product_option.id}`;
    }
  },
  computed: {
    packageNamesStr: function() {
      let res = "";
      if(this.product_names === undefined) return res
      this.product_option.package_names.forEach(name => {
        res += name + " ";
      });
      return res;
    }
    // productOptionContent: function () {
    //   return this.product_option
    // }
  }
};
</script>
