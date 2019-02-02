<template>
  <div class="youtubeWrap mb-4">
    <iframe
      width="560"
      height="315"
      :src="youtubeUrl"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "YoutubeIframe",
  props: ["youtubeUrl"]
};
</script>
