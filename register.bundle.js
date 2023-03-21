/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/register/register.css":
/*!***********************************!*\
  !*** ./src/register/register.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./src/register/register.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./register.css */ "./src/register/register.css");
let user1 = {
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin',
};
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPassword(password) {
    // At least one lowercase letter, one uppercase letter, one digit, and one special character, with a minimum length of 8 characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
function isUniqueUsername(username) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.every(user => user.username !== username);
}
function saveUserToLocalStorage(user) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    console.log("New user registered:", users);
}
const registerButton = document.getElementById('register-button');
registerButton === null || registerButton === void 0 ? void 0 : registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (!isUniqueUsername(username)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }
    if (!isValidEmail(email)) {
        alert('Invalid email address. Please enter a valid email address.');
        return;
    }
    if (!isValidPassword(password)) {
        alert('Invalid password. It must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please re-enter your password.');
        return;
    }
    const newUser = {
        username,
        email,
        password,
    };
    saveUserToLocalStorage(newUser);
    alert('User registered');
    window.location.href = "feed.html";
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQU8sQ0FBQyxtREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixHQUFHO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWNlLTQvLi9zcmMvcmVnaXN0ZXIvcmVnaXN0ZXIuY3NzP2I3YzUiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmFjdGljZS00L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC8uL3NyYy9yZWdpc3Rlci9yZWdpc3Rlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vcmVnaXN0ZXIuY3NzXCIpO1xyXG5sZXQgdXNlcjEgPSB7XHJcbiAgICB1c2VybmFtZTogJ2FkbWluJyxcclxuICAgIGVtYWlsOiAnYWRtaW5AZXhhbXBsZS5jb20nLFxyXG4gICAgcGFzc3dvcmQ6ICdhZG1pbicsXHJcbn07XHJcbmZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbCkge1xyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgcmV0dXJuIGVtYWlsUmVnZXgudGVzdChlbWFpbCk7XHJcbn1cclxuZnVuY3Rpb24gaXNWYWxpZFBhc3N3b3JkKHBhc3N3b3JkKSB7XHJcbiAgICAvLyBBdCBsZWFzdCBvbmUgbG93ZXJjYXNlIGxldHRlciwgb25lIHVwcGVyY2FzZSBsZXR0ZXIsIG9uZSBkaWdpdCwgYW5kIG9uZSBzcGVjaWFsIGNoYXJhY3Rlciwgd2l0aCBhIG1pbmltdW0gbGVuZ3RoIG9mIDggY2hhcmFjdGVyc1xyXG4gICAgY29uc3QgcGFzc3dvcmRSZWdleCA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qXFxkKSg/PS4qW0AkISUqPyZdKVtBLVphLXpcXGRAJCElKj8mXXs4LH0kLztcclxuICAgIHJldHVybiBwYXNzd29yZFJlZ2V4LnRlc3QocGFzc3dvcmQpO1xyXG59XHJcbmZ1bmN0aW9uIGlzVW5pcXVlVXNlcm5hbWUodXNlcm5hbWUpIHtcclxuICAgIGNvbnN0IHVzZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcnMnKSB8fCAnW10nKTtcclxuICAgIHJldHVybiB1c2Vycy5ldmVyeSh1c2VyID0+IHVzZXIudXNlcm5hbWUgIT09IHVzZXJuYW1lKTtcclxufVxyXG5mdW5jdGlvbiBzYXZlVXNlclRvTG9jYWxTdG9yYWdlKHVzZXIpIHtcclxuICAgIGNvbnN0IHVzZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcnMnKSB8fCAnW10nKTtcclxuICAgIHVzZXJzLnB1c2godXNlcik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcnMnLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xyXG4gICAgY29uc29sZS5sb2coXCJOZXcgdXNlciByZWdpc3RlcmVkOlwiLCB1c2Vycyk7XHJcbn1cclxuY29uc3QgcmVnaXN0ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItYnV0dG9uJyk7XHJcbnJlZ2lzdGVyQnV0dG9uID09PSBudWxsIHx8IHJlZ2lzdGVyQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWdpc3RlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJykudmFsdWU7XHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS52YWx1ZTtcclxuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLXBhc3N3b3JkJykudmFsdWU7XHJcbiAgICBpZiAoIWlzVW5pcXVlVXNlcm5hbWUodXNlcm5hbWUpKSB7XHJcbiAgICAgICAgYWxlcnQoJ1VzZXJuYW1lIGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgY2hvb3NlIGEgZGlmZmVyZW50IG9uZS4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVmFsaWRFbWFpbChlbWFpbCkpIHtcclxuICAgICAgICBhbGVydCgnSW52YWxpZCBlbWFpbCBhZGRyZXNzLiBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghaXNWYWxpZFBhc3N3b3JkKHBhc3N3b3JkKSkge1xyXG4gICAgICAgIGFsZXJ0KCdJbnZhbGlkIHBhc3N3b3JkLiBJdCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nIGFuZCBjb250YWluIGF0IGxlYXN0IG9uZSBsb3dlcmNhc2UgbGV0dGVyLCBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGRpZ2l0LCBhbmQgb25lIHNwZWNpYWwgY2hhcmFjdGVyLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgYWxlcnQoJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2guIFBsZWFzZSByZS1lbnRlciB5b3VyIHBhc3N3b3JkLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1VzZXIgPSB7XHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICB9O1xyXG4gICAgc2F2ZVVzZXJUb0xvY2FsU3RvcmFnZShuZXdVc2VyKTtcclxuICAgIGFsZXJ0KCdVc2VyIHJlZ2lzdGVyZWQnKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJmZWVkLmh0bWxcIjtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==