var btn = document.getElementById("btn");
var input = document.getElementById("input");
function jump() {
  var url = window.location.href;
  var pwd = input.value;
  if (pwd === "") {
    return;
  }
  location.replace(url + pwd);
}
btn.addEventListener("click", jump);
