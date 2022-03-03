const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    tabContents.forEach((tabContent) => tabContent.classList.remove('active'));
    tabs.forEach((tab) => tab.classList.remove('active'));

    tab.classList.add('active');
    target.classList.add('active');
  });
});

if (document.querySelector('[data-accordion]')) {
  const accordions = document.querySelectorAll('[data-accordion]');

  accordions.forEach((dropdown) => {
    const trigger = dropdown.querySelector('[data-trigger]');

    trigger.addEventListener('click', toggleAccordion);
  });

  function toggleAccordion() {
    const clickedItem = this.parentNode.parentNode.parentNode;

    accordions.forEach((item) => {
      if (clickedItem === item) {
        clickedItem.classList.toggle('active');
        return;
      }

      item.classList.remove('active');
    });
  }
}

// Navigation
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const mainNav = document.querySelector('.nav');

openNav.addEventListener('click', () => {
  mainNav.classList.add('active');
});

closeNav.addEventListener('click', () => {
  mainNav.classList.remove('active');
});
