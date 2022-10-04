// console.log('Changing files whilst running webpack watch');

const content = document.createElement('div');
content.setAttribute('id', 'content');

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



content.append(createNav());

document.body.appendChild(content);

