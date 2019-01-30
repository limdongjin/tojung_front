<template>
  <pre class="sign-status bg-white text-right mb-2">
        <a class="font-grey" :href="sign_link">{{ sign_name }}</a>
        <a class="font-grey" :href="edit_link" v-if="is_sign_in">회원정보수정</a>
            {{ sign_out_description }}
        <a class="font-grey" href="/order_info" v-if="!is_sign_in">비회원 주문조회</a>
    </pre>
</template>
<script>
export default {
  name: "SignOption",
  data: function() {
    return {
      is_sign_in: false,
      user_id: 1,
      edit_link: "/userupdaters/" + "1" + "/edit"
    };
  },
  computed: {
    sign_link() {
      if (this.is_sign_in) {
        return "/users/sign_out";
      }
      return "/users/sign_in";
    },
    sign_name() {
      if (this.is_sign_in) {
        return "로그아웃";
      }
      return "로그인 / 회원가입";
    },
    sign_out_description() {
      if (this.is_sign_in) {
        return "";
      }
      return " 현재 로그아웃 상태입니다.\n로그인을 하시면 더 많은 정보를 볼 수 있습니다.";
    }
  }
};
</script>
