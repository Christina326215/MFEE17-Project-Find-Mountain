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

    $('.single').click(function () {
      $('.target').hide();
      $('#div' + $(this).attr('target')).show();
    });

    let canvasTarget = document.querySelector('.canvas-target');
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
      <h2 class="title">建議穿搭</h2>
      <p class="intro">依下面步驟來挑選最佳商品搭配並製作出個人化明信片</p>
      <div class="content">
        <div class="sub-content">
          <div class="container">
            <div class="row my-3 d-flex justify-content-center">
              <div class="col col-lg-4">
                <div class="left-side position-relative">
                  <div class="bear position-absolute position-relative">
                    <div
                      class="
                      dialogBox1
                      animate__animated animate__shakeX
                      position-absolute
                    "
                    >
                      <img src="./img/img-outfit/dialogBox1.svg" alt="" />
                    </div>
                    <div
                      class="
                      dialogBox2
                      animate__animated animate__headShake
                      position-absolute
                    "
                    >
                      <img src="./img/img-outfit/dialogBox2.svg" alt="" />
                    </div>
                    <img src="./img/img-outfit/bear.svg" alt="" />
                    <div class="mountains position-absolute position-relative">
                      <div class="low-mountain single" target="1">
                        <span>初階</span>
                      </div>
                      <div class="high-mountain single" target="3">
                        <span>高階</span>
                      </div>
                      <div class="mid-mountain single" target="2">
                        <span>中階</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right-side col col-lg-8">
                <div id="div1" class="target">
                  Content 1
                </div>
                <div id="div2" class="target">
                  Content 2
                </div>
                <div id="div3" class="target">
                  Content 3
                </div>
              </div>
              {/* 製作個人化明信片 start */}
              <div class="mt-5">
                <h3 class="subTitle">製作個人化明信片</h3>
                <div class="underline"></div>
                <div class="canvas-box cvs" id="canvasBox">
                  <div class="canvas-target position-absolute position-relative">
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
                <table class="order-table">
                  <thead class="order-thead">
                    <tr>
                      <td class="order-head">穿搭組合</td>
                      <td class="order-head">NT$ 4,000</td>
                    </tr>
                  </thead>
                  <tbody class="order-tbody">
                    <tr>
                      <td>
                        <div>
                          <img
                            class="cover-fit"
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
                            class="cover-fit"
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
                            class="cover-fit"
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
      <div class="btnGroup">
        <button class="fb">
          <i class="sharedBtn fab fa-facebook-square"></i>分享明信片
        </button>
        <button class="btn btn-outline-primary" id="save">
          <i class="downloadBtn bi bi-download"></i>儲存明信片
        </button>
        <button class="btn btn-primary">將所選商品加入購物車</button>
      </div>
    </>
  );
}

export default Outfit;
