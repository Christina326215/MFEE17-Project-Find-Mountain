let canvasTarget = document.querySelector(".canvas-target");
let selectedImgs = [];
const canvas = new fabric.Canvas("canvas", {
  width: canvasTarget.clientWidth,
  height: canvasTarget.clientHeight,
});

window.onresize = function () {
  canvas.setDimensions({
    width: canvasTarget.clientWidth,
    height: canvasTarget.clientHeight,
  });
};

function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", event.target.id);
}
// function handleDragEnd(e) {}
// function handleDragEnter(e) {
//   // e.stopPropagation();
// }
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";

  return false;
}
function handleDragLeave(e) {
  // e.stopPropagation();
}
// showSelectedData();
function handleDrop(e) {
  e.stopPropagation();
  document.getElementById("hide").style.display = "none";
  // if (e.stopPropagation) {
  //     e.stopPropagation();
  // }
  let id = e.dataTransfer.getData("text/plain");
  var img = document.getElementById("#" + id);
  // console.log(img);

  var newImage = new fabric.Image(img, {
    width: 0,
    height: 0,
    // Set the center of the new object based on the event coordinates relative
    left: e.layerX - 47,
    top: e.layerY - 70,
  });
  newImage.scaleToWidth(100);
  newImage.scaleToHeight(100);
  // console.log("newImage", newImage);
  canvas.add(newImage);

  selectedImgs.push("#" + id);
  // console.log("selectedImgs", selectedImgs);
  saveData();
  return false;
}
function saveData() {
  console.log("selectedImgs save", selectedImgs);
  for (let i = 0; i < selectedImgs.length; i++) {
    let productPicUrl = document
      .querySelector(selectedImgs[i])
      .getAttribute("src");
    // console.log('productPicUrl',productPicUrl);
    // ./img/img-outfit/clothes-pic1-removebg-preview.png
    let productName = document.querySelector(selectedImgs[i]).dataset
      .productname;
    // console.log('productName',productName);
    // Arcteryx 始祖鳥 單件式GORE-TEX化纖保暖外套
    let productPrice = document.querySelector(selectedImgs[i]).dataset.price;
    // console.log('productPrice',productPrice); //5000
    // let product_records = new Array();
    let product_records = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
    console.log("product_records", product_records);
    if (
      product_records.some((v) => {
        return v.productName == productName;
      })
    ) {
      console.log("duplicate data");
    } else {
      product_records.push({
        productPicUrl: productPicUrl,
        productName: productName,
        productPrice: productPrice,
      });
      localStorage.setItem("products", JSON.stringify(product_records));
    }
  }

  showSelectedData();
}
function showSelectedData() {
  let newItems = document.getElementById("newItems");
  newItems.innerHTML = "";

  let product_records = new Array();
  product_records = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  // console.log("product_records.length", product_records.length);

  if (product_records) {
    let subtotal = 0;
    for (let i = 0; i < product_records.length; i++) {
      let addDiv = document.createElement("div");
      addDiv.className = "newItem";
      addDiv.innerHTML =
        '<div style="width: 100px"><img class="cover-fit" src="' +
        product_records[i].productPicUrl +
        '"/></div><div style="width: 60%">' +
        product_records[i].productName +
        '</div><div style="width: 14%">NT$ ' +
        product_records[i].productPrice +
        '</div><div style="width: 6%">Ｘ１</div></div>';
      subtotal += parseInt(product_records[i].productPrice,10);
      document.getElementById("newItems").appendChild(addDiv);
      document.getElementById("subtotal").innerText = subtotal;
    }
  }
}
var images = document.querySelectorAll(".product-img img");
[].forEach.call(images, function (img) {
  img.addEventListener("dragstart", handleDragStart, false);
  // img.addEventListener("dragend", handleDragEnd, false);
});

// var canvasContainer = document.getElementsByClassName("canvas-target");
// canvasTarget.addEventListener("dragenter", handleDragEnter, false);
canvasTarget.addEventListener("dragover", handleDragOver, false);
canvasTarget.addEventListener("dragleave", handleDragLeave, false);
canvasTarget.addEventListener("drop", handleDrop, false);

//cart-icon
$(".outfit-cart").click(function () {
  //display none -> block
  let cartDisplay = $(".cart-num").css("display");
  if (cartDisplay === "none") {
    $(".cart-num").css("display", "block");
  }
  // alert("已將商品加入購物車！");
  Swal.fire({
    icon: "success",
    title: "已將商品加入購物車！",
    showConfirmButton: false,
    timer: 1500,
  });
  //cart-num ++
  // let cartNum = parseInt($(".cart-num").text());
  //限制一次加進購物車數量
  // if(cartNum>=10){
  //   Swal.fire({
  //   icon: 'error',
  //   title: '一次最多只能放入10樣商品喔',
  //   showConfirmButton: false,
  //   timer: 1500
  // })
  // }else{
  let product_records = new Array();
  product_records = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  // console.log("product_records", product_records);
  // console.log("product_records.length", product_records.length);
  $(".cart-num").text(product_records.length);
  // }
});

// //////////以下為canvas2image//////////////////
var canvasPng,
  ctx,
  bMouseIsDown = false,
  iLastX,
  iLastY,
  $save,
  $imgs;
function init() {
  canvasPng = document.querySelector(".cvs");
  // ctx = canvasPng.getContext("2d");
  $save = document.getElementById("save");
  $imgs = document.getElementById("imgs");
  bind();
}
function bind() {
  canvasPng.onmousedown = function (e) {
    bMouseIsDown = true;
    iLastX =
      e.clientX -
      canvasPng.offsetLeft +
      (window.pageXOffset ||
        document.body.scrollLeft ||
        document.documentElement.scrollLeft);
    iLastY =
      e.clientY -
      canvasPng.offsetTop +
      (window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop);
  };
  canvasPng.onmouseup = function () {
    bMouseIsDown = false;
    iLastX = -1;
    iLastY = -1;
  };
  canvasPng.onmousemove = function (e) {
    if (bMouseIsDown) {
      var iX =
        e.clientX -
        canvasPng.offsetLeft +
        (window.pageXOffset ||
          document.body.scrollLeft ||
          document.documentElement.scrollLeft);
      var iY =
        e.clientY -
        canvasPng.offsetTop +
        (window.pageYOffset ||
          document.body.scrollTop ||
          document.documentElement.scrollTop);
      // ctx.moveTo(iLastX, iLastY);
      // ctx.lineTo(iX, iY);
      // ctx.stroke();
      iLastX = iX;
      iLastY = iY;
    }
  };
}
// onload = init;

$("#save").click(function (e) {
  // var type = "png",
  //   w = "800",
  //   h = "452";
  // Canvas2Image.saveAsImage(canvasPng, w, h, type);
  // console.log(w, h, type);
  html2canvas(document.getElementById("canvasBox")).then(function (canvas) {
    // document.body.appendChild(canvas);
    var a = document.createElement("a");
    a.href = canvas
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");
    a.download = "image.jpg";
    a.click();
  });
});