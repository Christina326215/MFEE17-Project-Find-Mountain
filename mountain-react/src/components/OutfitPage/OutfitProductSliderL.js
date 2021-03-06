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
                  alt="The North Face ????????????????????????"
                  title="The North Face ????????????????????????"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="10"
                  data-productbrand="The North Face"
                  data-productname="????????????????????????"
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
                  ????????????????????????
                </p>
              </div>
            </div>

            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={bagsPic2Removebg}
                  alt="The North Face ????????????????????????"
                  title="The North Face ????????????????????????"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="11"
                  data-productbrand="The North Face"
                  data-productname="????????????????????????"
                  data-price="2180"
                  data-type="2"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  The North Face
                  <br />
                  ????????????????????????
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={bagsPic3Removebg}
                  alt="The North Face ???????????????????????????"
                  title="The North Face ???????????????????????????"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="12"
                  data-productbrand="The North Face"
                  data-productname="???????????????????????????"
                  data-price="5292"
                  data-type="2"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  The North Face
                  <br />
                  ???????????????????????????
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={shoesPic1Removebg}
                  alt="MERRELL ??????????????????"
                  title="MERRELL ??????????????????"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="1"
                  data-productbrand="MERRELL"
                  data-productname="??????????????????"
                  data-price="2680"
                  data-type="1"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  MERRELL
                  <br />
                  ??????????????????
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={shoesPic2Removebg}
                  alt="TEVA ????????????????????????"
                  title="TEVA ????????????????????????"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="2"
                  data-productbrand="TEVA"
                  data-productname="????????????????????????"
                  data-price="2706"
                  data-type="1"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  TEVA
                  <br />
                  ????????????????????????
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={shoesPic3Removebg}
                  alt="KEEN ?????????????????????"
                  title="KEEN ?????????????????????"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="3"
                  data-productbrand="KEEN"
                  data-productname="?????????????????????"
                  data-price="3915"
                  data-type="1"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  KEEN
                  <br />
                  ?????????????????????
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={clothesPic1Removebg}
                  alt="QUECHUA ???????????????????????????"
                  title="QUECHUA ???????????????????????????"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="19"
                  data-productbrand="QUECHUA"
                  data-productname="???????????????????????????"
                  data-price="499"
                  data-type="3"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  QUECHUA
                  <br />
                  ???????????????????????????
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={clothesPic2Removebg}
                  alt="KALENJI??????????????????????????????"
                  title="KALENJI??????????????????????????????"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="20"
                  data-productbrand=""
                  data-productname="KALENJI ??????????????????????????????"
                  data-price="499"
                  data-type="3"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  KALENJI
                  <br />
                  ??????????????????????????????
                </p>
              </div>
            </div>
            <div className="outfit-product">
              <div className="outfit-product-img">
                <img
                  src={clothesPic3Removebg}
                  alt="QUECHUA ?????????????????????"
                  title="QUECHUA ?????????????????????"
                  className="outfit-slider-image outfit-cover-fit"
                  draggable
                  id="21"
                  data-productbrand="QUECHUA"
                  data-productname="?????????????????????"
                  data-price="499"
                  data-type="3"
                />
              </div>
              <div className="outfit-product-info">
                <p>
                  QUECHUA
                  <br />
                  ?????????????????????
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
