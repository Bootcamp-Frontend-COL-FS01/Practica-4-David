/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/feed/feed.css":
/*!***************************!*\
  !*** ./src/feed/feed.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/feed/feed.ts":
/*!**************************!*\
  !*** ./src/feed/feed.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadFeed = exports.feeds = exports.hardcodedfeeds = void 0;
__webpack_require__(/*! ./feed.css */ "./src/feed/feed.css");
exports.hardcodedfeeds = [
    {
        user: "user1",
        title: "This is a title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
        image: "../img/marek-piwnicki-d_A795LuFRM-unsplash.jpg"
    },
    {
        user: "user2",
        title: "This is another title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
    },
    {
        user: "user3",
        title: "This is a title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
    },
    {
        user: "user4",
        title: "This is a title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
    },
    {
        user: "user5",
        title: "This is a title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
    },
];
const storedFeeds = JSON.parse(localStorage.getItem("feeds") || "[]");
exports.feeds = storedFeeds.length > 0 ? storedFeeds.concat(exports.hardcodedfeeds) : exports.hardcodedfeeds;
function loadFeed(feeds) {
    let html = "";
    feeds.forEach((feed) => {
        const user = feed.user;
        const title = feed.title;
        const content = feed.content;
        const image = feed.image; // Add this line
        html += `
        <section>
        ${title ? `<h1>${title}</h1>` : ""}
        <h5>${content}</h5>
        ${image ? `<img src="${image}" alt="Post Image">` : ""}
        <h4>By ${user} </h4>
            <div>
                <button class="edit-button"> ✎ </button>
                <button class="save-button" style="display:none"> 💾 </button>
                <button> 🗙 </button>
            </div>
        </section>
        `;
    });
    return html;
}
exports.loadFeed = loadFeed;
document.addEventListener("DOMContentLoaded", () => {
    const feedHtml = loadFeed(exports.feeds);
    const blogFeedElement = document.getElementById("blog-feed");
    if (blogFeedElement) {
        blogFeedElement.innerHTML = feedHtml;
    }
    // Add event listeners for edit buttons
    const editButtons = document.getElementsByClassName("edit-button");
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener("click", (event) => {
            const button = event.target;
            const contentElement = button.parentElement.previousElementSibling.previousElementSibling;
            contentElement.setAttribute("contenteditable", "true");
            contentElement.focus();
            // Show the save button and hide the edit button
            const saveButton = button.nextElementSibling;
            saveButton.style.display = "inline";
            button.style.display = "none";
        });
    }
    // Add event listeners for save buttons
    const saveButtons = document.getElementsByClassName("save-button");
    for (let i = 0; i < saveButtons.length; i++) {
        saveButtons[i].addEventListener("click", (event) => {
            const button = event.target;
            const contentElement = button.parentElement.previousElementSibling.previousElementSibling;
            contentElement.setAttribute("contenteditable", "false");
            // Save the new content (replace the content in the feeds array)
            const newContent = contentElement.textContent;
            exports.feeds[i].content = newContent;
            // Hide the save button and show the edit button
            const editButton = button.previousElementSibling;
            editButton.style.display = "inline";
            button.style.display = "none";
        });
    }
    // Add event listeners for delete buttons
    const deleteButtons = document.querySelectorAll("button:nth-child(3)");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", (event) => {
            const button = event.target;
            const postElement = button.closest("section");
            // Confirm before deleting
            const confirmed = confirm("Are you sure you want to delete this post?");
            if (confirmed && postElement) {
                postElement.remove(); // Remove the post from the DOM
                exports.feeds.splice(i, 1); // Remove the post from the feeds array
            }
        });
    }
    // Hamburger menu logic
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const newPost = document.getElementById('newPost');
    const changePassword = document.getElementById('changePassword');
    hamburger.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
    newPost.addEventListener('click', () => {
        window.location.href = "newpost.html";
    });
    changePassword.addEventListener('click', () => {
        window.location.href = "changepassword.html";
    });
});
////


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/feed/feed.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0IsR0FBRyxhQUFhLEdBQUcsc0JBQXNCO0FBQ3pELG1CQUFPLENBQUMsdUNBQVk7QUFDcEIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsZUFBZSxNQUFNO0FBQy9CLGNBQWMsUUFBUTtBQUN0QixVQUFVLHFCQUFxQixNQUFNO0FBQ3JDLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qyw0Q0FBNEM7QUFDNUM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEOzs7Ozs7O1VDM0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWNlLTQvLi9zcmMvZmVlZC9mZWVkLmNzcz82ZTRlIiwid2VicGFjazovL3ByYWN0aWNlLTQvLi9zcmMvZmVlZC9mZWVkLnRzIiwid2VicGFjazovL3ByYWN0aWNlLTQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByYWN0aWNlLTQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcmFjdGljZS00L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcmFjdGljZS00L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmxvYWRGZWVkID0gZXhwb3J0cy5mZWVkcyA9IGV4cG9ydHMuaGFyZGNvZGVkZmVlZHMgPSB2b2lkIDA7XHJcbnJlcXVpcmUoXCIuL2ZlZWQuY3NzXCIpO1xyXG5leHBvcnRzLmhhcmRjb2RlZGZlZWRzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVzZXI6IFwidXNlcjFcIixcclxuICAgICAgICB0aXRsZTogXCJUaGlzIGlzIGEgdGl0bGVcIixcclxuICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsIGRpc3RpbmN0aW8gdm9sdXB0YXRlIHRlbXBvcmEgYWRpcGlzY2kgZG9sb3JlIHVsbGFtIG1hZ25pIGVuaW0sIGl1c3RvIHRlbmV0dXIgbWFpb3JlcyBmYWNpbGlzIGVhcXVlIGRvbG9yLCBxdW9zIGxhdWRhbnRpdW0gbmVjZXNzaXRhdGlidXMgc2l0IHJlcHJlaGVuZGVyaXQuIENvbW1vZGksIGRvbG9ydW0uXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL21hcmVrLXBpd25pY2tpLWRfQTc5NUx1RlJNLXVuc3BsYXNoLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXI6IFwidXNlcjJcIixcclxuICAgICAgICB0aXRsZTogXCJUaGlzIGlzIGFub3RoZXIgdGl0bGVcIixcclxuICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsIGRpc3RpbmN0aW8gdm9sdXB0YXRlIHRlbXBvcmEgYWRpcGlzY2kgZG9sb3JlIHVsbGFtIG1hZ25pIGVuaW0sIGl1c3RvIHRlbmV0dXIgbWFpb3JlcyBmYWNpbGlzIGVhcXVlIGRvbG9yLCBxdW9zIGxhdWRhbnRpdW0gbmVjZXNzaXRhdGlidXMgc2l0IHJlcHJlaGVuZGVyaXQuIENvbW1vZGksIGRvbG9ydW0uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXI6IFwidXNlcjNcIixcclxuICAgICAgICB0aXRsZTogXCJUaGlzIGlzIGEgdGl0bGVcIixcclxuICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsIGRpc3RpbmN0aW8gdm9sdXB0YXRlIHRlbXBvcmEgYWRpcGlzY2kgZG9sb3JlIHVsbGFtIG1hZ25pIGVuaW0sIGl1c3RvIHRlbmV0dXIgbWFpb3JlcyBmYWNpbGlzIGVhcXVlIGRvbG9yLCBxdW9zIGxhdWRhbnRpdW0gbmVjZXNzaXRhdGlidXMgc2l0IHJlcHJlaGVuZGVyaXQuIENvbW1vZGksIGRvbG9ydW0uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXI6IFwidXNlcjRcIixcclxuICAgICAgICB0aXRsZTogXCJUaGlzIGlzIGEgdGl0bGVcIixcclxuICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsIGRpc3RpbmN0aW8gdm9sdXB0YXRlIHRlbXBvcmEgYWRpcGlzY2kgZG9sb3JlIHVsbGFtIG1hZ25pIGVuaW0sIGl1c3RvIHRlbmV0dXIgbWFpb3JlcyBmYWNpbGlzIGVhcXVlIGRvbG9yLCBxdW9zIGxhdWRhbnRpdW0gbmVjZXNzaXRhdGlidXMgc2l0IHJlcHJlaGVuZGVyaXQuIENvbW1vZGksIGRvbG9ydW0uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXI6IFwidXNlcjVcIixcclxuICAgICAgICB0aXRsZTogXCJUaGlzIGlzIGEgdGl0bGVcIixcclxuICAgICAgICBjb250ZW50OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsIGRpc3RpbmN0aW8gdm9sdXB0YXRlIHRlbXBvcmEgYWRpcGlzY2kgZG9sb3JlIHVsbGFtIG1hZ25pIGVuaW0sIGl1c3RvIHRlbmV0dXIgbWFpb3JlcyBmYWNpbGlzIGVhcXVlIGRvbG9yLCBxdW9zIGxhdWRhbnRpdW0gbmVjZXNzaXRhdGlidXMgc2l0IHJlcHJlaGVuZGVyaXQuIENvbW1vZGksIGRvbG9ydW0uXCIsXHJcbiAgICB9LFxyXG5dO1xyXG5jb25zdCBzdG9yZWRGZWVkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmZWVkc1wiKSB8fCBcIltdXCIpO1xyXG5leHBvcnRzLmZlZWRzID0gc3RvcmVkRmVlZHMubGVuZ3RoID4gMCA/IHN0b3JlZEZlZWRzLmNvbmNhdChleHBvcnRzLmhhcmRjb2RlZGZlZWRzKSA6IGV4cG9ydHMuaGFyZGNvZGVkZmVlZHM7XHJcbmZ1bmN0aW9uIGxvYWRGZWVkKGZlZWRzKSB7XHJcbiAgICBsZXQgaHRtbCA9IFwiXCI7XHJcbiAgICBmZWVkcy5mb3JFYWNoKChmZWVkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGZlZWQudXNlcjtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGZlZWQudGl0bGU7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZlZWQuY29udGVudDtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGZlZWQuaW1hZ2U7IC8vIEFkZCB0aGlzIGxpbmVcclxuICAgICAgICBodG1sICs9IGBcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAke3RpdGxlID8gYDxoMT4ke3RpdGxlfTwvaDE+YCA6IFwiXCJ9XHJcbiAgICAgICAgPGg1PiR7Y29udGVudH08L2g1PlxyXG4gICAgICAgICR7aW1hZ2UgPyBgPGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cIlBvc3QgSW1hZ2VcIj5gIDogXCJcIn1cclxuICAgICAgICA8aDQ+QnkgJHt1c2VyfSA8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtYnV0dG9uXCI+IOKcjiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzYXZlLWJ1dHRvblwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+IPCfkr4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPiDwn5eZIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgYDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGh0bWw7XHJcbn1cclxuZXhwb3J0cy5sb2FkRmVlZCA9IGxvYWRGZWVkO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBmZWVkSHRtbCA9IGxvYWRGZWVkKGV4cG9ydHMuZmVlZHMpO1xyXG4gICAgY29uc3QgYmxvZ0ZlZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9nLWZlZWRcIik7XHJcbiAgICBpZiAoYmxvZ0ZlZWRFbGVtZW50KSB7XHJcbiAgICAgICAgYmxvZ0ZlZWRFbGVtZW50LmlubmVySFRNTCA9IGZlZWRIdG1sO1xyXG4gICAgfVxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgZWRpdCBidXR0b25zXHJcbiAgICBjb25zdCBlZGl0QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0LWJ1dHRvblwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdEJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBlZGl0QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBidXR0b24ucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHNhdmUgYnV0dG9uIGFuZCBoaWRlIHRoZSBlZGl0IGJ1dHRvblxyXG4gICAgICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gYnV0dG9uLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcclxuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHNhdmUgYnV0dG9uc1xyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2F2ZS1idXR0b25cIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2F2ZUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gYnV0dG9uLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgbmV3IGNvbnRlbnQgKHJlcGxhY2UgdGhlIGNvbnRlbnQgaW4gdGhlIGZlZWRzIGFycmF5KVxyXG4gICAgICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gY29udGVudEVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGV4cG9ydHMuZmVlZHNbaV0uY29udGVudCA9IG5ld0NvbnRlbnQ7XHJcbiAgICAgICAgICAgIC8vIEhpZGUgdGhlIHNhdmUgYnV0dG9uIGFuZCBzaG93IHRoZSBlZGl0IGJ1dHRvblxyXG4gICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIGZvciBkZWxldGUgYnV0dG9uc1xyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b246bnRoLWNoaWxkKDMpXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxldGVCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgcG9zdEVsZW1lbnQgPSBidXR0b24uY2xvc2VzdChcInNlY3Rpb25cIik7XHJcbiAgICAgICAgICAgIC8vIENvbmZpcm0gYmVmb3JlIGRlbGV0aW5nXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcG9zdD9cIik7XHJcbiAgICAgICAgICAgIGlmIChjb25maXJtZWQgJiYgcG9zdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHBvc3RFbGVtZW50LnJlbW92ZSgpOyAvLyBSZW1vdmUgdGhlIHBvc3QgZnJvbSB0aGUgRE9NXHJcbiAgICAgICAgICAgICAgICBleHBvcnRzLmZlZWRzLnNwbGljZShpLCAxKTsgLy8gUmVtb3ZlIHRoZSBwb3N0IGZyb20gdGhlIGZlZWRzIGFycmF5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIEhhbWJ1cmdlciBtZW51IGxvZ2ljXHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyJyk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICAgIGNvbnN0IG5ld1Bvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UG9zdCcpO1xyXG4gICAgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlUGFzc3dvcmQnKTtcclxuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBtZW51LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgfSk7XHJcbiAgICBuZXdQb3N0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJuZXdwb3N0Lmh0bWxcIjtcclxuICAgIH0pO1xyXG4gICAgY2hhbmdlUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImNoYW5nZXBhc3N3b3JkLmh0bWxcIjtcclxuICAgIH0pO1xyXG59KTtcclxuLy8vL1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZmVlZC9mZWVkLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9