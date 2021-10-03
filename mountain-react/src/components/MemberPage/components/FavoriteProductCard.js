import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../../utils/config';
//====== below icon star ======//
import { BsXSquareFill } from 'react-icons/bs';
import { Cart } from 'react-bootstrap-icons';
//====== below icon end ======//
import { useAuth } from '../../../context/auth'; // 取得setCartChange狀態

//bootstrap彈出視窗
import { Modal, Button, Row, Col } from 'react-bootstrap';

function FavoriteProductCard(props) {
  const {
    productPic,
    productBrand,
    productName,
    productPrice,
    productId,
    productType,
  } = props;
  const { setCartChange } = useAuth(); // 取得購物車數字狀態
  const [show, setShow] = useState(false);
  const [cartNum, setCartNum] = useState(1);
  const [cartSize, setCartSize] = useState('');
  const [cartPrice, setCartPrice] = useState(0);

  //控制modal show or not show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showModal = () => {
    handleShow();
  };
  // 計算總價
  useEffect(() => {
    setCartNum(1);
    setCartSize('');
    setCartPrice(0);
  }, [show]);
  useEffect(() => {
    setCartPrice(cartNum * productPrice);
    // console.log(cartPrice);
  }, [cartNum, cartPrice, productPrice]);
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
          {`${productBrand}${productName}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={6}>
            <img
              className="shopmain-cover-fit shadow-sm bg-white rounded"
              src={`${IMAGE_URL}/img/product-img/${productPic}`}
              alt={`${productBrand}${productName}`}
              title={`${productBrand}${productName}`}
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
              {productType === '2' ? (
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
        <Button>Add</Button>
      </Modal.Footer>
    </Modal>
  );
  return (
    <>
      {messageModal}
      <tr>
        <td className="member-product-article-product-picture-img-wrapper">
          <div className="member-product-article-product-picture-img-box">
            <Link to={`/shop/product-detail/${productId}`}>
              <img
                src={`${IMAGE_URL}/img/product-img/${productPic}`}
                alt={productName}
                title={productName}
                className="member-product-article-product-picture-img"
              />
            </Link>
          </div>
        </td>
        <td className="align-middle">
          {productBrand}
          <br />
          {productName}
        </td>
        <td className="align-middle">NT ${productPrice.toLocaleString()}</td>
        <td className="align-middle">
          <button
            className="member-product-article-cart-icon btn btn-primary"
            onClick={() => {
              showModal();
            }}
          >
            <Cart size={20} />
          </button>
        </td>
        <td className="member-product-article-text-weight align-middle">
          <BsXSquareFill
            id={productId}
            className="member-product-article-cancel-icon"
            size={28}
            style={{ color: '#cc543a', cursor: 'pointer' }}
          />
        </td>
      </tr>
    </>
  );
}

export default FavoriteProductCard;
