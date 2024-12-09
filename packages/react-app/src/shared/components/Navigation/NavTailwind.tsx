import { useTheme } from './UseTheme';
import { Helper } from '../../utils/Helper';
import { AppConfig } from '../../types/Common';

interface NavTailwindProps {
    AppConfig: AppConfig;
    configData: any;
}

function NavTailwind({ AppConfig, configData }: NavTailwindProps) {
    const { theme, toggleTheme } = useTheme();

    if (!configData?.frameworks?.css) {
        return null;
    }

    return (
        <div className={`framework-nav fixed top-4 right-4 z-50 ${theme === 'dark' ? 'dark' : 'light'}`}>
            <div className="framework-nav-content flex items-center gap-1 border rounded-lg p-0">
                <div className="flex items-center gap-2 px-2">
                    <i className="framework-selector devicon-okta-plain colored"></i>
                    <select 
                        className="select bg-transparent appearance-none cursor-pointer focus:outline-none text-sm"
                        onChange={(e) => Helper.handleFrameworkChange(e.target.value)}
                        value={AppConfig.CssFramework}
                    >
                        {configData.frameworks.css.map((framework: any) => (
                            <option key={framework.name} value={framework.name}>
                                {framework.name.charAt(0).toUpperCase() + framework.name.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-[1px] h-5 bg-gray-800"></div>

                <button 
                    className="p-1 text-gray-400 hover:text-gray-200 transition-colors theme-toggle-nav"
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
    );
}

export default NavTailwind;
