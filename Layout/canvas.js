

// fabric.Image.fromURL(
//   "./img/img-outfit/postcard-bg800.png",
//   (img) => {
//     const oImg = img.set({
//       width: 800,
//       height: 452,
//     });
//     canvas.setBackgroundImage(oImg).renderAll();
//   }
// );

// let canvasTarget=document.querySelector(".canvas-target")
const canvas = new fabric.Canvas("canvas", {
  width: canvasTarget.clientWidth,
  height: canvasTarget.clientHeight,
});

window.onresize = function(){
  canvas.setDimensions({
    width: canvasTarget.clientWidth, 
    height: canvasTarget.clientHeight,});
}

// let canvasTarget=document.querySelector(".canvas-target")
// const card = new fabric.Canvas('canvas')
// card.setWidth(canvasTarget.clientWidth)
// card.setHeight(canvasTarget.clientHeight)
// console.log(canvasTarget.clientWidth);

const productImg = document.querySelectorAll(".product-img");
const defaultImg = document.getElementById("defaultImg");

let movingImage;
let imgDragOffset = {
  offsetX: 0,
  offsetY: 0,
};
function saveImg(e) {
  console.log(e.target.tagName);
  if (e.target.tagName.toLowerCase() === "img") {
    console.log("high");
    imgDragOffset.offsetX = e.clientX - e.target.offsetLeft;
    imgDragOffset.offsetY = e.clientY - e.target.offsetTop;
    movingImage = e.target;
    console.log(movingImage);
  }
}
function dropImg(e) {
  console.log("2")
  document.getElementById("hide").style.display="none"
  const { offsetX, offsetY } = e.e;
  console.log(offsetX, offsetY);
  const image = new fabric.Image(movingImage, {
    width: movingImage.naturalWidth,
    height: movingImage.naturalHeight,
    scaleX: 100 / movingImage.naturalWidth,
    scaleY: 100 / movingImage.naturalHeight,
    top: offsetY,
    left:offsetX,
  });
  console.log(image);
  canvas.add(image);
}

canvas.on("drop", dropImg);

let i;
for(i=0;i<productImg.length;i++){
  productImg[i].addEventListener("mousedown", saveImg);
}

//////////以下為canvas2image//////////////////
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

        $save.onclick = function (e) {
          // var type = "png",
          //   w = "800",
          //   h = "452";
          // Canvas2Image.saveAsImage(canvasPng, w, h, type);
          // console.log(w, h, type);
          html2canvas(document.getElementById('canvasBox')).then(function(canvas) {
            // document.body.appendChild(canvas);
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'image.jpg';
            a.click();
        });
        };
      }
      onload = init;