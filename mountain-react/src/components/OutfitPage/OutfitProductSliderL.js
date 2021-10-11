import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

// ===icon start===
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
// ===icon end===

//===import img start===
import clothesPic1Removebg from '../../img/img-outfit/clothes-pic1-removebg-preview.png';
import clothesPic2Removebg from '../../img/img-outfit/clothes-pic2-removebg-preview.png';
import clothesPic3Removebg from '../../img/img-outfit/clothes-pic3-removebg-preview.png';
import bagsPic1Removebg from '../../img/img-outfit/bags-pic1-removebg-preview.png';
import bagsPic2Removebg from '../../img/img-outfit/bags-pic2-removebg-preview.png';
import bagsPic3Removebg from '../../img/img-outfit/bags-pic3-removebg-preview.png';
import shoesPic1Removebg from '../../img/img-outfit/shoes-pic1-removebg-preview.png';
import shoesPic2Removebg from '../../img/img-outfit/shoes-pic2-removebg-preview.png';
import shoesPic3Removebg from '../../img/img-outfit/shoes-pic3-removebg-preview.png';
//===import img end===

function OutfitProductSlider(props) {
  //spinner
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);

  // const handleDragStart = (e) => {
  //   console.log('child', e);
  //   props.dragStart(e);
  // };
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
        <BsFillCaretLeftFill className="outfit-prev mb-1" id="slideLeft" />
        <BsFillCaretRightFill className="outfit-next mb-1" id="slideRight" />
        {isLoadingProduct ? (
          spinner
        ) : (
          <div className="outfit-product-wrapper" id="slider">
            <div className="outfit-product">
              <div
                className="outfit-product-img"
                // draggable="true"
                // onDragStart={(e) => handleDragStart(e)}
              >
                <img
                  src={bagsPic1Removebg}
                  alt="The North Face 黑色便捷休閒腰包"
                  title="The North Face 黑色便捷休閒腰包"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="10"
                  data-productbrand="The North Face"
                  data-productname="黑色便捷休閒腰包"
                  data-price="1780"
                  data-type="2"
                  // draggable="true"
                  // onDragStart={(e) => handleDragStart(e)}
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  The North Face
                  <br />
                  黑色便捷休閒腰包
                </p>
              </div>
            </div>

            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={bagsPic2Removebg}
                  alt="The North Face 黑灰色休閒後背包"
                  title="The North Face 黑灰色休閒後背包"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="11"
                  data-productbrand="The North Face"
                  data-productname="黑灰色休閒後背包"
                  data-price="2180"
                  data-type="2"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  The North Face
                  <br />
                  黑灰色休閒後背包
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={bagsPic3Removebg}
                  alt="The North Face 黑色舒適休閒後背包"
                  title="The North Face 黑色舒適休閒後背包"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="12"
                  data-productbrand="The North Face"
                  data-productname="黑色舒適休閒後背包"
                  data-price="5292"
                  data-type="2"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  The North Face
                  <br />
                  黑色舒適休閒後背包
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={shoesPic1Removebg}
                  alt="MERRELL 女水陸三棲鞋"
                  title="MERRELL 女水陸三棲鞋"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="1"
                  data-productbrand="MERRELL"
                  data-productname="女水陸三棲鞋"
                  data-price="2680"
                  data-type="1"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  MERRELL
                  <br />
                  女水陸三棲鞋
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={shoesPic2Removebg}
                  alt="TEVA 低筒防潑水休閒鞋"
                  title="TEVA 低筒防潑水休閒鞋"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="2"
                  data-productbrand="TEVA"
                  data-productname="低筒防潑水休閒鞋"
                  data-price="2706"
                  data-type="1"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  TEVA
                  <br />
                  低筒防潑水休閒鞋
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={shoesPic3Removebg}
                  alt="KEEN 戶外防水登山鞋"
                  title="KEEN 戶外防水登山鞋"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="3"
                  data-productbrand="KEEN"
                  data-productname="戶外防水登山鞋"
                  data-price="3915"
                  data-type="1"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  KEEN
                  <br />
                  戶外防水登山鞋
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={clothesPic1Removebg}
                  alt="QUECHUA 男透氣休閒健行外套"
                  title="QUECHUA 男透氣休閒健行外套"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="19"
                  data-productbrand="QUECHUA"
                  data-productname="男透氣休閒健行外套"
                  data-price="499"
                  data-type="3"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  QUECHUA
                  <br />
                  男透氣休閒健行外套
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={clothesPic2Removebg}
                  alt="KALENJI男士透氣連帽跑步風衣"
                  title="KALENJI男士透氣連帽跑步風衣"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="20"
                  data-productbrand=""
                  data-productname="KALENJI 男士透氣連帽跑步風衣"
                  data-price="499"
                  data-type="3"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  KALENJI
                  <br />
                  男士透氣連帽跑步風衣
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={clothesPic3Removebg}
                  alt="QUECHUA 女透氣健行外套"
                  title="QUECHUA 女透氣健行外套"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="21"
                  data-productbrand="QUECHUA"
                  data-productname="女透氣健行外套"
                  data-price="499"
                  data-type="3"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  QUECHUA
                  <br />
                  女透氣健行外套
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
