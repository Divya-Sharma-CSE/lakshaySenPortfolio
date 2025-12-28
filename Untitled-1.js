const images = document.querySelectorAll('.galleryImg');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const closeBtn = document.querySelector('.lightboxClose');

// OPEN LIGHTBOX
images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    lightboxTitle.textContent = img.dataset.title;
    lightboxDesc.textContent = img.dataset.desc;
  });
});

// CLOSE BUTTON
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// CLICK OUTSIDE IMAGE TO CLOSE
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

// ESC KEY CLOSE
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});
