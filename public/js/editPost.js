async function updateBlogPost(event) {
  event.preventDefault();
  const blog_title = document.getElementById("blog-title").value.trim();
  const description = document.getElementById("blog-description").value.trim();
  const id = document.getElementById("blog_id").value;

  if (blog_title && description) {
    const response = await fetch(`/api/blog/${id}`, {
      method: "PUT",
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

document.querySelector(".edit-blog-form").addEventListener("submit", (e) => {
  updateBlogPost(e);
});

async function deleteBlog(event) {
  event.preventDefault;

  const id = document.getElementById("blog_id").value;
  const response = await fetch(`/api/blog/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.getElementById("delete-btn").addEventListener("click", (e) => {
  deleteBlog(e);
});
