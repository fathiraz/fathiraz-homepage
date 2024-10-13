// initializing the application by determining the CSS framework from the URL and rendering the appropriate app component

import React from 'react';
import queryString from 'query-string';
import { createRoot } from 'react-dom/client';
import { DataProvider } from './DataProvider';
import AppBulma from './AppBulma';
import AppBootstrap from './AppBootstrap';
import AppTailwind from './AppTailwind';
import 'animate.css';

// Function to initialize the app
const initApp = async () => {

  // default to bootstrap if no framework is specified
  let cssFramework = 'bootstrap';
  const queryParams = queryString.parse(window.location.search);
  
  // check if a CSS framework is specified in the query parameters
  if (queryParams.css) {
    cssFramework = queryParams.css.toLowerCase();

    // function to dynamically import the selected CSS framework
    const importCssFramework = async (framework) => {
      switch (framework) {
        case 'bootstrap':
          await import('bootstrap/dist/css/bootstrap.min.css');
          break;
        case 'bulma':
          await import('bulma/css/bulma.min.css');
          break;
        case 'tailwind':
          await import('tailwindcss/tailwind.css');
          break;
        default:
          break;
      }
    };

    await importCssFramework(cssFramework);
  }

  // create the root container for the app
  const container = document.getElementById('root');
  const root = createRoot(container);

  // render the app based on the selected CSS framework
  root.render( 
    <React.StrictMode>
      <DataProvider>
        {cssFramework === 'bulma' && <AppBulma cssFramework={cssFramework} />}
        {cssFramework === 'bootstrap' && <AppBootstrap cssFramework={cssFramework} />}
        {cssFramework === 'tailwind' && <AppTailwind cssFramework={cssFramework} />}
      </DataProvider>
    </React.StrictMode>
  );
};

// call the initApp function
initApp().catch(console.error);
