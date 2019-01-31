<template>
  <nav
    class="navbar bottom-bar visible-xs-flex fixed-bottom text-center bg-light align-items-center px-3"
  >
    <a href="/home/brand" class="d-block text-dark icon-box fisrt-icon">
      <img
        src="https://d1eq7v76s8dt2n.cloudfront.net/brand.svg"
        class="bottom-icon"
      />
      <p class="font-12 mb-0" lang="en">BRAND</p>
    </a>
    <a href="/" class="d-block text-dark icon-box">
      <img
        src="https://d1eq7v76s8dt2n.cloudfront.net/home.svg"
        class="bottom-icon"
      />
      <p class="font-12 mb-0" lang="en">HOME</p>
    </a>
    <a href="/home/mypage" class="d-block text-dark icon-box">
      <img
        src="https://d1eq7v76s8dt2n.cloudfront.net/my.svg"
        class="bottom-icon"
      />
      <p class="font-12 mb-0" lang="en">MY</p>
    </a>
  </nav>
</template>
<script>
export default {
  name: "BottomBar"
};
</script>
