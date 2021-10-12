import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss'; //header & footer 樣式
//====== below img import start ======//
import logoPng from '../img/logo.png';
//====== above img import end ======//

//====== below img import start ======//
import northface from '../img/footer-img/northface.png';
import atunas from '../img/footer-img/atunas.png';
import decathlon from '../img/footer-img/decathlon.png';
import mybest from '../img/footer-img/mybest.png';
import branding from '../img/footer-img/branding.png';
import outdoorTao from '../img/footer-img/outdoorTao.jpg';
import freepik from '../img/footer-img/freepik.png';
import pixaboy from '../img/footer-img/pixaboy.png';
import pexel from '../img/footer-img/pexel.jpg';
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

          <div className="d-flex flex-wrap justify-content-center">
            <div className="footer_info d-flex align-items-center">
              <p className="mr-2">聯絡資訊:</p>
              <p>def2446@yahoo.com.tw</p>
            </div>

            <div className="d-flex flex-wrap justify-content-center align-items-center footer_info">
              <p className="mr-2">參考資訊:</p>
              <p className="mr-2 footer_img">
                <img src={northface} alt="northface" />
              </p>
              <p className="mr-2 footer_img">
                <img src={atunas} alt="atunas" />
              </p>
              <p className="mr-2 footer_img">
                <img src={decathlon} alt="decathlon" />
              </p>
              <p className="mr-2 footer_img">
                <img src={mybest} alt="mybest" />
              </p>
              <p className="mr-2 footer_img">
                <img src={outdoorTao} alt="outdoorTao" />
              </p>
              <p className="mr-2 footer_img">
                <img src={pixaboy} alt="pixaboy" />
              </p>
              <p className="mr-2 footer_img">
                <img src={pexel} alt="pexel" />
              </p>
              <p className="footer_img">
                <img src={branding} alt="branding" />
              </p>
            </div>
          </div>
        </div>

        <div className="footer_copy d-flex justify-content-center">
          &copy;Copyright, Inc. 2021. MFEE17-第五組專題
          (僅供資策會學員專題之發表，若有侵權之疑慮，請私訊)
        </div>
      </footer>
      {/* <!-- =========footer end========= --> */}
    </>
  );
}

export default Footer;
