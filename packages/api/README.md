# API

## Overview

The API serves as the backend component of Fathiraz's Portfolio Homepage. It is built using Node.js and Express, providing essential data to the frontend application. This API is designed to fetch and serve data dynamically, ensuring that the portfolio remains up-to-date and responsive to user interactions.

## Purpose

The primary purpose of this API is to support the React application by providing necessary data such as resume information and configuration settings. By separating the backend from the frontend, we can maintain a clean architecture that allows for easier updates and scalability.

## Features

- **Data Fetching**: The API can retrieve various types of data required by the frontend, including:
  - Resume information
  - Configuration settings

- **Dynamic Responses**: The API is designed to respond dynamically based on the requests made by the frontend, allowing for a seamless user experience.

- **Integration with Frontend**: The API works in conjunction with the React application, ensuring that the data displayed is always current and relevant.

## Getting Started

To get started with the API, follow these steps:

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/fathiraz/fathiraz-homepage.git
   cd fathiraz-homepage/packages/api
   ```

2. **Install Dependencies**: 
   Make sure you have Yarn installed, then run:
   ```bash
   yarn install
   ```

3. **Run the API**: 
   Start the API server using:
   ```bash
   npx tsx app.ts
   ```

4. **Access the API**: 
   The API will be available at `http://localhost:3001` (or the port specified in your environment variables).

## API Endpoints

- **GET /api/resume**: Retrieves the resume information.
- **GET /api/config**: Fetches configuration settings for the frontend application.

## Development

This API is developed using TypeScript for type safety and better development experience. Ensure that you have TypeScript and tsx installed to run the application effectively.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE.txt](../../LICENSE.txt) file for details.

---

Thank you for checking out the API for Fathiraz's Portfolio Homepage! We hope it enhances your experience as you explore the various frameworks and technologies showcased in the project.