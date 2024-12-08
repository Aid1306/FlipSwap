document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function updateCarousel(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel(index);
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateCarousel(currentIndex);
  }, 5000);
});


document.addEventListener("DOMContentLoaded", () => {
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Reset all cards
      flipCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.querySelector(".flip-card-inner").style.transform = "";
        }
      });

      
      const innerCard = card.querySelector(".flip-card-inner");
      if (innerCard.style.transform === "rotateY(180deg)") {
        innerCard.style.transform = ""; 
      } else {
        innerCard.style.transform = "rotateY(180deg)";
      }
    });
  });
});

 
function handleCardClick(card, link) {
  const cardInner = card.querySelector('.flip-card-inner');
  
  
  if (cardInner.style.transform === 'rotateY(180deg)') {
    
    window.location.href = link;
  } else {
    
    cardInner.style.transform = 'rotateY(180deg)';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach((card) => {
    card.addEventListener("click", () => {
      const innerCard = card.querySelector(".flip-card-inner");

      
      if (innerCard.style.transform === "rotateY(180deg)") {
        window.location.href = card.dataset.url;  
      } else {
        
        flipCards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.querySelector(".flip-card-inner").style.transform = "";
          }
        });

        
        innerCard.style.transform = "rotateY(180deg)";
      }
    });
  });
});

    function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active'); 
}

