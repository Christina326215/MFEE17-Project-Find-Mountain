const canvas = new fabric.Canvas("canvas", {
  width: 1081,
  height: 611,
});

// canvas.setBackgroundImage(
//   "./img/postcard-bg.png",
//   () => canvas.renderAll(),
//   // { crossOrigin: "Anonymous" }
// );

fabric.Image.fromURL(
  "./img/postcard-bg.png",
  (img) => {
    const oImg = img.set({
      width: 1081,
      height: 611,
    });
    canvas.setBackgroundImage(oImg).renderAll();
  }
  // { crossOrigin: "Anonymous" }
);

const $ = (id) => document.getElementById(id);
      // const imageUploader = $("imageUploader");
      // const file = $("file");
      const imgset = $("imgset");
      // const defaultImg = $("defaultImg");
      let movingImage;
      let imgDragOffset = {
        offsetX: 0,
        offsetY: 0,
      };
      // function uploadFile(e) {
      //   file.click();
      // }

      function saveImg(e) {
        if (e.target.tagName.toLowerCase() === "img") {
          imgDragOffset.offsetX = e.clientX - e.target.offsetLeft;
          imgDragOffset.offsetY = e.clientY - e.target.offsetTop;
          movingImage = e.target;
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
        const { offsetX, offsetY } = e.e;
        const image = new fabric.Image(movingImage, {
          width: movingImage.naturalWidth,
          height: movingImage.naturalHeight,
          scaleX: 100 / movingImage.naturalWidth,
          scaleY: 100 / movingImage.naturalHeight,
          top: offsetY - imgDragOffset.offsetY,
          left: offsetX - imgDragOffset.offsetX,
        });
        canvas.add(image);
      }

      // imageUploader.addEventListener("click", uploadFile, true);
      // file.addEventListener("change", handleFile);
      canvas.on("drop", dropImg);

      // defaultImg.addEventListener('mousedown', saveImg)
      imgset.addEventListener("mousedown", saveImg);

      // fabric.Image.fromURL(
      //   srcImg,
      //   function (oImg) {
      //     canvas.add(oImg);
      //   },
      //   { crossOrigin: "Anonymous" }
      // );
