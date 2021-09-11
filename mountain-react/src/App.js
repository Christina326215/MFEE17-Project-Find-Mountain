import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components star ======//
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopCartDetail from './components/ShopCartPage/ShopCartDetail';
import ShopCartPay from './components/ShopCartPage/ShopCartPay';
import ShopCartCheck from './components/ShopCartPage/ShopCartCheck';
import ShopCartFinish from './components/ShopCartPage/ShopCartFinish';
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
          <Route path="/cart-step1-detail">
            <ShopCartDetail />
          </Route>
          <Route path="/cart-step2-pay">
            <ShopCartPay />
          </Route>
          <Route path="/cart-step3-check">
            <ShopCartCheck />
          </Route>
          <Route path="/cart-step4-finish">
            <ShopCartFinish />
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
