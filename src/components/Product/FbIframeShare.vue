<template>
  <div class="share text-center mb-4">
    <center>
      <iframe
        src=""
        width="140"
        height="80"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </center>
  </div>
</template>
<script>
export default {
  name: "FbIframeShare",
  props: ["url"]
};
</script>
