import PropTypes from 'prop-types';
import ResumeBulma from './ResumeBulma';

function AppBulma({ cssFramework }) {
  return (
    <div className="has-background-grey-lighter has-text-lighter is-fullheight is-flex is-justify-content-center is-align-items-center">
      <ResumeBulma cssFramework={cssFramework} />
    </div>
  );
}

AppBulma.propTypes = {
  cssFramework: PropTypes.string.isRequired,
};

export default AppBulma;