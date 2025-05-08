
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

  // Search functionality for navbar
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      
      // Clear previous results
      if (searchResults) {
        searchResults.innerHTML = '';
      }
      
      // Show/hide search results container
      if (searchTerm.length > 2 && searchResults) {
        searchResults.classList.remove('hidden');
        
        // Add some dummy search results
        if (searchTerm.length > 2) {
          const pages = [
            { title: 'Home', url: 'index.html' },
            { title: 'Downloads', url: 'downloads.html' },
            { title: 'How to Setup', url: 'setup.html' },
            { title: 'FAQ', url: 'faq.html' },
            { title: 'Maps', url: 'maps.html' },
            { title: 'About', url: 'about.html' },
          ];
          
          const filteredPages = pages.filter(page => page.title.toLowerCase().includes(searchTerm));
          
          if (filteredPages.length > 0) {
            filteredPages.forEach(page => {
              const resultItem = document.createElement('a');
              resultItem.href = page.url;
              resultItem.className = 'search-result-item';
              resultItem.innerHTML = `
                <span class="search-result-title">${page.title}</span>
                <span class="search-result-arrow">→</span>
              `;
              searchResults.appendChild(resultItem);
            });
          } else {
            const noResult = document.createElement('div');
            noResult.className = 'search-no-results';
            noResult.textContent = 'No results found';
            searchResults.appendChild(noResult);
          }
        }
      } else if (searchResults) {
        searchResults.classList.add('hidden');
      }
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
      if (searchResults && searchInput && !searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.add('hidden');
      }
    });
  }

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
