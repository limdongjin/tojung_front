<template>
  <li class="d-block">
    <FbShare :webUrl="currentUrl" classes="sns-icon d-block mx-auto mb-3" />
  </li>
</template>
<script>
import FbShare from "@/components/SocialUtil/FbShare";

export default {
  name: "ProductDesktopFbShare",
  components: { FbShare },
  props: ["link"],
  computed: {
    currentUrl() {
      return `https://tojung.me/${this.$route.path}`;
    }
  }
};
</script>
