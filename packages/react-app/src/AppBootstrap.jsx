// this component serves as a wrapper for the ResumeBootstrap component, 
// providing a dark background and centering the content both vertically and horizontally

import PropTypes from 'prop-types';
import ResumeBootstrap from './ResumeBootstrap';

function AppBootstrap({ cssFramework }) {
  const containerClasses = "bg-dark-subtle text-light min-vh-100 d-flex justify-content-center align-items-center";

  return (
    <div className={containerClasses}>
      <ResumeBootstrap cssFramework={cssFramework} />
    </div>
  );
}

AppBootstrap.propTypes = {
  cssFramework: PropTypes.string.isRequired,
};

export default AppBootstrap;