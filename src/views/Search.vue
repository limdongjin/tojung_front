<template>
  <div class="wrapper">
    <SearchBox />

    <h4 class="font-16 font-lg-24 px-3 py-3" v-if="productsResult.length !== 0">
      {{ term }}(으)로 검색하신 결과입니다.
    </h4>
    <h4 class="font-16 font-lg-24 px-3 py-3" v-else>
      {{ term }}(으)로 검색하신 결과를 찾을 수 없습니다.
    </h4>

    <ResultsView :products-result="productsResult" />
  </div>
</template>

<script>
import SearchBox from "@/components/Search/SearchBox";
import ResultsView from "@/components/Search/ResultsView";

export default {
  name: "Search",
  components: { ResultsView, SearchBox },
  data: function() {
    return {
      term: this.$route.query.term,
      productsResult: [
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image0:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image0:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image0:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image0:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 1,
          title: "제품 1",
          subname: "서브 1",
          image0:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 112,
          funded_money: 12111,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        },
        {
          id: 2,
          title: "제품 2",
          subname: "서브 2",
          image0:
            "https://d1eq7v76s8dt2n.cloudfront.net/uploads/product/image0/8/1-min.jpeg",
          funded_count: 231,
          funded_money: 123113,
          funding_day: "ㅁㄴㅇㅁㄴㅇㅁ"
        }
      ]
    };
  }
};
</script>
