import React from 'react';
import queryString from 'query-string';
import { createRoot } from 'react-dom/client';
import { fetchConfigData } from '../../../utils/api';
import AppBulma from './AppBulma';
import AppBootstrap from './AppBootstrap';
import AppTailwind from './AppTailwind';

// Function to initialize the app
const initApp = async () => {
  // get css framework from url
  let cssFramework = 'bootstrap';
  const queryParams = queryString.parse(window.location.search);
  
  if (queryParams.css != '') {
    const configData = await fetchConfigData();
    const frameworks = configData.frameworks.css.map(f => f.name.toLowerCase());
    const cssParam = queryParams.css.toLowerCase();
    
    if (frameworks.includes(cssParam)) {
      cssFramework = cssParam;
    }

    // import CSS based on the selected framework
    const importCssFramework = async (cssFramework) => {
      if (cssFramework === 'bootstrap') {
        await import('bootstrap/dist/css/bootstrap.min.css');
      } else if (cssFramework === 'bulma') {
        await import('bulma/css/bulma.min.css');
      } else if (cssFramework === 'tailwind') {
        await import('tailwindcss/tailwind.css');
      }
    };

    await importCssFramework(cssFramework);
  }

  // create container 
  const container = document.getElementById('root');
  const root = createRoot(container);

  // render the app
  root.render(
    <React.StrictMode>
      {cssFramework === 'bulma' && <AppBulma cssFramework={cssFramework} />}
      {cssFramework === 'bootstrap' && <AppBootstrap cssFramework={cssFramework} />}
      {cssFramework === 'tailwind' && <AppTailwind cssFramework={cssFramework} />} 
    </React.StrictMode>
  );
};

// Call the initApp function
initApp().catch(console.error);