function createAbout() {
    const content = document.getElementById('content');
    
    // Create about container
    const aboutPage = document.createElement('div');
    aboutPage.className = 'about-page';
    
    // Create title
    const title = document.createElement('h1');
    title.textContent = 'About Bella Vista';
    aboutPage.appendChild(title);
    
    // Create chef image
    const chefImage = document.createElement('img');
    chefImage.src = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
    chefImage.alt = 'Chef Marco preparing pasta';
    chefImage.className = 'chef-image';
    aboutPage.appendChild(chefImage);
    
    // Create story section
    const storySection = document.createElement('div');
    storySection.className = 'story-section';
    
    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'Our Story';
    storySection.appendChild(storyTitle);
    
    const story1 = document.createElement('p');
    story1.textContent = 'Bella Vista was founded in 2003 by Chef Marco Rossi, who immigrated from Tuscany with a dream of bringing authentic Italian flavors to New York City. With recipes passed down through four generations of his family, Chef Marco has created a dining experience that transports guests straight to the heart of Italy.';
    storySection.appendChild(story1);
    
    const story2 = document.createElement('p');
    story2.textContent = 'Our restaurant is built on the principles of famiglia (family), tradizione (tradition), and amore (love). Every dish is prepared with the finest imported ingredients and the same passion that has been the hallmark of the Rossi family for over a century.';
    storySection.appendChild(story2);
    
    aboutPage.appendChild(storySection);
    
    // Create values section
    const valuesSection = document.createElement('div');
    valuesSection.className = 'values-section';
    
    const valuesTitle = document.createElement('h2');
    valuesTitle.textContent = 'Our Values';
    valuesSection.appendChild(valuesTitle);
    
    const valuesList = document.createElement('ul');
    valuesList.className = 'values-list';
    
    const values = [
        'Fresh, locally-sourced ingredients whenever possible',
        'Traditional Italian cooking techniques and recipes',
        'Warm, family-style hospitality',
        'Supporting our local community',
        'Creating memorable dining experiences'
    ];
    
    values.forEach(value => {
        const listItem = document.createElement('li');
        listItem.textContent = value;
        valuesList.appendChild(listItem);
    });
    
    valuesSection.appendChild(valuesList);
    aboutPage.appendChild(valuesSection);
    
    // Create awards section
    const awardsSection = document.createElement('div');
    awardsSection.className = 'awards-section';
    
    const awardsTitle = document.createElement('h2');
    awardsTitle.textContent = 'Recognition';
    awardsSection.appendChild(awardsTitle);
    
    const awards = document.createElement('p');
    awards.className = 'awards-text';
    awards.innerHTML = '⭐ Zagat Rated<br>🏆 "Best Italian Restaurant" - NYC Food Awards 2022<br>👨‍🍳 James Beard Award Nominee<br>📰 Featured in Food & Wine Magazine';
    awardsSection.appendChild(awards);
    
    aboutPage.appendChild(awardsSection);
    
    // Clear content and append about
    content.innerHTML = '';
    content.appendChild(aboutPage);
}

export { createAbout };