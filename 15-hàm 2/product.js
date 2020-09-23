let products = new Array(
  "Sony Xperia",
  "Samsung Galaxy",
  "Nokia 6",
  "XiaoMi Redmi Note 4",
  "Apple Iphone 6s",
"Xiaomi Mi 5s Plus",
"Apple Iphone 8 Plus",
"Fujitsu F-04E",
"Oppo A71"
);
let table = "";
function showProduct() {
  let tbody = document.getElementById("productList");
  let trs = "";
  products.forEach(function (v, i) {
    trs += `
    <tr>
    <td>${v}<td/>
    <td>
    <a class="btn" href="#">Edit<a/>
    <a class="btn" href="#">Remove<a/>
    <td/>
    <tr/>
    `
  });
  tbody.innerHTML = trs;
}
function create() {
  let name = document.getElementById("productName").value;
  if (!existProduct(name)) {
    products.push(name);
    window.alert(`Product ${name} has been added successfully`);
    showProduct();
    document.getElementById("productName").value = "";
  } else {
    window.alert(`Product: ${name.trim()} is existed`);
  }
}
function existProduct(productName) {
  for (let p of products) {
    if (format(p) == format(productName)) {
      return true;
    }
  }
  return false;
}
function format(name) {
  let result = "";
  let chars = [];
  name = name.trim()
  name = name.toLocaleLowerCase();
  chars = name.split("");
  for (let i = 0; i < chars.length - 1; i++) {
    if (chars[i] == "" && chars[i + 1] == "") continue;
    result += chars[i];
  }
  result += chars[chars.length - 1];
  return result;
}
function ready() {
  showProduct();
}
ready();
