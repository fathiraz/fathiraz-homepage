import ResumeTailwind from '../Resume/ResumeTailwind';
import { AppProps } from '../../props/Common';

// this component serves as a wrapper for the ResumeTailwind component, 
// providing a dark background and centering the content both vertically and horizontally
function AppTailwind({ appProps }: { appProps: AppProps }) {

  // container classes for centering content and setting background
  const containerClasses = "bg-neutral-content text-white min-h-screen flex justify-center items-center";

  return (
    <div className={containerClasses}>
      <ResumeTailwind appProps={appProps} />
    </div>
  );
}

export default AppTailwind;