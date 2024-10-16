import ResumeUikit from '../Resume/ResumeUikit';
import { AppConfig } from '../../types/Common';

// this component serves as a wrapper for the ResumeUikit component, 
// providing a dark background and centering the content both vertically and horizontally
function AppUikit({ AppConfig }: { AppConfig: AppConfig }) {

  // container classes for centering content and setting background
  const containerClasses = "uk-background-muted uk-height-viewport uk-flex uk-flex-center uk-flex-middle";

  return (
    <div className={containerClasses}>
      <ResumeUikit AppConfig={AppConfig} />
    </div>
  );
}

export default AppUikit;