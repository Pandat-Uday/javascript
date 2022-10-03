function avg(arr1) {
  var a = 0;

  for (var i = 0; i < arr1.length; i++) {
    a = a + arr1[i];
  }

  var avg = a / arr1.length;
  return avg;
}

var u = avg([1, 2, 3, 4, 5]);
console.log(u);
