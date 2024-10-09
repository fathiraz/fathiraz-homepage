import React, { useEffect, useState } from 'react';
import { fetchResumeData, fetchConfigData } from '../../../utils/api'; 

function ResumeBulma({ cssFramework }) {
  const [resumeData, setResumeData] = useState(null);
  const [frameworks, setFrameworks] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchResumeData();
      setResumeData(data);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getConfig() {
      const configData = await fetchConfigData(); 
      setFrameworks(configData.frameworks.css);
    }
    getConfig();
  }, []);

  const handleFrameworkChange = (framework) => {
    const url = new URL(window.location);
    url.searchParams.set('css', framework.name);
    window.location.href = url.toString(); // Redirect to the new URL
  };

  if (!resumeData) {
    return <div className="has-text-centered mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5 mb-5" style={{ maxWidth: '1300px' }}>
        <div className="columns is-centered">
        <div className="column is-full is-10-tablet is-8-desktop">
            <div className="box" style={{ backgroundColor: '#1e1e1e', color: '#f8f8f2', fontFamily: 'monospace', fontSize: '0.75rem' }}>
            <div className="terminal-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div className="terminal-buttons">
                <span className="button is-danger is-small is-rounded"></span>
                <span className="button is-warning is-small is-rounded"></span>
                <span className="button is-success is-small is-rounded"></span>
                </div>
                <div className="terminal-title" style={{ color: '#f8f8f2' }}>Resume Terminal</div>
            </div>
            <div className="terminal-body">

                {/* start of whoami */}
                <div className="container">
                <div className="column is-full">
                    <div style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <p style={{ margin: 0, color: '#61AFEF' }}><span>user@portfolio:~$</span> <span style={{ color: '#ABB2BF' }}>whoami</span></p>
                    <p style={{ margin: 0, color: '#ABB2BF' }}>👋🏻 Hello, I'm <span style={{ color: '#98C379' }}>{resumeData.name}</span></p>
                    <p style={{ margin: 0, color: '#ABB2BF' }}>📕 <span style={{ color: '#E5C07B' }}>{resumeData.title}</span></p>
                    <p style={{ margin: 0, color: '#ABB2BF' }}>📖 <span style={{ color: '#ABB2BF' }}>{resumeData.summary}</span></p>
                    <p style={{ margin: 0, color: '#ABB2BF' }}>🌏 <span style={{ color: '#ABB2BF' }}>{resumeData.work_preference}</span></p>
                    <p style={{ margin: 0, color: '#ABB2BF' }}>🔗 <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: '#56B6C2', textDecoration: 'none' }}>{resumeData.contact.linkedin}</a></p>
                    <p style={{ margin: 0, color: '#ABB2BF' }}>🐙 <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" style={{ color: '#56B6C2', textDecoration: 'none' }}>{resumeData.contact.github}</a></p>
                    </div>
                </div>
                </div>
                {/* end of whoami */}

                {/* start of techstack */}
                <hr className="has-background-danger" style={{ margin: '20px 0', height: '0.5px' }}/>
                <div className="container">
                <div className="column is-full">
                    <p style={{ color: '#61AFEF', margin: '0', fontFamily: 'monospace' }}>
                    <span>user@portfolio:~$</span> <span style={{ color: '#ABB2BF' }}>techstack</span>
                    </p>
                </div>
                <div className="column is-full">
                    <div className="columns is-multiline">
                    {resumeData.technology_stack.map((tech, index) => (
                        <div key={index} className="column is-3" style={{ display: 'flex', alignItems: 'center', margin: '5px 0', padding: '5px', border: '1px solid #ABB2BF', borderRadius: '5px', backgroundColor: '#2E2E2E' }}>
                        <i className={`devicon-${tech.toLowerCase().replace(/\s+/g, '')}-plain`} style={{ fontSize: '15px', marginRight: '12px' }}></i>
                        <span style={{ color: '#ABB2BF', fontFamily: 'monospace' }}>{tech}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                {/* end of techstack */}

                {/* start of tools */}
                <hr className="has-background-danger"  style={{ margin: '20px 0', height: '0.5px' }}/>
                <div className="container">
                <div className="column is-full">
                    <p style={{ color: '#61AFEF', margin: '0', fontFamily: 'monospace' }}>
                    <span>user@portfolio:~$</span> <span style={{ color: '#ABB2BF' }}>tools</span>
                    </p>
                </div>
                <div className="column is-full">
                    <div className="columns is-multiline" style={{ overflow: 'hidden' }}> {/* Added overflow hidden */}
                    {resumeData.tools.map((tool, index) => (
                        <div key={index} className="column is-3" style={{ display: 'flex', alignItems: 'center', margin: '5px 0', padding: '5px', border: '1px solid #ABB2BF', borderRadius: '5px', backgroundColor: '#2E2E2E' }}>
                        <i className={`devicon-${tool.toLowerCase().replace(/\s+/g, '')}-plain`} style={{ fontSize: '15px', marginRight: '8px' }}></i>
                        <span style={{ color: '#ABB2BF', fontFamily: 'monospace' }}>{tool}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                {/* end of tools */}

                {/* start of educations */}
                <hr className="has-background-danger" style={{ margin: '20px 0', height: '0.5px' }}/>
                <div className="container">
                <div className="column is-full">
                    <p style={{ color: '#61AFEF', fontFamily: 'monospace' }}><span>user@portfolio:~$</span> <span style={{ color: '#ABB2BF' }}>edu</span></p>
                </div>
                <div className="column is-full">
                    <div className="columns is-multiline">
                    {resumeData.educations.map((education, index) => (
                        <div key={index} className="column is-full" style={{ margin: '5px 0', padding: '15px', border: '1px solid #4B4B4D', borderRadius: '5px', backgroundColor: '#1E1E1E' }}>
                        <p style={{ color: '#61AFEF', fontWeight: 'bold', margin: 0, fontSize: '13px' }}>{education.university}</p>
                        <p style={{ color: '#E5C07B', fontWeight: 'bold', margin: 0, fontSize: '12px' }}>{education.location}</p>
                        <p style={{ color: '#ABB2BF', margin: '5px 0', fontSize: '12px' }}>{education.degree} in <span style={{ color: '#98C379' }}>{education.major}</span></p>
                        <p style={{ color: '#ABB2BF', margin: '5px 0', fontSize: '12px' }}><span style={{ color: '#E06C75' }}>{education.start}</span> - <span style={{ color: '#E06C75' }}>{education.end}</span></p>
                        <p style={{ color: '#ABB2BF', margin: '5px 0', fontStyle: 'italic', fontSize: '12px' }}>{education.grade}</p>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                {/* end of educations */}

                {/* start of experiences */}
                <hr className="has-background-danger"  style={{ margin: '20px 0', height: '0.5px' }}/>
                <div className="container">
                <div className="column is-full">
                    <p style={{ color: '#61AFEF', fontFamily: 'monospace' }}><span>user@portfolio:~$</span> <span style={{ color: '#ABB2BF' }}>exp</span></p>
                </div>
                <div className="column is-full">
                    <div className="columns is-multiline">
                    {resumeData.experiences.map((experience, index) => (
                        <div key={index} className="column is-full" style={{ margin: '5px 0', padding: '15px', border: '1px solid #4B4B4D', borderRadius: '5px', backgroundColor: '#1E1E1E' }}>
                        <p style={{ color: '#98C379', fontWeight: 'bold', marginBottom: '10px', fontSize: '13px' }}>
                            {experience.position} <span style={{ color: '#ABB2BF' }}>at </span> <span style={{ color: '#C678DD' }}>{experience.company}</span>
                        </p>
                        <p style={{ color: '#E5C07B', fontStyle: 'italic', marginBottom: '10px', fontSize: '12px' }}>{experience.start_date} - {experience.end_date} <span style={{ color: '#E06C75' }}>({experience.duration})</span></p>
                        <p style={{ color: '#ABB2BF', marginBottom: '10px', fontSize: '11px' }}>{experience.summary}</p>
                        <ul style={{ paddingLeft: '20px', color: '#ABB2BF', listStyleType: 'circle', marginBottom: '0' }}>
                            {experience.workarounds.map((workaround, i) => (
                            <li key={i} style={{ color: '#ABB2BF', marginBottom: '5px', fontSize: '11px' }}> {workaround}</li>
                            ))}
                        </ul>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                {/* end of experiences */}

                {/* start of languages */}
                <hr className="has-background-danger" style={{ margin: '20px 0', height: '0.5px' }}/>
                <div className="container">
                <div className="column is-full">
                    <p><span style={{ color: '#61AFEF' }}>user@portfolio:~$</span> <span style={{ color: '#ABB2BF' }}>lang</span></p>
                </div>
                <div className="column is-full">
                    <div className="columns is-multiline">
                    {resumeData.languages.map((language, index) => (
                        <div key={index} className="column is-full" style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0', padding: '10px', backgroundColor: '#2E2E2E', borderRadius: '5px' }}>
                        <p style={{ color: '#61AFEF', fontWeight: 'bold', margin: 0 }}>{language.language}</p>
                        <p style={{ color: '#E5C07B', fontWeight: 'bold', margin: 0 }}>{language.proficiency}</p>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                {/* end of languages */}
                
                {/* start of footer */}
                <hr className="has-background-danger" style={{ margin: '20px 0', height: '0.5px' }}/>
                <div className="container">
                <div className="column is-full">
                    <p style={{ color: '#ABB2BF', margin: '30', textAlign: 'center', fontWeight: 'bold', fontSize: '10px' }}>
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
      <div className="card" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <div className="card-content has-background-dark">
          <h6 className="title is-6 has-text-light" style={{ fontSize: '0.8rem' }}>
            <i className="devicon-css3-plain" style={{ marginRight: '5px' }}></i> CSS Framework
          </h6>
          <div className="select is-small">
            <select onChange={(e) => handleFrameworkChange({ name: e.target.value })} aria-label="CSS" defaultValue="" style={{
                fontSize: '0.7rem',
              }} value={cssFramework}>
              <option value="" disabled>
                CSS Framework
              </option>
              {frameworks.map((framework) => (
                <option key={framework.name} value={framework.name}>
                  {framework.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* end of floating button */}
      
    </div>
  );
}

export default ResumeBulma;