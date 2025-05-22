document.addEventListener("DOMContentLoaded", function () {
  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
    thumbnail: true
  });
});