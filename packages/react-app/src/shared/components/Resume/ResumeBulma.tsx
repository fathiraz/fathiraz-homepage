import { useResumeData } from '../../utils/DataProvider';
import { AppConfig } from '../../types/Common';
import { Helper } from '../../utils/Helper';
import { Education, Experience, Language } from '../../../../../shared/utils/Api';

// this component displays the resume information in a terminal-like interface with bulma css framework
// allowing users to view personal details, tech stack, tools, education, experiences, languages, 
// and provides an option to change the CSS framework dynamically
function ResumeBulma({ AppConfig }: { AppConfig: AppConfig }) {
  const { resumeData, configData, loading } = useResumeData();

  if (loading) {
    return (
      <div className="container mt-5 mb-5" style={{ maxWidth: '1300px' }}>
        <div className="columns is-justify-content-center">
          <div className="column is-full is-10-tablet is-8-desktop">
            <div className="terminal-window box has-background-black-ter p-4 is-rounded mx-2" style={{ fontFamily: 'monospace', fontSize: '0.875rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
              <div className="terminal-header is-flex is-justify-content-space-between m-1">
                <div className="terminal-buttons">
                  <span className="button is-danger is-small is-inline-block is-rounded mr-1"></span>
                  <span className="button is-warning is-small is-inline-block is-rounded mr-1"></span>
                  <span className="button is-success is-small is-inline-block is-rounded mr-1"></span>
                </div>
                <div className="terminal-title has-text-light">Resume Terminal</div>
              </div>
              <hr className='has-background-white-ter mb-3 mt-3' style={{ height: '0.5px' }} />
              <div className="terminal-body">
                {Array.from({ length: 10 }, (_, index) => (
                  <div key={index} className="skeleton-lines">
                    <div className="is-small"></div>
                    <div className="is-small" style={{ width: '75%' }}></div>
                    <div className="is-small" style={{ width: '50%' }}></div>
                    <hr className='has-background-white-ter mb-3 mt-3' style={{ height: '0.5px' }} />
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
    <div className="container mt-5 mb-5" style={{ maxWidth: '1300px' }}>
      <div className="columns is-justify-content-center">
        <div className="column is-full is-10-tablet is-8-desktop">
          <div className="terminal-window box has-background-black-ter p-4 is-rounded mx-2" style={{ fontFamily: 'monospace', fontSize: '0.875rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
            <div className="terminal-header is-flex is-justify-content-space-between m-1">
              <div className="terminal-buttons">
                <span className="button is-danger is-small is-inline-block is-rounded mr-1"></span>
                <span className="button is-warning is-small is-inline-block is-rounded mr-1"></span>
                <span className="button is-success is-small is-inline-block is-rounded mr-1"></span>
              </div>
              <div className="terminal-title has-text-light">Resume Terminal</div>
            </div>
            <hr className='has-background-white-ter mb-3 mt-3' style={{ height: '0.5px' }} />
            <div className="terminal-body">

              {/* start of whoami */}
              <div className="container">
                <div className="column is-full">
                  <div className='m-9 is-flex is-flex-direction-column is-gap-1'>
                    <p className='has-text-grey-lighter mb-1 m-0'>
                      <span className='has-text-link'>user@portfolio:~$</span> <span>whoami</span>
                    </p>
                    <p className='has-text-grey-lighter m-0 mt-0'>👋🏻 Hello, I&apos;m <span className='has-text-success'>{resumeData.name}</span></p>
                    <p className='has-text-grey-lighter m-0'>📕 <span className='has-text-warning'>{resumeData.title}</span></p>
                    <p className='has-text-grey-lighter m-0'>📖 <span>{resumeData.summary}</span></p>
                    <p className='has-text-grey-lighter m-0'>🌏 <span>{resumeData.work_preference}</span></p>
                    <p className='has-text-grey-lighter m-0'>🔗 <a className='has-text-info' href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.linkedin}</a></p>
                    <p className='has-text-grey-lighter m-0'>🐙 <a className='has-text-info' href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.github}</a></p>
                  </div>
                </div>
              </div>
              {/* end of whoami */}

              {/* start of techstack */}
              <hr className="has-background-danger mb-3 mt-3" style={{ height: '0.5px' }} />
              <div className="container">
                <div className="column is-full">
                  <p className='has-text-grey-lighter mb-1 m-0'>
                    <span className='has-text-link'>user@portfolio:~$</span> <span>techstack</span>
                  </p>
                </div>
                <div className="column is-full mt-0">
                  <div className="columns is-multiline is-mobile" style={{ margin: '-5px' }}>
                    {resumeData.technology_stack.map((tech: string, index: number) => (
                      <div key={index} className="column is-3-desktop is-4-tablet is-6-mobile" style={{ padding: '5px' }}>
                        <div className="is-flex is-align-items-center is-rounded has-background-black-bis has-text-grey-lighter p-1" style={{ border: '0.5px solid', borderColor: '#69748c', borderRadius: '5px', height: '100%' }}>
                          <i className={`devicon-${tech.toLowerCase().replace(/\s+/g, '')}-plain mr-2 is-size-7`}></i>
                          <span style={{ fontFamily: 'monospace' }}>{tech}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of techstack */}

              {/* start of tools */}
              <hr className="has-background-danger mb-3 mt-3" style={{ height: '0.5px' }} />
              <div className="container">
                <div className="column is-full">
                  <p className='has-text-grey-lighter mb-1 m-0'>
                    <span className='has-text-link'>user@portfolio:~$</span> <span>tools</span>
                  </p>
                </div>
                <div className="column is-full">
                  <div className="columns is-multiline is-mobile" style={{ margin: '-5px' }}>
                    {resumeData.tools.map((tool: string, index: number) => (
                      <div key={index} className="column is-3-desktop is-4-tablet is-6-mobile" style={{ padding: '5px' }}>
                        <div className="is-flex is-align-items-center is-rounded has-background-black-bis has-text-grey-lighter p-1" style={{ border: '0.5px solid', borderColor: '#69748c', borderRadius: '5px', height: '100%' }}>
                          <i className={`devicon-${tool.toLowerCase().replace(/\s+/g, '')}-plain mr-2 is-size-7`}></i>
                          <span style={{ fontFamily: 'monospace' }}>{tool}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of tools */}

              {/* start of educations */}
              <hr className="has-background-danger mb-3 mt-3" style={{ height: '0.5px' }} />
              <div className="container">
                <div className="column is-full">
                  <p className='has-text-grey-lighter mb-1 m-0'><span className='has-text-link'>user@portfolio:~$</span> <span>edu</span></p>
                </div>
                <div className="column is-full">
                  <div className="columns is-multiline">
                    {resumeData.educations.map((education: Education, index: number) => (
                      <div key={index} className="column p-3 is-full is-rounded has-background-black-bis has-text-grey-lighter mt-1 mb-1" style={{ border: '0.5px solid', borderColor: '#69748c', borderRadius: '5px' }}>
                        <p className='has-text-info has-text-weight-bold mb-2' style={{ fontSize: '15px' }}>{education.university}</p>
                        <p className='has-text-warning mb-1' style={{ fontSize: '14px' }}>{education.location}</p>
                        <p className='has-text-weight-bold mb-1' style={{ fontSize: '14px' }}>{education.degree} in <span className='has-text-success'>{education.major}</span></p>
                        <p className='has-text-danger has-text-weight-bold mb-1' style={{ fontSize: '14px' }}><span>{education.start}</span> - <span>{education.end}</span></p>
                        <p className='has-text-grey-lighter is-italic mb-1' style={{ fontSize: '14px' }}>{education.grade}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of educations */}

              {/* start of experiences */}
              <hr className="has-background-danger mb-3 mt-3" style={{ height: '0.5px' }} />
              <div className="container">
                <div className="column is-full">
                  <p className='has-text-grey-lighter mb-1 m-0'><span className='has-text-link'>user@portfolio:~$</span> <span>exp</span></p>
                </div>
                <div className="column is-full">
                  <div className="columns is-multiline">
                    {resumeData.experiences.map((experience: Experience, index: number) => (
                      <div key={index} className="column p-3 is-full is-rounded has-background-black-bis has-text-grey-lighter mt-1 mb-1" style={{ border: '0.5px solid', borderColor: '#69748c', borderRadius: '5px' }}>
                        <p className='has-text-success has-text-weight-bold mb-2' style={{ fontSize: '15px' }}>
                          {experience.position} <span className='has-text-white-ter'>at </span> <span style={{ color: '#C678DD' }}>{experience.company}</span>
                        </p>
                        <p className='has-text-warning is-italic mb-1' style={{ fontSize: '14px' }}>{experience.start_date} - {experience.end_date} <span className='has-text-danger'>({experience.duration})</span></p>
                        <p className='has-text-grey-lighter mb-1' style={{ fontSize: '13px' }}>{experience.summary}</p>
                        <ul className='has-text-grey-lighter pl-5 mb-0' style={{ listStyleType: 'circle' }}>
                          {experience.workarounds.map((workaround: string, i: number) => (
                            <li key={i} className='has-text-grey-lighter mb-1' style={{ fontSize: '13px' }}> {workaround}</li>
                          ))}
                        </ul>
                        <div className="buttons is-gap-1 mt-2">
                          {experience.skills_used.map((skill: string, i: number) => (
                            <span key={i} className="button is-small is-rounded is-link m-0 p-1 has-text-weight-bold" style={{ fontSize: '10px' }}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of experiences */}

              {/* start of languages */}
              <hr className="has-background-danger mb-3 mt-3" style={{ height: '0.5px' }} />
              <div className="container">
                <div className="column is-full">
                  <p className='has-text-grey-lighter mb-1 m-0'><span className='has-text-link'>user@portfolio:~$</span> <span>lang</span></p>
                </div>
                <div className="column is-full">
                  <div className="columns is-multiline">
                    {resumeData.languages.map((language: Language, index: number) => (
                      <div key={index} className="column is-full is-flex is-justify-content-space-between is-align-items-center is-rounded has-background-black-bis has-text-grey-lighter p-1 mt-1 mb-1" style={{ border: '0.5px solid', borderColor: '#69748c', borderRadius: '5px' }}>
                        <p className='has-text-info has-text-weight-bold m-0'>{language.language}</p>
                        <p className='has-text-warning has-text-weight-bold m-0'>{language.proficiency}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of languages */}

              {/* start of footer */}
              <hr className='has-background-white-ter mb-3 mt-3' style={{ height: '0.5px' }} />
              <div className="container">
                <div className="column is-full">
                  <p className='has-text-grey-lighter has-text-weight-bold has-text-centered m-3' style={{ fontSize: '12px' }}>
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
      <div className="card m-2 has-background-black-ter" style={{ position: 'fixed', top: '2.5px', right: '2.5px', border: '0.5px solid', borderColor: '#69748c', borderRadius: '5px', width: '150px' }}>
        <div className="card-content p-3 is-flex is-flex-direction-column is-align-items-center">
          <div className="media-content mb-2">
            <h6 className="title is-full has-text-light" style={{ fontSize: '0.7rem' }}>
              <i className="devicon-css3-plain mr-1"></i> CSS Framework
            </h6>
          </div>

          <div className="content select is-small" style={{ fontSize: '0.7rem' }}>
            <select onChange={(e) => Helper.handleFrameworkChange(e.target.value)} aria-label="CSS" value={AppConfig.CssFramework}>
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
      </div>

    </div>
  );
}

export default ResumeBulma;