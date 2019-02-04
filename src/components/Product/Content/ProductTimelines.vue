<template>
  <div
    class="tab-pane fade px-4 pt-3 pb-5"
    id="timeline"
    role="tabpanel"
    aria-labelledby="timeline-tab"
  >
    <h4 class="text-center font-16 mb-4">
      <span class="petit-num"> {{ send_count }} </span>청원
    </h4>
    <div
      class="ovals d-flex justify-content-center font-weight-bold mb-lg-4 font-10"
    >
      <div class="oval cons"></div>
      <p class="mr-3">반대</p>
      <div class="oval pros"></div>
      <p class="mr-3">찬성</p>
      <div class="oval no_respond"></div>
      <p class="mr-3">미응답</p>
      <div class="oval neutral"></div>
      <p>중립응답</p>
    </div>
    <!-- 의원 사진 -->
    <div class="maker_cards container px-0">
      <div class="row mx-0">
        <div
          class="col-4 col-md-2 maker_card text-white font-weight-bold"
          v-for="maker_response in maker_responses"
          v-bind:style="{
            backgroundImage: `url(${makerImage(maker_response)})`
          }"
        >
          <a :href="maker_url(maker_response)" class="d-block text-white h-100">
            <div
              class="maker_card_info text-center font-10"
              :style="makerResponseCardStyle(maker_response)"
            >
              <p class="mt-2 mt-lg-0 mb-0 ">
                {{ maker_response.name }}
              </p>
              <p class="mb-2" v-html="htmlSafe(maker_response.maker.desc2)"></p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- // 의원 사진 -->
    <pre class="font-12 mt-3">
내 인생으로 배송받기를 누르시면,
            심사를 담당하는 의원에게 이메일 청원이 보내집니다.
            의원실의 자세한 입장을 보고싶다면 사진을 눌러주세요.</pre
    >

    <div class="banner-text mt-5 mb-3">
      <hr class="mb-4 banner-line ml-0" />
      <pre class="font-22 font-weight-bold">
투정을 통해
놀라운 변화들이
일어나고 있습니다.</pre
      >
      <hr class="mt-4 banner-line ml-0" />
    </div>

    <div class="time-row">
      <div class="time-post mb-4" v-for="timeline in timelines">
        <p class="date font-18 mb-0">
          {{ timeline.issued_at }}
        </p>
        <pre class="font-18 text-right" v-html="htmlSafe(timeline.name)"></pre>
        <img
          v-lazy="timelineImageUrl(timeline)"
          width="240"
          class="d-block ml-auto lazy-blur"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductTimelines",
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    timelines: function() {
      return this.product.product_timelines;
    },
    maker_responses: function() {
      return this.product.maker_responses;
    },
    send_count: function() {
      return this.product.send_count;
    }
  },
  methods: {
    makerImage(maker_response) {
      return maker_response.maker.image0;
    },
    timelineImageUrl: function(timeline) {
      if (!timeline || !timeline.image0) return;
      return timeline.image0.url;
    },
    htmlSafe: function(content) {
      var res = content;
      for (var i = 0; i < content.length; i++) {
        res = res.replace("\r\n", "<br />");
      }
      var res2 = res;
      for (var j = 0; j < res.length; j++) {
        res2 = res2.replace("\n", "<br />");
      }
      return res2;
    },
    makerResponseBackgroundImage: function(maker_response) {
      // alert(maker_response.maker.image0)
      return `background-image: url(${maker_response.maker.image0});`;
    },
    maker_url: function(maker_response) {
      return `/maker/${maker_response.id}`;
    },
    makerResponseCardStyle: function(maker_response) {
      let card_style;
      if (maker_response.response_type === "무응답")
        card_style = "background-color: rgba(184, 155, 117, 0.6);";
      else if (maker_response.response_type === "반대")
        card_style = "background-color: rgba(148, 54, 66, 0.6);";
      else if (maker_response.response_type == "찬성")
        card_style = "background-color: rgba(106, 150, 141, 0.6);";
      else card_style = "background-color: rgba(106, 51, 80, 0.6);";
      return card_style;
    }
  }
};
</script>

<style scoped></style>
