<template>
  <nav id="packageBar" class="bg-white visible-xs">
    <div class="dismiss">
      <h4 class="font-14 font-weight-bold text-center my-3 package-title">
        패키지 선택하기
      </h4>
      <slick
        ref="slick"
        :options="slickOptions"
        class="package-row scrolling-wrapper"
      >
        <div
          v-for="productPackage in packages"
          :class="packageClasses(productPackage)"
        >
          <div
            class="soldout-text-mobile font-12"
            v-if="isSoldOut(productPackage)"
          >
            품절
          </div>
          <img
            :src="productPackage.image0.url"
            class="package-img overlay-behind d-block mx-auto"
            :id="productPackage.id"
            v-on:click="packageImgClick"
          />
          <div class="card-body2 overlay-behind text-center py-1 font-14">
            <p class="font-red mb-1 product-money">
              {{ productPackage.price }}원
            </p>
            <h5 class="text-black font-weight-bold mb-1 font-14" lang="en">
              {{ productPackage.name }}
            </h5>
            <pre class="font-12 mb-2 package-content">
                <!--<%= package.content.gsub("\r\n", "<br/>").html_safe %>-->
               {{ productPackage.content }}
            </pre>
          </div>
        </div>
      </slick>
    </div>
  </nav>
</template>

<script>
import Slick from "vue-slick";

export default {
  name: "PackageBar",
  components: { Slick },
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    packages: function() {
      if (!this.product) return;
      return this.product.packages;
    }
  },
  mounted() {},
  beforeMount() {
    console.log("mount!");
  },
  beforeUpdate() {
    if (this.$refs.slick) {
      this.$refs.slick.destroy();
    }
  },
  updated() {
    this.$nextTick(function() {
      if (this.$refs.slick) {
        this.$refs.slick.create(this.slickOptions);
      }
    });
  },
  data() {
    return {
      slickOptions: {
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 5
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 4
            }
          },
          {
            breakpoint: 330,
            settings: {
              arrows: false,
              slidesToShow: 3
            }
          }
        ]
      }
    };
  },
  // All slick methods can be used too, example here
  methods: {
    packageImgClick(event) {
      // setTimeout(() => {
        // console.log(this.$refs.slick.$el.getElementsById('slick-slide-control30'));
        // console.log("gogo")
        // console.log($('#slick-slide-control31'))
        // if($)
        // $('#slick-slide-control30')
      // },30)
      // console.log(event.target.classList.remove('d-block'))
      if (event.target.classList.contains("border-red")) {
        event.target.classList.remove("border-red");
      } else {
        setTimeout(() => {
          this.$refs.slick.$el
            .getElementsByClassName("package-img")
            .forEach(item => {
              item.removeClass("border-red");
            });
        }, 200);
        event.target.classList.add("border-red");
        // event.target.removeClass('border-red')
      }
      var pid = event.target.id;
      var url = window.location.href;
      var product_id = url.substr(url.indexOf("product/") + 8);
      $(".pay-link").attr(
        "href",
        "/product_order/new?product_id=" + product_id + "&package_id=" + pid
      );

      // 패키지 버튼 깜빡깜빡
      var count = 0;
      var refresh = setInterval(function() {
        ++count;
        // this.doBlink();
        $(".pay-link").toggleClass("hidden0");
        if (count >= 4) {
          clearInterval(refresh);
        }
      }, 300);
    },
    isSoldOut: function(productPackage) {
      return productPackage.remain_count === 0;
    },
    packageClasses: function(productPackage) {
      return this.isSoldOut(productPackage)
        ? "card bg-overlay rounded-0"
        : "card bg-white z-1";
    },
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick();
    }
  }
};
</script>

<style scoped></style>
