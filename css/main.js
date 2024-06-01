// Function to update section content
function updateSectionContent(sectionId, content) {
    const section = document.getElementById(sectionId);
    section.querySelector('p').textContent = content;
}

// Function to initialize the documentation content
function initDocumentation() {
    fetch('/docs/') // Replace with your actual data source
        .then(response => response.json())
        .then(data => {
            updateSectionContent('image-training', data.imageTrainingDetails);
            updateSectionContent('metadata-generation', data.metadataGenerationDetails);
            updateSectionContent('ci-cd', data.ciCdDetails);
        })
        .catch(error => console.error('Error fetching documentation:', error));
}

// Initialize the documentation when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDocumentation);
