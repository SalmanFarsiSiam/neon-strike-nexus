
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
  const mapSearchInput = document.getElementById('map-search-input');
  const mapsGrid = document.getElementById('maps-grid');
  const noMapsFound = document.getElementById('no-maps-found');
  const mapCards = document.querySelectorAll('.map-card');
  
  if (mapSearchInput) {
    mapSearchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      let hasVisibleMaps = false;
      
      mapCards.forEach(card => {
        const mapName = card.getAttribute('data-map-name').toLowerCase();
        const mapCreator = card.getAttribute('data-map-creator').toLowerCase();
        
        if (mapName.includes(searchTerm) || mapCreator.includes(searchTerm) || searchTerm === '') {
          card.style.display = 'block';
          hasVisibleMaps = true;
        } else {
          card.style.display = 'none';
        }
      });
      
      // Show/hide no results message
      if (hasVisibleMaps) {
        noMapsFound.classList.add('hidden');
      } else {
        noMapsFound.classList.remove('hidden');
      }
    });
  }
});
