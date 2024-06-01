/* script src/js/hero-ban.js */


/* arrat slide lien vers les images multildimentionnelle */
/*  repertoire src data/img/hero-ban */
/* dev fonctioon FOREACH pour ajouter des element dans le arraw slides en fonction du repertoire data/imag/hero-ban *.jpeg ou hero-ban.json */
/* step1 */
/* ADD eventListener */
// Script pour charger et afficher les images du carrousel à partir de hero-ban.json

const carouselContainer = document.getElementById('carousel');
let slidesData = [];

// Fonction pour charger les données du carrousel à partir de hero-ban.json
function loadCarouselData() {
  fetch('data/img/hero-ban/hero-ban.json')
    .then(response => response.json())
    .then(data => {
      slidesData = data;
      updateCarousel(); // Mettre à jour le carrousel avec les nouvelles données
    })
    .catch(error => console.error('Erreur lors du chargement des données du carrousel:', error));
}
/* declaratop des diférentes varable */

let goToPrevSlide = document.getElementById("goPrevSlide");
goPrevSlide.addEventListener("click", () => {
  console.log("click OK button slide GoPrev gauche ou left")
});

let goNextSlide = document.getElementById("goNextSlide");
goNextSlide.addEventListener("click", () => {
 console.log("click OK button slide droit")
});


// Fonction pour mettre à jour le carrousel avec les données chargées
function updateCarousel() {
  if (slidesData.length === 0) {
    console.error('Aucune donnée de diapositive disponible.');
    return;
  }

  const currentSlideData = slidesData[currentImageIndex];
  const heroBanImg = carouselContainer.querySelector('.hero-ban-img');
  
  heroBanImg.style.backgroundImage = `url('${currentSlideData.src}')`;
  // Mettre à jour le titre et la description si nécessaire
  // par exemple: heroBanImg.querySelector('.title').innerText = currentSlideData.title;
}

// Fonctions pour naviguer dans le carrousel (restent inchangées)
// ...

// Initialisation du carrousel
loadCarouselData();

/*  STEP 3 click SLIDERS UPDATE  */ 

let currentIndex = 0; // Index de l'image actuelle

// Fonction pour aller à la slide suivante
function goToNextSlide() {
    if (currentIndex === numberOfSlides - 1) {
        currentIndex = 0; // Revenir au début si c'est la dernière slide
    } else {
        currentIndex++;
    }
    updateCarousel();
}

// Fonction pour aller à la slide précédente
function goToPrevSlide() {
  if (currentIndex === 0) {
      currentIndex = numberOfSlides - 1; // Passer à la dernière slide si c'est la première
  } else {
      currentIndex--;
  }
  updateCarousel();
}

/*  STEP 3 UPDATECarrsel   */ 


// Fonction pour mettre à jour le carrousel
function updateCarousel() {
  const bannerImg = document.querySelector('.hero-ban-img');
  heroBanImg.src = './data/img/hero-ban/' + slides[currentIndex].image;
  const taglineDiv = document.querySelector('.arrow-content p');
  taglineDiv.innerHTML = slides[currentIndex].tagLine;
}

/*  STEP 3 Condition   */ 
// condition de bord:

// Fonction pour aller à last slide current index =1  + dev api/json f(data/img/hero-ban/)
function goToNextSlide() {
  if (currentIndex === numberOfSlides - 1) {
      currentIndex = 0; // Revenir au début si c'est la dernière slide
  } else {
      currentIndex++;
  }
  updateCarousel();
}


// Fonction pour aller à la fist slide current index = 0 + dev api/json f(data/img/hero-ban/)
function goToPrevSlide() {
  if (currentIndex === 0) {
      currentIndex = numberOfSlides - 1; // Passer à la dernière slide si c'est la première
  } else {
      currentIndex--;
  }
  updateCarousel()};
  goPrevSlide.addEventListener("click", goToPrevSlide);
  goNextSlide.addEventListener("click", goToNextSlide);