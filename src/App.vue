<template>
  <div id="app" class="body_css">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/HeaderMenu/Navbar";
import Header from "@/components/HeaderMenu/Header";
import Footer from "@/components/Footer/Footer";
// import
export default {
  components: { Footer, Header }
};
</script>
