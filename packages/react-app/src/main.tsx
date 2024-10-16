// initializing the application by determining the CSS framework from the URL and rendering the appropriate app component

import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataProvider } from './DataProvider';
import { Helper } from './shared/utils/Helper';
import 'animate.css';

// Function to initialize the app
const initApp = async () => {

  // default to bootstrap if no framework is specified
  let cssFramework = Helper.getCssFramework();

  // check if a CSS framework is specified in the query parameters
  if (cssFramework && typeof cssFramework === 'string') {
    cssFramework = cssFramework.toLowerCase();

    // import the selected CSS framework
    await Helper.importCssFramework(cssFramework);
  }

  // create the root container for the app
  const container = document.getElementById('root');
  if (!container) throw new Error('Failed to find the root element');
  const root = createRoot(container);

  // render the app based on the selected CSS framework
  root.render(
    <React.StrictMode>
      <DataProvider>
        {Helper.renderApp(cssFramework)}
      </DataProvider>
    </React.StrictMode>
  );
};

// call the initApp function
initApp().catch(console.error);
