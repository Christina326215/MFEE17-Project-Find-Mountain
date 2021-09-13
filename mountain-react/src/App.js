import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components star ======//
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopCartDetail from './components/ShopCartPage/ShopCartDetail';
import ShopCartPay from './components/ShopCartPage/ShopCartPay';
import ShopCartCheck from './components/ShopCartPage/ShopCartCheck';
import ShopCartFinish from './components/ShopCartPage/ShopCartFinish';
import MemberMapRoute from './components/MemberPage/MemberMapRoute';
import MemberProductArticle from './components/MemberPage/MemberProductArticle';
import MemberOrder from './components/MemberPage/MemberOrder';
import MemberComment from './components/MemberPage/MemberComment';
import MemberPersonal from './components/MemberPage/MemberPersonal';
//====== above components end ======//

function App() {
  const [auth, setAuth] = useState(false); //驗證登入與否用，一開始預設都是false

  return (
    <Router>
      <>
        <Navbar auth={auth} setAuth={setAuth} />

        <Switch>
          {/* //===other 路由放homepage上面 */}
          <Route path="/map">{/* 放要引入的content EX: <Stock /> */}</Route>
          <Route path="/recommend">
            {/* 放要引入的content EX: <Stock /> */}
          </Route>
          <Route path="/shop">{/* 放要引入的content EX: <Stock /> */}</Route>
          <Route path="/shoppingcart-step1-detail">
            <ShopCartDetail />
          </Route>
          <Route path="/shoppingcart-step2-pay">
            <ShopCartPay />
          </Route>
          <Route path="/shoppingcart-step3-check">
            <ShopCartCheck />
          </Route>
          <Route path="/shoppingcart-step4-finish">
            <ShopCartFinish />
          </Route>
          <Route path="/member-map-route">
            <MemberMapRoute />
          </Route>
          <Route path="/member-order">
            <MemberOrder />
          </Route>
          <Route path="/member-product-article">
            <MemberProductArticle />
          </Route>
          <Route path="/member-comment">
            <MemberComment />
          </Route>
          <Route path="/member-personal">
            <MemberPersonal />
          </Route>
          <Route path="/outfit">{/* 放要引入的content EX: <Stock /> */}</Route>
          <Route path="/login">{/* 放要引入的content EX: <Stock /> */}</Route>
          <Route path="/member">{/* 放要引入的content EX: <Stock /> */}</Route>
          {/* //===homepage 路由放最下面===// */}
          <Route exact path="/">
            {/* 放要引入的content EX: <Stock /> */}
          </Route>
        </Switch>

        <Footer />
      </>
    </Router>
  );
}

export default App;
