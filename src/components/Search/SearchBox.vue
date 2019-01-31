<template>
  <form
    class="px-3 py-3"
    action="/home/search"
    accept-charset="UTF-8"
    method="get"
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
        placeholder="검색"
        class="search-form my-auto"
      />
    </div>
  </form>
</template>
<script>
export default {
  name: "SearchBox"
};
</script>
