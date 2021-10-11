import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

// ===icon start===
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
// ===icon end===

//===import img start===
import clothesPic7Removebg from '../../img/img-outfit/clothes-pic7-removebg-preview.png';
import clothesPic8Removebg from '../../img/img-outfit/clothes-pic8-removebg-preview.png';
import clothesPic9Removebg from '../../img/img-outfit/clothes-pic9-removebg-preview.png';
import bagsPic7Removebg from '../../img/img-outfit/bags-pic7-removebg-preview.png';
import bagsPic8Removebg from '../../img/img-outfit/bags-pic8-removebg-preview.png';
import bagsPic9Removebg from '../../img/img-outfit/bags-pic9-removebg-preview.png';
import shoesPic7Removebg from '../../img/img-outfit/shoes-pic7-removebg-preview.png';
import shoesPic8Removebg from '../../img/img-outfit/shoes-pic8-removebg-preview.png';
import shoesPic9Removebg from '../../img/img-outfit/shoes-pic9-removebg-preview.png';
//===import img end===

function OutfitProductSlider(props) {
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingProduct(false);
    }, 200);
  }, []);
  const spinner = (
    <div className="outfit-product-wrapper" id="slider">
      <div className="outfit-product">
        <div className="outfit-product-img">
          <Skeleton height={160} width={160} />
        </div>
        <div className="outfit-product-info text-left">
          <p>
            <Skeleton width={70} />
            <br />
            <Skeleton width={100} />
          </p>
        </div>
      </div>
      <div className="outfit-product">
        <div className="outfit-product-img">
          <Skeleton height={160} width={160} />
        </div>
        <div className="outfit-product-info text-left">
          <p>
            <Skeleton width={70} />
            <br />
            <Skeleton width={100} />
          </p>
        </div>
      </div>
      <div className="outfit-product">
        <div className="outfit-product-img">
          <Skeleton height={160} width={160} />
        </div>
        <div className="outfit-product-info text-left">
          <p>
            <Skeleton width={70} />
            <br />
            <Skeleton width={100} />
          </p>
        </div>
      </div>
      <div className="outfit-product">
        <div className="outfit-product-img">
          <Skeleton height={160} width={160} />
        </div>
        <div className="outfit-product-info text-left">
          <p>
            <Skeleton width={70} />
            <br />
            <Skeleton width={100} />
          </p>
        </div>
      </div>
      <div className="outfit-product">
        <div className="outfit-product-img">
          <Skeleton height={160} width={160} />
        </div>
        <div className="outfit-product-info text-left">
          <p>
            <Skeleton width={70} />
            <br />
            <Skeleton width={100} />
          </p>
        </div>
      </div>
      <div className="outfit-product">
        <div className="outfit-product-img">
          <Skeleton height={160} width={160} />
        </div>
        <div className="outfit-product-info text-left">
          <p>
            <Skeleton width={70} />
            <br />
            <Skeleton width={100} />
          </p>
        </div>
      </div>
      <div className="outfit-product">
        <div className="outfit-product-img">
          <Skeleton height={160} width={160} />
        </div>
        <div className="outfit-product-info text-left">
          <p>
            <Skeleton width={70} />
            <br />
            <Skeleton width={100} />
          </p>
        </div>
      </div>
      <div className="outfit-product">
        <div className="outfit-product-img">
          <Skeleton height={160} width={160} />
        </div>
        <div className="outfit-product-info text-left">
          <p>
            <Skeleton width={70} />
            <br />
            <Skeleton width={100} />
          </p>
        </div>
      </div>
      <div className="outfit-product">
        <div className="outfit-product-img">
          <Skeleton height={160} width={160} />
        </div>
        <div className="outfit-product-info text-left">
          <p>
            <Skeleton width={70} />
            <br />
            <Skeleton width={100} />
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {/* product-warpper start */}
      <div className="outfit-product-slider">
        <BsFillCaretLeftFill className="outfit-prev mb-1" id="slideLeft3" />
        <BsFillCaretRightFill className="outfit-next mb-1" id="slideRight3" />
        {isLoadingProduct ? (
          spinner
        ) : (
          <div className="outfit-product-wrapper" id="slider3">
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={bagsPic7Removebg}
                  alt="GREGORY JADE 38 登山背包"
                  title="GREGORY JADE 38 登山背包"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="16"
                  data-productbrand="GREGORY"
                  data-productname="JADE 38 登山背包"
                  data-price="6070"
                  data-type="2"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  GREGORY
                  <br />
                  JADE 38 登山背包
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={bagsPic8Removebg}
                  alt="The North Face 藍色專業登山後背包"
                  title="The North Face 藍色專業登山後背包"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="17"
                  data-productbrand="The North Face"
                  data-productname="藍色專業登山後背包"
                  data-price="8380"
                  data-type="2"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  The North Face
                  <br />
                  藍色專業登山後背包
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={bagsPic9Removebg}
                  alt="The North Face 黑色舒適防護專業後背包"
                  title="The North Face 黑色舒適防護專業後背包"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="18"
                  data-productbrand="The North Face"
                  data-productname="黑色舒適防護專業後背包"
                  data-price="4923"
                  data-type="2"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  The North Face
                  <br />
                  黑色舒適防護專業後背包
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={shoesPic7Removebg}
                  alt="CARPA GORE-TEX登山鞋"
                  title="CARPA GORE-TEX登山鞋"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="7"
                  data-productbrand="CARPA"
                  data-productname="GORE-TEX登山鞋"
                  data-price="4779"
                  data-type="1"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  CARPA
                  <br />
                  GORE-TEX登山鞋
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={shoesPic8Removebg}
                  alt="ASOLO 阿空加瓜牛皮冰攀靴"
                  title="ASOLO 阿空加瓜牛皮冰攀靴"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="8"
                  data-productbrand="ASOLO"
                  data-productname="阿空加瓜牛皮冰攀靴"
                  data-price="8980"
                  data-type="1"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  ASOLO
                  <br />
                  阿空加瓜牛皮冰攀靴
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={shoesPic9Removebg}
                  alt="Zamberlan 皮革登山靴"
                  title="Zamberlan 皮革登山靴"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="9"
                  data-productbrand="Zamberlan"
                  data-productname="皮革登山靴"
                  data-price="14580"
                  data-type="1"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  Zamberlan
                  <br />
                  皮革登山靴
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={clothesPic7Removebg}
                  alt="Arcteryx 始祖鳥 單件式GORE-TEX化纖保暖外套"
                  title="Arcteryx 始祖鳥 單件式GORE-TEX化纖保暖外套"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="25"
                  data-productbrand="Arcteryx 始祖鳥"
                  data-productname="單件式GORE-TEX化纖保暖外套"
                  data-price="27360"
                  data-type="3"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  Arcteryx 始祖鳥
                  <br />
                  單件式GORE-TEX化纖保暖外套
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={clothesPic8Removebg}
                  alt="The North Face Summit L5 FUTURELIGHT"
                  title="The North Face Summit L5 FUTURELIGHT"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="26"
                  data-productbrand="The North Face"
                  data-productname="Summit L5 FUTURELIGHT"
                  data-price="18200"
                  data-type="3"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  The North Face
                  <br />
                  Summit L5 FUTURELIGHT
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={clothesPic9Removebg}
                  alt="歐都納 女款專業登山兩件式防水外套"
                  title="歐都納 女款專業登山兩件式防水外套"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="27"
                  data-productbrand="歐都納"
                  data-productname="女款專業登山兩件式防水外套"
                  data-price="13650"
                  data-type="3"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  歐都納 <br />
                  女款專業登山兩件式防水外套
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* product-warpper end */}
    </>
  );
}

export default OutfitProductSlider;
