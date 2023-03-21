/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/landing/styles.css":
/*!********************************!*\
  !*** ./src/landing/styles.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/landing/main.ts":
/*!*****************************!*\
  !*** ./src/landing/main.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles.css */ "./src/landing/styles.css");
const login_png_1 = __importDefault(__webpack_require__(/*! ../img/login.png */ "./src/img/login.png"));
class UserAuth {
    constructor(user) {
        this.user = user;
    }
    login(username, password) {
        if (username === this.user.username && password === this.user.password) {
            return true;
        }
        return false;
    }
}
let user1 = {
    username: 'admin',
    password: 'admin',
};
let userAuth = new UserAuth(user1);
// LOGIN
function loginUser() {
    const userElement = document.getElementById("username");
    const passwordElement = document.getElementById("password");
    const username = userElement.value;
    const password = passwordElement.value;
    if (userAuth.login(username, password)) {
        ShowCustomPromptLogin();
        setTimeout(() => {
            window.location.href = "feed.html";
        }, 3000); // Wait for 3 seconds before navigating
    }
    else {
        alert("Incorrect User or Password");
    }
}
const loginButton = document.getElementById("submit-button");
loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    loginUser();
});
// Navigation: register
const registerButton = document.getElementById('register-button');
registerButton === null || registerButton === void 0 ? void 0 : registerButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "register.html";
});
// customPromptLogin.ts
function ShowCustomPromptLogin() {
    const imageElement = document.getElementById('login-image');
    const loginPromptContainer = document.getElementById('custom-prompt-login-container');
    if (imageElement) {
        imageElement.src = login_png_1.default;
    }
    if (loginPromptContainer) {
        loginPromptContainer.style.display = "flex";
    }
}


/***/ }),

/***/ "./src/img/login.png":
/*!***************************!*\
  !*** ./src/img/login.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/login.png");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/landing/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsOENBQWM7QUFDdEIsb0NBQW9DLG1CQUFPLENBQUMsNkNBQWtCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNURBLGlFQUFlLHFCQUF1QixxQkFBcUI7Ozs7OztVQ0EzRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWNlLTQvLi9zcmMvbGFuZGluZy9zdHlsZXMuY3NzPzZiNzciLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC8uL3NyYy9sYW5kaW5nL21haW4udHMiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC8uL3NyYy9pbWcvbG9naW4ucG5nIiwid2VicGFjazovL3ByYWN0aWNlLTQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3ByYWN0aWNlLTQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcmFjdGljZS00L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcmFjdGljZS00L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vc3R5bGVzLmNzc1wiKTtcclxuY29uc3QgbG9naW5fcG5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2ltZy9sb2dpbi5wbmdcIikpO1xyXG5jbGFzcyBVc2VyQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgIH1cclxuICAgIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIGlmICh1c2VybmFtZSA9PT0gdGhpcy51c2VyLnVzZXJuYW1lICYmIHBhc3N3b3JkID09PSB0aGlzLnVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5sZXQgdXNlcjEgPSB7XHJcbiAgICB1c2VybmFtZTogJ2FkbWluJyxcclxuICAgIHBhc3N3b3JkOiAnYWRtaW4nLFxyXG59O1xyXG5sZXQgdXNlckF1dGggPSBuZXcgVXNlckF1dGgodXNlcjEpO1xyXG4vLyBMT0dJTlxyXG5mdW5jdGlvbiBsb2dpblVzZXIoKSB7XHJcbiAgICBjb25zdCB1c2VyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIik7XHJcbiAgICBjb25zdCBwYXNzd29yZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpO1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VyRWxlbWVudC52YWx1ZTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRFbGVtZW50LnZhbHVlO1xyXG4gICAgaWYgKHVzZXJBdXRoLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkpIHtcclxuICAgICAgICBTaG93Q3VzdG9tUHJvbXB0TG9naW4oKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImZlZWQuaHRtbFwiO1xyXG4gICAgICAgIH0sIDMwMDApOyAvLyBXYWl0IGZvciAzIHNlY29uZHMgYmVmb3JlIG5hdmlnYXRpbmdcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwiSW5jb3JyZWN0IFVzZXIgb3IgUGFzc3dvcmRcIik7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1idXR0b25cIik7XHJcbmxvZ2luQnV0dG9uID09PSBudWxsIHx8IGxvZ2luQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9naW5Vc2VyKCk7XHJcbn0pO1xyXG4vLyBOYXZpZ2F0aW9uOiByZWdpc3RlclxyXG5jb25zdCByZWdpc3RlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1idXR0b24nKTtcclxucmVnaXN0ZXJCdXR0b24gPT09IG51bGwgfHwgcmVnaXN0ZXJCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZ2lzdGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwicmVnaXN0ZXIuaHRtbFwiO1xyXG59KTtcclxuLy8gY3VzdG9tUHJvbXB0TG9naW4udHNcclxuZnVuY3Rpb24gU2hvd0N1c3RvbVByb21wdExvZ2luKCkge1xyXG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWltYWdlJyk7XHJcbiAgICBjb25zdCBsb2dpblByb21wdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tcHJvbXB0LWxvZ2luLWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKGltYWdlRWxlbWVudCkge1xyXG4gICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBsb2dpbl9wbmdfMS5kZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgaWYgKGxvZ2luUHJvbXB0Q29udGFpbmVyKSB7XHJcbiAgICAgICAgbG9naW5Qcm9tcHRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvbG9naW4ucG5nXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2xhbmRpbmcvbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==