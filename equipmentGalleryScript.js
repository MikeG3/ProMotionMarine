document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".equipment-gallery img");
  const lightbox = document.getElementById("equipment-lightbox");
  const lightboxImg = document.getElementById("equipment-lightbox-img");
  const closeBtn = document.querySelector(".equipment-close");

  //Arrows
  const gallery = document.querySelector(".equipment-gallery");
  const btnLeft = document.querySelector(".gallery-btn.left");
  const btnRight = document.querySelector(".gallery-btn.right");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });

  //Arrow functionality
  btnLeft.addEventListener("click", () => {
    gallery.scrollBy({ left: -300, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    gallery.scrollBy({ left: 300, behavior: "smooth" });
  });

});