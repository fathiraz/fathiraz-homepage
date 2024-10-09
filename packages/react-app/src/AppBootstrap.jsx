import React from 'react';
import ResumeBootstrap from './ResumeBootstrap';

function AppBootstrap({ cssFramework }) {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#272822' }}>
      <ResumeBootstrap cssFramework={cssFramework} />
    </div>
  );
}

export default AppBootstrap;
