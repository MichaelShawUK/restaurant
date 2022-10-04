export default function menuContent() {
  const appetizers = {
    'Mozzarella sticks': '$2',
    'French fries': '$3',
    'Chicken strips': '$3',
    'Potato wedges': '$2',
    'Onion rings': '$3',
  }
  const burgers = {
    'Bacon cheeseburger': '$6',
    'Four cheese': '$5',
    'Quarter pounder': '$6',
    'Chicken burger': '$5',
    'Mushroom burger': '$7',
    'Halloumi burger': '$7',
  }
  const toppings = {
    'Bacon bits': '$1',
    'Extra cheese': '$.50',
    'Onions': '$1',
    'Lettuce': '$1',
    'Tomato': '$.50',
    'BBQ sauce': '$.50',
    'Garlic mayo': '$1',
    'Mayonnaise': '$1',
  }
  const milkshakes = {
    'Chocolate sundae': '$4',
    'Strawberry sundae': '$4',
    'Vanilla milkshake': '$3',
    'Caramel milkshake': '$3',
  }
  const drinks = {
    'Soda': '$2',
    'Orange Juice': '$3',
    'Coffee': '$4',
  }
  const menu = {'Appetizers': appetizers, 
                'Burgers': burgers,
                'Toppings': toppings,
                'Milkshakes': milkshakes,
                'Drinks': drinks};

  const div = document.createElement('div');
  const container = div.cloneNode();
  container.setAttribute('id', 'container');
  const sectionHeadings = document.createElement('h3');
  
  for (let section in menu) {

    let menuSection = div.cloneNode();
    menuSection.setAttribute('id', section.toLowerCase());
    let sectionHeading = sectionHeadings.cloneNode();
    sectionHeading.append(section);
    menuSection.append(sectionHeading);

    for (let item in menu[section]) {
      
      let itemAndPrice = div.cloneNode();
      itemAndPrice.setAttribute('class', 'menu-item');
      let items = div.cloneNode();
      items.setAttribute('class', 'item');
      items.append(item);
      let prices = div.cloneNode();
      prices.setAttribute('class', 'price');
      prices.append(menu[section][item]);
      itemAndPrice.append(items, prices);
      menuSection.append(itemAndPrice);
    }
    container.append(menuSection);
  }
  return container;
}