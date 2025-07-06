document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("likeBtn");
  if (!likeBtn) return;

  const article = document.querySelector(".article-detail");
  const genre = article.dataset.genre;
  const storageKey = `liked_${genre}`;

  // Funktion zum Abrufen des aktuellen Like-Status
  const getLikeStatus = () => localStorage.getItem(storageKey) === "true";

  // Initialisiere den Button
  updateLikeButton(likeBtn, getLikeStatus());

  likeBtn.addEventListener("click", () => {
    const newState = !getLikeStatus(); // Hole den aktuellen Status
    localStorage.setItem(storageKey, newState);
    updateLikeButton(likeBtn, newState);
    updateLikedGenres(genre, newState);
  });
});

function updateLikeButton(btn, isLiked) {
  const heartIcon = btn.querySelector(".heart-icon");
  const likeText = btn.querySelector(".like-text");

  if (isLiked) {
    btn.classList.add("liked");
    heartIcon.textContent = "❤️";
    likeText.textContent = " Geliked";
  } else {
    btn.classList.remove("liked");
    heartIcon.textContent = "🤍";
    likeText.textContent = " Like";
  }
}

function updateLikedGenres(genre, isLiked) {
  const likedGenres = JSON.parse(localStorage.getItem("likedGenres") || "[]");
  const index = likedGenres.indexOf(genre);

  if (isLiked && index === -1) {
    likedGenres.push(genre);
  } else if (!isLiked && index !== -1) {
    likedGenres.splice(index, 1);
  }

  localStorage.setItem("likedGenres", JSON.stringify(likedGenres));
}
