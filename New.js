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

// Function to handle the flip and redirection
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

      // Flip the clicked card
      const innerCard = card.querySelector(".flip-card-inner");
      if (innerCard.style.transform === "rotateY(180deg)") {
        innerCard.style.transform = ""; // Unflip if already flipped
      } else {
        innerCard.style.transform = "rotateY(180deg)";
      }
    });
  });
});

// Function to handle the flip and redirection
function handleCardClick(card, link) {
  const cardInner = card.querySelector('.flip-card-inner');
  
  // Check if the card is flipped
  if (cardInner.style.transform === 'rotateY(180deg)') {
    // If already flipped, redirect to the link
    window.location.href = link;
  } else {
    // Flip the card
    cardInner.style.transform = 'rotateY(180deg)';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach((card) => {
    card.addEventListener("click", () => {
      const innerCard = card.querySelector(".flip-card-inner");

      // If the card is flipped, redirect to the URL
      if (innerCard.style.transform === "rotateY(180deg)") {
        window.location.href = card.dataset.url; // Redirect to the link in data-url
      } else {
        // Reset all cards
        flipCards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.querySelector(".flip-card-inner").style.transform = "";
          }
        });

        // Flip the clicked card
        innerCard.style.transform = "rotateY(180deg)";
      }
    });
  });
});

    function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active'); // Toggle the visibility of the menu
}

