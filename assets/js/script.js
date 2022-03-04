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

// party filter
if (document.querySelector('.party-filter')) {
  const filters = document.querySelectorAll('[data-party]');
  const filterDisplayed = document.querySelector('.party-filter__text');

  filters.forEach((filter) => {
    filter.addEventListener('click', function () {
      const currentFilter = this;

      filters.forEach((filter) => {
        if (filter !== currentFilter) {
          filter.classList.remove('active');
          return;
        }

        filter.classList.add('active');
        const currentFilterText = filter.dataset.party;
        filterDisplayed.textContent = currentFilterText;
      });
    });
  });
}

if (document.querySelector('.index-tabs')) {
  const tabContents = document.querySelectorAll('[data-index-tab-content]');
  const tabControls = document.querySelectorAll('[data-index-tab-target]');

  tabControls.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.indexTabTarget);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('shown');
      });

      target.classList.add('shown');

      tabControls.forEach((tab) => {
        tab.classList.remove('hidden');
      });

      tab.classList.add('hidden');
    });
  });
}

// Show search
const openSearchBtn = document.querySelector('.header__search button');
const searchBox = document.querySelector('.header__search__box');

openSearchBtn.addEventListener('click', () => {
  searchBox.classList.toggle('active');
  console.log('ran');
});

// Open language menu
const langBtn = document.querySelector('.header__lang button');
const langOptions = document.querySelector('.header__lang');

langBtn.addEventListener('click', () => {
  langOptions.classList.toggle('active');
  console.log('ran');
});

// Video Gallery
if (document.querySelector('[data-video-src]')) {
  const videoSources = document.querySelectorAll('[data-video-src]');
  const videoGallery = document.querySelector('[data-video-gallery]');
  const videoTag = videoGallery.querySelector('[data-video]');

  videoSources.forEach((videoSource) => {
    videoSource.addEventListener('click', () => {
      videoTag.src = `${videoSource.dataset.videoSrc}`;
    });
  });
}
