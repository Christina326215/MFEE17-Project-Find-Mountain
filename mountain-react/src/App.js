import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components star ======//
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeMountain from './components/HomePage/HomeMountain';
import HomeArticle from './components/HomePage/HomeArticle';
import HomeOutfit from './components/HomePage/HomeOutfit';
import HomeShop from './components/HomePage/HomeShop';
import Outfit from './components/OutfitPage/Outfit';

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
          <Route path="/shop/cart">
            {/* 放要引入的content EX: <Stock /> */}
          </Route>
          <Route path="/outfit">
            <Outfit />
          </Route>
          <Route path="/login">{/* 放要引入的content EX: <Stock /> */}</Route>
          <Route path="/member">{/* 放要引入的content EX: <Stock /> */}</Route>
          {/* //===homepage 路由放最下面===// */}
          <Route exact path="/">
            <HomeMountain />
            <HomeArticle />
            <HomeShop />
            <HomeOutfit />
          </Route>
        </Switch>

        <Footer />
      </>
    </Router>
  );
}

export default App;
