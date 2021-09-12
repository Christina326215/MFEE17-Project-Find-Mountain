import React from 'react';
import { useState, useEffect } from 'react';

function SelectProduct(props) {
  return (
    <>
      <div class="outfit-left-side position-relative">
        <div class="outfit-bear position-absolute position-relative">
          <div
            class="
                      outfit-dialogBox1
                      animate__animated animate__shakeX
                      position-absolute
                    "
          >
            <img src="./img/img-outfit/dialogBox1.svg" alt="" />
          </div>
          <div
            class="
                      outfit-dialogBox2
                      animate__animated animate__headShake
                      position-absolute
                    "
          >
            <img src="./img/img-outfit/dialogBox2.svg" alt="" />
          </div>
          <img src="./img/img-outfit/bear.svg" alt="" />
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
