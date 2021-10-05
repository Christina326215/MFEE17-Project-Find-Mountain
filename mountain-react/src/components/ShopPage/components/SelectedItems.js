import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { shopURL } from '../../../utils/config';
import ProductCard from './ProductCard';
function SelectedItems(props) {
  const { favoriteBtn, setFavoriteBtn } = props;
  const [selectedItemsData, setSelectedItemsData] = useState([]);
  useEffect(() => {
    async function getSelectedItemsData() {
      try {
        const selectedProduct = await axios.get(`${shopURL}/selected-items`);
        setSelectedItemsData(selectedProduct.data);
      } catch (e) {
        console.log(e);
      }
    }
    getSelectedItemsData();
  }, []);
  return (
    <>
      {/* <!-- =========編輯嚴選 start========= --> */}
      <div className="row shopmain-product-list my-4">
        {selectedItemsData.map((selectedP, index) => {
          return (
            <ProductCard
              productId={selectedP.id}
              brand={selectedP.product_brand}
              name={selectedP.product_name}
              price={selectedP.price}
              type={selectedP.type}
              picture={selectedP.pic}
              key={selectedP.id}
              favoriteBtn={favoriteBtn}
              setFavoriteBtn={setFavoriteBtn}
            />
          );
        })}
      </div>
      {/* <!-- =========編輯嚴選 end========= --> */}
    </>
  );
}

export default SelectedItems;
