<template>
  <form
    :action="form.action_link"
    accept-charset="UTF-8"
    method="post"
    :class="formClasses"
    @submit.prevent="submitHeart"
    v-model="form.action_link"
  >
    <input v-model="form.utf8" name="utf8" type="hidden" />
    <input v-model="form.action_method" type="hidden" name="_method" />

    <input
      type="hidden"
      :name="form.input_name"
      :id="form.input_id"
      v-model="form.input_value"
    />
    <!--v-bind:value="input_value"-->
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
  data: function() {
    return {
      form: {
        action_method: this.hfmethod,
        input_name: this.input_name,
        utf8: "✓",
        input_value: this.input_value,
        action_link: this.action_link,
        product_like_id: -1
      },
      status: false,
      token: ""
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
  created: function() {
    // console.log(this.$store.state.product.id)
    this.token = this.getCookie("token");
    let config = {
      headers: {
        "Content-Type": "application/json",
        "X-USER-TOKEN": this.token
      }
    };
  },
  computed: {
    product: function() {
      return this.$store.getters.product;
    },
    product_id: function() {
      console.log("p id");

      return this.form.input_value;
    },
    getToken: function() {
      return this.token;
    },
    formClasses: function() {
      if (this.mobile) return "ml-5 text-white";
      else return "";
    },
    heartSvg: function() {
      if (this.form.action_method === "put" && this.status === true)
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
      if (!this.mobile) return this.description;
      else return undefined;
    },
    actionLink: function() {
      let host = "http://127.0.0.1:3000";
      return `${host}${this.form.action_link}`;
    }
  },
  methods: {
    getCookie(cookieName) {
      var name = cookieName + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    async submitHeart() {
      // console.log(this.getToken)
      console.log("submit heart!");
      let config = await {
        headers: {
          "Content-Type": "application/json",
          "X-USER-TOKEN": this.getToken
        }
      };
      console.log(this.getToken);
      let input_value = await this.input_value;
      let params = await {
        _method: this.form.action_method,
        [this.form.input_name]: input_value,
        utf8: this.form.utf8,
        product_like_id: this.form.product_like_id
      };
      await console.log(params);
      if (this.form.action_method === "post") {
        await axios
          .post(this.actionLink, params, config)
          .then(res => {
            console.log("result!!!!!");
            this.form.action_method = "put";
            this.form.action_link += "/" + res.data.product_like.pop().id;
            this.form.product_like_id = res.data.product_like.pop().id;
            this.status = true;
            console.log(res);
          })
          .catch(e => {
            console.log(e.response);
          });
      } else {
        await axios
          .put(this.actionLink, params, config)
          .then(res => {
            console.log(res);
            this.status = res.data.product_like.status;
          })
          .catch(e => {
            return console.log(e.response);
          });
      }
    }
  }
};
</script>
