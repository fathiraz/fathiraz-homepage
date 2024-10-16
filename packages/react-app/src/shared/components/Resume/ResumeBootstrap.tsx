import { useResumeData } from '../../utils/DataProvider';
import { AppConfig } from '../../types/Common';
import { Helper } from '../../utils/Helper';
import { Education, Experience, Language } from '../../../../../shared/utils/Api';
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
              <div className="terminal-header d-flex justify-content-between m-1">
                <div className="terminal-buttons">
                  <span className="bg-danger rounded-circle d-inline-block me-2" style={{ width: '12px', height: '12px' }}></span>
                  <span className="bg-warning rounded-circle d-inline-block me-2" style={{ width: '12px', height: '12px' }}></span>
                  <span className="bg-success rounded-circle d-inline-block" style={{ width: '12px', height: '12px' }}></span>
                </div>
                <div className="terminal-title text-light">Resume Terminal</div>
              </div>
              <hr className='text-light-emphasis mb-3 mt-3' />
              <div className="terminal-body">
                {Array.from({ length: 10 }, (_, index) => (
                  <div key={index} className="placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                    <hr className='text-light-emphasis mb-3 mt-3' />
                  </div>
                ))}
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
            <div className="terminal-header d-flex justify-content-between m-1">
              <div className="terminal-buttons">
                <span className="bg-danger rounded-circle d-inline-block me-2" style={{ width: '12px', height: '12px' }}></span>
                <span className="bg-warning rounded-circle d-inline-block me-2" style={{ width: '12px', height: '12px' }}></span>
                <span className="bg-success rounded-circle d-inline-block" style={{ width: '12px', height: '12px' }}></span>
              </div>
              <div className="terminal-title text-light">Resume Terminal</div>
            </div>
            <hr className='text-light-emphasis mb-3 mt-3' />
            <div className="terminal-body">

              {/* start of whoami */}
              <div className="row">

                {/* who-am-i-bootstrap component */}
                <who-am-i-bootstrap
                  name={resumeData.name}
                  title={resumeData.title}
                  summary={resumeData.summary}
                  work_preference={resumeData.work_preference}
                  linkedin={resumeData.contact.linkedin}
                  github={resumeData.contact.github}
                />

              </div>
              {/* end of whoami */}

              {/* start of techstack */}
              <hr className='text-danger mb-3 mt-3' />
              <div className="row">

                {/* tech-stack-bootstrap component */}
                <tech-stack-bootstrap
                  technologies={resumeData.technology_stack}
                />

              </div>
              {/* end of techstack */}

              {/* start of tools */}
              <hr className='text-danger mb-3 mt-3' />
              <div className="row">

                {/* tools-bootstrap component */}
                <tools-bootstrap
                  tools={resumeData.tools}
                />

              </div>
              {/* end of tools */}

              {/* start of educations */}
              <hr className='text-danger mb-3 mt-3' />
              <div className="row">
                <div className="col-12">
                  <p className='text-light text-opacity-75 mb-1 m-0'>
                    <span className='text-primary'>user@portfolio:~$</span> <span>edu</span>
                  </p>
                </div>
                <div className="col-12">
                  <div className="row">
                    {resumeData.educations.map((education: Education, index: number) => (
                      <div key={index} className="col-12 p-3 w-100 border border-secondary rounded mt-1 mb-1 bg-black bg-opacity-25">
                        <p className='text-info fw-bold mb-2' style={{ fontSize: '15px' }}>{education.university}</p>
                        <p className='text-warning fw-bold mb-1' style={{ fontSize: '14px' }}>{education.location}</p>
                        <p className='fw-bold mb-1' style={{ fontSize: '14px' }}>{education.degree} in <span className='text-success'>{education.major}</span></p>
                        <p className='text-danger fw-bold mb-1' style={{ fontSize: '14px' }}><span>{education.start}</span> - <span>{education.end}</span></p>
                        <p className='fst-italic text-light text-opacity-75 mb-1' style={{ fontSize: '14px' }}>{education.grade}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of educations */}

              {/* start of experiences */}
              <hr className='text-danger mb-3 mt-3' />
              <div className="row">
                <div className="col-12">
                  <p className='text-light text-opacity-75 mb-1 m-0'>
                    <span className='text-primary'>user@portfolio:~$</span> <span className='text-light text-opacity-75'>exp</span>
                  </p>
                </div>
                <div className="col-12">
                  <div className="row">
                    {resumeData.experiences.map((experience: Experience, index: number) => (
                      <div key={index} className="col-12 p-3 w-100 border border-secondary rounded mt-1 mb-1 bg-black bg-opacity-25">
                        <p className='text-success fw-bold mb-2' style={{ fontSize: '15px' }}>
                          {experience.position} <span className='text-light'>at </span> <span style={{ color: '#C678DD' }}>{experience.company}</span>
                        </p>
                        <p className='text-warning fst-italic mb-1' style={{ fontSize: '14px' }}>{experience.start_date} - {experience.end_date} <span className='text-danger'>({experience.duration})</span></p>
                        <p className='text-light text-opacity-75 mb-1' style={{ fontSize: '13px' }}>{experience.summary}</p>
                        <ul className='text-light text-opacity-75 pe-1 mb-0' style={{ listStyleType: 'circle' }}>
                          {experience.workarounds.map((workaround: string, i: number) => (
                            <li className='text-light text-opacity-75 mb-1' key={i} style={{ fontSize: '13px' }}> {workaround}</li>
                          ))}
                        </ul>
                        <div className="mt-2">
                          {experience.skills_used.map((skill: string, i: number) => (
                            <span key={i} className="badge text-bg-primary rounded-pill text-wrap bg-primary me-2 mb-2">{skill}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of experiences */}

              {/* start of languages */}
              <hr className='text-danger mb-3 mt-3' />
              <div className="row">
                <div className="col-12">
                  <p className='text-light text-opacity-75 mb-1 m-0'>
                    <span className='text-primary'>user@portfolio:~$</span> <span>lang</span>
                  </p>
                </div>
                <div className="col-12">
                  <div className="row">
                    {resumeData.languages.map((language: Language, index: number) => (
                      <div key={index} className="col-12 d-flex justify-content-between mt-1 mb-1 p-1 bg-black bg-opacity-25 rounded border border-secondary">
                        <p className='text-info fw-bold m-0'>{language.language}</p>
                        <p className='text-warning fw-bold m-0'>{language.proficiency}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of languages */}

              {/* start of footer */}
              <hr className='text-light-emphasis mb-3 mt-3' />
              <div className="row">
                <div className="col-12">
                  <p className='text-light text-center fw-bold mb-3' style={{ fontSize: '12px' }}>
                    Copyright © {new Date().getFullYear()} Fathiraz. <br />
                    Made with 🩵 using React JS framework with Vite and {AppConfig.CssFramework.charAt(0).toUpperCase() + AppConfig.CssFramework.slice(1)} CSS framework
                  </p>
                </div>
              </div>
              {/* end of footer */}
            </div>
          </div>
        </div>
      </div>

      {/* start of floating button */}
      <div className="card position-fixed top-0 end-0 m-2 bg-black bg-opacity-75 border rounded" style={{ width: '140px' }}>
        <div className="card-body">
          <h6 className="card-title text-light" style={{ fontSize: '0.7rem' }}>
            <i className="devicon-css3-plain me-1"></i> CSS Framework
          </h6>
          <select className="form-select form-select-sm" onChange={(e) => Helper.handleFrameworkChange(e.target.value)} aria-label="CSS" style={{
            fontSize: '0.6rem',
          }} value={AppConfig.CssFramework}>
            <option value="" disabled>
              CSS Framework
            </option>
            {configData.frameworks.css.map((framework) => (
              <option key={framework.name} value={framework.name}>
                {framework.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* end of floating button */}

    </div>
  );
}
export default ResumeBootstrap;
