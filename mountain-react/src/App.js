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
import MapL from './components/MapPage/MapL';
import MapM from './components/MapPage/MapM';
import MapH from './components/MapPage/MapH';
import Outfit from './components/OutfitPage/Outfit';
import ScrollToTop from './components/ScrollToTop';
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
            <Route path="/recommend">
              <Recommend />
            </Route>
            <Route path="/shop/bags">
              <Bags />
            </Route>
            <Route path="/shop">
              <ShopMain />
            </Route>
            <Route path="/shop/cart">
              {/* 放要引入的content EX: <Stock /> */}
            </Route>
            <Route path="/outfit">
              <Outfit />
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
            <Route path="/member">
              {/* 放要引入的content EX: <Stock /> */}
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
