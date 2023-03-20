import "./feed.css";

interface Feed {
  user: string;
  title?: string;
  content: string;
}

const feeds: Feed[] = [
  {
    user: "user1",
    title: "This is a title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio voluptate tempora adipisci dolore ullam magni enim, iusto tenetur maiores facilis eaque dolor, quos laudantium necessitatibus sit reprehenderit. Commodi, dolorum.",
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

function loadFeed(feeds: Feed[]): string {
  console.log("load fed function executed");
  let html = "";

  feeds.forEach((feed) => {
    const user = feed.user;
    const title = feed.title;
    const content = feed.content;

    html += `
        <section>
            ${title ? `<h1>${title}</h1>` : ""}
            <h5>${content}</h5>
            <h4>By ${user} </h4>
            <h6> Edit post  <button> ✎ </button>  </h6>
            <h6> Remove post  <button> 🗙 </button>  </h6>      

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
});
