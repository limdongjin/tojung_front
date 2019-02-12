<template>
  <section class="sign_up py-3 mb-5 text-center wrapper">
    <h2 class="font-18 my-4">투정 회원가입</h2>
    <form class="new_user" id="new_user" @submit.prevent="registrationSubmit">
      <div class="field mb-3">
        <input
          type="email"
          name="user[email]"
          id="user_email"
          placeholder="이메일"
          autofocus="autofocus"
          autocomplete="email"
          ref="email"
          required
        />
      </div>

      <div class="field mb-3">
        <input
          type="password"
          name="user[password]"
          id="user_password"
          autocomplete="off"
          placeholder="비밀번호"
          ref="password"
          required
        />
      </div>

      <div class="field mb-3">
        <input
          autocomplete="off"
          placeholder="비밀번호 확인"
          type="password"
          name="user[password_confirmation]"
          id="user_password_confirmation"
          ref="password_confirmation"
          required
        />
      </div>

      <!-- 우편 번호 찾기 -->
      <div class="field mb-3">
        <input
          placeholder="우편번호"
          id="sample2_postcode"
          required="required"
          type="text"
          name="user[address_num]"
          ref="address_num"
        />
      </div>

      <div class="field mb-3">
        <input
          type="button"
          class="btn-login font-14 text-white"
          v-on:click="sample2_execDaumPostcode"
          value="우편번호 찾기"
        />
      </div>
      <div
        id="layer"
        style="display:none;position:fixed;overflow:hidden;z-index:300;-webkit-overflow-scrolling:touch;"
      >
        <img
          src="//t1.daumcdn.net/localimg/localimages/07/postcode/320/close.png"
          id="btnCloseLayer"
          style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1"
          v-on:click="closeDaumPostcode"
          alt="닫기 버튼"
        />
      </div>

      <div class="field mb-3">
        <input
          placeholder="주소"
          id="sample2_address"
          required="required"
          type="text"
          name="user[address_text]"
          ref="address_text"
        />
      </div>
      <div class="field mb-3">
        <input
          placeholder="상세 주소"
          required="required"
          type="text"
          name="user[address_extra]"
          id="user_address_extra"
          ref="address_extra"
        />
      </div>

      <div class="field mt-3 mb-3">
        <label class="d-block mt-2" for="user_image0">프로필 이미지</label>
        <div class="custom-file h-100">
          <input
            type="file"
            class="custom-file-input"
            id="inputGroupFile02"
            v-on:change="fileLoad"
            required="required"
            name="user[image0]"
            ref="inputGroupFile02"
          />
          <label
            class="custom-file-label"
            for="inputGroupFile02"
            aria-describedby="inputGroupFileAddon02"
            ref="customFileLabel"
          ></label>
        </div>
      </div>

      <div class="field mb-3">
        <button
          type="button"
          class="btn btn-login box-230 text-white font-14"
          v-on:click="fileUpload"
        >
          이미지 업로드
        </button>
      </div>

      <div class="field box-230 text-left">
        <input name="user[remember_me]" type="hidden" value="0" />
        <input
          type="checkbox"
          value="1"
          name="user[remember_me]"
          id="user_remember_me"
        />
        <a href="/home/privacy" class="d-inline-block">
          <label class="font-12" for="user_remember_me">
            개인 정보 수집 약관에 동의합니다.
          </label>
        </a>
      </div>

      <div class="field box-230 text-left mb-3">
        <input name="user[remember_me2]" type="hidden" value="0" />
        <input
          type="checkbox"
          value="1"
          name="user[remember_me2]"
          id="user_remember_me2"
        />
        <a href="/home/policy" class="d-inline-block">
          <label class="font-12" for="user_remember_me">
            이용 약관에 동의합니다.
          </label>
        </a>
      </div>

      <div class="actions">
        <input
          type="submit"
          name="commit"
          value="회원가입"
          class="btn-login text-white font-14"
          data-disable-with="회원가입"
        />
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Registration",
  data() {
    return {
      file: ""
    };
  },
  methods: {
    validationPassword() {
      if (
        this.$refs.password.value !== this.$refs.password_confirmation.value
      ) {
        alert("비밀번호 확인이 일치하지않습니다.");
        console.log(this.$refs.password);
        return false;
      }
      return true;
    },
    registrationSubmit() {
      console.log("registration!");
      if (!this.validationPassword()) {
        return false;
      }
      let email = this.$refs.email.value;
      let password = this.$refs.password.value;
      let password_confirmation = this.$refs.password_confirmation.value;
      let address_num = this.$refs.address_num.value;
      let address_text = this.$refs.address_text.value;
      let address_extra = this.$refs.address_extra.value;
      let image0 = this.file;
      let formData = new FormData();
      let headers = {
        "Content-Type": "multipart/form-data;"
      };
      formData.append("user[email]", email);
      formData.append("user[password]", password);
      formData.append("user[password_confirmation]", password_confirmation);
      formData.append("user[image0]", image0);
      formData.append("user[address_num]", address_num);
      formData.append("user[address_extra]", address_extra);
      formData.append("user[address_text]", address_text);
      axios
        .post(`${this.$apiHost}/users`, formData, {
          headers: headers
        })
        .then(res => {
          console.log(res);
          location.href = "/users/sign_in";
          // 이메일 인증 하라는 플래시 메세지 보여줘야함
        })
        .catch(e => {
          alert(e.response.data.info);
        });
    },
    fileUpload() {
      this.$refs.inputGroupFile02.click();
    },
    fileLoad: function(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log("file load!");
      console.log(this.file);
      console.log(files);
      console.log(e);
      console.log(e.target.files);
      console.log(files);
      if (!files.length) return;
      if (files.length === 0) return;
      this.createImage(files[0]);
      this.$refs.customFileLabel.innerHTML = files[0].name;
      this.file = this.$refs.inputGroupFile02.files[0];
    },
    createImage(file) {
      console.log("create!");
      var reader = new FileReader();
      var vm = this;
      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    sample2_execDaumPostcode() {
      console.log("hello world!");
      var element_layer = document.getElementById("layer");
      new daum.Postcode({
        oncomplete: function(data) {
          // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var fullAddr = data.address; // 최종 주소 변수
          var extraAddr = ""; // 조합형 주소 변수

          // 기본 주소가 도로명 타입일때 조합한다.
          if (data.addressType === "R") {
            //법정동명이 있을 경우 추가한다.
            if (data.bname !== "") {
              extraAddr += data.bname;
            }
            // 건물명이 있을 경우 추가한다.
            if (data.buildingName !== "") {
              extraAddr +=
                extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
            }
            // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
            fullAddr += extraAddr !== "" ? " (" + extraAddr + ")" : "";
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById("sample2_postcode").value = data.zonecode; //5자리 새우편번호 사용
          document.getElementById("sample2_address").value = fullAddr;

          // iframe을 넣은 element를 안보이게 한다.
          // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
          element_layer.style.display = "none";
        },
        width: "100%",
        height: "100%",
        maxSuggestItems: 5
      }).embed(element_layer);

      // iframe을 넣은 element를 보이게 한다.
      element_layer.style.display = "block";

      // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
      this.initLayerPosition();
    },
    initLayerPosition() {
      var element_layer = document.getElementById("layer");

      var width = 300; //우편번호서비스가 들어갈 element의 width
      var height = 400; //우편번호서비스가 들어갈 element의 height
      var borderWidth = 5; //샘플에서 사용하는 border의 두께

      // 위에서 선언한 값들을 실제 element에 넣는다.
      element_layer.style.width = width + "px";
      element_layer.style.height = height + "px";
      element_layer.style.border = borderWidth + "px solid";
      // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
      element_layer.style.left =
        ((window.innerWidth || document.documentElement.clientWidth) - width) /
          2 -
        borderWidth +
        "px";
      element_layer.style.top =
        ((window.innerHeight || document.documentElement.clientHeight) -
          height) /
          2 -
        borderWidth +
        "px";
    },
    closeDaumPostcode() {
      var element_layer = document.getElementById("layer");

      // iframe을 넣은 element를 안보이게 한다.
      element_layer.style.display = "none";
    }
  }
};
</script>

<style scoped></style>
