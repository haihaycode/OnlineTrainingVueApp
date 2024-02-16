import firebase from 'firebase/app';
import 'firebase/database';

// Hàm kiểm tra trạng thái đăng nhập và trả về dữ liệu người dùng từ Firebase
export async function checkLoginStatus() {
  const userId = localStorage.getItem('userId');
  if (userId) {
    try {
      const snapshot = await firebase.database().ref('/users/' + userId).once('value');
      const userData = snapshot.val();
      return userData;
    } catch (error) {
     return false;
    }
  } else {
    return false;
  }
}
