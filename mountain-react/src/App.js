import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components star ======//
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomeMountain from './components/HomePage/HomeMountain';

import Recommend from './components/RecommendPage/Recommend';
import Bear from './components/RecommendPage/Bear';
import Result from './components/RecommendPage/Result';
import Manual from './components/RecommendPage/Manual';
import DetailContent from './components/RecommendPage/DetailContent';
import ShopMain from './components/ShopPage/ShopMain';
import ShopShoes from './components/ShopPage/ShopShoes';
import ShopBags from './components/ShopPage/ShopBags';
import ShopClothes from './components/ShopPage/ShopClothes';
import ProductDetail from './components/ShopPage/ProductDetail';
import MapL from './components/MapPage/MapL';
import MapM from './components/MapPage/MapM';
import MapH from './components/MapPage/MapH';
import Outfit from './components/OutfitPage/Outfit';
import ScrollToTop from './components/ScrollToTop';

import ShopCartDetail from './components/ShopCartPage/ShopCartDetail';
import ShopCartPay from './components/ShopCartPage/ShopCartPay';
import ShopCartCheck from './components/ShopCartPage/ShopCartCheck';
// import ShopCartFinish from './components/ShopCartPage/ShopCartFinish';
import ShopCartFinal from './components/ShopCartPage/ShopCartFinal';
import MemberMapRoute from './components/MemberPage/MemberMapRoute';
import MemberProductArticle from './components/MemberPage/MemberProductArticle';
import MemberOrder from './components/MemberPage/MemberOrder';
import MemberComment from './components/MemberPage/MemberComment';
import MemberPersonal from './components/MemberPage/MemberPersonal';
import MemberEdit from './components/MemberPage/MemberEdit';

import SignUp from './components/SignUpPage/SignUp';
// import SignUpInfo from './components/SignUpPage/SignUpInfo';
// import SignUpAcct from './components/SignUpPage/SignUpAcct';
import Login from './components/LoginPage/Login';

import { AuthContext } from './context/auth';
import { memberURL } from './utils/config';
import axios from 'axios';

//====== below utils for 沒登入時的畫面 star ======//
import { needLogin } from './utils/needLogin';
//====== above utils for 沒登入時的畫面 end ======//

//====== above components end ======//

function App() {
  const [auth, setAuth] = useState(false); //驗證登入與否用，一開始預設都是false
  const [member, setMember] = useState(null);
  const [pay, setPay] = useState(null);
  const [cartChange, setCartChange] = useState(false);
  const [mapRouteShow, setMapRouteShow] = useState(false); //會員路線地圖，新增路線or刪除重算積分，會員level需重抓
  // 新增去過或移除去過會影響level會員等級
  const [flagHandle, setFlagHandle] = useState(true);
  // 記錄現在在第幾頁
  const [page, setPage] = useState(1);
  // 總共有幾頁
  const [totalPage, setTotalPage] = useState(0);

  //=== 彈跳視窗開關 star ===//
  const [show, setShow] = useState(false);
  // console.log('outside-show', show);
  //=== 彈跳視窗開關 end ===//

  useEffect(() => {
    // 每次重新整理或開啟頁面時，都去確認一下是否在已經登入的狀態。
    // 從資料庫抓資料
    async function getPersonalData() {
      try {
        const PersonalData = await axios.get(memberURL, {
          withCredentials: true,
        });
        setMember(PersonalData.data);
      } catch (e) {
        console.log(e);
      }
    }
    getPersonalData();
  }, [show, mapRouteShow, auth, flagHandle]);

  // 重整後要重新設定auth
  useEffect(() => {
    if (member !== null) {
      setAuth(true);
    }
  }, [member]);

  // console.log('outside-member', member);

  return (
    <AuthContext.Provider
      value={{
        member,
        setMember,
        pay,
        setPay,
        cartChange,
        setCartChange,
        mapRouteShow,
        setMapRouteShow,
        auth,
        setAuth,
        page,
        setPage,
        totalPage,
        setTotalPage,
      }}
    >
      <Router>
        <>
          <Navbar />
          <ScrollToTop>
            <Switch>
              {/* //===other 路由放homepage上面 */}
              <Route path="/recommend/bear/result">
                <Result />
              </Route>
              <Route path="/recommend/bear">
                <Bear />
              </Route>
              <Route path="/recommend/manual">
                <Manual />
              </Route>
              <Route path="/recommend/detail/:id?">
                <DetailContent
                  flagHandle={flagHandle}
                  setFlagHandle={setFlagHandle}
                />
              </Route>
              <Route path="/map/levelH">
                <MapH />
              </Route>
              <Route path="/map/levelM">
                <MapM />
              </Route>
              <Route path="/map">
                <MapL />
              </Route>
              <Route path="/recommend">
                <Recommend />
              </Route>
              <Route path="/shop/product-detail/:id?">
                <ProductDetail />
              </Route>
              <Route path="/shop/clothes">
                <ShopClothes />
              </Route>
              <Route path="/shop/bags">
                <ShopBags />
              </Route>
              <Route path="/shop/shoes">
                <ShopShoes />
              </Route>
              <Route path="/shop">
                <ShopMain />
              </Route>
              <Route path="/shoppingcart/step1-detail">
                <ShopCartDetail />
              </Route>
              <Route path="/shoppingcart/step2-pay">
                {member ? <ShopCartPay /> : needLogin}
              </Route>
              <Route path="/shoppingcart/step3-check">
                {member ? <ShopCartCheck /> : needLogin}
              </Route>
              <Route path="/shoppingcart/step4-final">
                {member ? <ShopCartFinal /> : needLogin}
              </Route>
              <Route path="/outfit">
                <Outfit />
              </Route>

              <Route path="/member/order">
                {member ? <MemberOrder /> : needLogin}
              </Route>
              <Route path="/member/product-article">
                {member ? <MemberProductArticle /> : needLogin}
              </Route>
              <Route path="/member/comment">
                {member ? <MemberComment /> : needLogin}
              </Route>
              <Route path="/member/personal">
                {member ? (
                  <MemberPersonal show={show} setShow={setShow} />
                ) : (
                  needLogin
                )}
              </Route>
              <Route path="/member/edit">
                {member ? (
                  <MemberEdit show={show} setShow={setShow} />
                ) : (
                  needLogin
                )}
              </Route>
              <Route path="/member">
                {member ? <MemberMapRoute /> : needLogin}
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/login">
                <Login />
              </Route>

              {/* //===homepage 路由放最下面===// */}
              <Route exact path="/">
                <HomeMountain />
              </Route>
            </Switch>
          </ScrollToTop>
          <Footer />
        </>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
