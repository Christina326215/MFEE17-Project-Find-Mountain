import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/outfit.css';
import $ from 'jquery';
import { fabric } from 'fabric';
import SelectProduct from './SelectProduct';
import ProductSlider from './ProductSlider';
import OrderList from './OrderList';

function Outfit(props) {
  useEffect(() => {
    $('#div1').show();
    $('#div2').hide();
    $('#div3').hide();

    $('.outfit-single').click(function () {
      $('.outfit-target').hide();
      $('#div' + $(this).attr('target')).show();
    });

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
  }, []);
  return (
    <>
      <h2 class="outfit-title">建議穿搭</h2>
      <p class="outfit-intro">
        依下面步驟來挑選最佳商品搭配並製作出個人化明信片
      </p>
      <div class="outfit-content">
        <div class="outfit-sub-content">
          <div class="container">
            <div class="row my-3 d-flex justify-content-center">
              <div class="col col-lg-4">
                <SelectProduct />
              </div>
              <div class="outfit-right-side col col-lg-8">
                <ProductSlider />
              </div>
              {/* 製作個人化明信片 start */}
              <div class="mt-5">
                <h3 class="outfit-subTitle">製作個人化明信片</h3>
                <div class="outfit-underline"></div>
                <div class="outfit-canvas-box cvs" id="canvasBox">
                  <div class="outfit-canvas-target position-absolute position-relative">
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
              <div class="">
                <OrderList />
              </div>
              {/* 訂購單 end */}
            </div>
          </div>
        </div>
      </div>
      <div class="outfit-btnGroup">
        <button class="outfit-fb">
          <i class="outfit-sharedBtn fab fa-facebook-square"></i>分享明信片
        </button>
        <button class="btn btn-outline-primary" id="save">
          <i class="outfit-downloadBtn bi bi-download"></i>儲存明信片
        </button>
        <button class="btn btn-primary">將所選商品加入購物車</button>
      </div>
    </>
  );
}

export default Outfit;
