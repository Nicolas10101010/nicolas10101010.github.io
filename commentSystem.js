document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.getElementById("commentForm");
  if (!commentForm) return;

  const commentsContainer = document.getElementById("commentsContainer");
  const commentCount = document.getElementById("commentCount");
  const storageKey = `comments_${window.location.pathname}`;

  const savedComments = JSON.parse(localStorage.getItem(storageKey) || "[]");

  function displayComments() {
    commentsContainer.innerHTML = "";
    commentCount.textContent = savedComments.length;

    savedComments.forEach((comment) => {
      const commentEl = document.createElement("div");
      commentEl.className = "comment";
      commentEl.innerHTML = `
          <div class="comment-header">
            <span class="comment-author">${comment.name}</span>
            <span class="comment-date">${comment.date}</span>
          </div>
          <div class="comment-text">${comment.text}</div>
        `;
      commentsContainer.prepend(commentEl);
    });
  }

  displayComments();

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const commentText = document.getElementById("commentText").value;
    if (!commentText.trim()) return;

    const newComment = {
      name: "Anonym",
      text: commentText,
      date: new Date().toLocaleDateString("de-CH", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    savedComments.push(newComment);
    localStorage.setItem(storageKey, JSON.stringify(savedComments));

    displayComments();
    commentForm.reset();
  });
});
