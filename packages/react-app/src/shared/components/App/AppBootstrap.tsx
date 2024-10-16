import ResumeBootstrap from '../Resume/ResumeBootstrap';
import { AppProps } from '../../props/Common';

// this component serves as a wrapper for the ResumeBootstrap component, 
// providing a dark background and centering the content both vertically and horizontally
function AppBootstrap({ appProps }: { appProps: AppProps }) {

  // container classes for centering content and setting background
  const containerClasses = "bg-dark-subtle text-light min-vh-100 d-flex justify-content-center align-items-center";

  return (
    <div className={containerClasses}>
      <ResumeBootstrap appProps={appProps} />
    </div>
  );
}

export default AppBootstrap;