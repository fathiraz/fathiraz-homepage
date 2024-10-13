// this component renders the ResumeBulma component within a styled container, 
// passing the cssFramework prop for styling purposes
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