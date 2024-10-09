import React from 'react';
import ResumeTailwind from './ResumeTailwind';

function AppTailwind({ cssFramework }) {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex justify-center items-center" style={{ backgroundColor: '#272822' }}>
      <ResumeTailwind cssFramework={cssFramework} />
    </div>
  );
}

export default AppTailwind;