import { useResumeData } from '../../utils/DataProvider';
import { AppConfig } from '../../types/Common';
import '../../../../../shared/components/bootstrap';

// this component displays the resume information in a terminal-like interface with bootstrap css framework
// allowing users to view personal details, tech stack, tools, education, experiences, languages, 
// and provides an option to change the CSS framework dynamically
function ResumeBootstrap({ AppConfig }: { AppConfig: AppConfig }) {
  const { resumeData, configData, loading } = useResumeData();

  if (loading) {
    return (
      <div className="container mt-4 mb-4 animate__animated animate__fadeIn" style={{ maxWidth: '1300px' }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="terminal-window bg-dark p-4 rounded" style={{ fontFamily: 'monospace', fontSize: '0.875rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>

              {/* terminal-header-bootstrap component */}
              <terminal-header-bootstrap />

              <divider-bootstrap color="text-light-emphasis" />
              <div className="terminal-body">

                {/* placeholder-bootstrap component */}
                <placeholder-bootstrap length={10} />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-4" style={{ maxWidth: '1300px' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="terminal-window bg-dark p-4 rounded" style={{ fontFamily: 'monospace', fontSize: '0.875rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>

            {/* terminal-header-bootstrap component */}
            <terminal-header-bootstrap />

            <divider-bootstrap color="text-light-emphasis" />
            <div className="terminal-body">

              {/* start of whoami */}
              <who-am-i-bootstrap
                name={resumeData.name}
                title={resumeData.title}
                summary={resumeData.summary}
                work_preference={resumeData.work_preference}
                linkedin={resumeData.contact.linkedin}
                github={resumeData.contact.github}
              />
              {/* end of whoami */}

              {/* start of techstack */}
              <divider-bootstrap color="text-danger" />
              <tech-stack-bootstrap
                technologies={JSON.stringify(resumeData.technology_stack)}
              />
              {/* end of techstack */}

              {/* start of tools */}
              <divider-bootstrap color="text-danger" />
              <tools-bootstrap
                tools={JSON.stringify(resumeData.tools)}
              />
              {/* end of tools */}

              {/* start of educations */}
              <divider-bootstrap color="text-danger" />
              <educations-bootstrap
                educations={JSON.stringify(resumeData.educations)}
              />
              {/* end of educations */}

              {/* start of experiences */}
              <divider-bootstrap color="text-danger" />
              <experiences-bootstrap
                experiences={JSON.stringify(resumeData.experiences)}
              />
              {/* end of experiences */}

              {/* start of languages */}
              <divider-bootstrap color="text-danger" />
              <languages-bootstrap
                languages={JSON.stringify(resumeData.languages)}
              />
              {/* end of languages */}

              {/* start of footer */}
              <divider-bootstrap color="text-light-emphasis" />
              <footer-bootstrap
                cssFramework={AppConfig.CssFramework}
              />
              {/* end of footer */}

            </div>
          </div>
        </div>
      </div>

      {/* floating-button-bootstrap component */}
      <floating-button-bootstrap
        frameworks={JSON.stringify(configData.frameworks.css)}
        currentFramework={AppConfig.CssFramework}
      />

    </div>
  );
}
export default ResumeBootstrap;
