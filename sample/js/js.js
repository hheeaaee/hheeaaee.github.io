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

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => alert("계좌번호가 복사되었습니다!"))
    .catch(() => alert("복사에 실패했어요 😢"));
}

function copyWeddingUrl() {
  const url = window.location.href;
  navigator.clipboard.writeText(url)
    .then(() => alert("청첩장 주소가 복사되었습니다!"))
    .catch(() => alert("복사에 실패했습니다 😢"));
}

function copyToAdress(text) {
  navigator.clipboard.writeText(text)
    .then(() => alert("주소가 복사되었습니다!"))
    .catch(() => alert("복사에 실패했습니다 😢"));
}

function shareKakao() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '성훈 & 희애, 결혼 소식을 전합니다 💍',
      description: '2025.06.28 SAT',
      imageUrl: 'https://hheeaaee.github.io/sunghunheeae/image/kakaothumb.jpg', // 공유 이미지
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href
      }
    },
    buttons: [
      {
        title: '알림장 보기',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href
        }
      }
    ]
  });
}





window.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bgm");
  const icon = document.getElementById("sound-icon");

  audio.volume = 1;
  audio.playbackRate = 0.8;
  audio.play().catch(() => {
    console.log("자동재생 제한: 사용자의 인터랙션 필요");
  });

  document.getElementById("music-toggle").addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      icon.src = "image/sound-on.png";
    } else {
      audio.pause();
      icon.src = "image/sound-off.png";
    }
  });
});
