import ResumeBulma from '../Resume/ResumeBulma';
import {AppConfig} from '../../types/Common';
import {ThemeProvider} from '../Navigation/UseTheme';
import '../../styles/terminal.css';

// this component serves as a wrapper for the ResumeBulma component, 
// providing a dark background and centering the content both vertically and horizontally
function AppBulma({AppConfig}: { AppConfig: AppConfig }) {

    return (
        <ThemeProvider>
            <div
                className="is-fullheight is-flex is-justify-content-center is-align-items-center">
                <ResumeBulma AppConfig={AppConfig}/>
            </div>
        </ThemeProvider>
    );
}

export default AppBulma;
