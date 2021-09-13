import React from 'react';

// ===icon start===
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
// ===icon end===

//===import img start===
import clothesPic1Removebg from '../../img/img-outfit/clothes-pic1-removebg-preview.png';
import clothesPic2Removebg from '../../img/img-outfit/clothes-pic2-removebg-preview.png';
//===import img end===

function ProductSlider() {
  return (
    <>
      <div id="div1" class="outfit-target">
        {/* product-warpper start */}
        <div class="outfit-product-slider">
          <BsFillCaretLeftFill class="outfit-prev" id="slideLeft" />
          <BsFillCaretRightFill class="outfit-next" id="slideRight" />
          <div class="outfit-product-wrapper" id="slider">
            <div class="outfit-product">
              <div class="outfit-product-img">
                <img
                  src={clothesPic1Removebg}
                  alt=""
                  class="outfit-slider-image outfit-cover-fit"
                  draggable
                />
              </div>
              <div class="outfit-product-info">
                <p>
                  the North Face
                  <br />
                  黑灰色休閒後背包
                </p>
              </div>
            </div>
            <div class="outfit-product">
              <div class="outfit-product-img">
                <img
                  src={clothesPic2Removebg}
                  alt=""
                  class="outfit-slider-image outfit-cover-fit"
                  draggable
                />
              </div>
              <div class="outfit-product-info">
                <p>
                  the North Face
                  <br />
                  黑灰色休閒後背包
                </p>
              </div>
            </div>
            <div class="outfit-product">
              <div class="outfit-product-img">
                <img
                  src="./img/img-outfit/clothes-pic3-removebg-preview.png"
                  alt=""
                  class="outfit-slider-image outfit-cover-fit"
                  draggable
                />
              </div>
              <div class="outfit-product-info">
                <p>
                  the North Face
                  <br />
                  黑灰色休閒後背包
                </p>
              </div>
            </div>
            <div class="outfit-product">
              <div class="outfit-product-img">
                <img
                  src="./img/img-outfit/bags-pic1-removebg-preview.png"
                  alt=""
                  class="outfit-slider-image outfit-cover-fit"
                  draggable
                />
              </div>
              <div class="outfit-product-info">
                <p>
                  the North Face
                  <br />
                  黑灰色休閒後背包
                </p>
              </div>
            </div>
            <div class="outfit-product">
              <div class="outfit-product-img">
                <img
                  src="./img/img-outfit/bags-pic2-removebg-preview.png"
                  alt=""
                  class="outfit-slider-image outfit-cover-fit"
                  draggable
                />
              </div>
              <div class="outfit-product-info">
                <p>
                  the North Face
                  <br />
                  黑灰色休閒後背包
                </p>
              </div>
            </div>
            <div class="outfit-product">
              <div class="outfit-product-img">
                <img
                  src="./img/img-outfit/bags-pic3-removebg-preview.png"
                  alt=""
                  class="outfit-slider-image outfit-cover-fit"
                  draggable
                />
              </div>
              <div class="outfit-product-info">
                <p>
                  the North Face
                  <br />
                  黑灰色休閒後背包
                </p>
              </div>
            </div>
            <div class="outfit-product">
              <div class="outfit-product-img">
                <img
                  src="./img/img-outfit/shoes-pic1-removebg-preview.png"
                  alt=""
                  class="outfit-slider-image outfit-cover-fit"
                  draggable
                />
              </div>
              <div class="outfit-product-info">
                <p>
                  the North Face
                  <br />
                  黑灰色休閒後背包
                </p>
              </div>
            </div>
            <div class="outfit-product">
              <div class="outfit-product-img">
                <img
                  src="./img/img-outfit/shoes-pic2-removebg-preview.png"
                  alt=""
                  class="outfit-slider-image outfit-cover-fit"
                  draggable
                />
              </div>
              <div class="outfit-product-info">
                <p>
                  the North Face
                  <br />
                  黑灰色休閒後背包
                </p>
              </div>
            </div>
            <div class="outfit-product">
              <div class="outfit-product-img">
                <img
                  src="./img/img-outfit/shoes-pic3-removebg-preview.png"
                  alt=""
                  class="outfit-slider-image outfit-cover-fit"
                  draggable
                />
              </div>
              <div class="outfit-product-info">
                <p>
                  the North Face
                  <br />
                  黑灰色休閒後背包
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* product-warpper end */}
      </div>
      <div id="div2" class="outfit-target">
        <p>Hi I'm div2.</p>
      </div>
      <div id="div3" class="outfit-target">
        <p>Hi I'm div3.</p>
      </div>
    </>
  );
}

export default ProductSlider;
