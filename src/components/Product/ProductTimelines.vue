<template>
  <div
    class="tab-pane fade px-4 pt-3 pb-5"
    id="timeline"
    role="tabpanel"
    aria-labelledby="timeline-tab"
  >
    <h4 class="text-center font-16 mb-4">
      <span class="petit-num">
        <!--<%= @maker_responses.sum(&:send_count) %> -->
        1123 </span
      >청원
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
          v-bind:style="{ backgroundImage: makerResponseBackgroundImage(maker_response)}"
        >
          <a :href="maker_url(maker_response)" class="d-block text-white h-100">
            <div
              class="maker_card_info text-center font-10"
              :style="makerResponseCardStyle(maker_response)"
            >
              <p class="mt-2 mt-lg-0 mb-0 ">
                {{ maker_response.name }}
              </p>
              <p class="mb-2">
                <!--(<%= maker_response.maker.desc2.gsub('\n','') %>)-->
                {{ maker_response.maker.desc2 }}
              </p>
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
          <!--<%= timeline.issued_at.year%>.<%= timeline.issued_at.month%>.<%= timeline.issued_at.day%>-->
          {{ timeline.issued_at }}
        </p>
        <pre class="font-18 text-right">
              <!--<%= timeline.name.gsub("\r\n", "<br />").gsub("\n", "<br />").html_safe %>-->
              {{ timeline.name }}
          </pre>
        <img :src="timeline.image0" width="240" class="d-block ml-auto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductTimelines",
  props: ["timelines", "maker_responses"],
  methods: {
    // background-image: url(<%= maker_response.maker.image0 %>);
    makerResponseBackgroundImage: function(maker_response) {
      return `url(${maker_response.maker.image0});`;
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
