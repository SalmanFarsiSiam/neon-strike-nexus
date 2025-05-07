
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
    });
  });
});
