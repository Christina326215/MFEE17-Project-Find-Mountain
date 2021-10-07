import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import '../../styles/HomePage/HomeOutfit.scss';
//api start
import { homeURL } from '../../utils/config';
import axios from 'axios';
//api end
import Blobs3 from '../../img/contentShop/Vector.png';
import Shop from '../../img/contentDress/shop.gif';
import Rabbit from '../../img/contentDress/rabbit.svg';
import RabbitSay from '../../img/contentDress/rabbitsay.png';
import GreyBear from '../../img/contentDress/greyBear.svg';
import GreyBearSay from '../../img/contentDress/greybearsay.png';
import Sloth from '../../img/contentDress/sloth.svg';
import SlothSay from '../../img/contentDress/slothsay.png';
import DressBg from '../../img/contentDress/contentDressBg.png';
function HomeOutfit(props) {
  return (
    <>
      <div className="homepage-contentDress position-relative">
        <div className="homepage-blobs3 position-absolute">
          <img className="cover-fit" src={Blobs3} alt="" />
        </div>
        <div className="homepage-climb">
          <svg className="homepage-letClimb" viewBox="0 0 1000 800">
            {/* <!-- Symbol --> */}
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                let's climb
              </text>
            </symbol>
            {/* <!-- Duplicate symbols --> */}
            <use xlinkHref="#s-text" className="homepage-text"></use>
            <use xlinkHref="#s-text" className="homepage-text"></use>
            <use xlinkHref="#s-text" className="homepage-text"></use>
            <use xlinkHref="#s-text" className="homepage-text"></use>
            <use xlinkHref="#s-text" className="homepage-text"></use>
          </svg>
          <svg className="homepage-letClimb" id="m-text" viewBox="0 0 1000 800">
            {/* <!-- Symbol --> */}
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                Let's climb
              </text>
            </symbol>
            {/* <!-- Duplicate symbols --> */}
            <use xlinkHref="#s-text" className="homepage-text2"></use>
          </svg>
        </div>

        <Link to="/outfit">
          <div className="homepage-house position-absolute">
            <img className="cover-fit" src={Shop} alt="" />
          </div>
        </Link>

        <div className="homepage-sloth position-absolute">
          <img className="homepage-say" src={SlothSay} alt="" />
          <img className="homepage-sz" src={Sloth} alt="" />
        </div>
        <div className="homepage-greyBear position-absolute">
          <img className="homepage-say" src={GreyBearSay} alt="" />
          <img className="homepage-sz" src={GreyBear} alt="" />
        </div>
        <div className="homepage-rabbit position-absolute ">
          <img className="homepage-say" src={RabbitSay} alt="" />
          <img className="homepage-sz" src={Rabbit} alt="" />
        </div>
      </div>
    </>
  );
}
export default HomeOutfit;
