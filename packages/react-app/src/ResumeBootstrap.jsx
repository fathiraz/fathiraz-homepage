// this component displays the resume information in a terminal-like interface with bootstrap css framework
// allowing users to view personal details, tech stack, tools, education, experiences, languages, 
// and provides an option to change the CSS framework dynamically

import PropTypes from 'prop-types';
import { useResumeData } from './DataProvider';

function ResumeBootstrap({ cssFramework }) {
  const { resumeData, configData, loading } = useResumeData();

  const handleFrameworkChange = (framework) => {
    const url = new URL(window.location);
    url.searchParams.set('css', framework.name);
    window.location.href = url.toString(); // Redirect to the new URL
  };

  if (loading) {
    return (
      <div className="container mt-4 mb-4 animate__animated animate__fadeIn" style={{ maxWidth: '1300px' }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="terminal-window bg-dark p-4 rounded" style={{ fontFamily: 'monospace', fontSize: '0.75rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
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
          <div className="terminal-window bg-dark p-4 rounded" style={{ fontFamily: 'monospace', fontSize: '0.75rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
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
                <div className="col-12">
                  <div className='m-9 d-flex flex-column gap-1'>
                    <p className='text-light text-opacity-75 mb-1 m-0'>
                      <span className='text-primary'>user@portfolio:~$</span> <span>whoami</span>
                    </p>
                    <p className='text-light text-opacity-75 m-0'>👋🏻 Hello, I&apos;m <span className='text-success'>{resumeData.name}</span></p>
                    <p className='text-light text-opacity-75 m-0'>📕 <span className='text-warning'>{resumeData.title}</span></p>
                    <p className='text-light text-opacity-75 m-0'>📖 <span>{resumeData.summary}</span></p>
                    <p className='text-light text-opacity-75 m-0'>🌏 <span>{resumeData.work_preference}</span></p>
                    <p className='text-light text-opacity-75 m-0'>
                      🔗 <a className='text-info text-decoration-none' href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.linkedin}</a>
                    </p>
                    <p className='text-light text-opacity-75 m-0'>
                      🐙 <a className='text-info text-decoration-none' href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.github}</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* end of whoami */}

              {/* start of techstack */}
              <hr className='text-danger mb-3 mt-3' />
              <div className="row">
                <div className="col-12">
                  <p className='text-light text-opacity-75 mb-1 m-0'>
                    <span className='text-primary'>user@portfolio:~$</span> <span>techstack</span>
                  </p>
                </div>
                <div className="col-12">
                  <div className="row g-2">
                    {resumeData.technology_stack.map((tech, index) => (
                      <div key={index} className="col-6 col-md-4 col-lg-3">
                        <div className="d-flex align-items-center rounded border border-secondary bg-black bg-opacity-25 text-light text-opacity-75 p-1 h-100">
                          <i className={`devicon-${tech.toLowerCase().replace(/\s+/g, '')}-plain me-2 fs-6`}></i>
                          <span style={{ fontFamily: 'monospace' }}>{tech}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of techstack */}

              {/* start of tools */}
              <hr className='text-danger mb-3 mt-3' />
              <div className="row">
                <div className="col-12">
                  <p className='text-light text-opacity-75 mb-1 m-0'>
                    <span className='text-primary'>user@portfolio:~$</span> <span>tools</span>
                  </p>
                </div>
                <div className="col-12">
                  <div className="row g-2">
                    {resumeData.tools.map((tool, index) => (
                      <div key={index} className="col-6 col-md-4 col-lg-3">
                        <div className="d-flex align-items-center rounded border border-secondary bg-black bg-opacity-25 text-light text-opacity-75 p-1 h-100">
                          <i className={`devicon-${tool.toLowerCase().replace(/\s+/g, '')}-plain me-2 fs-6`}></i>
                          <span style={{ fontFamily: 'monospace' }}>{tool}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                    {resumeData.educations.map((education, index) => (
                      <div key={index} className="col-12 p-3 w-100 border border-secondary rounded mt-1 mb-1 bg-black bg-opacity-25">
                        <p className='text-info fw-bold mb-2' style={{ fontSize: '13px' }}>{education.university}</p>
                        <p className='text-warning fw-bold mb-1' style={{ fontSize: '12px' }}>{education.location}</p>
                        <p className='fw-bold mb-1' style={{ fontSize: '12px' }}>{education.degree} in <span className='text-success'>{education.major}</span></p>
                        <p className='text-danger fw-bold mb-1' style={{ fontSize: '12px' }}><span>{education.start}</span> - <span>{education.end}</span></p>
                        <p className='fst-italic text-light text-opacity-75 mb-1' style={{ fontSize: '12px' }}>{education.grade}</p>
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
                    {resumeData.experiences.map((experience, index) => (
                      <div key={index} className="col-12 p-3 w-100 border border-secondary rounded mt-1 mb-1 bg-black bg-opacity-25">
                        <p className='text-success fw-bold mb-2' style={{ fontSize: '13px' }}>
                          {experience.position} <span className='text-light'>at </span> <span style={{ color: '#C678DD' }}>{experience.company}</span>
                        </p>
                        <p className='text-warning fst-italic mb-1' style={{ fontSize: '12px' }}>{experience.start_date} - {experience.end_date} <span className='text-danger'>({experience.duration})</span></p>
                        <p className='text-light text-opacity-75 mb-1' style={{ fontSize: '11px' }}>{experience.summary}</p>
                        <ul className='text-light text-opacity-75 pe-1 mb-0' style={{ listStyleType: 'circle' }}>
                          {experience.workarounds.map((workaround, i) => (
                            <li className='text-light text-opacity-75 mb-1' key={i} style={{ fontSize: '11px' }}> {workaround}</li>
                          ))}
                        </ul>
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
                    {resumeData.languages.map((language, index) => (
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
                  <p className='text-light text-center fw-bold mb-3' style={{ fontSize: '10px' }}>
                    Copyright © {new Date().getFullYear()} Fathiraz. <br />
                    Made with 🩵 using React JS framework with Vite and {cssFramework.charAt(0).toUpperCase() + cssFramework.slice(1)} CSS framework
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
          <select className="form-select form-select-sm" onChange={(e) => handleFrameworkChange({ name: e.target.value })} aria-label="CSS" style={{ 
            fontSize: '0.6rem', 
          }} value={cssFramework}>
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

ResumeBootstrap.propTypes = {
  cssFramework: PropTypes.string.isRequired,
};

export default ResumeBootstrap;
