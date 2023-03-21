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

/***/ "./src/newpost/newpost.css":
/*!*********************************!*\
  !*** ./src/newpost/newpost.css ***!
  \*********************************/
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./src/newpost/newpost.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const feed_1 = __webpack_require__(/*! ../feed/feed */ "./src/feed/feed.ts");
__webpack_require__(/*! ./newpost.css */ "./src/newpost/newpost.css");
function createNewPost(title, content, author, imageFile) {
    const newPost = {
        user: author,
        title: title,
        content: content,
    };
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target instanceof FileReader) {
                newPost.image = event.target.result;
                updateFeedAndRedirect(newPost);
            }
        };
        reader.readAsDataURL(imageFile);
    }
    else {
        updateFeedAndRedirect(newPost);
    }
}
function updateFeedAndRedirect(newPost) {
    feed_1.feeds.unshift(newPost);
    localStorage.setItem("feeds", JSON.stringify(feed_1.feeds));
    window.location.href = "feed.html";
}
document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.getElementById("new-post-form");
    formElement.addEventListener("submit", (event) => {
        var _a;
        event.preventDefault();
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const author = document.getElementById("author").value;
        const imageFile = (_a = document.getElementById("image").files) === null || _a === void 0 ? void 0 : _a[0];
        createNewPost(title, content, author, imageFile);
        alert('Post submitted');
    });
});
const backToFeedButton = document.getElementById('back-to-feed-button');
backToFeedButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "feed.html";
});
// import { Feed } from "../models/userinterface";
// import { loadFeed } from "../feed/feed";
// import { feeds } from "../feed/feed";
// import "./newpost.css"
// function createNewPost(title: string, content: string, author: string, imageFile?: File) {
//     const newPost: Feed = {
//         user: author,
//         title: title,
//         content: content,
//       };
//       if (imageFile) {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//           if (event.target instanceof FileReader) {
//             newPost.image = event.target.result as string;
//             feeds.unshift(newPost);
//             const feedHtml = loadFeed(feeds);
//             const blogFeedElement = document.getElementById("blog-feed");
//             if (blogFeedElement) {
//               blogFeedElement.innerHTML = feedHtml;
//             }
//           }
//         };
//         reader.readAsDataURL(imageFile);
//       } else {
//         feeds.unshift(newPost);
//         const feedHtml = loadFeed(feeds);
//         const blogFeedElement = document.getElementById("blog-feed");
//         if (blogFeedElement) {
//           blogFeedElement.innerHTML = feedHtml;
//         }
//       }
//       // Store the updated feeds array in the localStorage
//       localStorage.setItem("feeds", JSON.stringify(feeds));
//   }
// ///////
//   document.addEventListener("DOMContentLoaded", () => {
//     const formElement = document.getElementById("new-post-form") as HTMLFormElement;
//     formElement.addEventListener("submit", (event) => {
//       event.preventDefault();
//       const title = (document.getElementById("title") as HTMLInputElement).value;
//       const content = (document.getElementById("content") as HTMLTextAreaElement).value;
//       const author = (document.getElementById("author") as HTMLInputElement).value;
//       const imageFile = (document.getElementById("image") as HTMLInputElement).files?.[0];
//       createNewPost(title, content, author, imageFile);
//       alert('Post submitted'); 
//     });
//   });
//   const backToFeedButton = document.getElementById('back-to-feed-button') as HTMLElement;
//   backToFeedButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.location.href = "feed.html";
//   } ) 
////////////////////
//   const newPost = document.getElementById("newPost") as HTMLElement;
//   newPost.addEventListener("click", () => {
//     const newPostForm = `
//       <form id="new-post-form">
//         <label for="title">Title:</label>
//         <input type="text" id="title" name="title" required>
//         <label for="content">Content:</label>
//         <textarea id="content" name="content" rows="4" cols="50" required></textarea>
//         <label for="author">Author Name:</label>
//         <input type="text" id="author" name="author" required>
//         <label for="image">Upload Image (optional):</label>
//         <input type="file" id="image" name="image" accept="image/*">
//         <button type="submit">Submit</button>
//       </form>
//     `;
//     const blogFeedElement = document.getElementById("blog-feed");
//     if (blogFeedElement) {
//       blogFeedElement.innerHTML = newPostForm;
//       const formElement = document.getElementById("new-post-form") as HTMLFormElement;
//       formElement.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const title = (document.getElementById("title") as HTMLInputElement).value;
//         const content = (document.getElementById("content") as HTMLTextAreaElement).value;
//         const author = (document.getElementById("author") as HTMLInputElement).value;
//         const imageFile = (document.getElementById("image") as HTMLInputElement).files?.[0];
//         createNewPost(title, content, author, imageFile);
//       });
//     }
//   }
//   )

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC8uL3NyYy9mZWVkL2ZlZWQuY3NzPzZlNGUiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC8uL3NyYy9uZXdwb3N0L25ld3Bvc3QuY3NzPzA4YTciLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC8uL3NyYy9mZWVkL2ZlZWQudHMiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmFjdGljZS00L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UtNC8uL3NyYy9uZXdwb3N0L25ld3Bvc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5sb2FkRmVlZCA9IGV4cG9ydHMuZmVlZHMgPSBleHBvcnRzLmhhcmRjb2RlZGZlZWRzID0gdm9pZCAwO1xyXG5yZXF1aXJlKFwiLi9mZWVkLmNzc1wiKTtcclxuZXhwb3J0cy5oYXJkY29kZWRmZWVkcyA9IFtcclxuICAgIHtcclxuICAgICAgICB1c2VyOiBcInVzZXIxXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVGhpcyBpcyBhIHRpdGxlXCIsXHJcbiAgICAgICAgY29udGVudDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaWhpbCBkaXN0aW5jdGlvIHZvbHVwdGF0ZSB0ZW1wb3JhIGFkaXBpc2NpIGRvbG9yZSB1bGxhbSBtYWduaSBlbmltLCBpdXN0byB0ZW5ldHVyIG1haW9yZXMgZmFjaWxpcyBlYXF1ZSBkb2xvciwgcXVvcyBsYXVkYW50aXVtIG5lY2Vzc2l0YXRpYnVzIHNpdCByZXByZWhlbmRlcml0LiBDb21tb2RpLCBkb2xvcnVtLlwiLFxyXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9tYXJlay1waXduaWNraS1kX0E3OTVMdUZSTS11bnNwbGFzaC5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyOiBcInVzZXIyXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVGhpcyBpcyBhbm90aGVyIHRpdGxlXCIsXHJcbiAgICAgICAgY29udGVudDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaWhpbCBkaXN0aW5jdGlvIHZvbHVwdGF0ZSB0ZW1wb3JhIGFkaXBpc2NpIGRvbG9yZSB1bGxhbSBtYWduaSBlbmltLCBpdXN0byB0ZW5ldHVyIG1haW9yZXMgZmFjaWxpcyBlYXF1ZSBkb2xvciwgcXVvcyBsYXVkYW50aXVtIG5lY2Vzc2l0YXRpYnVzIHNpdCByZXByZWhlbmRlcml0LiBDb21tb2RpLCBkb2xvcnVtLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyOiBcInVzZXIzXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVGhpcyBpcyBhIHRpdGxlXCIsXHJcbiAgICAgICAgY29udGVudDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaWhpbCBkaXN0aW5jdGlvIHZvbHVwdGF0ZSB0ZW1wb3JhIGFkaXBpc2NpIGRvbG9yZSB1bGxhbSBtYWduaSBlbmltLCBpdXN0byB0ZW5ldHVyIG1haW9yZXMgZmFjaWxpcyBlYXF1ZSBkb2xvciwgcXVvcyBsYXVkYW50aXVtIG5lY2Vzc2l0YXRpYnVzIHNpdCByZXByZWhlbmRlcml0LiBDb21tb2RpLCBkb2xvcnVtLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyOiBcInVzZXI0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVGhpcyBpcyBhIHRpdGxlXCIsXHJcbiAgICAgICAgY29udGVudDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaWhpbCBkaXN0aW5jdGlvIHZvbHVwdGF0ZSB0ZW1wb3JhIGFkaXBpc2NpIGRvbG9yZSB1bGxhbSBtYWduaSBlbmltLCBpdXN0byB0ZW5ldHVyIG1haW9yZXMgZmFjaWxpcyBlYXF1ZSBkb2xvciwgcXVvcyBsYXVkYW50aXVtIG5lY2Vzc2l0YXRpYnVzIHNpdCByZXByZWhlbmRlcml0LiBDb21tb2RpLCBkb2xvcnVtLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyOiBcInVzZXI1XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVGhpcyBpcyBhIHRpdGxlXCIsXHJcbiAgICAgICAgY29udGVudDogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaWhpbCBkaXN0aW5jdGlvIHZvbHVwdGF0ZSB0ZW1wb3JhIGFkaXBpc2NpIGRvbG9yZSB1bGxhbSBtYWduaSBlbmltLCBpdXN0byB0ZW5ldHVyIG1haW9yZXMgZmFjaWxpcyBlYXF1ZSBkb2xvciwgcXVvcyBsYXVkYW50aXVtIG5lY2Vzc2l0YXRpYnVzIHNpdCByZXByZWhlbmRlcml0LiBDb21tb2RpLCBkb2xvcnVtLlwiLFxyXG4gICAgfSxcclxuXTtcclxuY29uc3Qgc3RvcmVkRmVlZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmVlZHNcIikgfHwgXCJbXVwiKTtcclxuZXhwb3J0cy5mZWVkcyA9IHN0b3JlZEZlZWRzLmxlbmd0aCA+IDAgPyBzdG9yZWRGZWVkcy5jb25jYXQoZXhwb3J0cy5oYXJkY29kZWRmZWVkcykgOiBleHBvcnRzLmhhcmRjb2RlZGZlZWRzO1xyXG5mdW5jdGlvbiBsb2FkRmVlZChmZWVkcykge1xyXG4gICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgZmVlZHMuZm9yRWFjaCgoZmVlZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBmZWVkLnVzZXI7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmZWVkLnRpdGxlO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmZWVkLmNvbnRlbnQ7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBmZWVkLmltYWdlOyAvLyBBZGQgdGhpcyBsaW5lXHJcbiAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgJHt0aXRsZSA/IGA8aDE+JHt0aXRsZX08L2gxPmAgOiBcIlwifVxyXG4gICAgICAgIDxoNT4ke2NvbnRlbnR9PC9oNT5cclxuICAgICAgICAke2ltYWdlID8gYDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCJQb3N0IEltYWdlXCI+YCA6IFwiXCJ9XHJcbiAgICAgICAgPGg0PkJ5ICR7dXNlcn0gPC9oND5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LWJ1dHRvblwiPiDinI4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2F2ZS1idXR0b25cIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPiDwn5K+IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj4g8J+XmSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIGA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBodG1sO1xyXG59XHJcbmV4cG9ydHMubG9hZEZlZWQgPSBsb2FkRmVlZDtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgZmVlZEh0bWwgPSBsb2FkRmVlZChleHBvcnRzLmZlZWRzKTtcclxuICAgIGNvbnN0IGJsb2dGZWVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvZy1mZWVkXCIpO1xyXG4gICAgaWYgKGJsb2dGZWVkRWxlbWVudCkge1xyXG4gICAgICAgIGJsb2dGZWVkRWxlbWVudC5pbm5lckhUTUwgPSBmZWVkSHRtbDtcclxuICAgIH1cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIGVkaXQgYnV0dG9uc1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdC1idXR0b25cIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZWRpdEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gYnV0dG9uLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAvLyBTaG93IHRoZSBzYXZlIGJ1dHRvbiBhbmQgaGlkZSB0aGUgZWRpdCBidXR0b25cclxuICAgICAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIHNhdmVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIGZvciBzYXZlIGJ1dHRvbnNcclxuICAgIGNvbnN0IHNhdmVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNhdmUtYnV0dG9uXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNhdmVCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIG5ldyBjb250ZW50IChyZXBsYWNlIHRoZSBjb250ZW50IGluIHRoZSBmZWVkcyBhcnJheSlcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGNvbnRlbnRFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBleHBvcnRzLmZlZWRzW2ldLmNvbnRlbnQgPSBuZXdDb250ZW50O1xyXG4gICAgICAgICAgICAvLyBIaWRlIHRoZSBzYXZlIGJ1dHRvbiBhbmQgc2hvdyB0aGUgZWRpdCBidXR0b25cclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgZGVsZXRlIGJ1dHRvbnNcclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uOm50aC1jaGlsZCgzKVwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RFbGVtZW50ID0gYnV0dG9uLmNsb3Nlc3QoXCJzZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAvLyBDb25maXJtIGJlZm9yZSBkZWxldGluZ1xyXG4gICAgICAgICAgICBjb25zdCBjb25maXJtZWQgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHBvc3Q/XCIpO1xyXG4gICAgICAgICAgICBpZiAoY29uZmlybWVkICYmIHBvc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0RWxlbWVudC5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSBwb3N0IGZyb20gdGhlIERPTVxyXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5mZWVkcy5zcGxpY2UoaSwgMSk7IC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSBmZWVkcyBhcnJheVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBIYW1idXJnZXIgbWVudSBsb2dpY1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcicpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgICBjb25zdCBuZXdQb3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Bvc3QnKTtcclxuICAgIGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZVBhc3N3b3JkJyk7XHJcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gbWVudS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgIH0pO1xyXG4gICAgbmV3UG9zdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwibmV3cG9zdC5odG1sXCI7XHJcbiAgICB9KTtcclxuICAgIGNoYW5nZVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJjaGFuZ2VwYXNzd29yZC5odG1sXCI7XHJcbiAgICB9KTtcclxufSk7XHJcbi8vLy9cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZlZWRfMSA9IHJlcXVpcmUoXCIuLi9mZWVkL2ZlZWRcIik7XHJcbnJlcXVpcmUoXCIuL25ld3Bvc3QuY3NzXCIpO1xyXG5mdW5jdGlvbiBjcmVhdGVOZXdQb3N0KHRpdGxlLCBjb250ZW50LCBhdXRob3IsIGltYWdlRmlsZSkge1xyXG4gICAgY29uc3QgbmV3UG9zdCA9IHtcclxuICAgICAgICB1c2VyOiBhdXRob3IsXHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICB9O1xyXG4gICAgaWYgKGltYWdlRmlsZSkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgRmlsZVJlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zdC5pbWFnZSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVGZWVkQW5kUmVkaXJlY3QobmV3UG9zdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlRmlsZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB1cGRhdGVGZWVkQW5kUmVkaXJlY3QobmV3UG9zdCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlRmVlZEFuZFJlZGlyZWN0KG5ld1Bvc3QpIHtcclxuICAgIGZlZWRfMS5mZWVkcy51bnNoaWZ0KG5ld1Bvc3QpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmZWVkc1wiLCBKU09OLnN0cmluZ2lmeShmZWVkXzEuZmVlZHMpKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJmZWVkLmh0bWxcIjtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXBvc3QtZm9ybVwiKTtcclxuICAgIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JcIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VGaWxlID0gKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKS5maWxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdO1xyXG4gICAgICAgIGNyZWF0ZU5ld1Bvc3QodGl0bGUsIGNvbnRlbnQsIGF1dGhvciwgaW1hZ2VGaWxlKTtcclxuICAgICAgICBhbGVydCgnUG9zdCBzdWJtaXR0ZWQnKTtcclxuICAgIH0pO1xyXG59KTtcclxuY29uc3QgYmFja1RvRmVlZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLXRvLWZlZWQtYnV0dG9uJyk7XHJcbmJhY2tUb0ZlZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiZmVlZC5odG1sXCI7XHJcbn0pO1xyXG4vLyBpbXBvcnQgeyBGZWVkIH0gZnJvbSBcIi4uL21vZGVscy91c2VyaW50ZXJmYWNlXCI7XHJcbi8vIGltcG9ydCB7IGxvYWRGZWVkIH0gZnJvbSBcIi4uL2ZlZWQvZmVlZFwiO1xyXG4vLyBpbXBvcnQgeyBmZWVkcyB9IGZyb20gXCIuLi9mZWVkL2ZlZWRcIjtcclxuLy8gaW1wb3J0IFwiLi9uZXdwb3N0LmNzc1wiXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZU5ld1Bvc3QodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgaW1hZ2VGaWxlPzogRmlsZSkge1xyXG4vLyAgICAgY29uc3QgbmV3UG9zdDogRmVlZCA9IHtcclxuLy8gICAgICAgICB1c2VyOiBhdXRob3IsXHJcbi8vICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4vLyAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbi8vICAgICAgIH07XHJcbi8vICAgICAgIGlmIChpbWFnZUZpbGUpIHtcclxuLy8gICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4vLyAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcclxuLy8gICAgICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBGaWxlUmVhZGVyKSB7XHJcbi8vICAgICAgICAgICAgIG5ld1Bvc3QuaW1hZ2UgPSBldmVudC50YXJnZXQucmVzdWx0IGFzIHN0cmluZztcclxuLy8gICAgICAgICAgICAgZmVlZHMudW5zaGlmdChuZXdQb3N0KTtcclxuLy8gICAgICAgICAgICAgY29uc3QgZmVlZEh0bWwgPSBsb2FkRmVlZChmZWVkcyk7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IGJsb2dGZWVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvZy1mZWVkXCIpO1xyXG4vLyAgICAgICAgICAgICBpZiAoYmxvZ0ZlZWRFbGVtZW50KSB7XHJcbi8vICAgICAgICAgICAgICAgYmxvZ0ZlZWRFbGVtZW50LmlubmVySFRNTCA9IGZlZWRIdG1sO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZUZpbGUpO1xyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGZlZWRzLnVuc2hpZnQobmV3UG9zdCk7XHJcbi8vICAgICAgICAgY29uc3QgZmVlZEh0bWwgPSBsb2FkRmVlZChmZWVkcyk7XHJcbi8vICAgICAgICAgY29uc3QgYmxvZ0ZlZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9nLWZlZWRcIik7XHJcbi8vICAgICAgICAgaWYgKGJsb2dGZWVkRWxlbWVudCkge1xyXG4vLyAgICAgICAgICAgYmxvZ0ZlZWRFbGVtZW50LmlubmVySFRNTCA9IGZlZWRIdG1sO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAvLyBTdG9yZSB0aGUgdXBkYXRlZCBmZWVkcyBhcnJheSBpbiB0aGUgbG9jYWxTdG9yYWdlXHJcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmVlZHNcIiwgSlNPTi5zdHJpbmdpZnkoZmVlZHMpKTtcclxuLy8gICB9XHJcbi8vIC8vLy8vLy9cclxuLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXBvc3QtZm9ybVwiKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbi8vICAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4vLyAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICBjb25zdCB0aXRsZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4vLyAgICAgICBjb25zdCBjb250ZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZTtcclxuLy8gICAgICAgY29uc3QgYXV0aG9yID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4vLyAgICAgICBjb25zdCBpbWFnZUZpbGUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS5maWxlcz8uWzBdO1xyXG4vLyAgICAgICBjcmVhdGVOZXdQb3N0KHRpdGxlLCBjb250ZW50LCBhdXRob3IsIGltYWdlRmlsZSk7XHJcbi8vICAgICAgIGFsZXJ0KCdQb3N0IHN1Ym1pdHRlZCcpOyBcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pO1xyXG4vLyAgIGNvbnN0IGJhY2tUb0ZlZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay10by1mZWVkLWJ1dHRvbicpIGFzIEhUTUxFbGVtZW50O1xyXG4vLyAgIGJhY2tUb0ZlZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiZmVlZC5odG1sXCI7XHJcbi8vICAgfSApIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAgIGNvbnN0IG5ld1Bvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Bvc3RcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbi8vICAgbmV3UG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgbmV3UG9zdEZvcm0gPSBgXHJcbi8vICAgICAgIDxmb3JtIGlkPVwibmV3LXBvc3QtZm9ybVwiPlxyXG4vLyAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkPlxyXG4vLyAgICAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDo8L2xhYmVsPlxyXG4vLyAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImNvbnRlbnRcIiBuYW1lPVwiY29udGVudFwiIHJvd3M9XCI0XCIgY29scz1cIjUwXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuLy8gICAgICAgICA8bGFiZWwgZm9yPVwiYXV0aG9yXCI+QXV0aG9yIE5hbWU6PC9sYWJlbD5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImF1dGhvclwiIG5hbWU9XCJhdXRob3JcIiByZXF1aXJlZD5cclxuLy8gICAgICAgICA8bGFiZWwgZm9yPVwiaW1hZ2VcIj5VcGxvYWQgSW1hZ2UgKG9wdGlvbmFsKTo8L2xhYmVsPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiaW1hZ2VcIiBuYW1lPVwiaW1hZ2VcIiBhY2NlcHQ9XCJpbWFnZS8qXCI+XHJcbi8vICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbi8vICAgICAgIDwvZm9ybT5cclxuLy8gICAgIGA7XHJcbi8vICAgICBjb25zdCBibG9nRmVlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJsb2ctZmVlZFwiKTtcclxuLy8gICAgIGlmIChibG9nRmVlZEVsZW1lbnQpIHtcclxuLy8gICAgICAgYmxvZ0ZlZWRFbGVtZW50LmlubmVySFRNTCA9IG5ld1Bvc3RGb3JtO1xyXG4vLyAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXBvc3QtZm9ybVwiKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbi8vICAgICAgIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbi8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICBjb25zdCB0aXRsZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4vLyAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlO1xyXG4vLyAgICAgICAgIGNvbnN0IGF1dGhvciA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvclwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuLy8gICAgICAgICBjb25zdCBpbWFnZUZpbGUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS5maWxlcz8uWzBdO1xyXG4vLyAgICAgICAgIGNyZWF0ZU5ld1Bvc3QodGl0bGUsIGNvbnRlbnQsIGF1dGhvciwgaW1hZ2VGaWxlKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9