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
function handleDragEnd(e) {}
function handleDragEnter(e) {
  // e.stopPropagation();
}
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";

  return false;
}
function handleDragLeave(e) {
  // e.stopPropagation();
}
function handleDrop(e) {
  e.stopPropagation();
  document.getElementById("hide").style.display = "none";
  // if (e.stopPropagation) {
  //     e.stopPropagation();
  // }
  let id = e.dataTransfer.getData("text/plain");
  var img = document.querySelector("#" + id);
  console.log(img);

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
  showSelectedImgs();
  return false;
}
function showSelectedImgs() {
  let newItem = document.getElementById("newItem");
  newItem.innerHTML = "";
  for (let i = 0; i < selectedImgs.length; i++) {
    // 存圖片
    let image = new Image();
    // console.log("new image",image);
    let url = document.querySelector(selectedImgs[i]).getAttribute("src");
    // console.log('url');
    image.src = url;

    let title = document.createElement('span');
    let perProductname=document.querySelector(selectedImgs[i])
    // console.log(text);
    title.innerText=perProductname.dataset.productname

    let price = document.createElement('span');
    price.innerText=perProductname.dataset.price

    newItem.appendChild(image);
    newItem.appendChild(title);
    newItem.appendChild(price);
  }
}
var images = document.querySelectorAll(".product-img img");
[].forEach.call(images, function (img) {
  img.addEventListener("dragstart", handleDragStart, false);
  img.addEventListener("dragend", handleDragEnd, false);
});

// var canvasContainer = document.getElementsByClassName("canvas-target");
canvasTarget.addEventListener("dragenter", handleDragEnter, false);
canvasTarget.addEventListener("dragover", handleDragOver, false);
canvasTarget.addEventListener("dragleave", handleDragLeave, false);
canvasTarget.addEventListener("drop", handleDrop, false);

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
