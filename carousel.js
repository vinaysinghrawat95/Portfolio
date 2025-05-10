const carousel = () => {
    const previousBtn = document.querySelector('.previous');
    const nextBtn = document.querySelector('.next');
    const eduCard = document.querySelectorAll('.edu')

    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        eduCard[currentIndex].classList.remove('show-card');
        currentIndex = (currentIndex + 1) % eduCard.length;
        eduCard[currentIndex].classList.add('show-card');
    })

    previousBtn.addEventListener('click', () => {
        eduCard[currentIndex].classList.remove('show-card');
        currentIndex = (currentIndex - 1 + eduCard.length) % eduCard.length;
        eduCard[currentIndex].classList.add('show-card');
    })
};

export default carousel;