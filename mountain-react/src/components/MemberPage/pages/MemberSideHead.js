import { Link } from 'react-router-dom'; //a標籤要變成link
import $ from 'jquery';

//====== below icon star ======//
import { BsQuestionCircle } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
import Avatar from '../../../img/signin.jpg';
import MemberLevel from '../../../img/low.svg';
//====== above img import end ======//

const bubble = () => {
  //會員制度泡泡
  // $('.member-see-member').on('click', function () {
  $('.member-about-membership-bubble').toggle('display');
  // });
};

export const memberSideHead = (
  <>
    <tr>
      <th scope="col" className="text-center">
        <div className="member-headshot-img-box">
          <img src={Avatar} alt="" className="member-cover-fit" />
        </div>
        <h3 className="m-2 member-member-name">王小明</h3>
        <img src={MemberLevel} alt="" />
        <div className="position-relative member-level">
          <span className="member-grade-icon">肉腳</span>
          <div
            // to="javascript:void(0)"
            // to="#/"
            onClick={bubble}
            id="member-seeMember"
            className="member-see-member member-see-member-style"
          >
            <BsQuestionCircle size={20} />
          </div>
          {/* <!-- =========about-membership-bubble start========= --> */}
          <div className="member-about-membership-bubble p-3 position-absolute">
            <span className="member-about-membership-bubble-arrow"></span>
            <span className="member-membership">
              可至路線地圖之我的成就區，查看累積會員等級積分，享有商品優惠折扣哦！{' '}
            </span>
            <br />
            <span className="member-membership member-membership-low">
              肉腳：完成爬山積分3分以上{' '}
            </span>
            <br />
            <span className="member-membership member-membership-medium">
              山友 ：完成爬山積分20分以上{' '}
            </span>
            <br />
            <span className="member-membership member-membership-high">
              山神 ：完成爬山積分50分以上
            </span>
          </div>
          {/* <!-- =========about-membership-bubble end========= --> */}
        </div>
      </th>
    </tr>
  </>
);
