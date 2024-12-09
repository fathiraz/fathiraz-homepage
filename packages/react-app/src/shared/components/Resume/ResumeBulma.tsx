import { useResumeData } from '../../utils/DataProvider';
import { AppConfig } from '../../types/Common';
import { Education, Experience, Language } from '../../../../../shared/utils/Api';
import { useTheme } from '../Navigation/UseTheme';
import { useEffect, useState, useRef } from 'react';
import NavBootstrap from '../Navigation/NavBootstrap';

// this component displays the resume information in a terminal-like interface with bulma css framework
// allowing users to view personal details, tech stack, tools, education, experiences, languages, 
// and provides an option to change the CSS framework dynamically
function ResumeBulma({ AppConfig }: { AppConfig: AppConfig }) {
  const { resumeData, configData, loading } = useResumeData();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (loading || !mounted) {
    return (
      <div className="container mt-4 mb-4 animate__animated animate__fadeIn">
        <div className="is-flex is-justify-content-center">
          <div className="button is-loading is-primary">Loading</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-5">
      <NavBootstrap AppConfig={AppConfig} configData={configData} />
      <div className="columns is-centered">
        <div className="column is-12 is-10-tablet is-8-desktop">
          <div
            className={`terminal-window box p-4 ${theme === 'dark' ? 'has-background-dark' : 'has-background-light'}`}
            style={{
              fontFamily: 'monospace',
              fontSize: '0.875rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
            }}>
            <div className="terminal-header is-flex is-justify-content-space-between m-1">
              <div className="terminal-buttons">
                <span className="button is-danger is-small is-rounded mr-1"></span>
                <span className="button is-warning is-small is-rounded mr-1"></span>
                <span className="button is-success is-small is-rounded mr-1"></span>
              </div>
              <div className={`terminal-title ${theme === 'dark' ? 'has-text-light' : 'has-text-dark'}`}>
                portfolio.sh
              </div>
              <div style={{ width: '52px' }}></div>
            </div>
            <hr className={`${theme === 'dark' ? 'has-background-white-ter' : 'has-background-dark'} mb-3 mt-3`}
              style={{ height: '0.5px' }} />
            <div className="terminal-body" ref={terminalRef}>
              {/* start of whoami */}
              <div className="container">
                <div className="column is-full">
                  <div className='m-9 is-flex is-flex-direction-column is-gap-1'>
                    <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} has-text-weight-normal mb-1 m-0`}>
                      <span className='has-text-link'>user@portfolio:~$</span> <span>whoami</span>
                    </p>
                    <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} has-text-weight-normal m-0`}>
                      👋🏻 Hello, I&apos;m <span
                        className='has-text-success'>{resumeData.name}</span>
                    </p>
                    <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} has-text-weight-normal m-0`}>
                      📕 <span className='has-text-warning'>{resumeData.title}</span>
                    </p>
                    <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} has-text-weight-normal m-0`}>
                      📖 <span>{resumeData.summary}</span>
                    </p>
                    <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} has-text-weight-normal m-0`}>
                      🌏 <span>{resumeData.work_preference}</span>
                    </p>
                    <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} has-text-weight-normal m-0`}>
                      🔗 <a
                        className={`has-text-info has-text-weight-normal`}
                        href={`https://${resumeData.contact.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resumeData.contact.linkedin}
                      </a>
                    </p>
                    <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} has-text-weight-normal m-0`}>
                      🐙 <a
                        className={`has-text-info has-text-weight-normal`}
                        href={`https://${resumeData.contact.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resumeData.contact.github}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* end of whoami */}

              <hr className={`${theme === 'dark' ? 'has-background-danger' : 'has-background-dark'} mb-3 mt-3`}
                style={{ height: '0.5px' }} />

              {/* start of techstack */}
              <div className="container">
                <div className="column is-full">
                  <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} mb-1 m-0`}>
                    <span className='has-text-link'>user@portfolio:~$</span> <span>techstack</span>
                  </p>
                </div>
                <div className="column is-full mt-2">
                  <div className="columns is-multiline is-mobile is-2">
                    {resumeData.technology_stack.map((tech: string, index: number) => (
                      <div key={index}
                        className="column is-6-mobile is-4-tablet is-3-desktop p-2">
                        <div
                          className={`
                                          is-flex is-align-items-center p-2
                                          ${theme === 'dark' ? 'has-background-black-bis has-text-light' : 'has-background-white-ter has-text-dark'}
                                        `}
                          style={{
                            borderRadius: '6px',
                            border: '1px solid #69748c'
                          }}
                        >
                          <i className={`devicon-${tech.toLowerCase().replace(/\s+/g, '')}-plain mr-2`}></i>
                          <span>{tech}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of techstack */}

              <hr className={`${theme === 'dark' ? 'has-background-danger' : 'has-background-dark'} mb-3 mt-3`} />

              {/* start of tools */}
              <div className="container">
                <div className="column is-full">
                  <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} mb-1 m-0`}>
                    <span className='has-text-link'>user@portfolio:~$</span> <span>tools</span>
                  </p>
                </div>
                <div className="column is-full mt-2">
                  <div className="columns is-multiline is-mobile is-2">
                    {resumeData.tools.map((tool: string, index: number) => (
                      <div key={index}
                        className="column is-6-mobile is-4-tablet is-3-desktop p-2">
                        <div
                          className={`
                                          is-flex is-align-items-center p-2
                                          ${theme === 'dark' ? 'has-background-black-bis has-text-light' : 'has-background-white-ter has-text-dark'}
                                        `}
                          style={{
                            borderRadius: '6px',
                            border: '1px solid #69748c'
                          }}
                        >
                          <i className={`devicon-${tool.toLowerCase().replace(/\s+/g, '')}-plain mr-2`}></i>
                          <span>{tool}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of tools */}

              <hr className={`${theme === 'dark' ? 'has-background-danger' : 'has-background-dark'} mb-3 mt-3`} />

              {/* start of educations */}
              <div className="container">
                <div className="column is-full">
                  <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} mb-1 m-0`}>
                    <span className='has-text-link'>user@portfolio:~$</span> <span>edu</span>
                  </p>
                </div>
                <div className="column is-full mt-2">
                  <div className="columns is-multiline">
                    {resumeData.educations.map((education: Education, index: number) => (
                      <div key={index} className="column is-full">
                        <div
                          className={`
                                          p-4 mb-2
                                          ${theme === 'dark' ? 'has-background-black-bis' : 'has-background-white-ter'}
                                        `}
                          style={{
                            borderRadius: '6px',
                            border: '1px solid #69748c'
                          }}
                        >
                          <p className="has-text-info has-text-weight-bold mb-2"
                            style={{ fontSize: '15px' }}>
                            {education.university}
                          </p>
                          <p className="has-text-warning mb-1" style={{ fontSize: '14px' }}>
                            {education.location}
                          </p>
                          <p className="has-text-weight-bold mb-1" style={{ fontSize: '14px' }}>
                            {education.degree} in <span
                              className="has-text-success">{education.major}</span>
                          </p>
                          <p className="has-text-danger has-text-weight-bold mb-1"
                            style={{ fontSize: '14px' }}>
                            <span>{education.start}</span> - <span>{education.end}</span>
                          </p>
                          <p className={`is-italic mb-1 ${theme === 'dark' ? 'has-text-light' : 'has-text-dark'}`}
                            style={{ fontSize: '14px' }}>
                            {education.grade}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of educations */}

              <hr className={`${theme === 'dark' ? 'has-background-danger' : 'has-background-dark'} mb-3 mt-3`} />

              {/* start of experiences */}
              <div className="container">
                <div className="column is-full">
                  <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} mb-1 m-0`}>
                    <span className='has-text-link'>user@portfolio:~$</span> <span>exp</span>
                  </p>
                </div>
                <div className="column is-full mt-2">
                  <div className="columns is-multiline">
                    {resumeData.experiences.map((experience: Experience, index: number) => (
                      <div key={index} className="column is-full">
                        <div
                          className={`
                                          p-4 mb-2
                                          ${theme === 'dark' ? 'has-background-black-bis' : 'has-background-white-ter'}
                                        `}
                          style={{
                            borderRadius: '6px',
                            border: '1px solid #69748c'
                          }}
                        >
                          <p className="has-text-success has-text-weight-bold mb-2"
                            style={{ fontSize: '15px' }}>
                            {experience.position}
                            <span
                              className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'}`}> at </span>
                            <span style={{ color: '#C678DD' }}>{experience.company}</span>
                          </p>

                          <p className="has-text-warning is-italic mb-2"
                            style={{ fontSize: '14px' }}>
                            {experience.start_date} - {experience.end_date}
                            <span
                              className="has-text-danger"> ({experience.duration})</span>
                          </p>

                          <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} mb-2`}
                            style={{ fontSize: '13px' }}>
                            {experience.summary}
                          </p>

                          <ul className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} ml-4 mb-3`}
                            style={{ listStyleType: 'circle' }}>
                            {experience.workarounds.map((workaround: string, i: number) => (
                              <li key={i} style={{ fontSize: '13px' }} className="mb-1">
                                {workaround}
                              </li>
                            ))}
                          </ul>

                          <div className="tags">
                            {experience.skills_used.map((skill: string, i: number) => (
                              <span
                                key={i}
                                className="tag is-link is-rounded is-small mr-1"
                                style={{ fontSize: '10px' }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of experiences */}

              <hr className={`${theme === 'dark' ? 'has-background-danger' : 'has-background-dark'} mb-3 mt-3`} />

              {/* start of languages */}
              <div className="container">
                <div className="column is-full">
                  <p className={`${theme === 'dark' ? 'has-text-light' : 'has-text-dark'} mb-1 m-0`}>
                    <span className='has-text-link'>user@portfolio:~$</span> <span>lang</span>
                  </p>
                </div>
                <div className="column is-full mt-2">
                  <div className="columns is-multiline">
                    {resumeData.languages.map((language: Language, index: number) => (
                      <div key={index} className="column is-full">
                        <div
                          className={`
                            is-flex is-justify-content-space-between is-align-items-center
                            p-3 mb-2
                            ${theme === 'dark' ? 'has-background-black-bis' : 'has-background-white-ter'}
                          `}
                          style={{
                            borderRadius: '6px',
                            border: '1px solid #69748c'
                          }}
                        >
                          <p className="has-text-info has-text-weight-bold m-0">
                            {language.language}
                          </p>
                          <p className="has-text-warning has-text-weight-bold m-0">
                            {language.proficiency}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of languages */}

              {/* start of footer */}
              <hr className={`${theme === 'dark' ? 'has-background-white-ter' : 'has-background-dark'} mb-3 mt-3`} />
              <div className="container">
                <div className="column is-full">
                  <p className={`
                    has-text-centered has-text-weight-bold m-3
                    ${theme === 'dark' ? 'has-text-light' : 'has-text-dark'}
                  `}
                    style={{ fontSize: '12px' }}>
                    Copyright © {new Date().getFullYear()} Fathiraz. <br />
                    Made with {theme === 'dark' ? '🩵' : '🩵'} using React JS framework with Vite
                    and {AppConfig.CssFramework.charAt(0).toUpperCase() + AppConfig.CssFramework.slice(1)} CSS framework
                  </p>
                </div>
              </div>
              {/* end of footer */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBulma;





