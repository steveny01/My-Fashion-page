// Lightbox logic

//   const modalImage = document.getElementById("modalImage");
//   const galleryImgs = document.querySelectorAll(".gallery-img");

//   galleryImgs.forEach(img => {
//     img.addEventListener("click", () => {
//       modalImage.src = img.src;
//     });
//   });


  // js/gallery.js
document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery-img");
  const modalImage = document.getElementById("modalImage");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      modalImage.setAttribute("src", src);
    });
  });
});
