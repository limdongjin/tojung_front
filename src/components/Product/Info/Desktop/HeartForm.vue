<template>
  <form
    :action="action_link"
    accept-charset="UTF-8"
    method="post"
    :class="formClasses"
    @submit.prevent="submitHeart"
  >
    <input v-model="form.utf8" name="utf8" type="hidden" />
    <input v-model="form.action_method" type="hidden" name="_method" />

    <input
      type="hidden"
      :name="input_name"
      :id="input_id"
      v-model="form.input_value"
    />
    <button :class="buttonClasses" :id="buttonIds">
      <img :src="heartSvg" :class="heartClasses" />
      {{ heartDescription }}
    </button>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "HeartForm",
  // model: {
  // },
  data() {
    return {
      form: {
        action_method: this.hfmethod,
        input_name: this.input_name,
        utf8: "✓",
        input_value: this.input_value
      }
    };
  },
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
    },
    actionLink() {
      let host = "https://tojung.me";
      return `${host}${this.action_link}`;
    }
  },
  methods: {
    submitHeart() {
      axios
        .post(this.actionLink, {
          params: {
            _method: this.form.action_method,
            input_name: this.form.input_name,
            utf8: this.form.utf8,
            input_value: this.form.input_value
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(e => console.log(e.response));
    }
  }
};
</script>
