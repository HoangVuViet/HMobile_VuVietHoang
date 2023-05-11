 //duy tri dang nhap
window.onload = () => {
  let flag = localStorage.getItem("flagSignIn");
  console.log(flag);
  if(flag == 1){
    document.getElementById("btnDemo1").style.display = "none";
    document.getElementById("thongtincanhan").style.display = "block";
  }
};

function kthoten() {
  let hoten1 = document.getElementById("hoten").value;
  let pattern = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))$/;
  if (pattern.test(hoten1)) {
    document.getElementById("erhoten").innerHTML = "*";
    return true;
  } else {
    document.getElementById("erhoten").innerHTML = "Invalid Name";
    return false;
  }
}

function ktemail() {
  let pattern = /^\w+@gmail.com$/;
  let email = document.getElementById("email").value;
  if (pattern.test(email)) {
    document.getElementById("eremail").innerHTML = "*";
    return true;
  } else document.getElementById("eremail").innerHTML = "Invalid Email";
  return false;
}

function ktsdt() {
  let sdt1 = document.getElementById("sdt").value;
  let pattern = /^0+[0-9]{9}$/;
  if (pattern.test(sdt1)) {
    document.getElementById("ersdt").innerHTML = "*";
    return true;
  } else document.getElementById("ersdt").innerHTML = "Invalid Phone";
  return false;
}

function ktdate() {
  let date = document.getElementById("date").value;
  d = new Date(date);
  let currentday = new Date();

  let tuoi = currentday.getFullYear() - d.getFullYear();
  if (tuoi >= 18) {
    document.getElementById("erdate").innerHTML = "*";
    return true;
  } else document.getElementById("erdate").innerHTML = "tuoi phai tren 18";
  return false;
}

function kttk() {
  let tk = document.getElementById("tdn").value;
  if (tk != null) {
    document.getElementById("ertdn").innerHTML = "*";
    return true;
  } else document.getElementById("ertdn").innerHTML = "tk k dc rong";
  return false;
}

function ktpass() {
  let pass = document.getElementById("password").value;
  let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (pattern.test(pass)) {
    document.getElementById("erpassword").innerHTML = "*";
    return true;
  } else {
    document.getElementById("erpassword").innerHTML = "Invalid Password<br>Password must containt at least 1 uppercase, lowercase and number!";
    }
  return false;
}
function ktrepass() {
  let repass = document.getElementById("repassword").value;
  let pass = document.getElementById("password").value;
  if (pass == repass) {
    document.getElementById("errepassword").innerHTML = "*";
    return true;
  } else
    document.getElementById("errepassword").innerHTML =
      "mat khau k trung` nhau";
  return false;
}

function ketqua() {
  let hoten1 = document.getElementById("hoten").value;
  let email = document.getElementById("email").value;
  let sdt1 = document.getElementById("sdt").value;
  let date = document.getElementById("date").value;
  let tk = document.getElementById("tdn").value;
  let pass = document.getElementById("password").value;
  let repass = document.getElementById("repassword").value;
  if (
   kthoten() == true &&
   ktemail() == true &&
   ktsdt() == true &&
   ktdate() == true &&
   kttk() == true &&
    ktpass() == true &&
    ktrepass() == true
   ) {
    localStorage.setItem("name", hoten1);
    localStorage.setItem("email", email);
    localStorage.setItem("sdt1", sdt1);
    localStorage.setItem("date", date);
    localStorage.setItem("tk", tk);
    localStorage.setItem("pass", pass);
    alert("Bạn đã đăng kí thành công!");
  }

}

function xacnhan() {
  let taikhoan = document.getElementById("taikhoan").value;
  let pass = document.getElementById("pass").value;
  if (
    taikhoan == localStorage.getItem("tk") &&
    pass == localStorage.getItem("pass")
  ) {
    document.getElementById("btnDemo1").style.display = "none";
    document.getElementById("thongtincanhan").style.display = "block";
    document.getElementById("ermk").innerHTML = "dang nhap thanh cong";

    localStorage.setItem("flagSignIn", 1);
  } else alert("Tài khoản không có trên hệ thống!");

 
}
function dangxuat() {
  document.getElementById("btnDemo1").style.display = "block";
  document.getElementById("thongtincanhan").style.display = "none";

  localStorage.removeItem("flagSignIn");
}
// Modalcart:
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
}
function updatetotal(){
  total=0;
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  for(var i=1;i<cart_rows+1;i++){
    var price=document.getElementsByClassName("cart-price")[i];
    var quanty=document.getElementsByClassName("cart-quantity")[i];
    total= total+(price * quanty)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
}

var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}
// Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("img-prd")[0].src
    var title = product.getElementsByClassName("content-product-h5")[0].innerText
    var price = product.getElementsByClassName("price")[0].innerText
    addItemToCart(title, price, img)
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    modal.style.display = "block";
    
    updatecart()
  })
}

function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('cart-item-title')
  // Nếu title của sản phẩm bằng với title thêm vao giỏ hàng thì sẽ thông báobáo cho user.
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button" onclick="updatecart()">Xóa</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i]
    var price_item = cart_row.getElementsByClassName("cart-price ")[0]
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value // lấy giá trị trong thẻ input
    total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
  // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên sử dụng [0].
}
