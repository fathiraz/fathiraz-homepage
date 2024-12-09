import {useResumeData} from '../../utils/DataProvider';
import {AppConfig} from '../../types/Common';
import {Education, Experience, Language} from '../../../../../shared/utils/Api';
import {useTheme} from '../Navigation/UseTheme';
import {useRef} from 'react';
import NavBootstrap from '../Navigation/NavBootstrap';

function ResumeBootstrap({AppConfig}: { AppConfig: AppConfig }) {
    const {resumeData, configData, loading} = useResumeData();
    const {theme} = useTheme();
    const terminalRef = useRef<HTMLDivElement>(null);

    if (loading) {
        return (
            <div className="container mt-4 mb-4 animate__animated animate__fadeIn">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid py-5 animate__animated animate__fadeIn">
            <NavBootstrap AppConfig={AppConfig} configData={configData}/>
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className={`terminal-window p-4 ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                        <div className="terminal-header">
                            <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="terminal-buttons">
                                    <div className="terminal-button close"></div>
                                    <div className="terminal-button minimize"></div>
                                    <div className="terminal-button maximize"></div>
                                </div>
                                <div className="terminal-title">portfolio.sh</div>
                                <div style={{width: '52px'}}></div>
                            </div>
                        </div>
                        <div className="terminal-body" ref={terminalRef}>
                            <div className="command-output">

                                {/* start of whoami */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className='m-9 d-flex flex-column gap-1'>
                                            <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 mb-1 m-0`}>
                                                <span className='text-primary'>user@portfolio:~$</span> <span>whoami</span>
                                            </p>
                                            <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 m-0`}>👋🏻
                                                Hello, I&apos;m <span
                                                    className='text-success'>{resumeData.name}</span></p>
                                            <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 m-0`}>📕 <span
                                                className='text-warning'>{resumeData.title}</span></p>
                                            <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 m-0`}>📖 <span>{resumeData.summary}</span>
                                            </p>
                                            <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 m-0`}>🌏 <span>{resumeData.work_preference}</span>
                                            </p>
                                            <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 m-0`}>
                                                🔗 <a
                                                className={`text-${theme === 'dark' ? 'info' : 'info'} text-decoration-none`}
                                                href={`https://${resumeData.contact.linkedin}`} target="_blank"
                                                rel="noopener noreferrer">{resumeData.contact.linkedin}</a>
                                            </p>
                                            <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 m-0`}>
                                                🐙 <a
                                                className={`text-${theme === 'dark' ? 'info' : 'info'} text-decoration-none`}
                                                href={`https://${resumeData.contact.github}`} target="_blank"
                                                rel="noopener noreferrer">{resumeData.contact.github}</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* end of whoami */}

                                {/* start of techstack */}
                                <hr className={`text-${theme === 'dark' ? 'danger' : 'dark'} mb-3 mt-3`}/>
                                <div className="row">
                                    <div className="col-12">
                                        <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 mb-1 m-0`}>
                                            <span className='text-primary'>user@portfolio:~$</span> <span>techstack</span>
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2">
                                            {resumeData.technology_stack.map((tech: string, index: number) => (
                                                <div key={index} className="col-6 col-md-4 col-lg-3">
                                                    <div
                                                        className={`d-flex align-items-center rounded border border-${theme === 'dark' ? 'secondary' : 'dark'} bg-${theme === 'dark' ? 'black' : 'secondary-subtle'} bg-opacity-25 text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 p-1 h-100`}>
                                                        <i className={`devicon-${tech.toLowerCase().replace(/\s+/g, '')}-plain colored me-2 fs-6`}></i>
                                                        <span style={{fontFamily: 'monospace'}}>{tech}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* end of techstack */}

                                {/* start of tools */}
                                <hr className={`text-${theme === 'dark' ? 'danger' : 'dark'} mb-3 mt-3`}/>
                                <div className="row">
                                    <div className="col-12">
                                        <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 mb-1 m-0`}>
                                            <span className='text-primary'>user@portfolio:~$</span> <span>tools</span>
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2">
                                            {resumeData.tools.map((tool: string, index: number) => (
                                                <div key={index} className="col-6 col-md-4 col-lg-3">
                                                    <div
                                                        className={`d-flex align-items-center rounded border border-${theme === 'dark' ? 'secondary' : 'dark'} bg-${theme === 'dark' ? 'black' : 'secondary-subtle'} bg-opacity-25 text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 p-1 h-100`}>
                                                        <i className={`devicon-${tool.toLowerCase().replace(/\s+/g, '')}-plain colored me-2 fs-6`}></i>
                                                        <span style={{fontFamily: 'monospace'}}>{tool}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* end of tools */}

                                {/* start of educations */}
                                <hr className={`text-${theme === 'dark' ? 'danger' : 'dark'} mb-3 mt-3`}/>
                                <div className="row">
                                    <div className="col-12">
                                        <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 mb-1 m-0`}>
                                            <span className='text-primary'>user@portfolio:~$</span> <span>edu</span>
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            {resumeData.educations.map((education: Education, index: number) => (
                                                <div key={index}
                                                     className={`col-12 p-3 w-100 border border-${theme === 'dark' ? 'secondary' : 'dark'} rounded mt-1 mb-1 bg-${theme === 'dark' ? 'black' : 'secondary-subtle'} bg-opacity-25`}>
                                                    <p className={`text-${theme === 'dark' ? 'info' : 'info'} fw-bold mb-2`}
                                                       style={{fontSize: '15px'}}>{education.university}</p>
                                                    <p className={`text-${theme === 'dark' ? 'warning' : 'warning'} fw-bold mb-1`}
                                                       style={{fontSize: '14px'}}>{education.location}</p>
                                                    <p className={`fw-bold mb-1`}
                                                       style={{fontSize: '14px'}}>{education.degree} in <span
                                                        className='text-success'>{education.major}</span></p>
                                                    <p className={`text-${theme === 'dark' ? 'danger' : 'danger'} fw-bold mb-1`}
                                                       style={{fontSize: '14px'}}>
                                                        <span>{education.start}</span> - <span>{education.end}</span>
                                                    </p>
                                                    <p className={`fst-italic text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 mb-1`}
                                                       style={{fontSize: '14px'}}>{education.grade}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* end of educations */}

                                {/* start of experiences */}
                                <hr className={`text-${theme === 'dark' ? 'danger' : 'dark'} mb-3 mt-3`}/>
                                <div className="row">
                                    <div className="col-12">
                                        <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 mb-1 m-0`}>
                                            <span className='text-primary'>user@portfolio:~$</span> <span
                                            className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75`}>exp</span>
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            {resumeData.experiences.map((experience: Experience, index: number) => (
                                                <div key={index}
                                                     className={`col-12 p-3 w-100 border border-${theme === 'dark' ? 'secondary' : 'secondary'} rounded mt-1 mb-1 bg-${theme === 'dark' ? 'black' : 'secondary-subtle'} bg-opacity-25`}>
                                                    <p className={`text-${theme === 'dark' ? 'success' : 'success'} fw-bold mb-2`}
                                                       style={{fontSize: '15px'}}>
                                                        {experience.position} <span
                                                        className={`text-${theme === 'dark' ? 'light' : 'dark'}`}>at </span>
                                                        <span style={{color: '#C678DD'}}>{experience.company}</span>
                                                    </p>
                                                    <p className={`text-${theme === 'dark' ? 'warning' : 'warning'} fst-italic mb-1`}
                                                       style={{fontSize: '14px'}}>{experience.start_date} - {experience.end_date}
                                                        <span
                                                            className={`text-${theme === 'dark' ? 'danger' : 'danger'}`}> ({experience.duration})</span>
                                                    </p>
                                                    <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 mb-1`}
                                                       style={{fontSize: '13px'}}>{experience.summary}</p>
                                                    <ul className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 pe-1 mb-0`}
                                                        style={{listStyleType: 'circle'}}>
                                                        {experience.workarounds.map((workaround: string, i: number) => (
                                                            <li className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 mb-1`}
                                                                key={i}
                                                                style={{fontSize: '13px'}}> {workaround}</li>
                                                        ))}
                                                    </ul>
                                                    <div className="mt-2">
                                                        {experience.skills_used.map((skill: string, i: number) => (
                                                            <span key={i}
                                                                  className={`badge text-bg-${theme === 'dark' ? 'primary' : 'primary'} rounded-pill text-wrap bg-${theme === 'dark' ? 'primary' : 'primary'} me-2 mb-2`}>{skill}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* end of experiences */}

                                {/* start of languages */}
                                <hr className={`text-${theme === 'dark' ? 'danger' : 'dark'} mb-3 mt-3`}/>
                                <div className="row">
                                    <div className="col-12">
                                        <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-opacity-75 mb-1 m-0`}>
                                            <span className='text-primary'>user@portfolio:~$</span> <span>lang</span>
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            {resumeData.languages.map((language: Language, index: number) => (
                                                <div key={index}
                                                     className={`col-12 d-flex justify-content-between mt-1 mb-1 p-1 bg-${theme === 'dark' ? 'black' : 'secondary-subtle'} bg-opacity-25 rounded border border-${theme === 'dark' ? 'secondary' : 'dark'}`}>
                                                    <p className={`text-${theme === 'dark' ? 'info' : 'info'} fw-bold m-0`}>{language.language}</p>
                                                    <p className={`text-${theme === 'dark' ? 'warning' : 'warning'} fw-bold m-0`}>{language.proficiency}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* end of languages */}

                                {/* start of footer */}
                                <hr className={`text-${theme === 'dark' ? 'light-emphasis' : 'dark'} mb-3 mt-3`}/>
                                <div className="row">
                                    <div className="col-12">
                                        <p className={`text-${theme === 'dark' ? 'light' : 'dark'} text-center fw-bold mb-3`}
                                           style={{fontSize: '12px'}}>
                                            Copyright {new Date().getFullYear()} Fathiraz. <br/>
                                            Made with {theme === 'dark' ? '🩵' : '🩵'} using React JS framework with
                                            Vite
                                            and {AppConfig.CssFramework.charAt(0).toUpperCase() + AppConfig.CssFramework.slice(1)} CSS
                                            framework
                                        </p>
                                    </div>
                                </div>
                                {/* end of footer */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumeBootstrap;
