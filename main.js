const btn = document.querySelector('button');
const bgShare = document.querySelector('.background-share');

btn.addEventListener('click', () => {
    //bgShare.classList.toggle('hidden');
    bgShare.classList.toggle('background-share__active');

    btn.classList.toggle('card--main-description--profile__share__active');
});