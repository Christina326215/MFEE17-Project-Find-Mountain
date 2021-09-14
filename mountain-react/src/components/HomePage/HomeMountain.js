import React from 'react';
import '../../styles/HomePage/HomeMountain.scss';
// images start
import Blobs from '../../img/contentTop/blobsAll.svg';
import Taiwan from '../../img/contentTop/taiwanAll.png';
import Low from '../../img/contentTop/low/low1.png';
import Low2 from '../../img/contentTop/low/low2.png';
import Low3 from '../../img/contentTop/low//low3.png';
import TaiwanBearL from '../../img/contentTop/low/taiwanBearL.png';
import Cloud from '../../img/contentTop/cloud.png';
import Cloud2 from '../../img/contentTop/cloud2.png';
import Cloud3 from '../../img/contentTop//cloud3.png';
import Medium from '../../img/contentTop/medium/medium1.png';
import Medium2 from '../../img/contentTop/medium/medium2.png';
import Medium3 from '../../img/contentTop/medium/medium3.png';
import TaiwanBearM from '../../img/contentTop/medium/taiwanBearM.png';
import High from '../../img/contentTop/high/high1.png';
import High2 from '../../img/contentTop/high/high2.png';
import TaiwanBearH from '../../img/contentTop/high/taiwanBearH.png';
import HomeOutfit from './HomeOutfit';
import HomeArticle from './HomeArticle';

function HomeMountain(props) {
  const changeLevel = () => {
    let btn = document.querySelectorAll('.homepage-sliderBtn');
    let content = document.querySelectorAll('.homepage-wrapper-Taiwan');
    let center = document.querySelectorAll('.homepage-center');
    let level = document.querySelectorAll('.homepage-level');
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function () {
        for (let j = 0; j < btn.length; j++) {
          btn[j].classList.remove('active');
          content[j].classList.remove('active');
          center[j].classList.remove('active');
          level[j].classList.remove('active');
        }
        this.classList.add('active');
        content[i].classList.add('active');
        center[i].classList.add('active');
        level[i].classList.remove('active');
      });
    }
  };

  return (
    <>
      {/* =========content star=========  */}
      <div className="homepage-contentTop position-relative">
        <div className="d-flex">
          <div>
            <h1 className="homepage-title" data-spotlight="和山一起森呼吸">
              和山一起森呼吸
            </h1>
          </div>
          <div className="homepage-weather position-absolute">
            <div className="homepage-weatherTop  d-flex align-items-center">
              <i className="bi bi-brightness-high mx-3"></i>
              <div className="homepage-location">
                <i className="bi bi-geo-alt"></i>桃園市
              </div>
            </div>
            <div className="homepage-notice">
              <i className="bi bi-lightbulb-fill"></i>請注意防曬!!
            </div>
          </div>
          <div className="align-content-start homepage-blobs animate__animated animate__fadeInLeft">
            <img className="cover-fit" src={Blobs} alt="" />
          </div>
          <div className="homepage-banner position-absolute">
            <div className="homepage-wave"></div>
            <div className="homepage-wave"></div>
            <div className="homepage-wave"></div>
          </div>
          <div id="homepage-pagination">
            <div className="active homepage-sliderBtn" data-slide="0">
              <a href="#/" onClick={changeLevel}>
                <div className="homepage-center active"></div>
                <div className="homepage-level">初級</div>
              </a>
            </div>
            <div className="homepage-sliderBtn homepage-med" data-slide="1">
              <a href="#/" onClick={changeLevel}>
                <div className="homepage-center"></div>
                <div className="homepage-level">中級</div>
              </a>
            </div>
            <div className="homepage-sliderBtn" data-slide="2">
              <a href="#/" onClick={changeLevel}>
                <div className="homepage-center"></div>
                <div className="homepage-level">高級</div>
              </a>
            </div>
          </div>

          {/*  ========= 初級 star=========  */}
          <div
            className="homepage-wrapper-Taiwan cover-fit position-absolute active"
            id="low"
          >
            <figure className="position-absolute homepage-taiwan">
              <img src={Taiwan} alt="台灣" />
            </figure>
            <figure className="position-absolute homepage-low">
              <img src={Low} alt="" />
            </figure>
            <figure className="position-absolute homepage-low2">
              <img src={Low2} alt="" />
            </figure>
            <figure className="position-absolute homepage-low3">
              <img src={Low3} alt="" />
            </figure>
            <div
              className="position-absolute homepage-bear animate__animated animate__zoomIn"
              id="bear"
            >
              <img src={TaiwanBearL} alt="" />
            </div>
            <div className="homepage-cloud homepage-cloudTop position-absolute">
              <img src={Cloud} alt="" />
            </div>
            <div className="homepage-cloud homepage-cloudM position-absolute">
              <img src={Cloud2} alt="" />
            </div>
            <div className="homepage-cloud homepage-cloudBottom  position-absolute">
              <img src={Cloud3} alt="" />
            </div>
          </div>
          {/* <!-- ========= 初級 end========= --> */}
          {/* <!-- ========= 中級 star========= --> */}
          <div
            className="homepage-wrapper-Taiwan cover-fit position-absolute"
            id="medium"
          >
            <figure className="position-absolute homepage-taiwan">
              <img src={Taiwan} alt="" />
            </figure>
            <figure className="position-absolute homepage-medium">
              <img src={Medium} alt="" />
            </figure>
            <figure className="position-absolute homepage-medium2">
              <img src={Medium2} alt="" />
            </figure>
            <figure className="position-absolute homepage-medium3">
              <img src={Medium3} alt="" />
            </figure>
            <figure className="position-absolute homepage-bearM" id="bear">
              <img src={TaiwanBearM} alt="" />
            </figure>
            <div className="homepage-cloud homepage-cloudTop position-absolute">
              <img src={Cloud} alt="" />
            </div>
            <div className="homepage-cloud homepage-cloudM position-absolute">
              <img src={Cloud2} alt="" />
            </div>
            <div className="homepage-cloud homepage-cloudBottom position-absolute">
              <img src={Cloud3} alt="" />
            </div>
          </div>
          {/* <!-- ========= 中級 end========= --> */}
          {/* <!-- ========= 高級 star========= --> */}
          <div
            className="homepage-wrapper-Taiwan cover-fit position-absolute"
            id="high"
          >
            <figure className="position-absolute homepage-taiwan">
              <img src={Taiwan} alt="" />
            </figure>
            <figure className="position-absolute homepage-high">
              <img src={High} alt="" />
            </figure>
            <figure className="position-absolute homepage-high2">
              <img src={High2} alt="" />
            </figure>

            <figure className="position-absolute homepage-bearH" id="bear">
              <img src={TaiwanBearH} alt="" />
            </figure>
            <div className="homepage-cloud homepage-cloudTop position-absolute">
              <img src={Cloud} alt="" />
            </div>
            <div className="homepage-cloud homepage-cloudM position-absolute">
              <img src={Cloud2} alt="" />
            </div>
            <div className="homepage-cloud homepage-cloudBottom  position-absolute">
              <img src={Cloud3} alt="" />
            </div>
          </div>
          {/* <!-- ========= 高級 end========= --> */}
        </div>
      </div>
      {/* <HomeArticle /> */}
      {/* <HomeOutfit /> */}
    </>
  );
}

export default HomeMountain;
