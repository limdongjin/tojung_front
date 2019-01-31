// module.exports = {
//     return {
//         notice_execute: function () {
//             let notices = document.querySelectorAll('main-notice');
//             Array.from(notices).forEach((el)=>{
//                 el.innerHTML
//             })
//             $(".main-notice").each(function () {
//                 const notice_id = this.id; // ex, notice-1
//                 if (!notice_id) return;
//                 if (!is_notice_read(notice_id.replace("notice-", ""))) {
//                     let notice = $("#" + notice_id);
//                     // notice를 읽지않은 경우 실행
//                     notice.show("fast");
//                     notice.css("display", "flex");
//                 }
//             });
//         }
//     }
// };
