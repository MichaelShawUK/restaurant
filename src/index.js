import './styles.css';
import homeContent from './home.js';
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

function createPageTemplate() {
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
  switch (e.target.id) {
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