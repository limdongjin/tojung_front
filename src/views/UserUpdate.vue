<template>
  <section class="sign_up mb-5 text-center wrapper">
    <h2 class="font-18 my-4">개인 정보 수정</h2>
    <form @submit.prevent="user_update_submit">
      <div class="field mb-3">
        <input
          type="tel"
          name="phone_number"
          :value="user.phone_number"
          placeholder="010-xxxx-yyyy"
          ref="phone_number"
          v-on:keyup="printPhoneNumber"
          required
        />
      </div>

      <div class="field mb-3">
        <input
          type="text"
          id="sample2_postcode"
          placeholder="우편번호"
          :value="user.address_num"
          name="address_num"
          ref="address_num"
          required
        />
      </div>

      <div class="field mb-3">
        <input
          type="button"
          class="btn-login text-white font-14"
          v-on:click="sample2_execDaumPostcode"
          value="우편번호 찾기"
        />
      </div>

      <div
        id="layer"
        style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;"
        ref="layer"
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
          type="text"
          id="sample2_address"
          placeholder="주소"
          ref="address_text"
          name="address_text"
          :value="user.address_text"
          required
        />
      </div>

      <div class="field mb-3">
        <input
          type="text"
          name="address_extra"
          placeholder="상세 주소"
          :value="user.address_extra"
          ref="address_extra"
          required
        />
      </div>

      <div class="field mt-3 mb-3">
        <h4 class="font-18 mt-2 mb-3">프로필 이미지</h4>
        <img
          :src="user.image0.url"
          class="profile-img-edit mb-3"
          id="profileImg"
          ref="profileImg"
        />
        <div class="custom-file h-100">
          <input
            type="file"
            class="custom-file-input"
            id="inputGroupFile02"
            v-on:change="fileLoad"
            name="image0"
            ref="inputGroupFile02"
          />
          <label
            class="custom-file-label"
            for="inputGroupFile02"
            aria-describedby="inputGroupFileAddon02"
            ref="customFileLabel"
          >
            {{ image_path }}
          </label>
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

      <div class="actions mb-3">
        <input
          type="submit"
          name="commit"
          value="수정 완료"
          class="btn-login text-white font-14"
          data-disable-with="수정 완료"
        />
      </div>
    </form>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "UserUpdate",
  data() {
    return {
      file: ""
    };
  },
  methods: {
    printPhoneNumber() {
      console.log(this.$refs.phone_number.value);
    },
    user_update_submit() {
      // console.log(this.)
      let phone_number = this.$refs.phone_number.value;
      let address_num = this.$refs.address_num.value;
      let address_text = this.$refs.address_text.value;
      let address_extra = this.$refs.address_extra.value;
      let image0 = this.file;
      let formData = new FormData();
      let headers = {
        "Content-Type": "multipart/form-data;",
        "X-USER-TOKEN": this.token
      };
      formData.append("image0", image0);
      formData.append("phone_number", phone_number);
      formData.append("address_num", address_num);
      formData.append("address_extra", address_extra);
      formData.append("address_text", address_text);
      console.log("token " + this.token);
      axios
        .post(`${this.$apiHost}/api/user/update`, formData, {
          headers: headers
        })
        .then(res => {
          location.href = "/home/mypage";
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
      let profileImg = this.$refs.profileImg;
      reader.onload = e => {
        vm.image = e.target.result;
        profileImg.setAttribute("src", vm.image);
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
  },
  computed: {
    ...mapGetters(["user", "token"]),
    image_path() {
      if (this.user.image0) return this.user.image0.path;
      return "";
    }
  }
};
</script>

<style scoped></style>
