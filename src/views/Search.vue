<template>
  <div class="wrapper">
    <SearchBox @productsSearchResult="result" @term="getTerm" />

    <h4
      class="font-16 font-lg-24 px-3 py-3"
      v-if="productsSearchResult.length !== 0"
    >
      {{ term }}(으)로 검색하신 결과입니다.
    </h4>
    <h4 class="font-16 font-lg-24 px-3 py-3" v-else>
      {{ term }}(으)로 검색하신 결과를 찾을 수 없습니다.
    </h4>
    <ResultsView v-model="productsSearchResult" />
  </div>
</template>

<script>
import SearchBox from "@/components/Search/SearchBox";
import ResultsView from "@/components/Search/ResultsView";

export default {
  name: "Search",
  components: {
    ResultsView,
    SearchBox
  },
  data() {
    return {
      productsSearchResult: [],
      term: ""
    };
  },
  methods: {
    result(childEmitResult) {
      this.productsSearchResult = childEmitResult;
      return this.productsSearchResult;
    },
    getTerm(childEmitResult) {
      this.term = childEmitResult;
      return this.term;
    }
  }
};
</script>
