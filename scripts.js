
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
      mobileNav.classList.toggle('hidden');
    });
  }

  // Downloads page tab functionality
  const launcherTab = document.getElementById('launcher-tab');
  const toolsTab = document.getElementById('tools-tab');
  const launcherContent = document.getElementById('launcher-content');
  const toolsContent = document.getElementById('tools-content');

  if (launcherTab && toolsTab) {
    launcherTab.addEventListener('click', () => {
      launcherTab.classList.add('active');
      toolsTab.classList.remove('active');
      launcherContent.classList.add('active');
      toolsContent.classList.remove('active');
    });

    toolsTab.addEventListener('click', () => {
      toolsTab.classList.add('active');
      launcherTab.classList.remove('active');
      toolsContent.classList.add('active');
      launcherContent.classList.remove('active');
    });
  }

  // FAQ accordion functionality
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active class on the clicked button
      button.classList.toggle('active');
      
      // Find the next sibling which is the accordion content
      const content = button.nextElementSibling;
      
      // Toggle display of the content
      if(content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });

  // Maps page search functionality
  const mapsSearch = document.getElementById('maps-search');
  const mapCards = document.querySelectorAll('.map-card');
  const noMapsFound = document.getElementById('no-maps-found');

  if (mapsSearch) {
    mapsSearch.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      let visibleCards = 0;
      
      mapCards.forEach(card => {
        const mapName = card.getAttribute('data-map-name').toLowerCase();
        const mapAuthor = card.getAttribute('data-map-author').toLowerCase();
        
        if (mapName.includes(searchTerm) || mapAuthor.includes(searchTerm) || searchTerm === '') {
          card.classList.remove('hidden');
          visibleCards++;
        } else {
          card.classList.add('hidden');
        }
      });
      
      // Show/hide "No maps found" message
      if (visibleCards === 0 && searchTerm !== '') {
        if (noMapsFound) noMapsFound.classList.remove('hidden');
      } else {
        if (noMapsFound) noMapsFound.classList.add('hidden');
      }
    });
    
    // Add focus effect
    mapsSearch.addEventListener('focus', () => {
      const container = document.querySelector('.maps-search-container');
      if (container) container.classList.add('focus');
    });
    
    mapsSearch.addEventListener('blur', () => {
      const container = document.querySelector('.maps-search-container');
      if (container) container.classList.remove('focus');
    });
  }
});
