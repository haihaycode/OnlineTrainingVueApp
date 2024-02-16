import NProgress from 'nprogress';
import firebase from 'firebase/app';
import 'firebase/auth';
import { hashPassword } from '@/config/encryptionUtils';


export async function signInWithGoogle(toastr) {
    try {
      NProgress.start();

      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu chưa
      const userSnapshot = await firebase.database().ref('users').orderByChild('email').equalTo(result.user.email).once('value');
      if (userSnapshot.exists()) {
        // Email đã tồn tại, thông báo cho người dùng
    toastr.warning('Tài khoản đã tồn tại đang đăng nhập ...', 'Thông báo');
        console.log('Đăng nhập thành công với Google:', result.user);
        return;
      }
      // Email chưa tồn tại, tiếp tục đăng ký
      const userData = {
        username: result.user.displayName.replace(/[^\w\s]/gi, '').replace(/\s+/g, ''),
        email: result.user.email,
        level:0,
        password: await hashPassword('0000'), // Mật khẩu ban đầu
        timestamp: firebase.database.ServerValue.TIMESTAMP // Thêm timestamp
      
      };
      // Thêm thông tin người dùng vào cơ sở dữ liệu
      await firebase.database().ref('users/' + result.user.uid).set(userData);
      console.log('Thông tin người dùng đã được lưu vào cơ sở dữ liệu Firebase.');
      toastr.success('Đăng kí thành công ', 'Thông báo');
    } catch (error) {
      console.error('Lỗi đăng nhập bằng Google:', error);
      toastr.error('Hệ thống quá tải , vui lòng thử lại sau', 'Thông báo');
    } finally {
      NProgress.done(); // Tắt hiệu ứng loading sau khi xong quá trình đăng nhập
    }
  }




  export async function handleSubmit(form,toastr) {
    try {
      NProgress.start();
      // Kiểm tra xem username đã tồn tại trong database chưa
      const database = firebase.database();
      const usersRef = database.ref('users');
      const snapshot = await usersRef.orderByChild('username').equalTo(form.username).once('value');

      if (snapshot.exists()) {
        toastr.warning('Tên người dùng đã tồn tại', 'Thông báo');
        return;
      }
      // Lưu thông tin người dùng lên Firebase
      const newUserRef = await usersRef.push({
        username: form.username,
        email: form.email,
        level:0,
        password: await hashPassword(form.password.toString()) ,
        timestamp: firebase.database.ServerValue.TIMESTAMP // Thêm timestamp
      });
      if(newUserRef){
        toastr.success('Đăng ký thành công', 'Thông báo');
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu:', error);
      toastr.error('Đã xảy ra lỗi', 'Thông báo');
    } finally {
      NProgress.done();
    }
  }