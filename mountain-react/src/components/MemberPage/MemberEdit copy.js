import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/MemberPage/MemberPersonal.scss'; //member product and article style
import { useAuth } from '../../context/auth'; // 取得會員資料
import { zipCodeURL, zipGroupURL } from '../../utils/config'; // 取得郵遞區號資料
import axios from 'axios';

//====== below pages star ======//
import MemberSideHead from './pages/MemberSideHead'; //member Side Head
//====== below pages end ======//

function MemberEdit() {
  // 1. 首先，建立好 html 在 return(<>...</>)。
  // 2. 設定狀態，關於共用會員資料使用useAuth()，關於地址資料放在靜態檔案中則使用useState()。
  const { member } = useAuth();
  const [zipGroup, setZipGroup] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [cities, setCities] = useState([]); // 各縣市陣列
  const [city, setCity] = useState(null); // 選擇的唯一縣市
  const [districts, setDistricts] = useState([]); //各行政區陣列
  const [codes, setCodes] = useState([]);

  // 3. 因為不能直接去改動member的資料，需要先設定一個tempMember變數，將由資料庫而來的member放進setTempMember中改變狀態，最後才會把改變後的狀態存進資料庫。
  const [tempMember, setTempMember] = useState(null);
  // 4. 當member有資料時，就會使用useEffect，以setTempMember改變狀態(原為null)。
  useEffect(() => {
    if (member !== null) {
      setTempMember({ ...member });
    }
  }, [member]);

  // 5. 填入原始member資料後，當Html input欄位有輸入變動時，onChange呼叫handleChange函式，將react的變數tempMember，轉換成html上偵測的變數與其值([e.target.name]: e.target.value)，其中[e.target.name]為key。
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    // console.log('onChange', e.target.name, e.target.value);
    setTempMember({ ...tempMember, [e.target.name]: e.target.value });
    // console.log('onChange After');
  }

  useEffect(() => {
    // console.log('useEffect for tempMember');
  }, [tempMember]);

  // 還沒input之前，出現兩次useEffect for tempMember，結果如下：
  // useEffect for tempMember
  // useEffect for tempMember
  // 是因為第一次render原本是空的，第二次render才有東西。

  // 輸入input之後(使input欄位有變動)，結果如下：
  // onChange name 王大明1
  // onChange After
  // useEffect for tempMember
  // 因為setXXX是非同步且Single Thread，所以會把setTempMember丟給quere，先繼續下一行console.log('useEffect for tempMember');

  // 6. 從靜態檔案抓資料，取得 group.json 與 code.json 地址相關資料。
  useEffect(() => {
    async function getZipGroup() {
      try {
        const zipGroupRes = await axios.get(zipGroupURL);
        let data = zipGroupRes.data;
        // 6.1 設定 setZipGroup 狀態，取得 group.json 所有資料。
        setZipGroup(data);
        // 6.2 設定 setCities 狀態，取得物件的key值，處理成各縣市的陣列。
        setCities(Object.keys(data));
      } catch (e) {
        console.log(e);
      }
    }
    getZipGroup();

    async function getZipCode() {
      try {
        const zipCodeRes = await axios.get(zipCodeURL);
        let data2 = zipCodeRes.data;
        // 6.3 設定 setZipCode 狀態，取得 code.json 所有資料。
        setZipCode(data2);
        console.log(data2[100].city);
        // 6.4 設定 setCodes 狀態，取得物件的key值，處理成各個郵遞區號的陣列。
        setCodes(Object.keys(data2));
      } catch (e) {
        console.log(e);
      }
    }
    getZipCode();
  }, []);

  // 7. 當html select選單有onChange時，呼叫changeCity函式，此時選擇到的是唯一的值(e.target.value)，利用setCity來將原始狀態的null，改變成select到的value。
  function changeCity(e) {
    // 7.1 setCities是一個陣列，此處應先用setCity設定city單一值的狀態才對！
    setCity(e.target.value);
    // 7.2 當city有選擇時，就會自動列出該縣市的所有行政區，此時的districts也是一陣列，可利用剛剛選擇到的city作為key值，在group.json裡面找到該city的districts，並且設定到option中讓使用者選擇行政區。
    setDistricts(zipGroup[e.target.value]);
  }

  // 8. 當實際選擇了一個行政區後，會改變此行政區狀態。不過因為郵遞區號=縣市+行政區，成為連動關係，所以一但選擇了行政區，就等於知道了郵遞區號，於是改變member資料庫之前，先將該tempMember.zip_code用setTempMember改變狀態。
  function changeDistrict(e) {
    setTempMember({ ...tempMember, [e.target.name]: e.target.value });
  }

  // useEffect(() => {
  // }, [cities]);

  return (
    <>
      <div className="container">
        <div className="row zindex">
          {/* <!-- manage-left-side start --> */}
          <div className="col-12 col-lg-3 my-3 zindex-height">
            <table
              className="
              table table-hover table-bordered member-table-all-left
              p-md-4 p-lg-5
            "
            >
              <thead>
                <MemberSideHead />
              </thead>
              <tbody>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/map-route"
                      className="member-left-href-color"
                    >
                      路線地圖
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/product-article"
                      className="member-left-href-color"
                    >
                      收藏管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/comment"
                      className="member-left-href-color"
                    >
                      評論管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link to="/member/order" className="member-left-href-color">
                      訂單管理
                    </Link>
                  </td>
                </tr>
                <tr className="member-table-active">
                  <td scope="row" className="text-center">
                    <Link to="/member/edit" className="member-left-href-color">
                      帳號設定
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link to="" className="member-left-href-color">
                      登出
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- manage-left-side end --> */}
          {/* <!-- manage-right-side start--> */}
          <div className="col-12 col-lg-9 mt-5 zindex-low">
            <h2 className="member-personal-title-main">我的會員資料</h2>
            <div className="member-personal-right-side mt-5">
              <div className="m-4">
                <div className="member-personal-text-weight-bold">
                  <label for="inputName" className="mt-2">
                    姓名：
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="name"
                    placeholder="請輸入收件人姓名"
                    value={tempMember && tempMember.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="member-personal-text-weight-bold">
                  <label for="inputPhone" className="mt-3">
                    電話：
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    name="phone"
                    placeholder="請輸入聯絡電話"
                    value={tempMember && tempMember.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="member-personal-text-weight-bold">
                  <label for="inputBirth" className="mt-3">
                    生日：
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputBirth"
                    name="birth"
                    value={tempMember && tempMember.birthday}
                    onChange={handleChange}
                  />
                </div>

                <div className="member-personal-text-weight-bold">
                  <label for="inputAddress" className="mt-3">
                    地址：
                  </label>
                  {/* 請選擇縣市 */}
                  <select
                    className="form-control"
                    name="city"
                    value={city}
                    onChange={changeCity}
                  >
                    {cities &&
                      cities.map((city, i) => (
                        <option key={i} value={city}>
                          {city}
                        </option>
                      ))}
                  </select>

                  {/* 請選擇行政區 */}
                  <select
                    className="form-control"
                    value={tempMember && tempMember.zip_code}
                    onChange={changeDistrict}
                    name="zip_code"
                  >
                    {cities &&
                      districts &&
                      districts.map((item, i) => (
                        <option key={i} value={item.zip_code}>
                          {item.district}
                        </option>
                      ))}
                  </select>
                  {/* 請選擇地址 */}
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="請輸入地址"
                    name="address"
                    value={tempMember && tempMember.addr}
                    onChange={handleChange}
                  />
                </div>

                <div className="member-personal-text-weight-bold">
                  <label for="inputAccount" className="mt-3">
                    帳號：
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputAccount"
                    placeholder="請輸入您的email"
                    name="account"
                    value={tempMember && tempMember.account}
                    onChange={handleChange}
                  />
                </div>

                <div className="member-personal-text-weight-bold">
                  <label for="inputPassword" className="mt-3">
                    密碼：
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    name="password"
                  />
                </div>
              </div>
            </div>
            <div className="border-bottom-left-radius my-5 mx-3 text-right">
              <Link type="button" className="btn btn-primary" to="">
                確定
              </Link>
            </div>
          </div>

          {/* <!-- manage-right-side end--> */}
        </div>
      </div>
    </>
  );
}

export default withRouter(MemberEdit);
