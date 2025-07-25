function createMenu() {
    const content = document.getElementById('content');
    
    // Create menu container
    const menuPage = document.createElement('div');
    menuPage.className = 'menu-page';
    
    // Create title
    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    menuPage.appendChild(title);
    
    // Create appetizers section
    const appetizersSection = document.createElement('div');
    appetizersSection.className = 'menu-section';
    
    const appetizersTitle = document.createElement('h2');
    appetizersTitle.textContent = 'Antipasti';
    appetizersSection.appendChild(appetizersTitle);
    
    const appetizersList = [
        { name: 'Bruschetta Classica', price: '$12', description: 'Toasted bread with fresh tomatoes, basil, and garlic' },
        { name: 'Antipasto Misto', price: '$18', description: 'Selection of cured meats, cheeses, and marinated vegetables' },
        { name: 'Calamari Fritti', price: '$15', description: 'Crispy fried squid with spicy marinara sauce' }
    ];
    
    appetizersList.forEach(item => {
        const menuItem = createMenuItem(item);
        appetizersSection.appendChild(menuItem);
    });
    
    menuPage.appendChild(appetizersSection);
    
    // Create main courses section
    const mainSection = document.createElement('div');
    mainSection.className = 'menu-section';
    
    const mainTitle = document.createElement('h2');
    mainTitle.textContent = 'Primi & Secondi';
    mainSection.appendChild(mainTitle);
    
    const mainsList = [
        { name: 'Spaghetti Carbonara', price: '$22', description: 'Classic Roman pasta with eggs, pecorino cheese, and pancetta' },
        { name: 'Osso Buco', price: '$32', description: 'Braised veal shanks with saffron risotto' },
        { name: 'Linguine alle Vongole', price: '$26', description: 'Fresh clams with white wine, garlic, and parsley' },
        { name: 'Bistecca alla Fiorentina', price: '$45', description: 'Grilled T-bone steak with rosemary and olive oil' }
    ];
    
    mainsList.forEach(item => {
        const menuItem = createMenuItem(item);
        mainSection.appendChild(menuItem);
    });
    
    menuPage.appendChild(mainSection);
    
    // Create desserts section
    const dessertsSection = document.createElement('div');
    dessertsSection.className = 'menu-section';
    
    const dessertsTitle = document.createElement('h2');
    dessertsTitle.textContent = 'Dolci';
    dessertsSection.appendChild(dessertsTitle);
    
    const dessertsList = [
        { name: 'Tiramisu', price: '$9', description: 'Classic coffee-flavored dessert with mascarpone' },
        { name: 'Panna Cotta', price: '$8', description: 'Vanilla custard with berry compote' },
        { name: 'Cannoli Siciliani', price: '$7', description: 'Crispy shells filled with sweet ricotta cream' }
    ];
    
    dessertsList.forEach(item => {
        const menuItem = createMenuItem(item);
        dessertsSection.appendChild(menuItem);
    });
    
    menuPage.appendChild(dessertsSection);
    
    // Clear content and append menu
    content.innerHTML = '';
    content.appendChild(menuPage);
}

function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    
    const itemHeader = document.createElement('div');
    itemHeader.className = 'menu-item-header';
    
    const itemName = document.createElement('span');
    itemName.className = 'menu-item-name';
    itemName.textContent = item.name;
    
    const itemPrice = document.createElement('span');
    itemPrice.className = 'menu-item-price';
    itemPrice.textContent = item.price;
    
    itemHeader.appendChild(itemName);
    itemHeader.appendChild(itemPrice);
    
    const itemDescription = document.createElement('p');
    itemDescription.className = 'menu-item-description';
    itemDescription.textContent = item.description;
    
    menuItem.appendChild(itemHeader);
    menuItem.appendChild(itemDescription);
    
    return menuItem;
}

export { createMenu };