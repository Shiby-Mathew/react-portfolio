export function validateEmail(email) {
    var newString =/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/ ;
    return newString.test(String(email).toLowerCase());
  }
