import React from 'react';
import ResumeBulma from './ResumeBulma';

function AppBulma({ cssFramework }) {
  return (
    <div className="has-background-dark has-text-light is-fullheight is-flex is-justify-content-center is-align-items-center">
      <ResumeBulma cssFramework={cssFramework} />
    </div>
  );
}

export default AppBulma;
