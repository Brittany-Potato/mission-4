# ~~~ Mission 4

The Mission brief was to create a generative AI application turners could use to provide car insurance assesments to clients.

## ~~~ Installs

- React
- React DOM

## ~~~ Running

- To run the frontend: npm run dev

- To run the backend: node server.js

- To run w/Docker: Docker compose up --build

## ~~~ Components in the frontend

- App.jsx & App.module.CSS
  Base page of the project and where the line of components end

- mainContainer.jsx & MainContainer.module.css
  The container/s surrounding the main AI chatbot

- textArea.jsx & textArea.module.css
  Main functions and AI chatbot container

## ~~~ Folder structure

```
MISSION-4/
├── .vscode/
├── dist/
├── node_modules/
├── public/
│   └── images/
│       ├── turners.png
│       └── vite.svg
├── src/
│   ├── assets/
│   └── components/
│       ├── mainContainer.jsx
│       ├── MainContainer.module.css
│       ├── textArea.jsx
│       └── textArea.module.css
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── build.log
├── Dockerfile
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
