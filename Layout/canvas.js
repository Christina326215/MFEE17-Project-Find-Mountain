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
  console.log("handleDragStart e", e);
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
  document.getElementById("hide").style.display="none"
  // if (e.stopPropagation) {
  //     e.stopPropagation();
  // }
  console.log("handleDrop e",e);
  let id = e.dataTransfer.getData("text/plain");
  // console.log(id);
  var img = document.querySelector("#" + id);
  // console.log(img);
  var newImage = new fabric.Image(img, {
    width: img.width,
    height: img.height,
    // Set the center of the new object based on the event coordinates relative
    // to the canvas container.
    left: e.layerX,
    top: e.layerY,
  });
  console.log('newImage',newImage);
  let canvasAdd=canvas.add(newImage);
  console.log('canvasAdd',canvasAdd);

  selectedImgs.push("#" + id);
  console.log("selectedImgs", selectedImgs);
  showSelectedImgs();
  return false;
}
function showSelectedImgs() {
  let newItem = document.getElementById("newItem");
  newItem.innerHTML = "";
  for (let i = 0; i < selectedImgs.length; i++) {
    let image = new Image();
    let url = document.querySelector(selectedImgs[i]).getAttribute("src");
    image.src = url;
    newItem.appendChild(image);
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

