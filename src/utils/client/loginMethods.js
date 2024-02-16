// loginMethods.js

import bcrypt from 'bcryptjs';
import NProgress from 'nprogress';
import firebase from 'firebase/app';
import 'firebase/auth';

// Hàm kiểm tra format tên người dùng


// Phương thức đăng nhập bằng Google
export async function signInWithGoogle(toastr, store) {
  try {
    NProgress.start();
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const userRef = firebase.database().ref('users/' + result.user.uid);
    userRef.once('value', snapshot => {
      const user = snapshot.val();
      if (user) {
      toastr.success('Xin chào ! ' + user.username, 'Đăng Nhập Thành công');
       store.dispatch('setIdUser', result.user.uid);
      } else {
        toastr.warning('Vui lòng đăng ký tài khoản', 'Tài khoản không tồn tại');
      }
    });
  } catch (error) {
    console.error('Lỗi đăng nhập bằng Google:', error);
  } finally {
    NProgress.done();
  }
}

// Phương thức xử lý đăng nhập
export async function handleLogin(loginForm, toastr, store) {
  try {
   

    NProgress.start();
  
    const { username, password } = loginForm;
    console.log(username+"   "+password+" "+loginForm.password)
    const userSnapshot = await firebase.database().ref('users').orderByChild('username').equalTo(username).once('value');
    const userData = userSnapshot.val();
    if (!userData) {
      throw new Error('Tên người dùng không tồn tại');
    }

    const passwordMatch = await new Promise((resolve, reject) => {
      bcrypt.compare(password, userData[Object.keys(userData)[0]].password, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (passwordMatch) {
     toastr.success('Xin chào ! '+username, 'Đăng Nhập Thành công');
     store.dispatch('setIdUser', Object.keys(userData)[0]);
    } else {
      throw new Error('Mật khẩu không chính xác');
    }
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
   toastr.error(error.message, 'Lỗi');
  } finally {
    NProgress.done();
  }
}
