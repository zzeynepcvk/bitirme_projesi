let cardsContainer = document.querySelector('.cards-container');
let scrollInterval;

function startScroll() {
  scrollInterval = setInterval(() => {
    cardsContainer.scrollLeft += 5;
  }, 20);
}

function stopScroll() {
  clearInterval(scrollInterval);
}

cardsContainer.addEventListener('mouseenter', stopScroll);
cardsContainer.addEventListener('mouseleave', startScroll);

startScroll();
