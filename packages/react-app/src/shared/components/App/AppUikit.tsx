import ResumeUikit from '../Resume/ResumeUikit';
import { AppProps } from '../../props/Common';

// this component serves as a wrapper for the ResumeUikit component, 
// providing a dark background and centering the content both vertically and horizontally
function AppUikit({ appProps }: { appProps: AppProps }) {

  // container classes for centering content and setting background
  const containerClasses = "uk-background-muted uk-height-viewport uk-flex uk-flex-center uk-flex-middle";

  return (
    <div className={containerClasses}>
      <ResumeUikit appProps={appProps} />
    </div>
  );
}

export default AppUikit;