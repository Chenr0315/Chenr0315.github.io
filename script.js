// 获取DOM元素
var generateBtn = document.getElementById("btn");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");
var heart = document.getElementById("love");
var button = document.getElementById("button");
var end = document.getElementById("p");
var flag = false;
// 定义一个包含短语的数组
var phrases = [
  ["wǒ xǐ huān nǐ", "我 喜 欢 你", "(I LOVE YOU)"],
  ["xīn xī ruì rù", "新 喜 瑞 如", "(MAY YOU BE AS HAPPY AS THE NEW YEAR)"],
  ["shēn tǐ jiàn kāng", "身 体 健 康", "(GOOD HEALTH)"],
  ["cái yuán guǎng jìn", "财 源 广 进", "(MAY WEALTH COME POURING IN)"],
  ["wàn shì rú yì", "万 事 如 意", "(MAY EVERYTHING GO WELL)"],
  ["dà jí dà lì", "大 吉 大 利", "(GREAT LUCK AND GREAT PROFIT)"],
  ["nián nián yǒu yú", "年 年 有 余", "(SURPLUS YEAR AFTER YEAR)"],
  ["gōng hè xīn xǐ", "恭 贺 新 喜", "(WISHING YOU A HAPPY NEW YEAR)"],
];
// 当前短语的索引
var currentIndex = 0;
// 生成短语的函数
function generatePhrase() {
  if (flag) {
    var url = window.location.href;
    location.replace(url + "temp/");
  }
  // 更新当前短语的索引
  currentIndex = (currentIndex + 1) % phrases.length;
  // 在相应的DOM元素中显示短语的内容
  transform(line1, phrases[currentIndex][0]);
  transform(line2, phrases[currentIndex][1]);
  transform(line3, phrases[currentIndex][2]);
  if (currentIndex === 0) {
    heart.classList.toggle("run");
    // button.style.display = "none";
    document.querySelector("#btn").innerText = "继续";
    p.style.opacity = 1;
    flag = true;
  }
}
function transform(text, new_text) {
  generateBtn.setAttribute("disabled", true);
  text.style.opacity = 0;
  setTimeout(function () {
    text.textContent = new_text;
    text.style.opacity = 1;
  }, 510);
  setTimeout(function () {
    generateBtn.removeAttribute("disabled");
  }, 1020);
}
// 为按钮添加点击事件监听器，点击按钮时生成新的短语
generateBtn.addEventListener("click", generatePhrase);

window.onload = function () {
  //定义点击出现文字类
  function ClickFrontShow() {
    //定义所需文字和颜色
    this.fron = [
      "继续哦",
      "不要停",
      "ᕙ(`▿´)ᕗ",
      "(ᕑᗢᓫ∗)˒",
      "ᕕ( ᐛ )ᕗ",
      "(੭ˊᵕˋ)੭",
    ];
    this.colo = [
      "#FF69B4",
      "#ff6651",
      "orange",
      "#FF00FF",
      "#00FF7F",
      "#00BFFF",
      "#BA55D3",
    ];
    //获取body元素
    this.elBody = document.getElementsByTagName("body")[0];
    //初始化randomNum
    this.randomNum = null;
    //初始化字体inde
    this.finde = 0;
    //初始化className
    this.cls = 0;
  }
  //定义初始化
  ClickFrontShow.prototype.init = function (frontArray, colorArray) {
    //自定义颜色和字体
    this.fron = frontArray || this.fron;
    this.colo = colorArray || this.colo;
    this.listenMouse();
  };
  //创建文字
  ClickFrontShow.prototype.createFront = function (classname) {
    var self = this;
    let ospan = document.createElement("span");
    //设置样式
    let cssText =
      "position:absolute; width: fit-content; height: fit-content; cursor: default; transform: translate(-50%,-50%); font-size: 3em;font-weight: bold; opacity: 1; z-index: 1000; transition: 1s;";
    //随机字体和颜色
    let randomFront = self.fron[self.finde];
    let randomColor =
      self.colo[Math.round(Math.random() * (self.colo.length - 1))];
    //字体下标增1
    self.finde = (self.finde + 1) % self.fron.length;
    //向body中添加元素
    self.elBody.appendChild(ospan);
    //绑定一个classname
    ospan.className = String(classname);
    //添加样式
    ospan.style.cssText =
      cssText +
      "-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none;";
    ospan.style.color = randomColor;
    ospan.innerHTML = randomFront;
  };
  //监听鼠标点击
  ClickFrontShow.prototype.listenMouse = function () {
    var self = this;
    //鼠标点击事件
    document.onclick = function (e) {
      //避免classname值重复导致出现bug
      if (self.cls === 20) {
        self.cls = 0;
      } else {
        self.cls += 1;
      }
      //创建文字
      self.createFront(self.cls);
      let el = document.getElementsByClassName(self.cls)[0];
      //鼠标点击位置
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      //过时改变
      setTimeout(function () {
        el.style.opacity = 0;
        el.style.top = el.offsetTop - 100 + "px";
      }, 100);
      //过时清除
      setTimeout(function () {
        self.elBody.removeChild(el);
      }, 2000);
    };
  };
  //实例化
  var frontShow = new ClickFrontShow();
  //用户可在此传递参数，默认第一个参数是字体数组；
  //第二个参数是颜色数组，必须是数组类型！
  frontShow.init();
};
