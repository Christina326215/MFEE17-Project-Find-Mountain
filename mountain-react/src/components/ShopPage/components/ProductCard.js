import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartFill, HeartFill } from 'react-bootstrap-icons';
//bootstrap彈出視窗
import { Modal, Button, Row, Col } from 'react-bootstrap';
import '../../../styles/product.css';
import { IMAGE_URL } from '../../../utils/config';
import $ from 'jquery';
import Swal from 'sweetalert2';

function ProductCard(props) {
  const { productId, price, picture, name, brand, type } = props;
  const [show, setShow] = useState(false);
  const [cartNum, setCartNum] = useState(1);
  const heartIconClick = function (e) {
    // console.log(e.currentTarget);
    $(e.currentTarget).toggleClass('shopmain-heart-icon-bkg-click');
    // console.log(productId);
  };
  //控制modal show or not show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const cartIconClick = function () {
  //   //display none -> block
  //   // console.log('hi');
  //   let cartDisplay = $('.cart-num').css('display');
  //   if (cartDisplay === 'none') {
  //     $('.cart-num').css('display', 'block');
  //   }
  //   // alert("已將商品加入購物車！");
  //   Swal.fire({
  //     icon: 'success',
  //     title: '已將商品加入購物車！',
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  //   //cart-num ++
  //   let cartNum = parseInt($('.cart-num').text());
  //   //限制一次加進購物車數量
  //   if (cartNum >= 10) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '一次最多只能放入10樣商品喔',
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   } else {
  //     cartNum++;
  //     $('.cart-num').text(cartNum);
  //   }
  // };
  const showModal = () => {
    handleShow();
  };
  const messageModal = (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`${brand}${name}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={6}>
            <img
              className="shopmain-cover-fit"
              src={`${IMAGE_URL}/img/product-img/${picture}`}
              alt={`${brand}${name}`}
              title={`${brand}${name}`}
            />
          </Col>
          <Col xs={6} md={6}>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  數量
                </span>
              </div>
              {/* FIXME:記得寫判斷和提示訊息 數量不能多於10小於1 */}
              <input
                type="number"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={cartNum}
                min="1"
                max="10"
                onChange={(e) => {
                  setCartNum(e.target.value);
                }}
              />
            </div>
            {type === '2' ? (
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    尺寸
                  </label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                  <option value="F" selected>
                    F
                  </option>
                </select>
              </div>
            ) : (
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    尺寸
                  </label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                  <option value="S" selected>
                    S
                  </option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </div>
            )}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button>Add</Button>
      </Modal.Footer>
    </Modal>
  );
  return (
    <>
      {messageModal}
      <div className="col-6 col-md-4 col-lg-3 px-0 my-2">
        <div className="shopmain-product-card">
          <div className="shopmain-product-img-box position-relative">
            <Link to={`/shop/product-detail/${productId}`} id={productId}>
              <img
                className="shopmain-cover-fit"
                src={`${IMAGE_URL}/img/product-img/${picture}`}
                alt={`${brand}${name}`}
                title={`${brand}${name}`}
              />
            </Link>
            <button
              className="position-absolute shopmain-heart-icon-bkg position-relative"
              onClick={heartIconClick}
            >
              <HeartFill className="position-absolute shopmain-heart-icon" />
            </button>
            <button
              className="position-absolute shopmain-cart-icon-bkg position-relative"
              // onClick={cartIconClick}
              onClick={() => {
                showModal();
              }}
            >
              <CartFill className="position-absolute shopmain-cart-icon" />
            </button>
          </div>
          <Link
            to={`/shop/product-detail/${productId}`}
            id={productId}
            className="text-left shopmain-product-name"
          >
            {brand}
            <br />
            {name}
          </Link>
          <p className="text-right shopmain-product-price">
            NT ${parseInt(price).toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
