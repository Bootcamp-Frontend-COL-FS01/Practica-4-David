import "./feed.css";

interface Feed {
  user: string;
  title: string;
  content: string;
  image?: string;
}

export const hardcodedfeeds: Feed[] = [
  {
    user: "user1",
    title: "This is a title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
    image: "../img/marek-piwnicki-d_A795LuFRM-unsplash.jpg"
  },
  {
    user: "user2",
    title: "This is another title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
  },
  {
    user: "user3",
    title: "This is a title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
  },
  {
    user: "user4",
    title: "This is a title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
  },
  {
    user: "user5",
    title: "This is a title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
  },
];



const storedFeeds = JSON.parse(localStorage.getItem("feeds") || "[]");

export const feeds: Feed[] = storedFeeds.length > 0 ? storedFeeds.concat(hardcodedfeeds) : hardcodedfeeds;




export function loadFeed(feeds: Feed[]): string {
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


document.addEventListener("DOMContentLoaded", () => {
  const feedHtml = loadFeed(feeds);
  const blogFeedElement = document.getElementById("blog-feed");

  if (blogFeedElement) {
    blogFeedElement.innerHTML = feedHtml;
  }

  // Add event listeners for edit buttons
  const editButtons = document.getElementsByClassName("edit-button");
  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", (event) => {
      const button = event.target as HTMLElement;
      const contentElement = button.parentElement!.previousElementSibling!.previousElementSibling as HTMLElement;
      contentElement.setAttribute("contenteditable", "true");
      contentElement.focus();

      // Show the save button and hide the edit button
      const saveButton = button.nextElementSibling as HTMLElement;
      saveButton.style.display = "inline";
      button.style.display = "none";
    });
  }

  // Add event listeners for save buttons
  const saveButtons = document.getElementsByClassName("save-button");
  for (let i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", (event) => {
      const button = event.target as HTMLElement;
      const contentElement = button.parentElement!.previousElementSibling!.previousElementSibling as HTMLElement;
      contentElement.setAttribute("contenteditable", "false");

      // Save the new content (replace the content in the feeds array)
      const newContent = contentElement.textContent!;
      feeds[i].content = newContent;

      // Hide the save button and show the edit button
      const editButton = button.previousElementSibling as HTMLElement;
      editButton.style.display = "inline";
      button.style.display = "none";
    });
  }


// Add event listeners for delete buttons
const deleteButtons = document.querySelectorAll("button:nth-child(3)");
for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", (event) => {
    const button = event.target as HTMLElement;
    const postElement = button.closest("section");

    // Confirm before deleting
    const confirmed = confirm("Are you sure you want to delete this post?");
    if (confirmed && postElement) {
      postElement.remove(); // Remove the post from the DOM
      feeds.splice(i, 1); // Remove the post from the feeds array
    }
  });
}






  // Hamburger menu logic
  const hamburger = document.getElementById('hamburger') as HTMLElement;
  const menu = document.getElementById('menu') as HTMLElement;
  const newPost = document.getElementById('newPost') as HTMLElement;
  const changePassword = document.getElementById('changePassword') as HTMLElement;

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



