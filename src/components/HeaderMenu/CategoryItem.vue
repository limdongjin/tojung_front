<template>
  <div class="col-3">
    <div class="sidebar-category bg-white text-center">
      <a class="d-block h-100" :href="link">
        <img :src="icon_link" class="category-icon" />
        <p class="category-title" lang="en">{{ name }}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryItem",
  props: ["icon_name", "name", "link"],
  data: function() {
    return {
      icon_link:
        "https://d1eq7v76s8dt2n.cloudfront.net/" + this.icon_name.toString()
    };
  }
};
</script>
