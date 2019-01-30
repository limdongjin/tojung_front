<template>
  <div class="bg-white" id="dismiss">
    <button class="button-none bg-white" id="dismiss-button" type="button">
      <!--<%=image_tag(@cdn_url+"exit.svg", class: "bg-white", id: "exit-button")%>-->
      <img
        src="https://d1eq7v76s8dt2n.cloudfront.net/exit.svg"
        class="bg-white"
        id="exit-button"
      />
    </button>
  </div>
</template>
<script>
export default {
  name: "ExitButton"
};
</script>
