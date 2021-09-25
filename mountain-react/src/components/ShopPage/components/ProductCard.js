import React, { useState, useEffect } from 'react';
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
  const [cartSize, setCartSize] = useState('');
  const [cartPrice, setCartPrice] = useState(0);
  //cartLocal為購物車的local storage
  const [cartLocal, setCartLocal] = useState([]);
  //取得local storage轉為陣列的資料 ProductOrder
  function getCartFromLocalStorage() {
    const ProductOrder =
      JSON.parse(localStorage.getItem('ProductOrderDetail')) || '[]';
    // console.log(ProductOrder);
    setCartLocal(ProductOrder);
  }
  const heartIconClick = function (e) {
    // console.log(e.currentTarget);
    $(e.currentTarget).toggleClass('shopmain-heart-icon-bkg-click');
    // console.log(productId);
  };
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

  //控制modal show or not show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showModal = () => {
    handleShow();
  };
  const addCart = () => {
    if (cartSize === '') {
      console.log('choose size plz');
      Swal.fire({
        icon: 'error',
        title: '請先選擇尺寸',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else {
      //為了符合local storage格式 字串 字串 數字
      let orderDetail = {
        id: productId.toString(),
        size: cartSize,
        num: parseInt(cartNum),
      };
      //localstorage for order detail start//
      //確認local storage裡面有無相同id size的資料
      const index = cartLocal.findIndex(
        (v) => v.id === orderDetail.id && v.size === orderDetail.size
      );
      console.log('index', index);
      console.log('orderDetail', orderDetail);
      console.log('cartLocal', cartLocal);
      if (index > -1) {
        //改變同款項訂購數量
        cartLocal[index].num += orderDetail.num;
        localStorage.setItem('ProductOrderDetail', JSON.stringify(cartLocal));
        console.log('這個商品已經加過了');
        // return;
      } else {
        cartLocal.push(orderDetail);
        localStorage.setItem('ProductOrderDetail', JSON.stringify(cartLocal));
        console.log('哎呦還沒喔');
      }
      //localstorage for order detail end//
    }
    Swal.fire({
      icon: 'success',
      title: '已加入購物車',
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.reload(false);
    }, 1500);
  };
  //一進畫面先讀取local storage
  useEffect(() => {
    getCartFromLocalStorage();
  }, []);
  // 計算總價
  useEffect(() => {
    setCartPrice(cartNum * price);
    // console.log(cartPrice);
  }, [cartNum, cartPrice, price]);
  const messageModal = (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      //把動畫關掉就不會報錯
      // animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="h5">
          {`${brand}${name}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={6}>
            <img
              className="shopmain-cover-fit shadow-sm bg-white rounded"
              src={`${IMAGE_URL}/img/product-img/${picture}`}
              alt={`${brand}${name}`}
              title={`${brand}${name}`}
            />
          </Col>
          <Col xs={6} md={6}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  數量
                </span>
              </div>
              {/* FIXME:記得寫判斷和提示訊息 數量不能多於10小於1 */}
              <input
                type="number"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={cartNum}
                name="cartnum"
                min="1"
                max="10"
                //防止使用者亂key數字
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
                onChange={(e) => {
                  setCartNum(e.target.value);
                }}
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text">尺寸</label>
              </div>
              {type === '2' ? (
                <select
                  className="custom-select"
                  name="size"
                  value={cartSize}
                  onChange={(e) => {
                    setCartSize(e.target.value);
                  }}
                >
                  <option value="">請選擇尺寸</option>
                  <option value="F">F</option>
                </select>
              ) : (
                <select
                  className="custom-select"
                  name="size"
                  value={cartSize}
                  onChange={(e) => {
                    setCartSize(e.target.value);
                  }}
                >
                  <option value="">請選擇尺寸</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              )}
            </div>
            <Row className="my-3">
              <Col xs={6} md={6}>
                總價：
              </Col>
              <Col xs={6} md={6}>
                <div className="text-right">
                  NT$ {cartPrice.toLocaleString()}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={addCart}>Add</Button>
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
