export default function homeContent() {
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