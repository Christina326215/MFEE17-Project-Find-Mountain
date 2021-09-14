import React from 'react';

function OrderList(props) {
  return (
    <>
      <table class="outfit-order-table">
        <thead class="outfit-order-thead">
          <tr>
            <td class="outfit-order-head">穿搭組合</td>
            <td class="outfit-order-head">NT$ 4,000</td>
          </tr>
        </thead>
        <tbody class="outfit-order-tbody">
          <tr>
            <td>
              <div>
                <img
                  class="outfit-cover-fit"
                  src="./img/img-outfit/shoes-pic3-removebg-preview.png"
                  alt=""
                />
              </div>
            </td>
            <td class="outfit-productName">
              SALOMON EVASION GORE-TEX登山健行鞋
            </td>
            <td>NT$ 1000</td>
            <td>Ｘ１</td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  class="outfit-cover-fit"
                  src="./img/img-outfit/clothes-pic7-removebg-preview.png"
                  alt=""
                />
              </div>
            </td>
            <td>MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
            <td>NT$ 1000</td>
            <td>Ｘ１</td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  class="outfit-cover-fit"
                  src="./img/img-outfit/bags-pic7-removebg-preview.png"
                  alt=""
                />
              </div>
            </td>
            <td>The North Face 黑灰色休閒後背包</td>
            <td>NT$ 1000</td>
            <td>Ｘ１</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default OrderList;
