<template>
  <nav id="shareBar" class="bg-white visible-xs-flex">
    <section class="share w-100">
      <!--<a id="kakao-link-btn" href='javascript:createlink("<%= @product.name.gsub("'", "") %>","<%= @product.subname %>","<%= @cdn_url-->
      <!--+ @product.image0.path if @product.image0.path != nil%>","<%= request.base_url + request.original_fullpath-->
      <!--%>");'>-->
      <!--<%=image_tag("kakao.svg", class: "kakao_icon d-block mx-auto mb-3") %>-->
      <!--</a>-->
      <!--<a href="https://www.facebook.com/sharer/sharer.php?u=<%= request.base_url + request.original_fullpath %>&amp;src=sdkpreparse">-->
      <!--<%=image_tag("fb.svg", class: "d-block mx-auto mb-3")%></a>-->
      <nav id="shareBar" class="bg-white visible-xs-flex">
        <section class="share w-100">
          <!--<a id="kakao-link-btn"-->
          <!--href='javascript:createlink("<%= @product.name.gsub("'", "") %>","<%= @product.subname %>","<%= @cdn_url + @product.image0.path  if @product.image0.path != nil%>","<%= request.base_url + request.original_fullpath %>");'>-->
          <!--<%=image_tag("kakao.svg", class: "kakao_icon d-block mx-auto mb-3") %>-->
          <!--</a>-->
          <a :href="fbShareLink">
            <img :src="fbSvg" class="d-block mx-auto mb-3" />
          </a>
        </section>
      </nav>
    </section>
  </nav>
</template>
<script>
export default {
  name: "ProductMobileShareBar",
  computed: {
    fbSvg: function() {
      return require("@/assets/fb.svg");
    },
    fbShareLink() {
      return `https://www.facebook.com/sharer/sharer.php?u=https://tojung.me${
        this.$route.query.page
      }&amp;src=sdkpreparse`;
    }
  }
};
</script>
