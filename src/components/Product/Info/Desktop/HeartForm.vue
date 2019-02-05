<template>
  <form
    :action="action_link"
    accept-charset="UTF-8"
    method="post"
    :class="formClasses"
  >
    <input name="utf8" type="hidden" value="✓" />
    <input type="hidden" name="_method" :value="hfmethod" v-if="hfmethod === 'put'">
    <input
      type="hidden"
      :name="input_name"
      :id="input_id"
      :value="input_value"
    />
    <button :class="buttonClasses" :id="buttonIds">
      <img :src="heartSvg" :class="heartClasses" />
      {{ heartDescription }}
    </button>
  </form>
</template>
<script>
export default {
  name: "HeartForm",
  props: [
    "action_link",
    "hfmethod",
    "input_name",
    "input_id",
    "input_value",
    "mobile",
    "description"
  ],
  computed: {
    formClasses: function() {
      if (this.mobile) return "ml-5 text-white";
      else return "";
    },
    heartSvg: function() {
      if (this.hfmethod === "put") return require("@/assets/heart-red.svg");
      if (this.mobile) return require("@/assets/heart-white.svg");
      return require("@/assets/heart.svg");
    },
    buttonClasses: function() {
      if (!this.mobile) return "share-button heart";
      return "heart-mobile";
    },
    buttonIds: function() {
      if (!this.mobile) return "Heart";
      return "heartMobile";
    },
    heartClasses: function() {
      if (!this.mobile) return "heart-img";
      return "heart-img-mobile";
    },
    heartDescription: function() {
      if (!this.mobile) return this.description;
      else return undefined;
    }
  }
};
</script>
