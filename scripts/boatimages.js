document.addEventListener("DOMContentLoaded", () => {

    const cameraImages = document.querySelectorAll(".camera-gallery img");
    const cameraLightbox = document.getElementById("camera-lightbox");
    const cameraLightboxImg = document.getElementById("camera-lightbox-img");
    const cameraClose = document.querySelector(".camera-close");

    /* OPEN LIGHTBOX */
    cameraImages.forEach(img => {
        img.addEventListener("click", () => {
            cameraLightbox.style.display = "flex";
            cameraLightboxImg.src = img.src;
        });
    });

    /* CLOSE BUTTON */
    cameraClose.addEventListener("click", () => {
        cameraLightbox.style.display = "none";
    });

    /* CLICK ANYWHERE TO CLOSE */
    cameraLightbox.addEventListener("click", (e) => {
        if (e.target !== cameraLightboxImg) {
            cameraLightbox.style.display = "none";
        }
    });

});