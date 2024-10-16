import ResumeBulma from '../resume/ResumeBulma';
import { AppConfig } from '../../types/Common';

// this component serves as a wrapper for the ResumeBulma component, 
// providing a dark background and centering the content both vertically and horizontally
function AppBulma({ AppConfig }: { AppConfig: AppConfig }) {

  // container classes for centering content and setting background
  const containerClasses = "has-background-grey-lighter has-text-lighter is-fullheight is-flex is-justify-content-center is-align-items-center";

  return (
    <div className={containerClasses}>
      <ResumeBulma AppConfig={AppConfig} />
    </div>
  );
}

export default AppBulma;