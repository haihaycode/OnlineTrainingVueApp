import NProgress from 'nprogress';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { hashPassword } from '@/config/encryptionUtils';
import bcrypt from 'bcryptjs';
export async function uploadInfo(toastr, store, userInfo) {
    try {
        NProgress.start();

        const userStore = store.getters.getUser;
        // Kiểm tra nếu userInfo.password là falsy, sử dụng mật khẩu từ userStore
        if (!userInfo.password) {
            userInfo.password = userStore.password;
            toastr.success('Mật khẩu sau khi cập nhật sẽ là mật khẩu cũ của bạn');
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
            const avatarRef = storageRef.child('clients/profile/avatars/' + userStore.id + '/' + userStore.username);
            await avatarRef.put(userInfo.avatar);

            // Thêm tên của ảnh vào userInfo
            // Xóa key "avatar" khỏi đối tượng userInfo
            delete userInfo.avatar;
            const downloadURL = await avatarRef.getDownloadURL();


            // Thêm tên của ảnh vào userInfo
            userInfo.avatar =downloadURL;
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
        await db.ref('users/' + userStore.id).update(userInfo);

        //cập nhật xong
        //lưu lại id cho store để cập nhật
        store.dispatch('setIdUser', userStore.id);
        //set các giá trị của form trống
        userInfo.password="";
        userInfo.avatar=null;
     

    } catch (error) {
        toastr.warning('Vui lòng thử lại sau ít phút', 'ohhhh !..');
        console.log(error);
    } finally {
        NProgress.done();
        toastr.success('Cập nhật thành công', 'Thông báo');
    }
}
