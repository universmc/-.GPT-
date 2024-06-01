document.addEventListener('DOMContentLoaded', function() {
    fetch('intent.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('objectives-container');
        data.devOpsObjectives.forEach(obj => {
          const div = document.createElement('div');
          div.innerHTML = `<h3>${obj.title}</h3><p>${obj.description}</p>`;
          container.appendChild(div);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  
  // Show or hide the loading animation
function setLoading(isLoading) {
  const loader = document.querySelector('.loader');
  if (isLoading) {
      loader.style.visibility = 'visible';
  } else {
      loader.style.visibility = 'hidden';
  }
}

// Extended function to initialize the documentation content
function initDocumentation() {
  setLoading(true); // Show loader before fetching data
  fetch('/docs/') // Replace with your actual data source
      .then(response => response.json())
      .then(data => {
          updateSectionContent('image-training', data.imageTrainingDetails);
          updateSectionContent('metadata-generation', data.metadataGenerationDetails);
          updateSectionContent('ci-cd', data.ciCdDetails);
          setLoading(false); // Hide loader after data is fetched
      })
      .catch(error => {
          console.error('Error fetching documentation:', error);
          setLoading(false);
      });
}

document.addEventListener('DOMContentLoaded', initDocumentation);
