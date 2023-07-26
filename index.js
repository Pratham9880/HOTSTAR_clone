let movies = [
  {
    name: "Falcon and the Winter Soldier",
    des:
      "Avengers Endgame Sam Wilson and Bucky Barnes team up in a global adventure",
    Image: "images/slider 2.PNG"
  },
  {
    name: "Loki",
    des:
      "Premise. After stealing the Tesseract during the events of Avengers: Endgame (2019), an alternate version of Loki is brought to the mysterious Time Variance Authority (TVA)",
    Image: "images/slider 1.PNG"
  },
  {
    name: "Wanda Vision",
    des:
      "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
    Image: "images/slider 3.PNG"
  },
  {
    name: "Raya and the last dragon",
    des:
      "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
    Image: "images/slider 4.PNG"
  },
  {
    name: "LuCa",
    des:
      "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
    Image: "images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0; // track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  // create the DOM elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attach all elements
  imgElement.src = movies[slideIndex].Image;
  h1.textContent = movies[slideIndex].name;
  p.textContent = movies[slideIndex].des;
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  slide.appendChild(content);
  carousel.appendChild(slide);

  // set elements' class names
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }

  slideIndex++;
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// NOW VIDEO CARD ANIMATIONS

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// CARD SLIDERS
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  // Fix the variable name here, from items to item
  let containerDimensions = item.getBoundingClientRect(); // Fix typo in getBoundingClientRect()
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200; // Correct the scrolling amount here
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200; // Correct the scrolling amount here
  });
});
