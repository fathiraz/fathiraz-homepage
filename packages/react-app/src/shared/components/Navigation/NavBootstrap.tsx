import { useTheme } from './UseTheme';
import { Helper } from '../../utils/Helper';
import { AppConfig } from '../../types/Common';

interface NavBootstrapProps {
  AppConfig: AppConfig;
  configData: any;
}

function NavBootstrap({ AppConfig, configData }: NavBootstrapProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`framework-nav ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="framework-nav-content">
        <div className="d-flex align-items-center gap-2">
          <div className="framework-selector">
            <div className="d-flex align-items-center gap-2">
              <i className="devicon-okta-plain colored fs-5"></i>
              <select 
                className="form-select" 
                onChange={(e) => Helper.handleFrameworkChange(e.target.value)}
                value={AppConfig.CssFramework}
              >
                <option value="" disabled>Select Framework</option>
                {configData.frameworks.css.map((framework: any) => (
                  <option key={framework.name} value={framework.name}>
                    {framework.name.charAt(0).toUpperCase() + framework.name.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button 
            className="theme-toggle-nav" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <i className="devicon-knexjs-plain colored"></i>
            ) : (
              <i className="devicon-insomnia-plain colored"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBootstrap;
