import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/outfit.css';
import $ from 'jquery';
import { fabric } from 'fabric';

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
                <div class="outfit-left-side position-relative">
                  <div class="outfit-bear position-absolute position-relative">
                    <div
                      class="
                      outfit-dialogBox1
                      animate__animated animate__shakeX
                      position-absolute
                    "
                    >
                      <img src="./img/img-outfit/dialogBox1.svg" alt="" />
                    </div>
                    <div
                      class="
                      outfit-dialogBox2
                      animate__animated animate__headShake
                      position-absolute
                    "
                    >
                      <img src="./img/img-outfit/dialogBox2.svg" alt="" />
                    </div>
                    <img src="./img/img-outfit/bear.svg" alt="" />
                    <div class="outfit-mountains position-absolute position-relative">
                      <div class="outfit-low-mountain outfit-single" target="1">
                        <span>初階</span>
                      </div>
                      <div
                        class="outfit-high-mountain outfit-single"
                        target="3"
                      >
                        <span>高階</span>
                      </div>
                      <div class="outfit-mid-mountain outfit-single" target="2">
                        <span>中階</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="outfit-right-side col col-lg-8">
                <div id="div1" class="outfit-target">
                  Content 1
                </div>
                <div id="div2" class="outfit-target">
                  Content 2
                </div>
                <div id="div3" class="outfit-target">
                  Content 3
                </div>
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
                <table class="outfit-order-table">
                  <thead class="outfit-order-thead">
                    <tr>
                      <td class="outfit-order-head">穿搭組合</td>
                      <td class="outfit-order-head">NT$ 4,000</td>
                    </tr>
                  </thead>
                  <tbody class="outfit-order-tbody">
                    <tr>
                      <td>
                        <div>
                          <img
                            class="outfit-cover-fit"
                            src="./img/img-outfit/shoes-pic3-removebg-preview.png"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>SALOMON EVASION GORE-TEX登山健行鞋</td>
                      <td>NT$ 1000</td>
                      <td>Ｘ１</td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <img
                            class="outfit-cover-fit"
                            src="./img/img-outfit/clothes-pic7-removebg-preview.png"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                      <td>NT$ 1000</td>
                      <td>Ｘ１</td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <img
                            class="outfit-cover-fit"
                            src="./img/img-outfit/bags-pic7-removebg-preview.png"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>The North Face 黑灰色休閒後背包</td>
                      <td>NT$ 1000</td>
                      <td>Ｘ１</td>
                    </tr>
                  </tbody>
                </table>
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
