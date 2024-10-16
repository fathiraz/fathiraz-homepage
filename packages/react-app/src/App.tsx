import { FC, useState, useEffect } from 'react';
import { Helper } from './shared/utils/Helper';

const App: FC = () => {
  const [cssFramework, setCssFramework] = useState<string>('bootstrap');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cssParam = urlParams.get('css');
    if (cssParam) {
      setCssFramework(cssParam);
    }
  }, []);

  return (
    <div className="App">
      {Helper.renderResume(cssFramework)}
    </div>
  );
};

export default App;
