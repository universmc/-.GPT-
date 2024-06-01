fetch('hero-ban.json')
  .then(response => response.json())
  .then(imagesData => {
    const slidesContainer = document.getElementById('slides');
    
    imagesData.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.urlImage;
      imgElement.alt = image.title;
      imgElement.classList.add('hero-ban-img');
      
      slidesContainer.appendChild(imgElement);
    });

    let currentSlideIndex = 0;
    const totalSlides = imagesData.length;

    function updateCarousel(newIndex) {
      const slidesWidth = slidesContainer.clientWidth;
      const newTransformValue = -slidesWidth * newIndex;
      slidesContainer.style.transform = `translateX(${newTransformValue}px)`;
    }

    document.getElementById('goNextSlide').addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      updateCarousel(currentSlideIndex);
    });

    document.getElementById('goPrevSlide').addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
      updateCarousel(currentSlideIndex);
    });

    // Afficher initialement la première image
    updateCarousel(currentSlideIndex);
  })
  .catch(error => {
    console.error('Error fetching hero-ban.json:', error);
  });
