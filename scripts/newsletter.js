document.addEventListener('DOMContentLoaded', () => {
  const reopenImage = document.querySelector('.js-reopen-img');
  const modal = document.querySelector('.js-image-modal');
  const modalImage = document.querySelector('.js-modal-image');
  const closeBtn = document.querySelector('.js-close-btn');

  reopenImage.addEventListener('click', () => {
    modal.classList.add('active');
    modalImage.setAttribute('src', reopenImage.getAttribute('src'));
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
