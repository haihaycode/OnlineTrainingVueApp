import bcrypt from 'bcryptjs';

// Số vòng lặp để tạo salt
const saltRounds = 10;

// Hàm để mã hóa mật khẩu
export function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      }
    });
  });
}
