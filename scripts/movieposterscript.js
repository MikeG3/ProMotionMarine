const posters = document.querySelectorAll(".poster");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

posters.forEach(poster => {
  poster.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = poster.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});