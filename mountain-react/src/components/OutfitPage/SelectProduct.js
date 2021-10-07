import React from 'react';
import { useState, useEffect } from 'react';

//===import img start===
import dialogBox1 from '../../img/img-outfit/dialogBox1.svg';
import dialogBox2 from '../../img/img-outfit/dialogBox2.svg';
import bear from '../../img/img-outfit/bear.svg';
//===import img end===

function SelectProduct(props) {
  return (
    <>
      <div class="outfit-left-side position-relative">
        <div class="outfit-bear position-absolute position-relative">
          <div
            class="
                      outfit-dialogBox1
                      animate__animated
                      animate__bounceInUp
                      animate__slow
                      position-absolute
                    "
          >
            <img src={dialogBox1} alt="" />
          </div>
          <div
            class="
                      outfit-dialogBox2
                      animate__animated animate__bounceInDown animate__slow
                      position-absolute
                    "
          >
            <img src={dialogBox2} alt="" />
          </div>
          <div class="animate__animated animate__backInLeft animate__fast">
            <img src={bear} alt="" />
          </div>
          <div class="outfit-mountains position-absolute position-relative">
            <div class="outfit-low-mountain outfit-single" target="1">
              <span>初階</span>
            </div>
            <div class="outfit-high-mountain outfit-single" target="3">
              <span>高階</span>
            </div>
            <div class="outfit-mid-mountain outfit-single" target="2">
              <span>中階</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectProduct;
