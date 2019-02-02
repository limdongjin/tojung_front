<template>
  <li class="d-block">
    <!--<a href='javascript:createlink("<%= @product.name.gsub("' id="kakao-link-btn"", "")-->
    <!--%>","<%= @product.subname %>","<%= @cdn_url + @product.image0.path if-->
    <!--@product.image0.path != nil%>",-->
    <!--"<%= request.base_url + request.original_fullpath %>");'-->
    <!--&gt;-->
    <a>
      <img :src="kakaoSvg" class="sns-icon d-block mx-auto my-3" />
    </a>
  </li>
</template>
<script>
export default {
  name: "ProductDesktopKakaoShare",
  computed: {
    kakaoSvg: function() {
      return require("@/assets/kakao.svg");
    }
  }
};
</script>
