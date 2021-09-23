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
import OutfitProductSliderL from './OutfitProductSliderL';
import OutfitProductSliderM from './OutfitProductSliderM';
import OutfitProductSliderH from './OutfitProductSliderH';
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

  // const handleDragStart = (e) => {
  //   console.log('e', e);
  //   // e.dataTransfer.setData('text/plain', e.currentTarget.id);
  //   // console.log('e.currentTarget.id', e.currentTarget.id);
  // };

  useEffect(() => {
    // async function outfitData() {
    //   try {
    //     const outfitData = await axios.get(outfitURL);
    //     console.log(outfitData.data); //for check
    //     setListData(outfitData.data);
    //     setOutfitProducts(outfitData.data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    // outfitData();

    $('#div1').show();
    $('#div2').hide();
    $('#div3').hide();

    $('.outfit-single').click(function () {
      $('.target').hide();
      $('#div' + $(this).attr('target')).show();
    });

    $('#slideLeft').click(function () {
      // $('#slider').scrollLeft -= 180;
      document.getElementById('slider').scrollLeft -= 180;
      // $('.outfit-product-wrapper').scrollLeft -= 180;
    });
    $('#slideRight').click(function () {
      // console.log('click');
      // $('#slider').scrollLeft += 180;
      document.getElementById('slider').scrollLeft += 180;
      // $('.outfit-product-wrapper').scrollLeft += 180;
    });
    $('#slideLeft2').click(function () {
      // $('#slider').scrollLeft -= 180;
      document.getElementById('slider2').scrollLeft -= 180;
      // $('.outfit-product-wrapper').scrollLeft -= 180;
    });
    $('#slideRight2').click(function () {
      // console.log('click');
      // $('#slider').scrollLeft += 180;
      document.getElementById('slider2').scrollLeft += 180;
      // $('.outfit-product-wrapper').scrollLeft += 180;
    });
    $('#slideLeft3').click(function () {
      // $('#slider').scrollLeft -= 180;
      document.getElementById('slider3').scrollLeft -= 180;
      // $('.outfit-product-wrapper').scrollLeft -= 180;
    });
    $('#slideRight3').click(function () {
      // console.log('click');
      // $('#slider').scrollLeft += 180;
      document.getElementById('slider3').scrollLeft += 180;
      // $('.outfit-product-wrapper').scrollLeft += 180;
    });

    setTimeout(() => {
      let canvasTarget = document.querySelector('.outfit-canvas-target');
      let selectedImgs = [];
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

      function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
      }

      function handleDragEnd(e) {}
      function handleDragEnter(e) {
        // e.stopPropagation();
      }
      function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';

        return false;
      }
      function handleDragLeave(e) {
        // e.stopPropagation();
      }
      // showSelectedData();
      function handleDrop(e) {
        // handleDragStart();
        e.stopPropagation();
        document.getElementById('hide').style.display = 'none';
        // if (e.stopPropagation) {
        //     e.stopPropagation();
        // }
        let id = e.dataTransfer.getData('text/plain');
        // console.log('id', id)
        var img = document.getElementById(id);
        // console.log('img', img);
        // var img = '123';

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

        selectedImgs.push(id);
        // console.log("selectedImgs", selectedImgs);
        saveData();
        return false;
      }
      function saveData() {
        console.log('selectedImgs save', selectedImgs);
        for (let i = 0; i < selectedImgs.length; i++) {
          let productPicUrl = document
            .getElementById(selectedImgs[i])
            .getAttribute('src');
          // console.log('productPicUrl',productPicUrl);
          // ./img/img-outfit/clothes-pic1-removebg-preview.png
          let productName = document.getElementById(selectedImgs[i]).dataset
            .productname;
          // console.log('productName',productName);
          // Arcteryx 始祖鳥 單件式GORE-TEX化纖保暖外套
          let productPrice = document.getElementById(selectedImgs[i]).dataset
            .price;
          // console.log('productPrice',productPrice); //5000
          // let product_records = new Array();
          let product_records = localStorage.getItem('products')
            ? JSON.parse(localStorage.getItem('products'))
            : [];
          console.log('product_records', product_records);
          if (
            product_records.some((v) => {
              return v.productName == productName;
            })
          ) {
            console.log('duplicate data');
          } else {
            product_records.push({
              productPicUrl: productPicUrl,
              productName: productName,
              productPrice: productPrice,
            });
            localStorage.setItem('products', JSON.stringify(product_records));
          }
        }

        showSelectedData();
      }
      function showSelectedData() {
        let newItems = document.getElementById('newItems');
        newItems.innerHTML = '';

        let product_records = new Array();
        product_records = localStorage.getItem('products')
          ? JSON.parse(localStorage.getItem('products'))
          : [];
        // console.log("product_records.length", product_records.length);

        if (product_records) {
          let subtotal = 0;
          for (let i = 0; i < product_records.length; i++) {
            let addDiv = document.createElement('div');
            addDiv.className = 'newItem';
            addDiv.innerHTML =
              '<div class="productPic"><img class="cover-fit" src="' +
              product_records[i].productPicUrl +
              '"/></div><div class="productName">' +
              product_records[i].productName +
              '</div><div class="productPrice">NT$ ' +
              product_records[i].productPrice +
              '</div><div class="productCount">Ｘ１</div></div>';
            subtotal += parseInt(product_records[i].productPrice, 10);
            document.getElementById('newItems').appendChild(addDiv);
            document.getElementById('subtotal').innerText = subtotal;
          }
        }
      }
      var images = document.querySelectorAll('.outfit-product-img img');
      [].forEach.call(images, function (img) {
        img.addEventListener('dragstart', handleDragStart, false);
        img.addEventListener('dragend', handleDragEnd, false);
      });

      // var canvasContainer = document.getElementsByClassName('canvas-target');
      canvasTarget.addEventListener('dragenter', handleDragEnter, false);
      canvasTarget.addEventListener('dragover', handleDragOver, false);
      canvasTarget.addEventListener('dragleave', handleDragLeave, false);
      canvasTarget.addEventListener('drop', handleDrop, false);

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
                <div id="div1" className="target">
                  {/* <OutfitProductSliderL dragStart={handleDragStart()} /> */}
                  <OutfitProductSliderL />
                </div>
                <div id="div2" className="target">
                  <OutfitProductSliderM />
                </div>
                <div id="div3" className="target">
                  <OutfitProductSliderH />
                </div>

                {/* <div id="div1" className="outfit-target"> */}
                {/* product-warpper start */}
                {/* <div className="outfit-product-slider">
                    <BsFillCaretLeftFill
                      className="outfit-prev mb-1"
                      id="slideLeft"
                    />
                    <BsFillCaretRightFill
                      className="outfit-next mb-1"
                      id="slideRight"
                    /> */}
                {/* <div className="outfit-product-wrapper" id="slider"> */}

                {/* 連資料庫寫法 start */}
                {/* {outfitProducts.map((outfitProduct, i) => (
                        <div className="outfit-product" key={i}>
                          <div className="outfit-product-img">
                            <img
                              src={`${IMAGE_URL}/img/img-outfit/${outfitProduct.pic}`}
                              alt=""
                              className="outfit-slider-image outfit-cover-fit"
                              draggable
                            />
                          </div>
                          <div className="outfit-product-info">
                            <p>{outfitProduct.name}</p>
                          </div>
                        </div>
                      ))} */}
                {/* 連資料庫寫法 end */}
                {/* </div> */}
                {/* </div> */}
                {/* product-warpper end */}
                {/* </div> */}
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
              <div class="order">
                <div class="orderTitle">
                  <p class="order-head mr-3">穿搭組合</p>
                  <p class="order-head">
                    NT$ <span id="subtotal">0</span>
                  </p>
                </div>
                <div id="newItems">
                  {/* <div class="newItem">
                    <div style={{ width: '100px' }}>
                      <img class="cover-fit" src={clothesPic1Removebg} alt="" />
                    </div>
                    <div style={{ width: '60%' }}>
                      SALOMON EVASION GORE-TEX登山健行鞋
                    </div>
                    <div style={{ width: '80px' }}>NT$ 1000</div>
                    <div style={{ width: '60px' }}>Ｘ１</div>
                  </div> */}
                </div>
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
