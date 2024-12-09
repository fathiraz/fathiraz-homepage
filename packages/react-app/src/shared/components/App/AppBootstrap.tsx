import ResumeBootstrap from '../Resume/ResumeBootstrap';
import { AppConfig } from '../../types/Common';
import { ThemeProvider } from '../Navigation/UseTheme';
import '../../styles/terminal.css';

// this component serves as a wrapper for the ResumeBootstrap component, 
// providing a dark background and centering the content both vertically and horizontally
function AppBootstrap({ AppConfig }: { AppConfig: AppConfig }) {

  return (
    <ThemeProvider>
      <div className="content-container">
        <div className="d-flex justify-content-center align-items-center">
          <ResumeBootstrap AppConfig={AppConfig} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default AppBootstrap;
