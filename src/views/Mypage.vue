<template>
  <div class="wrapper">
    <div class="mypage">
      <section class="profile d-flex px-3 py-3">
        <!-- Desktop -->
        <div class="profile-img-box">
          <img :src="userImage" class="profile-img visible-lg" />
        </div>
        <!-- // Desktop -->
        <div class="mylog font-12 font-lg-14 my-auto justify-content-around">
          <!-- Desktop -->
          <div class="user-email-box visible-lg my-3 d-flex">
            <h4 class="font-30 user-email ml-3 mb-0">
              {{ user.email }}
            </h4>
            <a
              href="/users/update"
              class="d-block text-center mypage-edit font-14 ml-3 mt-1"
              >개인정보 수정</a
            >
            <a
              href="/users/edit"
              class="d-block text-center mypage-edit font-14 ml-3 mt-1"
              v-if="!user.provider"
            >
              비밀번호 수정
            </a>
          </div>
          <!-- // Desktop -->
          <div class="d-flex my-md-3" id="mypage-mylogbox">
            <div class="mylog-box mx-2 ml-md-3 mr-md-4 text-center">
              <p class="mb-0 font-weight-bold font-18 visible-xs">
                {{ user.ordered_product_count }}
              </p>
              <p class="text-grey mb-2 font-weight-bold">
                인생법안
                <span
                  class="font-18 ml-md-1 font-weight-bold visible-lg font-black"
                >
                  {{ user.ordered_product_count }}
                </span>
              </p>
            </div>
            <div class="mylog-box mx-2 mr-md-4 text-center">
              <p class="mb-0 font-weight-bold font-18 visible-xs">
                {{ user.liked_product_count }}
              </p>
              <p class="text-grey mb-2 font-weight-bold">
                관심법안
                <span
                  class="font-18 ml-md-1 font-weight-bold visible-lg font-black"
                >
                  {{ user.liked_product_count }}
                </span>
              </p>
            </div>
            <div class="mylog-box mx-2 text-center">
              <p class="mb-0 font-weight-bold font-18 visible-xs">0</p>
              <p class="text-grey mb-2 font-weight-bold">
                새로운 소식
                <span
                  class="font-18 ml-md-1 font-weight-bold visible-lg font-black"
                  >0</span
                >
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <a
              href="/user/update"
              class="mx-1 d-inline-block text-center mypage-edit font-14 visible-xs"
              >개인정보 수정</a
            >
            <a
              href="/users/edit"
              class="mx-1 d-inline-block text-center mypage-edit font-14 visible-xs"
              v-if="!user.provider"
            >
              비밀번호 수정
            </a>
          </div>
        </div>
        <img :src="userImage" class="profile-img visible-xs" />
      </section>
      <hr />
      <div class="container">
        <div class="row" id="my-product-row">
          <div
            class="my-product-card text-center col-4 col-md-3 px-0 mx-md-3 my-md-3"
            v-for="product_order of user.product_orders"
          >
            <a
              :href="product_link(product_order.product)"
              class="d-block h-100 w-100"
            >
              <div
                class="my-product-card-body text-white h-100t"
                :style="packageImageBackground(product_order.package)"
              >
                <div
                  class="my-product-card-text-wrapper py-lg-3 d-flex flex-column justify-content-center h-100"
                >
                  <h4 class="font-12 font-weight-bold">
                    {{ product_order.product.name }}
                  </h4>
                  <pre class="font-12 text-white text-center mb-0">
                    {{ product_order.package.name }}
                    {{ totalPrice(product_order) }}원 후원
                    {{ product_order.product.goods_dilivery_date_s }} 배송예정
                    {{ product_order.status }}
                </pre
                  >
                </div>
              </div>
            </a>
          </div>
          <div
            v-for="product_like of user.product_likes"
            class="my-product-card col-4 text-center col-4 col-md-3 px-0 mx-md-3 my-md-3"
            :style="productImageBackground(product_like.product)"
          >
            <a :href="product_link(product_like.product)" class="d-block h-100">
              <img :src="layerPng" class="layer-img w-100" />
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
    <BottomBar />
  </div>
</template>

<script>
import BottomBar from "@/components/Home/BottomBar";
export default {
  name: "Mypage",
  components: { BottomBar },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    layerPng() {
      return require("@/assets/layer.png");
    },
    userImage() {
      if (this.user.image0 && this.image0.url) return this.user.image0;
      return require("@/assets/default.png");
    }
  },
  methods: {
    product_link(product) {
      return "/product/" + product.id;
    },
    packageImageBackground(ppackage) {
      if (!ppackage.image0) return "";
      return `background-image: url(${ppackage.image0.url})`;
    },
    productImageBackground(product) {
      if (!product.image0) return "";
      return `background-image: url(${product.image0.url});`;
    },
    totalPrice(product_order) {
      if (!product_order.product_order_detail) return;
      return product_order.product_order_detail.total_price;
    }
  }
};
</script>

<style scoped></style>
