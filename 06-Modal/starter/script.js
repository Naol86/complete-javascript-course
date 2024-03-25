'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const showModel = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

console.log(showModel);
for (let i = 0; i < 3; i++)
  showModel[i].addEventListener('click', e => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const closeDisplay = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closeModal.addEventListener('click', closeDisplay);
overlay.addEventListener('click', closeDisplay);

document.addEventListener('keydown', e => {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) closeDisplay();
});
