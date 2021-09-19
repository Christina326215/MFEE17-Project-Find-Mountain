import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/outfit.css';
import { outfitURL, IMAGE_URL } from '../../utils/config';
import axios from 'axios';

//=== package start===
import $ from 'jquery';
import { fabric } from 'fabric';
import html2canvas from 'html2canvas';
//=== package end===

//=== components start===
import SelectProduct from './SelectProduct';
// import OutfitProductSlider from './OutfitProductSlider';
import OrderList from './OrderList';
//=== components end===

// ===icon start===
import { FaFacebookSquare } from 'react-icons/fa';
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsDownload,
} from 'react-icons/bs';
// ===icon end===

//===import img start===
import clothesPic1Removebg from '../../img/img-outfit/clothes-pic1-removebg-preview.png';
import clothesPic2Removebg from '../../img/img-outfit/clothes-pic2-removebg-preview.png';
import clothesPic3Removebg from '../../img/img-outfit/clothes-pic3-removebg-preview.png';
//===import img end===

function Outfit(props) {
  const [listData, setListData] = useState([]);
  const [outfitProducts, setOutfitProducts] = useState([]);

  useEffect(() => {
    async function outfitData() {
      try {
        const outfitData = await axios.get(outfitURL);
        console.log(outfitData.data); //for check
        setListData(outfitData.data);
        setOutfitProducts(outfitData.data);
      } catch (e) {
        console.log(e);
      }
    }
    outfitData();

    $('#div1').show();
    $('#div2').hide();
    $('#div3').hide();

    $('.outfit-single').click(function () {
      $('.outfit-target').hide();
      $('#div' + $(this).attr('target')).show();
    });

    // let buttonRight = document.getElementById('slideRight');
    // let buttonLeft = document.getElementById('slideLeft');

    // buttonLeft.addEventListener('click', function () {
    //   document.getElementById('slider').scrollLeft -= 180;
    // });

    // buttonRight.addEventListener('click', function () {
    //   document.getElementById('slider').scrollLeft += 180;
    // });
    $('.outfit-prev').click(function () {
      // $('#slider').scrollLeft -= 180;
      document.getElementById('slider').scrollLeft -= 180;
      // $('.outfit-product-wrapper').scrollLeft -= 180;
    });
    $('.outfit-next').click(function () {
      // console.log('click');
      // $('#slider').scrollLeft += 180;
      document.getElementById('slider').scrollLeft += 180;
      // $('.outfit-product-wrapper').scrollLeft += 180;
    });

    setTimeout(() => {
      let canvasTarget = document.querySelector('.outfit-canvas-target');
      const canvas = new fabric.Canvas('canvas', {
        width: canvasTarget.clientWidth,
        height: canvasTarget.clientHeight,
      });

      window.onresize = function () {
        canvas.setDimensions({
          width: canvasTarget.clientWidth,
          height: canvasTarget.clientHeight,
        });
      };

      const productImg = document.querySelectorAll('.outfit-product-img');

      let movingImage;
      let imgDragOffset = {
        offsetX: 0,
        offsetY: 0,
      };
      function saveImg(e) {
        console.log(e.target.tagName);
        if (e.target.tagName.toLowerCase() === 'img') {
          console.log('high');
          imgDragOffset.offsetX = e.clientX - e.target.offsetLeft;
          imgDragOffset.offsetY = e.clientY - e.target.offsetTop;
          movingImage = e.target;
          console.log(movingImage);
        }
      }
      function dropImg(e) {
        console.log('2');
        document.getElementById('hide').style.display = 'none';
        const { offsetX, offsetY } = e.e;
        console.log(offsetX, offsetY);
        const image = new fabric.Image(movingImage, {
          width: movingImage.naturalWidth,
          height: movingImage.naturalHeight,
          scaleX: 100 / movingImage.naturalWidth,
          scaleY: 100 / movingImage.naturalHeight,
          top: offsetY,
          left: offsetX,
        });
        console.log(image);
        canvas.add(image);
      }

      canvas.on('drop', dropImg);

      let i;
      for (i = 0; i < productImg.length; i++) {
        productImg[i].addEventListener('mousedown', saveImg);
      }

      //////////以下為canvas2image//////////////////
      var canvasPng,
        bMouseIsDown = false,
        iLastX,
        iLastY,
        $save,
        $imgs;

      function init() {
        canvasPng = document.querySelector('.cvs');
        // ctx = canvasPng.getContext("2d");
        $save = document.getElementById('save');
        $imgs = document.getElementById('imgs');
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
      $('#save').click(function () {
        console.log(document.getElementById('canvasBox'));
        html2canvas(document.getElementById('canvasBox')).then(function (
          canvas
        ) {
          // document.body.appendChild(canvas);
          var a = document.createElement('a');
          a.href = canvas
            .toDataURL('image/jpeg')
            .replace('image/jpeg', 'image/octet-stream');
          a.download = 'image.jpg';
          a.click();
        });
      });
    }, 500);
  }, []);
  return (
    <>
      <h2 className="outfit-title">建議穿搭</h2>
      <p className="outfit-intro">
        依下面步驟來挑選最佳商品搭配並製作出個人化明信片
      </p>
      <div className="outfit-content">
        <div className="outfit-sub-content">
          <div className="container">
            <div className="row my-3 d-flex justify-content-center">
              <div className="col col-lg-4">
                <SelectProduct />
              </div>
              <div className="outfit-right-side col col-lg-8">
                {/* <OutfitProductSlider /> */}
                <div id="div1" className="outfit-target">
                  {/* product-warpper start */}
                  <div className="outfit-product-slider">
                    <BsFillCaretLeftFill
                      className="outfit-prev mb-1"
                      id="slideLeft"
                    />
                    <BsFillCaretRightFill
                      className="outfit-next mb-1"
                      id="slideRight"
                    />
                    <div className="outfit-product-wrapper" id="slider">
                      {outfitProducts.map((outfitProduct, i) => (
                        <div className="outfit-product" key={i}>
                          <div className="outfit-product-img">
                            <img
                              src={`${IMAGE_URL}/img/img-outfit/${outfitProduct.pic}`}
                              alt=""
                              className="outfit-slider-image outfit-cover-fit"
                              draggable
                            />
                            {/* <img
                              src={clothesPic1Removebg}
                              alt=""
                              className="outfit-slider-image outfit-cover-fit"
                              draggable
                            /> */}
                          </div>
                          <div className="outfit-product-info">
                            <p>{outfitProduct.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* product-warpper end */}
                </div>
              </div>
              {/* 製作個人化明信片 start */}
              <div className="canvasWrap">
                <h3 className="outfit-subTitle">製作個人化明信片</h3>
                <div className="outfit-underline"></div>
                <div className="outfit-canvas-box cvs" id="canvasBox">
                  <div className="outfit-canvas-target position-absolute position-relative">
                    <p style={{ display: 'block' }} id="hide">
                      請將以上商品
                      <br />
                      拖曳加入至此
                    </p>
                    <canvas id="canvas"></canvas>
                  </div>
                </div>
                {/* canvas2image儲存圖片 start */}
                <div id="imgs"></div>
                {/* canvas2image儲存圖片 start */}
              </div>
              {/* 製作個人化明信片 end */}
              {/* 訂購單 start */}
              <div className="">
                <OrderList />
              </div>
              {/* 訂購單 end */}
            </div>
          </div>
        </div>
      </div>
      <div className="outfit-btnGroup">
        <button className="outfit-fb">
          <FaFacebookSquare className="outfit-sharedBtn mb-1" />
          分享明信片
        </button>
        <button className="btn btn-outline-primary" id="save">
          <BsDownload className="outfit-downloadBtn mb-1" />
          儲存明信片
        </button>
        <button className="btn btn-primary">將所選商品加入購物車</button>
      </div>
    </>
  );
}

export default Outfit;
