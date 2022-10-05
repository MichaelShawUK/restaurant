import './styles.css';
import contactContent from './contact.js';
import menuContent from './menu.js';

function createNav(navLinks, setId = false) {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  for (let link of navLinks) {
    let navLink = li.cloneNode();
    navLink.append(link);
    if (setId) navLink.setAttribute('id', link.toLowerCase());
    ul.append(navLink);
  }
  nav.append(ul);
  return nav;
}

function homeContent() {
  const div = document.createElement('div');
  const container = div.cloneNode();
  const empty = div.cloneNode();
  const homeInfo = div.cloneNode();
  container.setAttribute('class', 'home container');
  empty.setAttribute('class', 'empty');
  homeInfo.setAttribute('id', 'home-info');

  const heading = document.createElement('h1');
  const homeText = document.createElement('p');
  const menuBtn = document.createElement('button');
  heading.append('Buonissimo');
  homeText.append(`Vestibulum maximus metus sed neque faucibus interdum. 
                   Nunc quis sodales sem.`);
  menuBtn.append('MENU');
  menuBtn.setAttribute('id', 'menu-btn');
  menuBtn.addEventListener('click', addContent)

  homeInfo.append(heading, homeText, menuBtn);
  container.append(empty, homeInfo);
  return container;
}

function createPageTemplate() {
  const title = document.querySelector('title');
  title.textContent = 'Restaurant';
  document.body.append(createNav(['HOME', 'MENU', 'CONTACT'], true));
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.appendChild(homeContent());
  document.body.append(content);
  
  const links = document.querySelectorAll('nav li');
  for (let link of links) {
    link.addEventListener('click', addContent)
  }
} 

function addContent(e) {
  document.getElementById('content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  switch (e.target.innerText.toLowerCase()) {
    case 'home':
      content.appendChild(homeContent());
      break;
    case 'menu':
      content.appendChild(menuContent());
      break;
    case 'contact':
      content.appendChild(contactContent());
      break;
  }
}

createPageTemplate();

