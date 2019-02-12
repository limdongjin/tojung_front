<template>
  <pre class="sign-status bg-white text-right mb-2">
{{ sign_out_description }}
<a class="font-grey" :href="sign_link" v-on:click="sign_action">{{ sign_name }}</a>
        <a class="font-grey" :href="third_link" >{{ third_description }}</a>
    </pre>
</template>
<script>
import axios from "axios";
export default {
  name: "SignOption",
  data: function() {
    return {
      is_sign_in: false
    };
  },
  methods: {
    async sign_action() {
      if (!this.has_user) {
        location.href = "/users/sign_in";
      }
      let getCookie = await function(cookieName) {
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
      };
      let headers = await {
        "Content-Type": "application/json",
        "X-USER-TOKEN": getCookie("token")
      };
      axios
        .get(`${this.$apiHost}/users/sign_out`, {
          headers: headers
        })
        .then(res => {
          let delete_cookie = name => {
            document.cookie =
              name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
          };
          delete_cookie("token");
          location.href = "/";
        });
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    has_user() {
      return Object.keys(this.user).length !== 0;
    },
    sign_link() {
      if (this.has_user) return "/users/sign_out";
      return "/users/sign_in";
    },
    sign_name() {
      if (this.has_user) {
        return "로그아웃";
      }
      return "로그인 / 회원가입";
    },
    sign_out_description() {
      if (this.has_user) {
        return "";
      }
      return "현재 로그아웃 상태입니다.\n로그인을 하시면 더 많은 정보를 볼 수 있습니다.";
    },
    third_link() {
      if (this.has_user) {
        return "/users/update";
      }
      return "/order_info";
    },
    third_description() {
      if (this.has_user) return "회원정보수정";
      return "비회원 주문조회";
    }
  }
};
</script>
