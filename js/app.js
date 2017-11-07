var num = prompt('Input credit number');
function isValidCard(num) {
  // valid credit number
  var val = /^[0-9]*$/;
  if (num === '' || (!val.test(num))) {
    do {
      var numValid = prompt('It´s empty or don´t contain digits between 0-9,Please  input again');
    } while (!numValid || !val.test(numValid));
    num = numValid;
  }
  // convert creditCard in  numbers array
  var arr = num.split('');
  for (var i = 0; i < arr.length; i++) {
    var x = parseInt(arr.pop());
    arr.splice(i, 0, x);
  }
  // valid ciphers, credit card and addition digits credit card 
  var sum = arr[arr.length - 1];
  for (i = 0;i < (arr.length - 1);i++) {
    if ((i + 1) % 2 === 0) {
      p1 = arr[i] * 2;
      if (p1 > 9) {
        c2 = parseInt(p1 / 10);
        r2 = parseInt(p1 % 10);
        p2 = c2 + r2;
      } else {
        p2 = p1;
      }
      arr.splice(i, 1, p2) ;
    }
    sum = sum + arr[i];
  }
  // return  valid or not valid and the total sum
  return (sum % 10 === 0) ? (alert(num + ': Valid CreditCard ' + ', Total sum :' + sum)) : (alert(num + ': invalid CreditCard' + ',Total sum :' + sum));
}

isValidCard(num);
