// Hide page initially
document.body.style.opacity = 0;

document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Logic
  const btn = document.getElementById("bgToggle");
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light-mode");
    btn.textContent = "Dunkler Hintergrund";
  }

  btn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");
    if (isLight) {
      btn.textContent = "Dunkler Hintergrund";
      localStorage.setItem("theme", "light");
    } else {
      btn.textContent = "Heller Hintergrund";
      localStorage.setItem("theme", "dark");
    }
  });

  // Wait for fonts to load before showing page
  document.fonts.ready.then(() => {
    document.body.style.opacity = 1;
    document.body.classList.add("fonts-loaded");

    // Fallback in case fonts.ready doesn't fire
    setTimeout(() => {
      document.body.style.opacity = 1;
      document.body.classList.add("fonts-loaded");
    }, 1000);
  });
});
