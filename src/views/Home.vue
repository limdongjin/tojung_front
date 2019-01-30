<template>
  <div>
    <Carousel />
    <div class="wrapper mt-0 loaded">
      <!-- Category -->
      <Categories />
      <!-- // Category -->
      <!-- Category Tag -->
      <div class="pro-tag text-white"><p id="category-tag">HOT</p></div>
      <!-- Category tag -->
      <!--<%= render 'thumb'%>-->

      <!--<%#= render 'md_contents' %> &lt;!&ndash; 베도 md contents partial.  &ndash;&gt;-->

      <!--<%=  render 'md_contents_old' %> &lt;!&ndash; 기존 md contents &ndash;&gt;-->

      <!--<%=render 'bottom_bar'%>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import Categories from "@/components/Categories.vue"; // @ is an alias to /src

@Component({
  components: {
    Categories,
    Carousel,
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
