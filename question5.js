// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.
const articles = document.getElementById("articles");
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.posts.forEach((element) => {
    const post = document.createElement("div");
    const titles = document.createElement("h2");
    const bodyCopy = document.createElement("p");

    post.className = "post";
    titles.className = "titles";
    bodyCopy.className = "bodyCopy";

    titles.textContent = element.posts.title;
    bodyCopy.textContent = element.posts.body;

    articles.appendChild(post);
    post.appendChild(titles);
    titles.appendChild(bodyCopy);
  });
}
getPosts();
