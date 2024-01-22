var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var arr = [];
var themSoVaoMang = () => {
  var soN = $("#txt-soN").value * 1;
  arr.push(soN);
  $(".render_arr").innerHTML = arr;
};
$("#themSoN").onclick = themSoVaoMang;

//-----------Câu 1--------------------
var tinhTongSoDuong = () => {
  var sum = 0;
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      sum += arr[index];
    }
  }
  $("#kq1").innerHTML = `Tổng số dương là: ${sum}`;
};
$("#btn1").onclick = tinhTongSoDuong;

//-----------Câu 2--------------------
var demSoDuong = () => {
  for (var index = 0; index < arr.length; index++) {
    var count = 0;
    for (var index = 0; index < arr.length; index++) {
      if (arr[index] > 0) {
        count++;
      }
    }
  }
  $("#kq2").innerHTML = `Tổng số dương là: ${count}`;
};
$("#btn2").onclick = demSoDuong;

//-----------Câu 3--------------------
var timSoNhoNhat = () => {
  var min = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  $("#kq3").innerHTML = `Số nhỏ nhất là: ${min}`;
};
$("#btn3").onclick = timSoNhoNhat;

//-----------Câu 4--------------------
var timSoDuongNhoNhat = () => {
  var min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min && arr[index] >= 0) {
      min = arr[index];
    }
  }
  $("#kq4").innerHTML = `Số dương nhỏ nhất là: ${min}`;
};
$("#btn4").onclick = timSoDuongNhoNhat;

//-----------Câu 5--------------------
var timSoChanCuoiCung = () => {
  var num = -1;
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] % 2 == 0) {
      num = arr[index];
      break;
    }
  }
  $("#kq5").innerHTML = `Số chẵn cuối cùng là: ${num}`;
};
$("#btn5").onclick = timSoChanCuoiCung;

//-----------Câu 6--------------------
var viTriDoiCho = () => {
  var viTri1 = $("#txt-ViTriSo1").value * 1;
  var viTri2 = $("#txt-ViTriSo2").value * 1;

  if (isNaN(viTri1) || isNaN(viTri2)) {
    alert("Vui lòng nhập chỉ số là số nguyên.");
  }
  doiCho(arr, viTri1, viTri2);
  $("#kq6").innerHTML = `Sau khi đổi chổ: ${arr}`;
};

var doiCho = (arr, viTri1, viTri2) => {
  const temp = arr[viTri1];
  arr[viTri1] = arr[viTri2];
  arr[viTri2] = temp;
};
$("#btn6").onclick = viTriDoiCho;

//-----------Câu 7--------------------

var sapXepMangTangDan = () => {
  arr.sort((a, b) => {
    return a - b;
  });
  $("#kq7").innerHTML = `Mảng sau khi sắp xếp tăng dần: ${arr}`;
};
$("#btn7").onclick = sapXepMangTangDan;

//-----------Câu 8--------------------

// Hàm kiểm tra số nguyên tố
var checkSoNT = (num) => {
  if (num <= 1) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
var soNguyenToDauTienTrongMang = () => {
  const soNguyenToDauTien = arr.find(checkSoNT);
  if (soNguyenToDauTien !== undefined) {
    $("#kq8").innerHTML = `Số nguyên tố đầu tiên là: ${soNguyenToDauTien}`;
  } else {
    $("#kq8").innerHTML = `Không có số nguyên tố !`;
  }
};
$("#btn8").onclick = soNguyenToDauTienTrongMang;

//-----------Câu 9--------------------

var arrayCau9 = [];
var themSoVaoMangCau9 = () => {
  var soNCau9 = $("#txt-soNguyen").value * 1;
  arrayCau9.push(soNCau9);
  $("#kqSoNguyen").innerHTML = arrayCau9;
};
$("#btnThemSo").onclick = themSoVaoMangCau9;

// Kiểm tra xem có phải số nguyên hay không
var checkSoNguyen = (soNguyen) => {
  return Number.isInteger(soNguyen);
};
// Hàm đếm số nguyên trong mảng
var demSoNguyen = () => {
  var dem = 0;
  for (var i = 0; i < arrayCau9.length; i++) {
    if (checkSoNguyen(arrayCau9[i])) {
      dem++;
    }
  }
  $("#kq9").innerHTML = ` Có tất cả số nguyên là: ${dem}`;
};
$("#btn9").onclick = demSoNguyen;

//-----------Câu 10--------------------
var soSanhSoAmVaSoDuong = () => {
  var soDuong = 0;
  var soAm = 0;
  for (var i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > 0) {
      soDuong++;
    } else if (num < 0) {
      soAm++;
    }
  }

  if (soDuong > soAm) {
    $("#kq10").innerHTML = `số dương > số âm`;
  } else if (soDuong < soAm) {
    $("#kq10").innerHTML = `số âm > số dương.`;
  } else {
    $("#kq10").innerHTML = `
    số dương và số âm bằng nhau
    `;
  }
};

$("#btn10").onclick = soSanhSoAmVaSoDuong;

var inputForm = $$(".txt-form-input");
inputForm.forEach(function (input) {
  input.addEventListener("input", function (event) {
    // Lấy giá trị của input
    var inputValue = event.target.value;

    // Loại bỏ các ký tự không phải số
    var numericValue = inputValue.replace(/[^0-9-"-"-"."]/g, "");

    // Cập nhật giá trị của input chỉ bao gồm các số
    event.target.value = numericValue;
  });
});
