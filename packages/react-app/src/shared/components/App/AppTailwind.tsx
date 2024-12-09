import ResumeTailwind from '../Resume/ResumeTailwind';
import { AppConfig } from '../../types/Common';
import { ThemeProvider } from '../Navigation/UseTheme';

// this component serves as a wrapper for the ResumeTailwind component, 
// providing a dark background and centering the content both vertically and horizontally
function AppTailwind({ AppConfig }: { AppConfig: AppConfig }) {

  return (
    <ThemeProvider>
      <div className="min-h-screen flex justify-center items-center">
        <ResumeTailwind AppConfig={AppConfig} />
      </div>
    </ThemeProvider>
  );
}

export default AppTailwind;
