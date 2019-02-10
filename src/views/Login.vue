<template>
  <div class="wrapper">
    <section class="social_sign_in text-center pt-5">
      <form
        class="button_to"
        method="post"
        action="/users/auth/facebook"
        @submit.prevent="facebookAuth"
      >
        <button class="button-none bg-base" type="submit">
          <img
            class="d-block mx-auto mb-3"
            :src="fb_login_svg"
            alt="Fb login"
          />
        </button>
      </form>
      <form
        class="button_to"
        method="post"
        action="/users/auth/google_oauth2"
        @submit.prevent="googleAuth"
      >
        <button class="button-none bg-base" type="submit">
          <img
            class="d-block mx-auto mb-3"
            :src="google_login_svg"
            alt="Fb login"
          />
        </button>
      </form>
      <h2 class="background text-center mt-3 mb-5">
        <span class="or">OR</span>
      </h2>
    </section>
    <section class="sign_in text-center">
      <!--<div class="notice"><%= flash[:error] %></div>-->
      <h2 class="text-center font-18 text-black my-4">이메일로 로그인하기</h2>
      <form
        class="new_user"
        id="new_user"
        :action="standardAuthActionLink"
        accept-charset="UTF-8"
        method="post"
        @submit.prevent="standardAuth"
      >
        <input name="utf8" type="hidden" v-model="form.utf8" />
        <!--<input type="hidden" name="authenticity_token" value="TLM41DCm0Zhz1HKKtw3caFBYqmWqY7wGc/ikhEeuFSc2Zcpk8Av8rhyX7dxo5yOs0c3vd0aiel4+mq7qpS66jw==">-->
        <div class="field mb-3">
          <input
            autocomplete="off"
            placeholder="이메일"
            type="email"
            name="user[email]"
            id="user_email"
            v-model="form.email"
          />
        </div>

        <div class="field mb-3">
          <input
            autocomplete="off"
            placeholder="비밀번호"
            type="password"
            name="user[password]"
            id="user_password"
            v-model="form.password"
          />
        </div>

        <div class="d-flex justify-content-between login-row">
          <div class="field d-inline-block my-auto">
            <input name="user[remember_me]" type="hidden" value="0" /><input
              type="checkbox"
              value="1"
              name="user[remember_me]"
              id="user_remember_me"
            />
            <label class="font-12" for="user_remember_me">로그인 기억</label>
          </div>
          <div class="actions d-inline-block">
            <input
              type="submit"
              name="commit"
              value="로그인"
              class="btn-login text-white font-14"
              data-disable-with="로그인"
            />
          </div>
        </div>
      </form>
    </section>
    <div class="d-flex pl-2 links justify-content-around font-12 my-3">
      <a class="links-bar" href="/users/sign_up">회원가입하기</a>
      <a href="/users/password/new">비밀번호를 잊었다!</a><br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
        utf8: "✓"
      }
    };
  },
  computed: {
    fb_login_svg() {
      return require("@/assets/fb_login.svg");
    },
    google_login_svg() {
      return require("@/assets/google.svg");
    },
    standardAuthActionLink() {
      return "http://127.0.0.1:3000/users/sign_in";
    }
  },
  methods: {
    facebookAuth() {
      alert("페이스북 로그인");
    },
    googleAuth() {
      alert("구글 로그인");
    },
    standardAuth() {
      var config = {
        headers: { "Content-Type": "application/json" }
      };
      axios
        .post(
          this.standardAuthActionLink,
          {
            user: {
              email: this.form.email,
              password: this.form.password,
              remember_me: 0
            }
          },
          config
        )
        .then(res => {
          console.log(res);

          let setCookie = (cookieName, cookieValue, cookieExdays) => {
            var d = new Date();
            d.setTime(d.getTime() + cookieExdays * 24 * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            document.cookie =
              cookieName + "=" + cookieValue + ";" + expires + ";path=/";
          };
          setCookie("token", res.data.token, 1);
          location.href = "/";
        })
        .catch(e => console.log(e.response));
    }
  }
};
</script>

<style scoped></style>
