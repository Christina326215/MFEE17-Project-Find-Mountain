import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/outfit.css';
import { outfitURL, IMAGE_URL } from '../../utils/config';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../context/auth'; // 取得setCartChange狀態

//=== package start===
import $ from 'jquery';
import axios from 'axios';
import { fabric } from 'fabric';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
//=== package end===

//=== components start===
import SelectProduct from './SelectProduct';
import OutfitProductSliderL from './OutfitProductSliderL';
import OutfitProductSliderM from './OutfitProductSliderM';
import OutfitProductSliderH from './OutfitProductSliderH';
import OutfitProductModal from './OutfitProductModal';
//=== components end===

// ===icon start===
import { FaFacebookSquare, FaTwitterSquare, FaLine } from 'react-icons/fa';
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsDownload,
} from 'react-icons/bs';
// ===icon end===

//===import img start===
import clothesPic1Removebg from '../../img/img-outfit/clothes-pic1-removebg-preview.png';
import clothesPic2Removebg from '../../img/img-outfit/clothes-pic2-removebg-preview.png';
import clothesPic3Removebg from '../../img/img-outfit/clothes-pic3-removebg-preview.png';
//===import img end===

function Outfit(props) {
  const { setCartChange } = useAuth(); //navbar 改變購物車狀態
  const [listData, setListData] = useState([]);
  const [outfitProducts, setOutfitProducts] = useState([]);
  const [productLocal, setProdcutLocal] = useState([]);
  const [show, setShow] = useState(false);
  const [cartNum, setCartNum] = useState(1);
  const [cartSize, setCartSize] = useState('');
  const [cartPrice, setCartPrice] = useState(0);
  const [productOrder, setProductOrder] = useState([]);
  const [productOrderPush, setProductOrderPush] = useState([]);

  useEffect(() => {
    setProductOrderPush([...productOrderPush, productOrder]);
  }, [productOrder]);

  const addCart = () => {
    // console.log('productOrder', productOrder);
    // console.log('productOrderPush', productOrderPush);
    function ClearDuplicatedItem(value) {
      return (
        value.id !== productOrder.id && value.length !== 0 && value.size !== ''
      );
    }
    let newObjArray = productOrderPush.filter(ClearDuplicatedItem);
    newObjArray.push(productOrder);
    // console.log('newObjArray', newObjArray);

    var selectSize = [];
    $('.select-size').each(function () {
      selectSize.push($(this).val());
      // console.log('select size', $(this).val());
    });
    // console.log('selectSize', selectSize);
    const index = selectSize.findIndex((v) => v === '');
    // console.log('index', index);

    if (index > -1) {
      console.log('有size為空');
      Swal.fire({
        icon: 'error',
        title: '請先選擇尺寸',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log('newObjArray', newObjArray);
      var localCart =
        JSON.parse(localStorage.getItem('ProductOrderDetail')) || [];
      // 預防重複同樣id size的資料
      for (let i = 0; i < newObjArray.length; i++) {
        const index = localCart.findIndex(
          (v) => v.id === newObjArray[i].id && v.size === newObjArray[i].size
        );
        console.log('index', index);
        if (index > -1) {
          localCart[index].num += newObjArray[i].num;
        } else {
          localCart.push(newObjArray[i]);
        }
      }
      console.log('localCart', localCart);

      localStorage.setItem('ProductOrderDetail', JSON.stringify(localCart));
      //最後要重置
      setCartChange(true);
      setProductOrderPush([]);
      // handleClose();
    }
  };

  // const handleDragStart = (e) => {
  //   console.log('e', e);
  //   // e.dataTransfer.setData('text/plain', e.currentTarget.id);
  //   // console.log('e.currentTarget.id', e.currentTarget.id);
  // };

  //控制modal show or not show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showModal = () => {
    if (productLocal.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '請先拖曳商品，組合穿搭！',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      handleShow();
    }
  };

  useEffect(() => {
    setCartNum(1);
    setCartSize('');
    setCartPrice(0);
  }, [show]);
  // facebook分享按鈕
  const fbWindow = () => {
    window.open(
      // 'https://www.facebook.com/sharer/shcarer.php?u=http://127.0.0.1:5501/outfit.html',
      `https://www.facebook.com/dialog/share?app_id=${process.env.REACT_APP_FACEBOOK_CLIENT_ID}&href=http://127.0.0.1:5501/outfit.html&hashtag=%23%E6%89%BE%E9%9D%A0%E5%B1%B1%E5%BB%BA%E8%AD%B0%E7%A9%BF%E6%90%AD%E5%80%8B%E4%BA%BA%E5%8C%96%E6%98%8E%E4%BF%A1%E7%89%87`,
      'facebook-share-dialog',
      // 'width=800,height=600'
      'height=600, width=800, top=' +
        ($(window).height() / 2 - 300) +
        ', left=' +
        ($(window).width() / 2 - 400) +
        ''
    );
  };
  // twitter分享按鈕
  const twitterWindow = () => {
    window.open(
      'http://twitter.com/share?text=%23%E6%89%BE%E9%9D%A0%E5%B1%B1%20%23%E5%BB%BA%E8%AD%B0%E7%A9%BF%E6%90%AD%20%23%E5%80%8B%E4%BA%BA%E5%8C%96%E6%98%8E%E4%BF%A1%E7%89%87&url=http://127.0.0.1:5501/outfit.html',
      'twitter-share-dialog',
      'height=600, width=800, top=' +
        ($(window).height() / 2 - 300) +
        ', left=' +
        ($(window).width() / 2 - 400) +
        ''
    );
    return false;
  };
  // line分享按鈕
  const lineWindow = () => {
    window.open(
      'https://social-plugins.line.me/lineit/share?text=%23%E6%89%BE%E9%9D%A0%E5%B1%B1%20%23%E5%BB%BA%E8%AD%B0%E7%A9%BF%E6%90%AD%20%23%E5%80%8B%E4%BA%BA%E5%8C%96%E6%98%8E%E4%BF%A1%E7%89%87&url=http://127.0.0.1:5501/outfit.html',
      'line-share-dialog',
      'height=600, width=800, top=' +
        ($(window).height() / 2 - 300) +
        ', left=' +
        ($(window).width() / 2 - 400) +
        ''
    );
    return false;
  };

  useEffect(() => {
    // 網頁重新整理時，清空localStorage
    const product_records_first = JSON.parse(localStorage.getItem('products'));
    if (product_records_first !== null) {
      localStorage.removeItem('products');
    }
    // async function outfitData() {
    //   try {
    //     const outfitData = await axios.get(outfitURL);
    //     console.log(outfitData.data); //for check
    //     setListData(outfitData.data);
    //     setOutfitProducts(outfitData.data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    // outfitData();

    // 左側選初中高階種類商品
    $('#div1').show();
    $('#div2').hide();
    $('#div3').hide();

    $('.outfit-single').click(function () {
      $('.target').hide();
      $('#div' + $(this).attr('target')).show();
    });

    // 選定初中高階種類，左右箭頭移動
    $('#slideLeft').click(function () {
      document.getElementById('slider').scrollLeft -= 180;
    });
    $('#slideRight').click(function () {
      document.getElementById('slider').scrollLeft += 180;
    });
    $('#slideLeft2').click(function () {
      document.getElementById('slider2').scrollLeft -= 180;
    });
    $('#slideRight2').click(function () {
      document.getElementById('slider2').scrollLeft += 180;
    });
    $('#slideLeft3').click(function () {
      document.getElementById('slider3').scrollLeft -= 180;
    });
    $('#slideRight3').click(function () {
      document.getElementById('slider3').scrollLeft += 180;
    });

    setTimeout(() => {
      // 設定canvas fabric
      let canvasTarget = document.querySelector('.outfit-canvas-target');
      let selectedImgs = [];
      const canvas = new fabric.Canvas('canvas', {
        width: canvasTarget.clientWidth,
        height: canvasTarget.clientHeight,
      });

      // canvas fabric隨視窗寬度高度縮放
      window.onresize = function () {
        canvas.setDimensions({
          width: canvasTarget.clientWidth,
          height: canvasTarget.clientHeight,
        });
      };

      function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
      }

      // function handleDragEnd(e) {}
      // function handleDragEnter(e) {
      // e.stopPropagation();
      // }
      function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';

        // return false;
      }
      // function handleDragLeave(e) {
      // e.stopPropagation();
      // }
      function handleDrop(e) {
        e.stopPropagation();
        document.getElementById('hide').style.display = 'none';
        let id = e.dataTransfer.getData('text/plain');
        // console.log('id', id)
        var img = document.getElementById(id);
        // console.log('img', img);

        var newImage = new fabric.Image(img, {
          width: 0,
          height: 0,
          // Set the center of the new object based on the event coordinates relative
          left: e.layerX - 47,
          top: e.layerY - 70,
        });
        newImage.scaleToWidth(100);
        newImage.scaleToHeight(100);
        // console.log("newImage", newImage);
        canvas.add(newImage);

        selectedImgs.push(id);
        // console.log("selectedImgs", selectedImgs);
        saveData();
        return false;
      }
      function saveData() {
        // console.log('selectedImgs save', selectedImgs);
        for (let i = 0; i < selectedImgs.length; i++) {
          let productId = document.getElementById(selectedImgs[i]).id;
          // console.log('productId', productId);
          let productPicUrl = document
            .getElementById(selectedImgs[i])
            .getAttribute('src');
          // console.log('productPicUrl',productPicUrl);
          // ./img/img-outfit/clothes-pic1-removebg-preview.png
          let productBrand = document.getElementById(selectedImgs[i]).dataset
            .productbrand;
          let productName = document.getElementById(selectedImgs[i]).dataset
            .productname;
          let productPrice = document.getElementById(selectedImgs[i]).dataset
            .price;
          let productType = document.getElementById(selectedImgs[i]).dataset
            .type;
          // let product_records = new Array();
          let product_records = localStorage.getItem('products')
            ? JSON.parse(localStorage.getItem('products'))
            : [];
          if (
            !product_records.some((v) => {
              return v.productName == productName;
            })
          ) {
            product_records.push({
              productId: productId,
              productPicUrl: productPicUrl,
              productBrand: productBrand,
              productName: productName,
              productPrice: productPrice,
              productType: productType,
            });
            localStorage.setItem('products', JSON.stringify(product_records));
          }
        }
        showSelectedData();
      }
      function showSelectedData() {
        let newItems = document.getElementById('newItems');
        newItems.innerHTML = '';

        // let product_records = new Array();
        let product_records = localStorage.getItem('products')
          ? JSON.parse(localStorage.getItem('products'))
          : [];
        // console.log('product_records', product_records);

        if (product_records) {
          // let subtotal = 0;
          for (let i = 0; i < product_records.length; i++) {
            let addDiv = document.createElement('div');
            addDiv.className = 'newItem';
            addDiv.innerHTML =
              '<div class="productPic"><img class="cover-fit" src="' +
              product_records[i].productPicUrl +
              '"/></div><div class="productName">' +
              product_records[i].productBrand +
              product_records[i].productName +
              '</div></div>';
            // subtotal += parseInt(product_records[i].productPrice, 10);
            document.getElementById('newItems').appendChild(addDiv);
            // document.getElementById('subtotal').innerText = subtotal;
          }
        }
        setProdcutLocal(product_records);
        setCartChange(true);
      }
      var images = document.querySelectorAll('.outfit-product-img img');
      [].forEach.call(images, function (img) {
        img.addEventListener('dragstart', handleDragStart, false);
        // img.addEventListener('dragend', handleDragEnd, false);
      });

      // canvasTarget.addEventListener('dragenter', handleDragEnter, false);
      canvasTarget.addEventListener('dragover', handleDragOver, false);
      // canvasTarget.addEventListener('dragleave', handleDragLeave, false);
      canvasTarget.addEventListener('drop', handleDrop, false);
      // 使用html2canvas截圖，儲存照片
      $('#save').click(function () {
        // console.log(document.getElementById('canvasBox'));
        html2canvas(document.getElementById('canvasBox')).then(function (
          canvas
        ) {
          // document.body.appendChild(canvas);
          var a = document.createElement('a');
          a.href = canvas
            .toDataURL('image/jpeg')
            .replace('image/jpeg', 'image/octet-stream');
          a.download = 'image.jpg';
          a.click();
        });
      });
      // console.log('productLocal', productLocal);
      // console.log('productLocal[0]', productLocal[0].productId);
    }, 500);
  }, []);

  return (
    <>
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
            {/* {`${brand}${name}`} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productLocal.map((product, i) => {
            return (
              <OutfitProductModal
                productId={product.productId}
                brand={product.productBrand}
                name={product.productName}
                price={product.productPrice}
                picture={product.productPicUrl}
                type={product.productType}
                key={product.productId}
                show={show}
                setShow={setShow}
                setProductOrder={setProductOrder}
              />
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addCart}>Add</Button>
        </Modal.Footer>
      </Modal>
      <h2 className="outfit-title">建議穿搭</h2>
      <p className="outfit-intro">
        依下面步驟來挑選最佳商品搭配並製作出個人化明信片
      </p>
      <div className="outfit-content">
        <div className="outfit-sub-content">
          <div className="container">
            <div className="row my-3 d-flex justify-content-center">
              <div className="outfit-right-side-container">
                <SelectProduct />
              </div>
              <div className="outfit-right-side">
                <div id="div1" className="target">
                  {/* <OutfitProductSliderL dragStart={handleDragStart()} /> */}
                  <OutfitProductSliderL />
                </div>
                <div id="div2" className="target">
                  <OutfitProductSliderM />
                </div>
                <div id="div3" className="target">
                  <OutfitProductSliderH />
                </div>
              </div>
              {/* 製作個人化明信片 start */}
              <div className="canvasWrap">
                <h3 className="outfit-subTitle">製作個人化明信片</h3>
                <div className="outfit-underline"></div>
                <div className="outfit-canvas-box cvs" id="canvasBox">
                  <div className="outfit-canvas-target position-absolute position-relative">
                    <p style={{ display: 'block' }} id="hide">
                      請將以上商品
                      <br />
                      拖曳加入至此
                    </p>
                    <canvas id="canvas"></canvas>
                  </div>
                </div>
                {/* canvas2image儲存圖片 start */}
                {/* <div id="imgs"></div> */}
                {/* canvas2image儲存圖片 start */}
              </div>
              {/* 製作個人化明信片 end */}
              {/* 訂購單 start */}
              <div class="order">
                <div class="orderTitle">
                  <p class="order-head">穿搭組合</p>
                  {/* <p class="order-head">
                    NT$ <span id="subtotal">0</span>
                  </p> */}
                </div>
                <div id="newItems">
                  {/* 要用js innerHTML的內容 start*/}
                  {/* <div class="newItem">
                    <div style={{ width: '100px' }}>
                      <img class="cover-fit" src={clothesPic1Removebg} alt="" />
                    </div>
                    <div style={{ width: '60%' }}>
                      SALOMON EVASION GORE-TEX登山健行鞋
                    </div>
                    <div>
                      <select>
                        <option value="">請選擇尺寸</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                      </select>
                      <Option />
                    </div>
                    <div style={{ width: '80px' }}>NT$ 1000</div>
                    <div style={{ width: '60px' }}>Ｘ１</div>
                  </div> */}
                  {/* 要用js innerHTML的內容 end*/}
                </div>
              </div>
              {/* 訂購單 end */}
            </div>
          </div>
        </div>
      </div>
      <div className="outfit-btnGroup">
        <span>分享：</span>
        <FaFacebookSquare className="fb-share-button" onClick={fbWindow} />
        <FaTwitterSquare
          className="twitter-share-button"
          onClick={twitterWindow}
        />
        <FaLine className="line-share-button" onClick={lineWindow} />
        <button className="btn btn-outline-primary" id="save">
          <BsDownload className="outfit-downloadBtn mb-1" />
          儲存明信片
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            showModal();
          }}
        >
          將所選商品加入購物車
        </button>
      </div>
    </>
  );
}

export default Outfit;
