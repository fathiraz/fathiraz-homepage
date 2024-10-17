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
	<img src="https://img.shields.io/github/license/fathiraz/fathiraz-homepage?style=for-the-badge&logo=mit&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/fathiraz/fathiraz-homepage?style=for-the-badge&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/fathiraz/fathiraz-homepage?style=for-the-badge&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/fathiraz/fathiraz-homepage?style=for-the-badge&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/Tailwind_CSS-a5f3fc?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Bulma-00D1B2.svg?style=for-the-badge&logo=Bulma&logoColor=white" alt="Bulma">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Css3">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white" alt="ESLint">
  <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Nodejs">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" alt="JSON">
  <img src="https://img.shields.io/badge/Lit-324FFF.svg?style=for-the-badge&logo=Lit&logoColor=white" alt="Lit">
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
├── package.json
├── .yarnrc.yml
├── packages
│ ├── api
│ │ ├── src
│ │ │ └── index.ts
│ │ ├── tsconfig.json
│ │ ├── package.json
│ │ └── vercel.json
│ ├── react-app
│ │ ├── src
│ │ │ ├── shared
│ │ │ │ ├── components
│ │ │ │ │ ├── App
│ │ │ │ │ │ ├── index.ts
│ │ │ │ │ │ └── AppBootstrap.tsx
│ │ │ │ │ └── Resume
│ │ │ │ │   ├── index.ts
│ │ │ │ │   └── ResumeBootstrap.tsx
│ │ │ │ └── utils
│ │ │ │   └── Helper.tsx
│ │ │ ├── App.tsx
│ │ │ └── main.tsx
│ │ ├── index.html
│ │ ├── tsconfig.json
│ │ ├── tsconfig.node.json
│ │ ├── package.json
│ │ ├── postcss.config.js
│ │ ├── tailwind.config.ts
│ │ └── vite.config.ts
│ └── shared
│   └── components
│     └── bootstrap
│       └── index.ts
├── public
│ ├── config.json
│ ├── images
│ └── resume.json
```

## 🧩 Modules

<details closed><summary>Root</summary>

| File | Summary |
| --- | --- |
| [package.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/package.json) | Defines the project dependencies and scripts for the root of the monorepo. |
| [.yarnrc.yml](https://github.com/fathiraz/fathiraz-homepage/blob/main/.yarnrc.yml) | Yarn configuration file specifying the node-modules linker. |

</details>

<details closed><summary>packages/react-app</summary>

| File | Summary |
| --- | --- |
| [tsconfig.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/tsconfig.json) | TypeScript configuration for the React application. |
| [tsconfig.node.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/tsconfig.node.json) | TypeScript configuration for Node.js environment in the React app. |
| [vite.config.ts](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/vite.config.ts) | Vite configuration file for the React application. |
| [tailwind.config.ts](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/tailwind.config.ts) | Tailwind CSS configuration file. |
| [postcss.config.js](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/postcss.config.js) | PostCSS configuration file. |
| [package.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/package.json) | Defines the dependencies and scripts for the React application. |
| [index.html](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/index.html) | The main HTML file that serves as the entry point for the React application. |
| [src/App.tsx](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/src/App.tsx) | Main React component that renders the application. |
| [src/main.tsx](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/src/main.tsx) | Entry point for the React application. |

</details>

<details closed><summary>packages/react-app/src/shared</summary>

| File | Summary |
| --- | --- |
| [components/App/index.ts](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/src/shared/components/App/index.ts) | Exports App components. |
| [components/App/AppBootstrap.tsx](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/src/shared/components/App/AppBootstrap.tsx) | Bootstrap-styled App component. |
| [components/Resume/index.ts](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/src/shared/components/Resume/index.ts) | Exports Resume components. |
| [components/Resume/ResumeBootstrap.tsx](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/src/shared/components/Resume/ResumeBootstrap.tsx) | Bootstrap-styled Resume component. |
| [utils/Helper.tsx](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/react-app/src/shared/utils/Helper.tsx) | Helper utilities for the React application. |

</details>

<details closed><summary>packages/api</summary>

| File | Summary |
| --- | --- |
| [src/index.ts](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/api/src/index.ts) | Main entry point for the Express.js API application. |
| [tsconfig.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/api/tsconfig.json) | TypeScript configuration for the API application. |
| [vercel.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/api/vercel.json) | Configuration file for deploying the API on Vercel. |
| [package.json](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/api/package.json) | Defines the dependencies and scripts for the API application. |

</details>

<details closed><summary>packages/shared</summary>

| File | Summary |
| --- | --- |
| [components/bootstrap/index.ts](https://github.com/fathiraz/fathiraz-homepage/blob/main/packages/shared/components/bootstrap/index.ts) | Exports shared Bootstrap components. |

</details>

---

## 🚀 Getting Started

### 🔖 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
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
❯ npm run dev --workspace api
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
  - [x] **`Uikit`**: Uikit CSS framework
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
