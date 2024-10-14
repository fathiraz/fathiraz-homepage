// this component serves as a wrapper for the ResumeBulma component, 
// providing a dark background and centering the content both vertically and horizontally

import PropTypes from 'prop-types';
import ResumeBulma from './ResumeBulma';

function AppBulma({ cssFramework }) {
  const containerClasses = "has-background-grey-lighter has-text-lighter is-fullheight is-flex is-justify-content-center is-align-items-center";

  return (
    <div className={containerClasses}>
      <ResumeBulma cssFramework={cssFramework} />
    </div>
  );
}

AppBulma.propTypes = {
  cssFramework: PropTypes.string.isRequired,
};

export default AppBulma;