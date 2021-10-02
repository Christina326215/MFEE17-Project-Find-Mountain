// import { Link } from 'react-router-dom'; //a標籤要變成link
import $ from 'jquery';
import { useAuth } from '../../../context/auth';
import React from 'react';

//====== below icon star ======//
import { BsQuestionCircle } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
// import Avatar from '../../../img/signin.jpg';
import MemberLevel_L from '../../../img/low.svg';
import MemberLevel_M from '../../../img/medium.svg';
import MemberLevel_H from '../../../img/high.svg';
//====== above img import end ======//

const bubble = () => {
  //會員制度泡泡
  // $('.member-see-member').on('click', function () {
  $('.member-about-membership-bubble').toggle('display');
  // });
};

const MemberSideHead = () => {
  // 把 member 從 useContext中拿出來
  const { member } = useAuth();

  return (
    <>
      <tr>
        <th scope="col" className="text-center">
          {/* <div className="member-headshot-img-box">
            <img src={Avatar} alt="" className="member-cover-fit" />
          </div> */}
          <div className="headshot_icon">
            {member && member.name.substr(0, 1)}
          </div>
          <h3 className="m-2 member-member-name">{member && member.name}</h3>
          {member &&
            (member.level === '1' ? (
              <img src={MemberLevel_L} alt="" />
            ) : member.level === '2' ? (
              <img src={MemberLevel_M} alt="" />
            ) : (
              <img src={MemberLevel_H} alt="" />
            ))}
          <div className="position-relative member-level">
            {member &&
              (member.level === '1' ? (
                <span className="member-grade-icon">肉腳</span>
              ) : member.level === '2' ? (
                <span className="member-grade-icon">山友</span>
              ) : (
                <span className="member-grade-icon">山神</span>
              ))}
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
};
export default MemberSideHead;
