import './styles.css';

function createNav(navLinks = ['HOME', 'MENU', 'CONTACT']) {

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  for (let link of navLinks) {
    let navLink = li.cloneNode();
    navLink.append(link);
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
  container.setAttribute('class', 'container');
  empty.setAttribute('class', 'empty');
  homeInfo.setAttribute('id', 'home-info');

  const heading = document.createElement('h1');
  const homeText = document.createElement('p');
  const menuBtn = document.createElement('button');
  heading.append('Buonissimo');
  homeText.append(`Vestibulum maximus metus sed neque faucibus interdum. 
                   Nunc quis sodales sem.`);
  menuBtn.append('MENU');

  homeInfo.append(heading, homeText, menuBtn);
  container.append(empty, homeInfo);
  return container;
}

function addContent(contentType) {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.append(createNav());
  content.appendChild(contentType());
  document.body.appendChild(content);
}

addContent(homeContent);