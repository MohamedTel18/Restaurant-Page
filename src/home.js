function createHomepage() {
    const content = document.getElementById('content');
    
    // Create homepage container
    const homepage = document.createElement('div');
    homepage.className = 'homepage';
    
    // Create and append title
    const title = document.createElement('h1');
    title.textContent = 'Welcome to Bella Vista Restaurant';
    homepage.appendChild(title);
    
    // Create and append image
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
    image.alt = 'Restaurant interior';
    homepage.appendChild(image);
    
    // Create and append paragraphs
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Experience the finest Italian cuisine in the heart of the city. At Bella Vista, we pride ourselves on using only the freshest ingredients, traditional recipes passed down through generations, and creating an atmosphere that makes every meal memorable.';
    homepage.appendChild(paragraph1);
    
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Our chef-driven menu features authentic dishes from various regions of Italy, paired with an extensive wine selection that perfectly complements every bite. Whether you\'re joining us for a romantic dinner, family celebration, or business lunch, Bella Vista promises an unforgettable dining experience.';
    homepage.appendChild(paragraph2);
    
    const paragraph3 = document.createElement('p');
    paragraph3.textContent = 'Come discover why we\'ve been the neighborhood\'s favorite restaurant for over 20 years!';
    homepage.appendChild(paragraph3);
    
    // Clear content and append homepage
    content.innerHTML = '';
    content.appendChild(homepage);
}

export { createHomepage };