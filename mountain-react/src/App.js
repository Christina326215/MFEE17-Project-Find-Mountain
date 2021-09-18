import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components star ======//
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomeMountain from './components/HomePage/HomeMountain';
import HomeArticle from './components/HomePage/HomeArticle';
import HomeOutfit from './components/HomePage/HomeOutfit';
import HomeShop from './components/HomePage/HomeShop';

import Recommend from './components/RecommendPage/Recommend';
import Bear from './components/RecommendPage/Bear';
import Result from './components/RecommendPage/Result';
import Manual from './components/RecommendPage/Manual';
import Detail from './components/RecommendPage/Detail';
import ShopMain from './components/ShopPage/ShopMain';
import Bags from './components/ShopPage/Bags';
import ProductDetail from './components/ShopPage/ProductDetail';
import MapL from './components/MapPage/MapL';
import MapM from './components/MapPage/MapM';
import MapH from './components/MapPage/MapH';
import Test from './components/MapPage/Test';
import Outfit from './components/OutfitPage/Outfit';
import ScrollToTop from './components/ScrollToTop';
import ShopCartDetail from './components/ShopCartPage/ShopCartDetail';
import ShopCartPay from './components/ShopCartPage/ShopCartPay';
import ShopCartCheck from './components/ShopCartPage/ShopCartCheck';
import ShopCartFinish from './components/ShopCartPage/ShopCartFinish';
import MemberMapRoute from './components/MemberPage/MemberMapRoute';
import MemberProductArticle from './components/MemberPage/MemberProductArticle';
import MemberOrder from './components/MemberPage/MemberOrder';
import MemberComment from './components/MemberPage/MemberComment';
import MemberPersonal from './components/MemberPage/MemberPersonal';
import SignUpInfo from './components/SignUpPage/SignUpInfo';
import SignUpAcct from './components/SignUpPage/SignUpAcct';
import Login from './components/LoginPage/Login';

//====== above components end ======//

function App() {
  const [auth, setAuth] = useState(false); //驗證登入與否用，一開始預設都是false

  return (
    <Router>
      <>
        <Navbar auth={auth} setAuth={setAuth} />
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
            <Route path="/recommend/detail">
              <Detail />
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
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/recommend">
              <Recommend />
            </Route>
            <Route path="/shop/product-detail">
              <ProductDetail />
            </Route>
            <Route path="/shop/bags">
              <Bags />
            </Route>
            <Route path="/shop">
              <ShopMain />
            </Route>
            <Route path="/shoppingcart/step1-detail">
              <ShopCartDetail />
            </Route>
            <Route path="/shoppingcart/step2-pay">
              <ShopCartPay />
            </Route>
            <Route path="/shoppingcart/step3-check">
              <ShopCartCheck />
            </Route>
            <Route path="/shoppingcart/step4-finish">
              <ShopCartFinish />
            </Route>
            <Route path="/outfit">
              <Outfit />
            </Route>

            <Route path="/member/order">
              <MemberOrder />
            </Route>
            <Route path="/member/product-article">
              <MemberProductArticle />
            </Route>
            <Route path="/member/comment">
              <MemberComment />
            </Route>
            <Route path="/member/personal">
              <MemberPersonal />
            </Route>
            <Route path="/member">
              <MemberMapRoute />
            </Route>
            <Route path="/signup-info">
              <SignUpInfo />
            </Route>
            <Route path="/signup-acct">
              <SignUpAcct />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            {/* //===homepage 路由放最下面===// */}
            <Route exact path="/">
              <HomeMountain />
              <HomeArticle />
              <HomeShop />
              <HomeOutfit />
            </Route>
          </Switch>
        </ScrollToTop>
        <Footer />
      </>
    </Router>
  );
}

export default App;
