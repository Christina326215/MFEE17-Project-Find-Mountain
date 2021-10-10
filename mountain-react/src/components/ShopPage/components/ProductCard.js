import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartFill, HeartFill } from 'react-bootstrap-icons';
//bootstrap彈出視窗
import { Modal, Button, Row, Col } from 'react-bootstrap';
import '../../../styles/product.css';
import { shopURL, IMAGE_URL } from '../../../utils/config';
import $ from 'jquery';
import Swal from 'sweetalert2';
import { useAuth } from '../../../context/auth'; // 取得setCartChange狀態
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

function ProductCard(props) {
  const {
    productId,
    price,
    picture,
    name,
    brand,
    type,
    favoriteBtn,
    setFavoriteBtn,
  } = props;
  const { setCartChange, member, auth } = useAuth(); // 取得購物車數字狀態
  const [show, setShow] = useState(false);
  const [cartNum, setCartNum] = useState(1);
  const [cartSize, setCartSize] = useState('');
  const [cartPrice, setCartPrice] = useState(0);
  //愛心顏色狀態 true為紅色 false為白色
  const [heart, setHeart] = useState(false);
  //spinner
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  //取得local storage轉為陣列的資料 ProductOrder
  const heartIconClick = function (e) {
    // console.log(e.currentTarget);
    // $(e.currentTarget).toggleClass('shopmain-heart-icon-bkg-click');
    if (auth === false) {
      Swal.fire({
        icon: 'error',
        title: '需要先登入才能加入收藏',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (member !== null) {
      // console.log('productId, memberId', productId, member.id);
      if (heart === true) {
        //取消收藏 productId 為 number
        // console.log('收藏中');
        removeWishList();
      } else {
        //加入收藏
        // console.log('沒收藏');
        addWishList();
      }
    }
  };
  //remove wish
  const removeWishList = async () => {
    try {
      let id = productId;
      // console.log('remove product id, member id', id, member.id);
      await axios.post(`${shopURL}/remove-wish`, {
        member,
        id,
      });
      setHeart(false);
      if (favoriteBtn === false) {
        setFavoriteBtn(true);
      } else {
        setFavoriteBtn(false);
      }
    } catch (e) {
      console.log(e);
    }
    Swal.fire({
      icon: 'error',
      title: '已移除收藏商品',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  //add wish

  const addWishList = async () => {
    try {
      let id = productId;
      // console.log('add product id, member id', id, member.id);
      await axios.post(`${shopURL}/add-wish`, {
        member,
        id,
      });
      setHeart(true);
      if (favoriteBtn === false) {
        setFavoriteBtn(true);
      } else {
        setFavoriteBtn(false);
      }
    } catch (e) {
      console.log(e);
    }
    Swal.fire({
      icon: 'success',
      title: '已加入收藏',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  //get Wish List
  useEffect(() => {
    async function getWishListData() {
      try {
        if (member === null) {
          // console.log('尚未登入');
          $('.shopmain-heart-icon-bkg').removeClass(
            'shopmain-heart-icon-bkg-click'
          );
          return;
        }
        // console.log('登入囉');
        const wishListData = await axios.post(`${shopURL}/wish-list`, {
          member,
        });
        // console.log('wishListData', wishListData.data);
        const wishIndex = wishListData.data.findIndex(
          (v) => v.product_id === parseInt(productId)
        );
        if (wishIndex > -1) {
          // console.log('有收藏喔');
          setHeart(true);
        } else {
          // console.log('還沒收藏喔');
          setHeart(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getWishListData();
  }, [auth, member, productId, favoriteBtn]);
  //控制modal show or not show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showModal = () => {
    handleShow();
  };
  const addCart = () => {
    const newProductOrder = JSON.parse(
      localStorage.getItem('ProductOrderDetail') || '[]'
    );
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
      const index = newProductOrder.findIndex(
        (v) => v.id === orderDetail.id && v.size === orderDetail.size
      );
      console.log('index', index);
      console.log('orderDetail', orderDetail);
      console.log('newProductOrder', newProductOrder);
      if (index > -1) {
        //改變同款項訂購數量
        newProductOrder[index].num += orderDetail.num;
        localStorage.setItem(
          'ProductOrderDetail',
          JSON.stringify(newProductOrder)
        );
        console.log('這個商品已經加過了');
        // return;
      } else {
        newProductOrder.push(orderDetail);
        localStorage.setItem(
          'ProductOrderDetail',
          JSON.stringify(newProductOrder)
        );
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
    setCartChange(true);
    handleClose();
  };
  // 計算總價
  useEffect(() => {
    setCartNum(1);
    setCartSize('');
    setCartPrice(0);
  }, [show]);
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
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingProduct(false);
    }, 1500);
  }, []);
  const spinner = (
    <div className="col-6 col-md-4 col-lg-3 px-0 my-2">
      <div className="shopmain-product-card">
        <div className="shopmain-product-img-box position-relative">
          <Link to={`/shop/product-detail/${productId}`} id={productId}>
            <Skeleton height={200} width={200} />
          </Link>
        </div>
        <p className="mt-2">
          <Skeleton width={70} />
          <br />
          <Skeleton width={100} />
        </p>
        <p className="text-right shopmain-product-price">
          <Skeleton width={70} />
        </p>
      </div>
    </div>
  );
  return (
    <>
      {messageModal}
      {isLoadingProduct ? (
        spinner
      ) : (
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
              {heart ? (
                <button
                  className="position-absolute shopmain-heart-icon-bkg position-relative shopmain-heart-icon-bkg-click"
                  onClick={heartIconClick}
                >
                  <HeartFill className="position-absolute shopmain-heart-icon" />
                </button>
              ) : (
                <button
                  className="position-absolute shopmain-heart-icon-bkg position-relative"
                  onClick={heartIconClick}
                >
                  <HeartFill className="position-absolute shopmain-heart-icon" />
                </button>
              )}
              <button
                className="position-absolute shopmain-cart-icon-bkg position-relative"
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
      )}
    </>
  );
}

export default ProductCard;
