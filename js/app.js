/* jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", () => {
  'use strict';
  buildPortfolio(items);
});

const portfolio = document.getElementById('portfolio-grid');
const modalContainer = document.querySelector('.modal-container');
const html = './images/html5-logo.svg';
const css = './images/css3-logo.svg';
const js = './images/js-logo.svg';
const sass = './images/sass-logo.svg';
const svg = './images/svg-logo.svg';
const react = './images/react-logo.svg';

class PortfolioItem {
  constructor(background, title, project, description, skills, live, repo) {
    this.background = background;
    this.title = title;
    this.project = project;
    this.description = description;
    this.skills = skills;
    this.live = live;
    this.repo = repo;
  }
}

const items = [
  new PortfolioItem('./images/registration-form.jpg', 'Registration Form', 'Techdegree Project 3', 'An online registration form, using a variety of HTML form elements.', [html, css], './projects/form/index.html', 'https://github.com/brian-jensen/techdegree-project-3'),
  new PortfolioItem('./images/photo-gallery.jpg', 'Photo Gallery', 'Techdegree Project 4', 'An interactive, searchable, static photo gallery. Besides the core web technologies listed below, it also utilizes: jQuery and fancybox.js', [html, css, js], './projects/gallery/index.html', 'https://github.com/brian-jensen/techdegree-project-4'),
  new PortfolioItem('./images/style-guide.jpg', 'Web Style Guide', 'Techdegree Project 5', 'A fully responsive grid framework built with Sass and flexbox.', [html, css, sass], './projects/framework/index.html', 'https://github.com/brian-jensen/techdegree-project-5'),
  new PortfolioItem('./images/video-player.jpg', 'Interactive Transcript', 'Techdegree Project 6', 'An HTML5 video player with an interactive audio transcript. Besides the core web technologies listed below, it also utilizes: jQuery and mediaelement.js', [html, css, js, sass], './projects/video/index.html', 'https://github.com/brian-jensen/techdegree-project-6'),
  new PortfolioItem('./images/game-show.jpg', 'Game Show App', 'Techdegree Project 7', 'A random phrase guessing game. Showcasing HTML DOM manipulation.', [html, css, js, sass], './projects/gameshow/index.html', 'https://github.com/brian-jensen/techdegree-project-7'),
  new PortfolioItem('./images/svg-animations.jpg', 'SVG Animations', 'Techdegree Project 8', 'A pet agency mockup page, featuring SVG animations.', [html, css, svg], './projects/animations/index.html', 'https://github.com/brian-jensen/techdegree-project-8'),
  new PortfolioItem('./images/web-app.jpg', 'Web App Dashboard', 'Techdegree Project 9', 'A Web App Dashboard mockup. Showing site traffic and social media statistics. Besides the core web technologies listed below, it also utilizes: AJAX, JSON, localStorage, and chart.js', [html, css, js, sass], './projects/dashboard/index.html', 'https://github.com/brian-jensen/techdegree-project-9'),
  new PortfolioItem('./images/employee-directory.jpg', 'API Employee Directory', 'Techdegree Project 10', 'A searchable employee information mockup, with additional employee information via a modal popup. Besides the core web technologies listed below, it also utilizes: AJAX, JSON and the randomuser.me API.', [html, css, js, sass, svg], './projects/directory/index.html', 'https://github.com/brian-jensen/techdegree-project-10'),
  new PortfolioItem('./images/react-flickr.jpg', 'React Flickr Gallery', 'Techdegree Project 11', 'An interactive, searchable, dynamic photo gallery built with React and the flickr API.', [html, css, js, sass, svg, react], '', 'https://github.com/brian-jensen/techdegree-project-11')
];

function buildPortfolio(item) {
  for (const index in item) {
    if (item.hasOwnProperty(index)) {
      const image = item[index].background;
      const title = item[index].title;
      const project = item[index].project;
      portfolio.innerHTML += `
          <div class="item item-${index}" onclick="void(0)">
          <div class="overlay">
            <p class="project">${project}</p>
            <H3>${title}</H3>
            <button class="item-${index}-btn">Learn More!</button>
          </div>
        </div>
      `;
      document.querySelector(`.item-${index}`).style.backgroundImage = `url('${image}')`;
    } else {
      throw new Error("A property has been found that is not an enumerable member of the object");
    }
  }
  const buttons = portfolio.querySelectorAll('button'); 
  buttons.forEach((button, index) => {
    button.onclick = () => {
      buildModal(items[index], index);
    };
  });
}

function buildModal(item, index) {
  const title = item.title;
  const project = item.project;
  const description = item.description;
  const skills = item.skills;
  const live = item.live;
  const repo = item.repo;

  modalContainer.innerHTML = `
    <div class="item-container">
      <p class="project">${project}</p>
      <H3>${title}</H3>
      <div class="description-container">
        <p class="description">${description}</p>
      </div>
      <div class="project-links">
        <a class="live-${index}" href="${live}" target="_blank">
            <svg class="home-icon" viewBox="0 0 511.999 511.999">
            <path d="M511.864,221.487c-0.921-11.988-6.455-22.896-15.581-30.716l-44.286-37.96V44.944c0-8.284-6.716-14.999-14.999-14.999 
            h-59.998c-8.284,0-14.799,6.716-14.799,14.999v30.728l-75.911-64.695c-16.97-14.539-41.603-14.537-58.519-0.043L15.728,190.769 
            c-18.753,16.068-21.186,44.423-4.866,63.473c12.439,14.465,32.364,19.077,49.35,13.107v229.584 
            c0,8.284,6.516,14.999,14.799,14.999h361.986c8.284,0,14.999-6.716,14.999-14.999V267.352c17.534,6.2,37.039,1.004,49.167-13.13 
            C508.983,245.094,512.784,233.468,511.864,221.487z M391.999,59.943h30.199v67.154l-30.199-25.713V59.943z M317.202,481.934 
            H195.007V361.738h122.195V481.934z M422.198,481.934h-75.197V346.939c0-8.284-6.716-14.999-14.999-14.999H180.007 
            c-8.284,0-14.799,6.716-14.799,14.999v134.995H90.011V245.775l166.943-141.613l165.245,141.473V481.934z M478.389,234.694 
            c-5.318,6.198-14.772,7.107-21.158,1.631L266.765,73.061c-5.595-4.797-13.845-4.817-19.464-0.05 
            C243.242,76.453,55.58,235.643,54.786,236.317c-6.282,5.375-15.782,4.642-21.161-1.615c-5.385-6.285-4.657-15.774,1.569-21.11 
            L247.238,33.756c5.66-4.848,13.874-4.849,19.53-0.002l209.994,179.795C483.04,218.929,483.767,228.419,478.389,234.694z" />
            <path d="M302.002,179.938h-91.996c-8.284,0-14.799,6.716-14.799,14.999v89.996c0,8.284,6.516,14.999,14.799,14.999h91.996 
            c8.284,0,14.999-6.716,14.999-14.999v-89.996C317.002,186.653,310.286,179.938,302.002,179.938z M287.203,269.935h-62.198v-59.998 
            h62.198V269.935z" />
            <circle cx="271.999" cy="406.934" r="14.999" />
          </svg>
          <p>View Page</p>
        </a>
        <a class="repo" href="${repo}" target="_blank">
          <svg class="github" viewBox="0 0 1024 998.8">
            <path d="M512,0C229.2,0,0,229.2,0,512c0,226.2,146.7,418.1,350.2,485.8c25.6,4.7,34.9-11.1,34.9-24.6c0-12.2-0.5-52.6-0.7-95.3
              c-142.4,30.9-172.5-60.4-172.5-60.4c-23.3-59.1-56.8-74.9-56.8-74.9c-46.5-31.8,3.5-31.1,3.5-31.1c51.4,3.6,78.5,52.8,78.5,52.8
              c45.7,78.2,119.9,55.6,149,42.5c4.7-33,17.9-55.6,32.5-68.4c-113.7-12.9-233.2-56.9-233.2-253.1c0-55.9,20-101.6,52.7-137.4
              c-5.2-13-22.8-65.1,5.1-135.6c0,0,42.9-13.8,140.8,52.5c40.8-11.4,84.6-17,128.1-17.2c43.5,0.2,87.3,5.9,128.2,17.3
              c97.7-66.3,140.7-52.5,140.7-52.5c28,70.5,10.4,122.6,5.1,135.5c32.8,35.8,52.6,81.5,52.6,137.4c0,196.7-119.8,240-233.8,252.7
              c18.4,15.9,34.8,47,34.8,94.8c0,68.4-0.7,123.6-0.7,140.5c0,13.6,9.3,29.6,35.2,24.6C877.4,930,1024,738.1,1024,512
              C1024,229.2,794.8,0,512,0z"/>
          </svg>
          <p>View Repo</p>
        </a>
      </div>
      <p><sub>Core Web Technologies Used<sub></p>
      <ul class="skills"></ul>
      <span class="svg-close-icon">
        <svg class="close-icon" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="25"/>
          <polyline stroke-width="2" points="16,34 25,25 34,16"/>
          <polyline stroke-width="2" points="16,16 25,25 34,34"/>
        </svg>
      </span>
      <span class="svg-left-arrow">
        <svg class="left-arrow" viewBox="0 0 54 54">
          <path d="M27,1L27,1c14.359,0,26,11.641,26,26v0c0,14.359-11.641,26-26,26h0C12.641,53,1,41.359,1,27v0
            C1,12.641,12.641,1,27,1z"/>
          <path d="M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2
            C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z"/>
          <path class="inner-arrow" d="M31.706,40c-0.256,0-0.512-0.098-0.707-0.293L19.501,28.209c-0.667-0.667-0.667-1.751,0-2.418
            l11.498-11.498c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L21.12,27l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414
            C32.218,39.902,31.962,40,31.706,40z"/>
        </svg>
      </span>
      <span class="svg-right-arrow">
        <svg class="right-arrow" viewBox="0 0 54 54">
          <path d="M27,53L27,53C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0c14.359,0,26,11.641,26,26v0
            C53,41.359,41.359,53,27,53z"/>
          <path d="M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2
            C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z"/>
          <path class="inner-arrow" d="M22.294,40c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L32.88,27
            L21.587,15.707c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l11.498,11.498c0.667,0.667,0.667,1.751,0,2.418
            L23.001,39.707C22.806,39.902,22.55,40,22.294,40z"/>
        </svg>
      </span>
    </div>
  `;
  const itemContainer = document.querySelector('.item-container');
  const leftArrowSpan = itemContainer.querySelector('.svg-left-arrow');
  const rightArrowSpan = itemContainer.querySelector('.svg-right-arrow');
  const skillsUl = itemContainer.querySelector('.skills');
 
  skills.forEach((skill) => {
    let listItem = document.createElement("LI");
    let alt = skill.slice(9).replace(/\.[^/.]+$/, "");
    skillsUl.appendChild(listItem);
    skillsUl.lastChild.innerHTML = `<img class="${alt}" title="${alt}" src="${skill}" alt="${alt}">`;
  });

  modalContainer.style.display = 'block';
  itemContainer.style.display = 'block';

  if (index >= 1 && index <= items.length) {
    leftArrowSpan.classList.remove('disabled');
  } else {
    leftArrowSpan.classList.add('disabled');
  }

  if (index + 1 === items.length) {
    rightArrowSpan.classList.add('disabled');
  } else {
    rightArrowSpan.classList.remove('disabled');
  }

  itemContainer.addEventListener('click', (e) => {
    let clicked = e.target.parentElement.getAttribute('class');
    let svgParent = e.target.parentElement.parentElement.getAttribute('class');
    if (clicked === 'close-icon') {
      modalContainer.style.display = 'none';
      itemContainer.style.display = 'none';
    } else if (clicked === 'left-arrow' && svgParent !== 'svg-left-arrow disabled') {
      buildModal(items[index - 1], index - 1);
    } else if (clicked === 'right-arrow' && svgParent !== 'svg-right-arrow disabled') {
      buildModal(items[index + 1], index + 1);
    } else {
      return;
    }
  });
}

