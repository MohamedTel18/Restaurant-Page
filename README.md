# 🍽️ Restaurant Website with Webpack

A simple restaurant website built using **JavaScript**, **Webpack**, and **modular ES6 structure**. The site features a homepage, a menu page, and a contact page — all accessible via tabbed navigation.

## 📁 Project Structure
```bash
restaurant-site/
├── dist/ # Built files (auto-generated)
├── node_modules/
├── src/
│ ├── index.js # Entry point
│ ├── home.js # Home tab content
│ ├── menu.js # Menu tab content
│ ├── contact.js # Contact tab content
│ ├── template.html # HTML skeleton
│ └── style.css # Basic styling
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```
## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/MohamedTel18/Restaurant-Page.git
cd restaurant-site
npm install
npm start
```

Open http://localhost:8080 in your browser to see the site.

## Build for Production
```bash
npm run build
```
The production files will be in the ```dist/``` folder.

## 💡 Features
Modular JavaScript with ES6 ```import/export```

Webpack for bundling

Webpack Dev Server for local development

Dynamic tabbed navigation (Home, Menu, Contact)

Content is dynamically inserted into the DOM using JavaScript

Basic CSS styling

## ⚙️ Webpack Configuration
Webpack is configured to:

Use src/index.js as the entry point

Output to the dist/main.js file

Load and inject CSS using style-loader and css-loader

Serve using webpack-dev-server

## 📦 NPM Scripts
```JSON
"scripts": {
  "start": "webpack serve",
  "build": "webpack"
}
```