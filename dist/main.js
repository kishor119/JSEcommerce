/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/favBtn.js":
/*!***************************!*\
  !*** ./scripts/favBtn.js ***!
  \***************************/
/***/ (() => {

eval("let selectedFavListArray=[]\r\n\r\nfunction getFavoriteItem(){\r\n  let cardsContainer=document.getElementById(\"containerRow\");\r\n\r\n  let favItem=cardsContainer.querySelectorAll(\".favorite-item\");\r\n\r\n  favItem.forEach(function(eachFavIcon){\r\n\r\n    eachFavIcon.addEventListener(\"click\",function(event){\r\n\r\n      let target=event.target;\r\n      let favBtn=target.closest(\".favorite-item\")\r\n\r\n      const selectedFavItemId= favBtn.getAttribute(\"btn-id\");\r\n  \r\n      let selectedItemIndex=selectedFavListArray.indexOf(selectedFavItemId)\r\n      let toggle=eachFavIcon.querySelector(\".material-icons-outlined\")\r\n  \r\n        if(selectedItemIndex != -1){\r\n          // item already in list should remove filled color\r\n          \r\n          selectedFavListArray.splice(selectedItemIndex,1);\r\n        toggle.innerText=\"favorite_border\"\r\n\r\n        }\r\n        else{\r\n          // ietm not in list you should add item to array and color filled\r\n          selectedFavListArray.push(selectedFavItemId);\r\n          toggle.innerText=\"favorite\"\r\n          \r\n        }\r\n  \r\n          console.log(selectedFavListArray)\r\n        wishListCount.textContent=selectedFavListArray.length;\r\n  \r\n  \r\n  })\r\n    \r\n  });\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/favBtn.js?");

/***/ }),

/***/ "./scripts/home.js":
/*!*************************!*\
  !*** ./scripts/home.js ***!
  \*************************/
/***/ (() => {

eval("let cardsContainer=document.getElementById(\"containerRow\");\r\nlet SearchInp= document.getElementById(\"searchElem\")\r\nlet wishListCount=document.getElementById(\"wishListCounter\");\r\nlet favBtnChange=document.getElementById(\"wishlistIcon\");\r\n\r\n\r\n\r\nlet items =[\r\n    {\r\n      id:1,\r\n      title: \"Macbook\",\r\n      image:\r\n        \"https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg\",\r\n      description:\r\n        \"Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..\",\r\n      price: 600,\r\n    },\r\n    {\r\n      id:2,\r\n      title: \"Iphone\",\r\n      image:\r\n        \"https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg\",\r\n      description:\r\n        \"iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..\",\r\n      price: 123,\r\n    },\r\n    {\r\n      id:3,\r\n      title: \"Apple cinema\",\r\n      image:\r\n        \"https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg\",\r\n      description:\r\n        \"The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..\",\r\n      price: 110,\r\n    },\r\n    {\r\n      id:4,\r\n      title: \"Epson\",\r\n      image:\r\n        \"https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg\",\r\n      description:\r\n        \"Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..\",\r\n      price: 98,\r\n    },\r\n    {\r\n      id:5,\r\n        title: \"Laptop\",\r\n        image:\r\n          \"https://www.notebookcheck.net/uploads/tx_nbc2/HPPavilion13-b__1__01.jpg\",\r\n        description:\r\n          \"12th Generation Intel® Core™ i5 processorWindows 11 Home39.6 cm (15.6) diagonal, FHD (1920 x 1080)Intel® Iris® Xᵉ Graphics8 GB DDR4-3200 MHz RAM (2 x 4 GB)1.74 kg Backlit KBD, Alexa built-in\",\r\n        price: 98,\r\n      },\r\n      \r\n      \r\n  ]\r\n\r\n \r\n\r\n\n\n//# sourceURL=webpack:///./scripts/home.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./home */ \"./scripts/home.js\");\r\n__webpack_require__(/*! ./search */ \"./scripts/search.js\");\r\n__webpack_require__(/*! ./favBtn */ \"./scripts/favBtn.js\");\r\n__webpack_require__(/*! ./render */ \"./scripts/render.js\")\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ }),

/***/ "./scripts/render.js":
/*!***************************!*\
  !*** ./scripts/render.js ***!
  \***************************/
/***/ (() => {

eval("function renderTotalCards(products){\r\n    let totalCards=\"\";\r\n      for(let i=0;i<products.length;i++){\r\n  \r\n          totalCards=totalCards+renderSingleCrad(products[i])\r\n  \r\n      }\r\n  \r\n      cardsContainer.innerHTML=totalCards;\r\n      getFavoriteItem();\r\n  \r\n  }\r\n   \r\n  \r\n  \r\n  function renderSingleCrad(item){\r\n      return ` <div class=\"col-12 col-md-6 col-lg-3\">\r\n      <div class=\"card mb-3 p-1\">\r\n        <img\r\n          src=\"${item.image}\"\r\n          class=\"card-img-top\"\r\n          alt=\"\"\r\n        />\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">\"${item.title}\"</h5>\r\n          <p class=\"card-text\">\r\n         ${item.description}\r\n          </p>\r\n  \r\n  \r\n          <strong> <span class=\"material-icons-outlined fs-6 mt-3\">\r\n          currency_rupee\r\n          </span>${item.price.toFixed(2)}</strong>\r\n  \r\n  \r\n          <div class=\"btn-group mt-2 bg-light w-100\">\r\n            <a href=\"#\" class=\"btn \" aria-current=\"page\"\r\n              ><span class=\"material-icons-outlined mt-1\">\r\n                shopping_cart\r\n              </span></a\r\n            >\r\n            <a href=\"#\" class=\"btn  favorite-item\"  btn-id=\"${item.id}\"\r\n              ><span class=\"material-icons-outlined mt-1\" >\r\n                favorite_border\r\n              </span></a\r\n            >\r\n            <a href=\"#\" class=\"btn\"\r\n              ><span class=\"material-icons-outlined mt-1\">\r\n                compare_arrows\r\n              </span></a\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>`\r\n  }\r\n  \r\n  renderTotalCards(items)\r\n  \n\n//# sourceURL=webpack:///./scripts/render.js?");

/***/ }),

/***/ "./scripts/search.js":
/*!***************************!*\
  !*** ./scripts/search.js ***!
  \***************************/
/***/ (() => {

eval("SearchInp.addEventListener(\"keyup\" , function(event){\r\n\r\n    let EnteredSearchValue=SearchInp.value \r\n          // console.log(EnteredSearchValue);\r\n  \r\n    EnteredSearchValue=EnteredSearchValue.toLowerCase()\r\n  \r\n  \r\n     let filteredCards=items.filter(function(card){\r\n   \r\n       return card.title.toLowerCase().includes(EnteredSearchValue)\r\n     })\r\n  \r\n     console.log(filteredCards);\r\n     renderTotalCards(filteredCards)\r\n   })\r\n   \n\n//# sourceURL=webpack:///./scripts/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;