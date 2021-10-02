import React from 'react';
import { useState, useEffect } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

function OutfitProductModal(props) {
  const [cartNum, setCartNum] = useState(1);
  const [cartSize, setCartSize] = useState('');
  const [cartPrice, setCartPrice] = useState(0);
  const { productId, price, picture, name, type, show, setProductOrder } =
    props;

  useEffect(() => {
    setCartNum(1);
    setCartSize('');
    setCartPrice(0);
  }, [show]);
  useEffect(() => {
    setCartPrice(cartNum * price);
    // console.log(cartPrice);
  }, [cartNum, cartPrice, price]);

  useEffect(() => {
    let orderDetail = { id: productId, size: cartSize, num: parseInt(cartNum) };
    setProductOrder(orderDetail);
    // console.log('orderDetail child', orderDetail);
  }, [cartNum, cartSize]);
  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <input type="hidden" id="modalId" value={productId}></input>
          <img
            className="shopmain-cover-fit shadow-sm bg-white rounded"
            src={picture}
            alt={name}
            title={name}
          />
        </Col>
        <Col xs={6} md={6}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
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
              <div className="text-right">NT$ {cartPrice.toLocaleString()}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default OutfitProductModal;
