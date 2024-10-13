// this component renders the main application layout with a resume component
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