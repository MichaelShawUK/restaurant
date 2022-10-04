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

function addContent(contentType) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.append(createNav(['HOME', 'MENU', 'CONTACT'], true));
  content.appendChild(contentType());
  document.body.appendChild(content);
}

addContent(menuContent);

function createPageTemplate() {
  document.body.append(createNav(['HOME', 'MENU', 'CONTACT'], true));
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.append(content);
}


