// this component serves as a wrapper for the ResumeUikit component, 
// providing a dark background and centering the content both vertically and horizontally

import PropTypes from 'prop-types';
import ResumeUikit from './ResumeUikit';

function AppUikit({ cssFramework }) {
  return (
    <div className="uk-background-muted uk-height-viewport uk-flex uk-flex-center uk-flex-middle">
      <ResumeUikit cssFramework={cssFramework} />
    </div>
  );
}

AppUikit.propTypes = {
  cssFramework: PropTypes.string.isRequired,
};

export default AppUikit;