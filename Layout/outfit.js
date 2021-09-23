// let storage = localStorage;
// function doFirst() {
//   if (storage["addItemList"] == null) {
//     storage["addItemList"] = "";
//   }
//   //幫每個 Add Cart 建立事件聆聽功能
//   let list = document.querySelectorAll(".product-img"); //list 是陣列
//   for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", function () {
//       let productInfo = document.querySelector(`#${this.id} input`).value;
//       // alert(productInfo) // for check
//       addItem(this.id, productInfo);
//     });
//   }
// }

// function addItem(itemId, itemValue) {
//   //  alert(`${itemId} : ${itemValue}`); // for check
//   // 動態新增img
//   // 先建標籤
//   let image = document.createElement("img");
//   image.src = "./img/img-outfit/" + itemValue.split("|")[1];

//   let title = document.createElement("span");
//   title.innerText = itemValue.split("|")[0];

//   let price = document.createElement("span");
//   price.innerText = itemValue.split("|")[2];

//   let newItem = document.getElementById("newItem");
//   // 先找到爸爸，判斷此處是否已有物件，如果有要先刪除
//   // childNodes是複數，就是陣列，就可以用陣列的屬性，但要小心，標籤內只要有換行，就會有一個小孩
//   // 所以需用while迴圈來刪小孩
//   // alert(newItem.childNodes.length)
//   while (newItem.childNodes.length >= 1) {
//     newItem.removeChild(newItem.firstChild);
//   }
//   // 再顯示新物件
//   newItem.appendChild(image);
//   newItem.appendChild(title);
//   newItem.appendChild(price);

//   // 存入localStorage
//   // if (storage[itemId]) {
//   //   alert("You have checked.");
//   // } else {
//   storage["addItemList"] += `${itemId}, `;
//   storage[itemId] = itemValue;
//   // }
// }

// window.addEventListener("load", doFirst);
