import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components star ======//
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
          <Route path="/outfit">{/* 放要引入的content EX: <Stock /> */}</Route>
          <Route path="/login">{/* 放要引入的content EX: <Stock /> */}</Route>
          <Route path="/member">{/* 放要引入的content EX: <Stock /> */}</Route>
          {/* //===homepage 路由放最下面===// */}
          <Route exact path="/">
            {/* 放要引入的content EX: <Stock /> */}
          </Route>
        </Switch>

        {/* need delete fake content star */}
        <div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            veniam natus ratione similique autem, inventore facere minus quidem,
            voluptate id voluptatem repellendus pariatur maxime, tempore quod
            magnam officiis aut incidunt.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nihil totam laborum, aspernatur magnam vero non! Illum similique,
            sunt iste dolorem, ipsa corrupti consequuntur asperiores possimus
            rerum ut voluptates inventore. Tempora temporibus sequi deleniti
            dolore ducimus provident, obcaecati quasi quam nesciunt. Ex eaque
            illum nihil nostrum quas error eveniet nobis enim? Nam iste eligendi
            laudantium. Totam illo enim mollitia esse! Labore aspernatur eum,
            ipsa ea porro quod eius non et soluta officiis? Nemo in consequatur
            totam optio dolorum, incidunt accusantium est eligendi, repellat
            dignissimos earum eos explicabo distinctio sint aperiam? Nisi
            ratione laudantium reprehenderit neque quos explicabo iste dicta?
            Doloremque tempore ad magnam accusamus. Fugit esse accusamus
            veritatis ab. Quis itaque culpa tenetur est cum vel beatae delectus
            eos totam! Dolore quos dignissimos minus ipsum distinctio fugiat non
            doloremque laborum nobis aspernatur enim magnam quidem laboriosam,
            reiciendis provident nisi error, nam eaque molestias! Quibusdam
            dolores quisquam similique vel autem nostrum!
          </p>
        </div>
        {/* need delete fake content end */}

        <Footer />
      </>
    </Router>
  );
}

export default App;
