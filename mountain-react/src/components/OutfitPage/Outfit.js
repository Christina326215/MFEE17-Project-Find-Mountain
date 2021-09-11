import React from 'react';
import '../../styles/outfit.css';
import { fabric } from 'fabric';

function Outfit(props) {
  return (
    <>
      <h2 class="title">建議穿搭</h2>
      <p class="intro">依下面步驟來挑選最佳商品搭配並製作出個人化明信片</p>
      <div class="content">
        <div class="sub-content">
          <div class="container">
            <div class="row my-3 d-flex justify-content-center">
              {/* <div class="col col-lg-4"></div> */}
              {/* 製作個人化明信片 start */}
              <div class="mt-5">
                <h3 class="subTitle">製作個人化明信片</h3>
                <div class="underline"></div>
                <div class="canvas-box cvs" id="canvasBox">
                  <div class="canvas-target position-absolute position-relative">
                    <p style={{display: "block"}} id="hide">
                      請將以上商品
                      <br />
                      拖曳加入至此
                    </p>
                    {/* <canvas id="canvas"></canvas> */}
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
                  <thead>
                    <tr>
                      <td class="order-head">穿搭組合</td>
                      <td class="order-head">NT$ 4,000</td>
                    </tr>
                  </thead>
                  <tbody>
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
          <i class="fab fa-facebook-square"></i>分享明信片
        </button>
        <button class="btn btn-outline-primary" id="save">
          <i class="bi bi-download"></i>儲存明信片
        </button>
        <button class="btn btn-primary">將所選商品加入購物車</button>
      </div>
    </>
  );
}

export default Outfit;
