<template>
  <ul
    class="category-list d-flex flex-wrap justify-content-center mb-0"
    id="categoryList"
  >
    <a
      href="/categorize/7"
      data-remote="true"
      class="category-keyword cate-red"
      onclick="cate_change(this);"
      >HOT</a
    >
    <a
      href="/categorize/8"
      data-remote="true"
      class="category-keyword"
      onclick="cate_change(this);"
      >NEW</a
    >
    <a
      href="/categorize/1"
      data-remote="true"
      class="category-keyword"
      onclick="cate_change(this);"
      >인권/성평등</a
    >
    <a
      href="/categorize/2"
      data-remote="true"
      class="category-keyword"
      onclick="cate_change(this);"
      >동물</a
    >
    <a
      href="/categorize/3"
      data-remote="true"
      class="category-keyword"
      onclick="cate_change(this);"
      >육아/교육</a
    >
    <a
      href="/categorize/4"
      data-remote="true"
      class="category-keyword"
      onclick="cate_change(this);"
      >안전/환경</a
    >
    <a
      href="/categorize/5"
      data-remote="true"
      class="category-keyword"
      onclick="cate_change(this);"
      >보건/복지</a
    >
    <a
      href="/categorize/6"
      data-remote="true"
      class="category-keyword"
      onclick="cate_change(this);"
      >외교/통일/국방</a
    >
  </ul>
</template>
<script>
export default {
  name: "Categories",
  methods: {
    cate_change: function(item) {
      $(".category-keyword")
        .filter(".cate-red")
        .removeClass("cate-red");
      $(item).addClass("cate-red");
      var x = $(item).html();
      $("#category-tag").html(x);
    }
  }
};
</script>
