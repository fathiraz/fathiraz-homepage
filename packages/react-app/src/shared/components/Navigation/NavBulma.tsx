import { useTheme } from './UseTheme';
import { Helper } from '../../utils/Helper';
import { AppConfig } from '../../types/Common';

interface NavBulmaProps {
  AppConfig: AppConfig;
  configData: any;
}

function NavBulma({ AppConfig, configData }: NavBulmaProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`framework-nav ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="framework-nav-content">
        <div className="is-flex is-align-items-center" style={{ gap: '0.5rem' }}>
          <div className="framework-selector">
            <div className="is-flex is-align-items-center" style={{ gap: '0.5rem' }}>
              <i className="devicon-okta-plain colored is-size-5"></i>
              <div className="field control">
                <select 
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
          </div>

          <button 
            className="button is-small theme-toggle-nav" 
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

export default NavBulma;
