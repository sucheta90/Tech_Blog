async function blogPostSubmission(event) {
  event.preventDefault();
  const blog_title = document.getElementById("blog-title").value.trim();
  const description = document.getElementById("blog-description").value.trim();

  if (blog_title && description) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ blog_title, description }),
      headers: { "Content-type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".blog-post-form").addEventListener("submit", (e) => {
  blogPostSubmission(e);
});
