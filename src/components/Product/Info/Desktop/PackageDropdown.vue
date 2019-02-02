<template>
  <div>
    <div class="dropdown my-3 w-100" id="myDropdown">
      <button
        aria-expanded="false"
        aria-haspopup="true"
        class="d-flex justify-content-between btn btn-white text-left dropdown-toggle d-flex justify-content-center"
        data-toggle="dropdown"
        id="packageButton"
        type="button"
      >
        <div class="package-info" id="package-default">
          <span>패키지 선택하기</span>
        </div>
        <span class="glyphicon glyphicon-chevron-down"> </span>
      </button>

      <ul aria-labelledby="packageButton" class="dropdown-menu w-100 py-0">
        <li
          v-for="productPackage in packages"
          :class="packageClasses(productPackage)"
          v-on:click="packageDropdown($event, product.id, productPackage)"
        >
          <div class="soldout-text" v-if="isSoldOut(productPackage)">
            품절
          </div>
          <img
            :src="productPackage.image0"
            class="package-item mx-3 my-3 hide"
            :id="productPackage.id"
          />

          <div class="package-info w-100 d-flex justify-content-between">
            <div class="package-info-1 d-flex">
              <p class="mb-0 font-weight-bold mr-3 package-name">
                {{ productPackage.name }}
              </p>
              <p class="mb-0 mr-3">
                <!--<%= package.content.gsub("\r\n", "<br/>").html_safe %>-->
                {{ productPackage.content }}
              </p>
            </div>
            <p class="mb-0 font-red font-weight-bold package-price">
              <!--<%= package.price %>원-->
              {{ productPackage.price }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <li
      class="d-flex"
      id="packageContainer"
      v-for="productPackage in packages"
    ></li>
  </div>
</template>
<script>
export default {
  name: "PackageDropdown",
  data: function() {
    return {
      packages: this.product.packages
    };
  },
  props: ["product"],
  methods: {
    isSoldOut: function(productPackage) {
      return productPackage.remain_count === 0;
    },
    packageClasses: function(productPackage) {
      if (this.isSoldOut(productPackage))
        return "d-flex productPackage-box bg-overlay soldout-item";
      else return "d-flex productPackage-box";
    },
    packageDropdown: function(event, product_id, productPackage) {
      if (this.isSoldOut(productPackage)) return;

      let x = $(event.target).html();
      $("#packageButton").html(x);
      $("#packageContainer").html(x);
      $("#packageContainer").addClass("package-box2 my-3");
      $("#packageContainer > .package-info").removeClass("d-flex");
      $("#packageContainer > .package-info").addClass("my-3");
      $(
        "#packageContainer > .package-info > .package-info-1 > .package-name"
      ).unwrap();
      $("#packageContainer > .package-item")
        .removeClass("hide")
        .addClass("show");
      var pid = $("#packageButton").children()[0].id;
      $("#pay-link-lg").attr(
        "href",
        `/product_order/new?product_id=${product_id.toString()}&package_id=${pid}`
      );
    }
  }
};
</script>
