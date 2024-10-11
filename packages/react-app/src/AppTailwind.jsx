import PropTypes from 'prop-types';
import ResumeTailwind from './ResumeTailwind';

function AppTailwind({ cssFramework }) {
  return (
    <div className="bg-neutral-content text-white min-h-screen flex justify-center items-center">
      <ResumeTailwind cssFramework={cssFramework} />
    </div>
  );
}

AppTailwind.propTypes = {
  cssFramework: PropTypes.string.isRequired,
};

export default AppTailwind;