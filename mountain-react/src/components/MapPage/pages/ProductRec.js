import { Link } from 'react-router-dom'; //a標籤要變成link
import $ from 'jquery';

//====== below icon star ======//
import { HeartFill, CartFill } from 'react-bootstrap-icons';
//====== below icon end ======//

//====== below img import start ======//
import bags_pic1Jpeg from '../../../img/product-img/bags-pic1.jpeg';
import bags_pic2Jpeg from '../../../img/product-img/bags-pic2.jpeg';
import shoes_pic1Jpeg from '../../../img/product-img/shoes-pic1.jpeg';
import clothes_pic1Jpeg from '../../../img/product-img/clothes-pic1.jpeg';
//====== below img import end ======//

const heartIcon = () => {
  $('a.mountain_heart-icon-bkg').each(function () {
    $(this).click(function () {
      $(this).toggleClass('mountain_heart-icon-bkg-click');
    });
  });
};

const cartIcon = () => {
  alert('已將商品加入購物車！');
};

export const productRec = (
  <>
    <div className="mountain_product_box">
      <div className="mountain_product_title">
        <h3 className="h2">推薦商品</h3>
      </div>
      <div className="mountain_product-list my-4">
        <div className="px-0">
          <div className="mountain_product-card">
            <div className="mountain_product-img-box position-relative">
              {/* FIXME: 產品照或許從後端抓 */}
              <img className="mountain_cover-fit" src={bags_pic1Jpeg} alt="" />
              {/* FIXME: 將產品加到收藏裡 & Link */}
              <Link
                to="#/"
                role="button"
                className="position-absolute mountain_heart-icon-bkg position-relative"
                onClick={heartIcon}
              >
                <i className="position-absolute mountain_heart-icon">
                  <HeartFill />
                </i>
              </Link>
              {/* FIXME: 將產品加到購物車裡 & Link */}
              <Link
                to="#/"
                role="button"
                className="position-absolute mountain_cart-icon-bkg position-relative"
                onClick={cartIcon}
              >
                <i className="position-absolute mountain_cart-icon">
                  <CartFill />
                </i>
              </Link>
            </div>
            {/* FIXME: Link將產品連到商品頁面 */}
            <Link to="#/" className="text-left mountain_product-name">
              The North Face
              <br />
              黑色便捷休閒腰包
            </Link>
            {/* FIXME: 價錢從後端抓 */}
            <p className="text-left mountain_product-price">NT $1,780</p>
          </div>
        </div>
        <div className="px-0">
          <div className="mountain_product-card">
            <div className="mountain_product-img-box position-relative">
              {/* FIXME: 產品照或許從後端抓 */}
              <img className="mountain_cover-fit" src={bags_pic2Jpeg} alt="" />
              {/* FIXME: 將產品加到收藏裡 & Link */}
              <Link
                to="#/"
                role="button"
                className="position-absolute mountain_heart-icon-bkg position-relative"
                onClick={heartIcon}
              >
                <i className="position-absolute mountain_heart-icon">
                  <HeartFill />
                </i>
              </Link>
              {/* FIXME: 將產品加到購物車裡 & Link */}
              <Link
                to="#/"
                role="button"
                className="position-absolute mountain_cart-icon-bkg position-relative"
                onClick={cartIcon}
              >
                <i className="position-absolute mountain_cart-icon">
                  <CartFill />
                </i>
              </Link>
            </div>
            {/* FIXME: Link將產品連到商品頁面 */}
            <Link to="#/" className="text-left mountain_product-name">
              The North Face
              <br />
              黑灰色休閒後背包
            </Link>
            {/* FIXME: 價錢從後端抓 */}
            <p className="text-left mountain_product-price">NT $2,180</p>
          </div>
        </div>

        <div className="px-0">
          <div className="mountain_product-card">
            <div className="mountain_product-img-box position-relative">
              {/* FIXME: 產品照或許從後端抓 */}
              <img className="mountain_cover-fit" src={shoes_pic1Jpeg} alt="" />
              {/* FIXME: 將產品加到收藏裡 & Link */}
              <Link
                to="#/"
                role="button"
                className="position-absolute mountain_heart-icon-bkg position-relative"
                onClick={heartIcon}
              >
                {/* FIXME: 將產品加到收藏裡 & Link */}
                <i className="position-absolute mountain_heart-icon">
                  <HeartFill />
                </i>
              </Link>
              {/* FIXME: 將產品加到購物車裡 & Link */}
              <Link
                to="#/"
                role="button"
                className="position-absolute mountain_cart-icon-bkg position-relative"
                onClick={cartIcon}
              >
                <i className="position-absolute mountain_cart-icon">
                  <CartFill />
                </i>
              </Link>
            </div>
            {/* FIXME: Link將產品連到商品頁面 */}
            <Link to="#/" className="text-left mountain_product-name">
              MERRELL
              <br />
              女水陸三棲鞋
            </Link>
            {/* FIXME: 價錢從後端抓 */}
            <p className="text-left mountain_product-price">NT $2,680</p>
          </div>
        </div>
        <div className="px-0">
          <div className="mountain_product-card">
            <div className="mountain_product-img-box position-relative">
              {/* FIXME: 產品照或許從後端抓 */}
              <img
                className="mountain_cover-fit"
                src={clothes_pic1Jpeg}
                alt=""
              />
              {/* FIXME: 將產品加到收藏裡 & Link */}
              <Link
                to="#/"
                role="button"
                className="position-absolute mountain_heart-icon-bkg position-relative"
                onClick={heartIcon}
              >
                <i className="position-absolute mountain_heart-icon">
                  <HeartFill />
                </i>
              </Link>
              {/* FIXME: 將產品加到購物車裡 & Link */}
              <Link
                to="#/"
                role="button"
                className="position-absolute mountain_cart-icon-bkg position-relative"
                onClick={cartIcon}
              >
                <i className="position-absolute mountain_cart-icon">
                  <CartFill />
                </i>
              </Link>
            </div>
            {/* FIXME: Link將產品連到商品頁面 */}
            <Link to="#/" className="text-left mountain_product-name">
              Decathlon
              <br />
              男透氣休閒健行外套
            </Link>
            {/* FIXME: 價錢從後端抓 */}
            <p className="text-rleft mountain_product-price">NT $499</p>
          </div>
        </div>

        <div className="mountain_downLowBear"></div>
        <div className="mountain_bearSpeak"></div>
      </div>
    </div>
  </>
);
