document.addEventListener("DOMContentLoaded", function () {
  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
    thumbnail: true
  });
});

function playVideo() {
  const videoBox = document.getElementById('videoBox');
  videoBox.innerHTML = `
    <iframe 
      width="100%" height="225" 
      src="https://www.youtube.com/embed/kLiQ3RPdDtE?autoplay=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>`;
}