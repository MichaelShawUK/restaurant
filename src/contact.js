export default function contactContent() {

  const div = document.createElement('div');
  const container = div.cloneNode();
  const mapWrapper = div.cloneNode();
  const contactForm = div.cloneNode();
  container.setAttribute('class', 'contact container')
  mapWrapper.setAttribute('id', 'map');
  contactForm.setAttribute('id', 'contactInfo')

  const template = document.createElement('template');
  template.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9204.140960430974!2d-1.5816768!3d54.7793475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa17d2107d3aabd3c!2sDurham!5e0!3m2!1sen!2suk!4v1664902868004!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  const googleMap = template.content.firstChild;

  const heading = document.createElement('h1');
  const name = document.createElement('input');
  const email = document.createElement('input');
  const message = document.createElement('textarea');
  const contactBtn = document.createElement('button');

  heading.append('CONTACT US');
  name.setAttribute('type', 'text');
  name.setAttribute('placeholder', 'Name');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'E-mail');
  contactBtn.append('SUBMIT');

  contactForm.append(heading, name, email, message, contactBtn);
  mapWrapper.append(googleMap);
  container.append(mapWrapper, contactForm);

  return container;
}