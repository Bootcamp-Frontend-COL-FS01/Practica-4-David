import { Feed } from "../models/userinterface";
import { loadFeed } from "../feed/feed";
import { feeds } from "../feed/feed";
import "./newpost.css"

function createNewPost(title: string, content: string, author: string, imageFile?: File) {
    const newPost: Feed = {
        user: author,
        title: title,
        content: content,
      };
      if (imageFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target instanceof FileReader) {
            newPost.image = event.target.result as string;
            feeds.unshift(newPost);
            const feedHtml = loadFeed(feeds);
            const blogFeedElement = document.getElementById("blog-feed");
            if (blogFeedElement) {
              blogFeedElement.innerHTML = feedHtml;
            }
          }
        };
        reader.readAsDataURL(imageFile);
      } else {
        feeds.unshift(newPost);
        const feedHtml = loadFeed(feeds);
        const blogFeedElement = document.getElementById("blog-feed");
        if (blogFeedElement) {
          blogFeedElement.innerHTML = feedHtml;
        }
      }
      
    
      // Store the updated feeds array in the localStorage
      localStorage.setItem("feeds", JSON.stringify(feeds));
    
  }
  
///////

  document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.getElementById("new-post-form") as HTMLFormElement;
      
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = (document.getElementById("title") as HTMLInputElement).value;
      const content = (document.getElementById("content") as HTMLTextAreaElement).value;
      const author = (document.getElementById("author") as HTMLInputElement).value;
      const imageFile = (document.getElementById("image") as HTMLInputElement).files?.[0];
      createNewPost(title, content, author, imageFile);
      alert('Post submitted'); 

    });
  });
  
  const backToFeedButton = document.getElementById('back-to-feed-button') as HTMLElement;
  backToFeedButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "feed.html";

  } ) 

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
  