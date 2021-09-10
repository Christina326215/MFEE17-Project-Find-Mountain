import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss'; //header & footer 樣式
//====== below img import start ======//
import logoPng from '../img/logo.png';
//====== above img import end ======//

function Footer() {
  return (
    <>
      {/* <!-- =========footer star========= --> */}
      <footer className="footer">
        <div className="footer_box">
          <div className="d-flex justify-content-center">
            <div className="footer_head">
              <Link className="nav-font" to="/map">
                路線地圖
              </Link>
            </div>
            <div className="footer_head">
              <Link className="nav-font" to="/recommend">
                推薦攻略
              </Link>
            </div>
            <Link to="/" className="footer_logo">
              <img src={logoPng} alt="footer_logo" />
            </Link>
            <div className="footer_head">
              <Link className="nav-font" to="/shop">
                購物商城
              </Link>
            </div>
            <div className="footer_head_last">
              <Link className="nav-font_footerLast" to="/outfit">
                建議穿搭
              </Link>
            </div>
          </div>

          <div className="footer_line"></div>

          <div className="d-flex justify-content-center">
            <div className="footer_info">聯絡資訊</div>
            <div className="footer_info">參考資訊</div>
          </div>
        </div>

        <div className="footer_copy d-flex justify-content-center">
          &copy;Copyright, Inc. 2021. MFEE17-第五組專題
        </div>
      </footer>
      {/* <!-- =========footer end========= --> */}
    </>
  );
}

export default Footer;
