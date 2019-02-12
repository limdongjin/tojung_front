<template>
  <form
    :action="form.action_link"
    accept-charset="UTF-8"
    method="post"
    :class="formClasses"
    @submit.prevent="submitHeart"
  >
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
  props: [
    "action_link",
    "hfmethod",
    "input_name",
    "input_id",
    "input_value",
    "mobile",
    "description",
    "like_id",
    "like_status"
  ],
  data() {
    return {
      form: {
        action_method: this.hfmethod,
        input_name: this.input_name,
        utf8: "✓",
        input_value: this.input_value,
        action_link: this.action_link,
        product_like_id: this.like_id
      },
      status: undefined,
      like_description: undefined
    };
  },
  computed: {
    likeStatus: function() {
      if (this.status === undefined) return this.like_status;
      return this.status;
    },
    action_method: function() {
      if (this.like_id && this.like_id !== -1) return "put";
      return "post";
    },
    formClasses: function() {
      if (this.mobile) return "ml-5 text-white";
      return "";
    },
    heartSvg: function() {
      if (this.action_method === "put" && this.likeStatus === true)
        return require("@/assets/heart-red.svg");
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
      if (!this.mobile && this.like_description) return this.like_description;
      if (!this.mobile) return this.description;
      return undefined;
    },
    actionLink: function() {
      let host = this.$apiHost;
      let action_link = "/api/product_like";
      if (this.like_id) action_link += "/" + this.like_id;
      return `${host}${action_link}`;
    }
  },
  methods: {
    async submitHeart() {
      let config = await {
        headers: {
          "Content-Type": "application/json",
          "X-USER-TOKEN": this.$store.getters.token
        }
      };
      let input_value = await this.input_value;
      let params = await {
        _method: this.action_method,
        [this.form.input_name]: input_value,
        utf8: this.form.utf8,
        product_like_id: this.like_id
      };
      console.log(params);
      await console.log(params);
      if (this.action_method === "post") {
        await axios
          .post(this.actionLink, params, config)
          .then(res => {
            this.form.action_method = "put";
            this.form.action_link += "/" + res.data.product_like.pop().id;
            this.form.product_like_id = res.data.product_like.pop().id;
            this.status = true;
            this.like_description = "찜 취소하기";
            console.log(res);
          })
          .catch(e => {
            if (e.response.status === 401) {
              location.href = "/users/sign_in";
            }
          });
      } else {
        await axios
          .put(this.actionLink, params, config)
          .then(res => {
            this.status = res.data.product_like.status;
            if (this.status === true) this.like_description = "찜 취소하기";
            else this.like_description = "찜 하기";
          })
          .catch(e => {
            if (e.response.status === 401) {
              location.href = "/users/sign_in";
            }
          });
      }
    }
  }
};
</script>
