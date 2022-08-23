export const valid = (name,phone,email,password,cf_password) => {
    if(!name || !phone || !email || !password || !cf_password){
        return 'Vui lòng nhập đầy đủ thông tin';
    }
    if(!validateEmail(email)){
        return 'Email không hợp lệ';
    }

    if(!validatePhone(phone)){
        return 'Số điện thoại không hợp lệ';
    }

    if(password !== cf_password){
        return 'Mật khẩu không khớp';
    }
    if(password.length < 6){
        return 'Mật khẩu phải có ít nhất 6 ký tự';
    }
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePhone = (phone) => {
    return phone.match(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/)
  }