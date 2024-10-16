import ResumeBootstrap from '../Resume/ResumeBootstrap';
import { AppConfig } from '../../types/Common';

// this component serves as a wrapper for the ResumeBootstrap component, 
// providing a dark background and centering the content both vertically and horizontally
function AppBootstrap({ AppConfig }: { AppConfig: AppConfig }) {

  // container classes for centering content and setting background
  const containerClasses = "bg-dark-subtle text-light min-vh-100 d-flex justify-content-center align-items-center";

  return (
    <div className={containerClasses}>
      <ResumeBootstrap AppConfig={AppConfig} />
    </div>
  );
}

export default AppBootstrap;