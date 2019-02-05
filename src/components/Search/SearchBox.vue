<template>
  <form
    class="px-3 py-3"
    :action="actionLink"
    accept-charset="UTF-8"
    method="get"
    @submit.prevent="submitSearch"
  >
    <input name="utf8" type="hidden" value="✓" />
    <div class="search-box mx-auto">
      <button class="search-btn ml-2 mt-1" type="submit">
        <i class="fas fa-search"></i>
      </button>
      <input
        type="text"
        name="term"
        id="term"
        v-model="term"
        @keyup="changeTerm"
        placeholder="검색"
        class="search-form my-auto"
        autocomplete="off"
        autofocus="autofocus"
      />
    </div>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "SearchBox",
  data() {
    return {
      term: ""
    };
  },
  computed: {
    actionLink() {
      let host = "https://tojung.me";
      return `${host}/api/search/products?term=${this.term}`;
    }
  },
  methods: {
    submitSearch() {
      axios.get(this.actionLink).then(res => {
        this.$emit("productsSearchResult", res.data.products);
        this.$emit("term", this.term);
      });
    },
    changeTerm() {
      this.submitSearch();
    }
  }
};
</script>
