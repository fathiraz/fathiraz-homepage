// this component serves as a wrapper for the ResumeTailwind component, 
// providing a dark background and centering the content both vertically and horizontally

import PropTypes from 'prop-types';
import ResumeTailwind from './ResumeTailwind';

function AppTailwind({ cssFramework }) {
  const containerClasses = "bg-neutral-content text-white min-h-screen flex justify-center items-center";

  return (
    <div className={containerClasses}>
      <ResumeTailwind cssFramework={cssFramework} />
    </div>
  );
}

AppTailwind.propTypes = {
  cssFramework: PropTypes.string.isRequired,
};

export default AppTailwind;