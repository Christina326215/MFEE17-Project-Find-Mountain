const canvas = new fabric.Canvas("canvasBg", {
  width: 1081,
  height: 611,
});

// canvas.setBackgroundImage(
//   "./img/postcard-bg.png",
//   () => canvas.renderAll(),
//   // { crossOrigin: "Anonymous" }
// );

fabric.Image.fromURL(
  "./img/img-outfit/postcard-bg.png",
  (img) => {
    const oImg = img.set({
      width: 1081,
      height: 611,
    });
    canvas.setBackgroundImage(oImg).renderAll();
  }
  // { crossOrigin: "Anonymous" }
);

// const canvas = new fabric.Canvas("canvas", {
//   width: 500,
//   height: 400,
// });

// const $ = (id) => document.getElementById(id);
//       // const imageUploader = $("imageUploader");
//       // const file = $("file");
//       const imgset = $("imgset");
//       // const defaultImg = $("defaultImg");
const imageUploader = document.getElementById("imageUploader");
const file = document.getElementById("file");
const imgset = document.getElementById("imgset");
// const test1=document.querySelector(".test1")
const productImg = document.querySelectorAll(".product-img");
// console.log(test1)
const defaultImg = document.getElementById("defaultImg");

let movingImage;
let imgDragOffset = {
  offsetX: 0,
  offsetY: 0,
};
// function uploadFile(e) {
//   file.click();
// }

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

// function handleFile() {
//   const fileReader = new FileReader();
//   fileReader.readAsDataURL(this.files[0]);
//   fileReader.onload = (e) => {
//     // 圖片 base64
//     const dataURL = e.target.result;
//     const img = document.createElement("img");
//     img.draggable = true;
//     img.src = dataURL;
//     img.click = saveImg;
//     imgset.appendChild(img);
//   };
// }

function dropImg(e) {
  console.log("2");
  const { offsetX, offsetY } = e.e;
  console.log(offsetX, offsetY);
  const image = new fabric.Image(movingImage, {
    width: movingImage.naturalWidth,
    height: movingImage.naturalHeight,
    scaleX: 100 / movingImage.naturalWidth,
    scaleY: 100 / movingImage.naturalHeight,
    // top: offsetY - imgDragOffset.offsetY,
    // left: offsetX - imgDragOffset.offsetX,
    top: offsetY,
    left:offsetX,
  });
  console.log(image);
  canvas.add(image);
}

// imageUploader.addEventListener("click", uploadFile, true);
// file.addEventListener("change", handleFile);
canvas.on("drop", dropImg);

// defaultImg.addEventListener('mousedown', saveImg)

let i;
for(i=0;i<productImg.length;i++){
  productImg[i].addEventListener("mousedown", saveImg);
}
imgset.addEventListener("mousedown", saveImg);

// fabric.Image.fromURL(
//   srcImg,
//   function (oImg) {
//     canvas.add(oImg);
//   },
//   { crossOrigin: "Anonymous" }
// );
