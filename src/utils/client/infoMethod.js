import NProgress from "nprogress";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { hashPassword } from "@/config/encryptionUtils";
import bcrypt from "bcryptjs";
import moment from 'moment';
export async function uploadInfo(toastr, store, userInfo) {
  try {
    NProgress.start();

    const userStore = store.getters.getUser;
    // Kiểm tra nếu userInfo.password là falsy, sử dụng mật khẩu từ userStore
    if (!userInfo.password) {
      userInfo.password = userStore.password;
      toastr.success("Mật khẩu sau khi cập nhật sẽ là mật khẩu cũ của bạn");
    } else {
      // So sánh mật khẩu nhập vào với mật khẩu trong store
      const passwordMatch = await new Promise((resolve, reject) => {
        bcrypt.compare(userInfo.password, userStore.password, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });

      if (passwordMatch) {
        // trùng mật khẩu cũ nên lưu mật khẩu cũ lại thành mk mới
        userInfo.password = userStore.password;
      } else {
        // khác mật khẩu cũ
        // Mã hóa mật khẩu mới trước khi lưu
        userInfo.password = await hashPassword(userInfo.password.toString());
      }
    }

    // Tải lên ảnh vào Firebase Storage nếu có
    if (userInfo.avatar) {
      const storageRef = firebase.storage().ref();
      const avatarRef = storageRef.child(
        "clients/profile/avatars/" + userStore.id + "/" + userStore.username
      );
      await avatarRef.put(userInfo.avatar);

      // Thêm tên của ảnh vào userInfo
      // Xóa key "avatar" khỏi đối tượng userInfo
      delete userInfo.avatar;
      const downloadURL = await avatarRef.getDownloadURL();

      // Thêm tên của ảnh vào userInfo
      userInfo.avatar = downloadURL;
    }
    //nếu không coa ảnh up lên thì kiểm tra ảnh cũ trong đăng nhập có không , nếu có thì lưu lại ảnh cũ , còn khong có gì lưu khoảng trắng
    else {
      //trường hợp không chọn avatar
      if (userStore.avatar) {
        userInfo.avatar = userStore.avatar;
      } else {
        userInfo.avatar = "";
      }
    }

    // Cập nhật thông tin người dùng trong Firebase Realtime Database
    const db = firebase.database();
    await db.ref("users/" + userStore.id).update(userInfo);

    //cập nhật xong
    //lưu lại id cho store để cập nhật
    store.dispatch("setIdUser", userStore.id);
    //set các giá trị của form trống
    userInfo.password = "";
    userInfo.avatar = null;
  } catch (error) {
    toastr.warning("Vui lòng thử lại sau ít phút", "ohhhh !..");
    console.log(error);
  } finally {
    NProgress.done();
    toastr.success("Cập nhật thành công", "Thông báo");
  }
}
// export async function registerTeacher(idNgGui,username,toastr) {
//     // Lấy thông tin từ form đăng ký giáo viên
   
//     var title ="registerTeacher";
//     var noiDung = "Yêu cầu đăng ký thành giáo viên của id : "+idNgGui;
//     var trangThai = false;
//     NProgress.start();
//     // Lưu dữ liệu vào Firebase
//     firebase.database().ref("clientRequests").push({
//         senderId: idNgGui,
//         username: username,
//         title:title,
//         content: noiDung,
//         status: trangThai
//     }).then(function() {
//         // Xử lý sau khi dữ liệu được lưu thành công
//         NProgress.done();
//         toastr.success("Dữ liệu đã được lưu thành công vào Firebase");
//     }).catch(function(error) {
//         // Xử lý khi có lỗi xảy ra
//         NProgress.done();
//         toastr.error("Lỗi khi lưu dữ liệu vào Firebase: ", error);
//     });

// }


export async function registerTeacher(idNgGui, username, toastr) {
    var title = "registerTeacher";
    var noiDung = "Yêu cầu đăng ký thành giáo viên của id : " + idNgGui;
    var trangThai = "";
    var thoiGian = moment().utcOffset(7).format(); // UTC+7 là múi giờ của Việt Nam
    NProgress.start();

    // Truy vấn Firebase để kiểm tra nếu đã có dữ liệu phù hợp tồn tại trong "clientRequests"
    firebase.database().ref("clientRequests")
        .orderByChild("senderId")
        .equalTo(idNgGui)
        .once("value")
        .then(snapshot => {
            // Kiểm tra nếu có dữ liệu thỏa mãn điều kiện
            if (snapshot.exists()) {
                snapshot.forEach(childSnapshot => {
                    const request = childSnapshot.val();
                    if (request.username === username && request.title === title && request.status === "") {
                        // Thông báo rằng đã đăng ký và đang chờ xét duyệt
                        NProgress.done();
                        toastr.warning("Bạn đã đăng ký rồi. Vui lòng đợi admin xét duyệt.");
                        return;
                    }
                });
            } else {
                // Lưu dữ liệu vào Firebase nếu không tìm thấy dữ liệu thỏa mãn điều kiện
                firebase.database().ref("clientRequests").push({
                    senderId: idNgGui,
                    username: username,
                    title: title,
                    content: noiDung,
                    status: trangThai,
                    time: thoiGian
                }).then(() => {
                    // Xử lý sau khi dữ liệu được lưu thành công
                    NProgress.done();
                    toastr.success("Vui lòng đợi admin xét duyệt.","Gửi yêu cầu thành công");
                }).catch(error => {
                    // Xử lý khi có lỗi xảy ra
                    NProgress.done();
                    toastr.error("Lỗi truy vẫn dữ liệu: ", error);
                });
            }
        })
        .catch(error => {
            // Xử lý khi có lỗi xảy ra trong quá trình truy vấn
            NProgress.done();
            toastr.error("Lỗi khi truy vấn dữ liệu ", error);
        });
}