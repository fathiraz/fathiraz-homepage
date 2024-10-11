import PropTypes from 'prop-types';
import ResumeBootstrap from './ResumeBootstrap';

function AppBootstrap({ cssFramework }) {
  return (
    <div className="bg-dark-subtle text-light min-vh-100 d-flex justify-content-center align-items-center">
      <ResumeBootstrap cssFramework={cssFramework} />
    </div>
  );
}

AppBootstrap.propTypes = {
  cssFramework: PropTypes.string.isRequired,
};

export default AppBootstrap;