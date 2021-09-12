import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components star ======//
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Outfit from './components/OutfitPage/Outfit';
import Recommend from './components/RecommendPage/Recommend';
import Bear from './components/RecommendPage/Bear';
import Result from './components/RecommendPage/Result';
import Manual from './components/RecommendPage/Manual';
import Detail from './components/RecommendPage/Detail';

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
          <Route path="/recommend">
            <Recommend />
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
            {/* 放要引入的content EX: <Stock /> */}
          </Route>
        </Switch>

        <Footer />
      </>
    </Router>
  );
}

export default App;
