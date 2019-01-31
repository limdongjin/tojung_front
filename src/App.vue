<template>
  <div id="app" class="body_css">
    <Header />
    <div class="loaded">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/HeaderMenu/Header";
import Footer from "@/components/Footer/Footer";
export default {
  components: { Footer, Header }
};
</script>

<style>
/*style="text-decoration: none;"*/
</style>
