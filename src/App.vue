<template>
  <div id="app" class="body_css">
    <Header />
    <div class="loaded" v-if="!isLoaded">
      <atom-spinner :animation-duration="1000" :size="500" :color="'#ff1d5e'" />
    </div>
    <div class="loaded">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/HeaderMenu/Header";
import Footer from "@/components/Footer/Footer";
import { AtomSpinner } from "epic-spinners";

export default {
  components: { Footer, Header, AtomSpinner },
  data: function() {
    return {
      isLoaded: false
    };
  },
  mounted: function() {
    this.isLoaded = true;
  }
};
</script>

<style>
/*style="text-decoration: none;"*/
</style>
