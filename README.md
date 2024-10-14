<p align="center">
  <img src="https://raw.githubusercontent.com/fathiraz/fathiraz-homepage/refs/heads/main/public/images/cross-browser.png" width="60%" alt="FATHIRAZ-HOMEPAGE-logo">
</p>
<p align="center">
    <h1 align="center">FATHIRAZ-HOMEPAGE</h1>
</p>
<p align="center">
    <em><code>❯ A dynamic portfolio homepage showcasing multiple JavaScript and CSS frameworks</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/fathiraz/fathiraz-homepage?style=flat-square&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/fathiraz/fathiraz-homepage?style=flat-square&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/fathiraz/fathiraz-homepage?style=flat-square&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/fathiraz/fathiraz-homepage?style=flat-square&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=flat-square&logo=Bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/Tailwind_CSS-a5f3fc?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Bulma-00D1B2.svg?style=flat-square&logo=Bulma&logoColor=white" alt="Bulma">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="Css3">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint">
  <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat-square&logo=Vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white" alt="Nodejs">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat-square&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/json-5E5C5C?style=flat-square&logo=json&logoColor=white" alt="JSON">
</p>

<br>

<details><summary>Table of Contents</summary>

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [🔖 Prerequisites](#-prerequisites)
  - [📦 Installation](#-installation)
  - [🤖 Usage](#-usage)
- [📌 Project Roadmap](#-project-roadmap)
- [📸 Screenshot](#-screenshot)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

</details>
<hr>

## 📍 Overview

This project is a dynamic portfolio homepage that showcases multiple JavaScript and CSS frameworks. As a Backend Engineer exploring modern frontend development, this project demonstrates the ability to work with various technologies while providing a unique experience for visitors. The homepage features a dynamic framework selection, allowing users to choose which JavaScript and CSS frameworks they want to see in action.

---

## 👾 Features

- **Dynamic Framework Selection**: Users can choose between different JavaScript and CSS frameworks.
- **Monorepo Structure**: Uses Npm Workspaces for efficient dependency management.
- **Multiple Applications**:
  - React Application (frontend)
  - Express.js Application (backend service)
- **Framework Options**:
  - JavaScript Frameworks: React (default), Vue 3 (soon), Svelte (soon)
  - CSS Frameworks: Bootstrap (default), Bulma, Tailwind, Uikit (soon), Foundation (soon)
- **Professional Showcase**: Displays experience timeline, technology stack, and contact details.

---

## 📂 Repository Structure
```sh
└── fathiraz-homepage/
├── README.md
├── package-lock.json
├── package.json
├── packages
│ ├── api
│ │ ├── .gitignore
│ │ ├── README.md
│ │ ├── index.js
│ │ ├── package.json
│ │ └── vercel.json
│ └── react-app
│ ├── .gitignore
│ ├── README.md
│ ├── eslint.config.js
│ ├── index.html
│ ├── package.json
│ ├── postcss.config.js
│ ├── public
│ ├── src
│ ├── tailwind.config.js
│ └── vite.config.js
├── public
│ ├── config.json
│ ├── images
│ │ ├── react-bootstrap.png
│ │ ├── react-bulma.png
│ │ └── react-tailwind.png
│ └── resume.json
└── utils
└── api.jsx
```

## 🧩 Modules

<details closed><summary>Root</summary>

| File | Summary |
| --- | --- |
| [package-lock.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/package-lock.json) | Automatically generated file for any operations where npm modifies either the node_modules tree or package.json. |
| [package.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/package.json) | Defines the project dependencies and scripts for the root of the monorepo. |

</details>

<details closed><summary>packages/react-app</summary>

| File | Summary |
| --- | --- |
| [postcss.config.js](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/postcss.config.js) | Configuration file for PostCSS, a tool for transforming CSS with JavaScript. |
| [tailwind.config.js](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/tailwind.config.js) | Configuration file for Tailwind CSS, a utility-first CSS framework. |
| [vite.config.js](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/vite.config.js) | Configuration file for Vite, a build tool that aims to provide a faster and leaner development experience for modern web projects. |
| [package.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/package.json) | Defines the dependencies and scripts for the React application. |
| [index.html](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/index.html) | The main HTML file that serves as the entry point for the React application. |
| [eslint.config.js](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/eslint.config.js) | Configuration file for ESLint, a tool for identifying and reporting on patterns in JavaScript. |

</details>

<details closed><summary>packages/api</summary>

| File | Summary |
| --- | --- |
| [vercel.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/api/vercel.json) | Configuration file for deploying the API on Vercel. |
| [index.js](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/api/index.js) | Main entry point for the Express.js API application. |
| [package.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/api/package.json) | Defines the dependencies and scripts for the API application. |

</details>

<details closed><summary>utils</summary>

| File | Summary |
| --- | --- |
| [api.jsx](https://github.com/fathiraz/fathiraz-homepage/blob/main/utils/api.jsx) | Utility functions for making API calls from the React application. |

</details>

---

## 🚀 Getting Started

### 🔖 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (usually comes with Node.js)

### 📦 Installation

Build the project from source:

1. Clone the fathiraz-homepage repository:
```sh
❯ git clone https://github.com/fathiraz/fathiraz-homepage
```

2. Navigate to the project directory:
```sh
❯ cd fathiraz-homepage
```

3. Install the required dependencies for each package:
```sh
❯ npm install --workspace api && npm install --workspace react-app
```
### 🤖 Usage

Execute the test suite using the following command:

1. Start the API server:
```sh
❯ npm run start --workspace api
```

2. In a new terminal, start the React application:
```sh
❯ npm run dev --workspace react-app
```

3. Open your browser and navigate to `http://127.0.0.1:5173?css=bootstrap` to view the application.

---

## 📌 Project Roadmap
Framework Options
- **JavaScript Frameworks**:
  - [x] **`React App`**: <strike>React JS framework (default main application)</strike>
  - [ ] **`Vue App`**: Vue JS framework
  - [ ] **`Svelte App`**: Svelte JS framework
- **CSS Frameworks**:
  - [x] **`Bootstrap`**: <strike>Bootstrap CSS framework</strike>
  - [x] **`Bulma`**: <strike>Bulma CSS framework</strike>
  - [x] **`Tailwind`**: <strike>Tailwind CSS framework</strike>
  - [ ] **`Uikit`**: Uikit CSS framework
  - [ ] **`Foundation`**: Foundation CSS framework

---

## 📸 Screenshot

<p align="center">
  <img src="https://raw.githubusercontent.com/fathiraz/fathiraz-homepage/refs/heads/main/public/images/react-bootstrap.png" width="30%"></img>
  <img src="https://raw.githubusercontent.com/fathiraz/fathiraz-homepage/refs/heads/main/public/images/react-bulma.png" width="30%"></img>
  <img src="https://raw.githubusercontent.com/fathiraz/fathiraz-homepage/refs/heads/main/public/images/react-tailwind.png" width="30%"></img> 
</p>

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/fathiraz/fathiraz-homepage/issues)**: Submit bugs found or log feature requests for the `fathiraz-homepage` project.
- **[Submit Pull Requests](https://github.com/fathiraz/fathiraz-homepage/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/fathiraz/fathiraz-homepage/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/fathiraz/fathiraz-homepage
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

---

## 🎗 License

This project is protected under the [MIT](https://choosealicense.com/licenses/mit/) License. For more details, refer to the [LICENSE](https://github.com/fathiraz/fathiraz-homepage/blob/main/LICENSE) file.

---

## 🙌 Acknowledgments

- Thanks to all the open-source projects and their contributors that made this project possible.
- Special thanks to the React, Vue, and Svelte communities for their excellent documentation and resources.
- Appreciation to the creators and maintainers of Bootstrap, Bulma, Tailwind, Uikit, and Foundation for their fantastic CSS frameworks.

[**Return**](#-overview)