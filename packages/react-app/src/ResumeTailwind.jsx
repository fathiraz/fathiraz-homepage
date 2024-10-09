import React, { useEffect, useState } from 'react';
import { fetchResumeData, fetchConfigData } from '../../../utils/api'; 

function ResumeTailwind({ cssFramework }) {
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
    window.location.href = url.toString();
  };

  if (!resumeData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-5 mb-5 max-w-[1300px]">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-8/12">
          <div className="bg-gray-800 rounded-lg p-5 text-gray-200 font-mono shadow-lg" style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '20px', color: '#f8f8f2', fontFamily: 'monospace', fontSize: '0.75rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
            <div className="flex justify-between mb-5" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div className="flex space-x-2">
                <span className="bg-red-500 rounded-full w-3 h-3"></span>
                <span className="bg-yellow-500 rounded-full w-3 h-3"></span>
                <span className="bg-green-500 rounded-full w-3 h-3"></span>
              </div>
              <div className="text-gray-200">Resume Terminal</div>
            </div>
            <div className="terminal-body">

              {/* start of whoami */}
              <div className="flex flex-col">
                <p className="text-blue-400 mb-3"><span>user@portfolio:~$</span> <span className="text-gray-400">whoami</span></p>
                <p className="text-gray-400">👋🏻 Hello, I'm <span className="text-green-400">{resumeData.name}</span></p>
                <p className="text-gray-400">📕 <span className="text-yellow-400">{resumeData.title}</span></p>
                <p className="text-gray-400">📖 <span className="text-gray-400">{resumeData.summary}</span></p>
                <p className="text-gray-400">🌏 <span className="text-gray-400">{resumeData.work_preference}</span></p>
                <p className="text-gray-400">🔗 <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-cyan-400">{resumeData.contact.linkedin}</a></p>
                <p className="text-gray-400">🐙 <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-cyan-400">{resumeData.contact.github}</a></p>
              </div>
              {/* end of whoami */}

              {/* start of techstack */}
              <hr className="border-red-500 my-5" style={{ height: '0.5px' }} />
              <div className="flex flex-col">
                <p className="text-blue-400 mb-3"><span>user@portfolio:~$</span> <span className="text-gray-400">techstack</span></p>
                <div className="grid grid-cols-4 gap-2">
                  {resumeData.technology_stack.map((tech, index) => (
                    <div key={index} className="flex items-center p-1 border border-gray-400 rounded" style={{ backgroundColor: '#2E2E2E' }}>
                      <i className={`devicon-${tech.toLowerCase().replace(/\s+/g, '')}-plain text-xs mr-2`}></i>
                      <span className="text-gray-400 text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of techstack */}

              {/* start of tools */}
             <hr className="border-red-500 my-5" style={{ height: '0.5px' }} />
              <div className="flex flex-col">
                <p className="text-blue-400 mb-3"><span>user@portfolio:~$</span> <span className="text-gray-400">tools</span></p>
                <div className="grid grid-cols-4 gap-2">
                  {resumeData.tools.map((tool, index) => (
                    <div key={index} className="flex items-center p-1 border border-gray-400 rounded" style={{ backgroundColor: '#2E2E2E' }}>
                      <i className={`devicon-${tool.toLowerCase().replace(/\s+/g, '')}-plain text-xs mr-2`}></i>
                      <span className="text-gray-400 text-xs">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of tools */}

              {/* start of educations */}
             <hr className="border-red-500 my-5" style={{ height: '0.5px' }} />
              <div className="flex flex-col">
                <p className="text-blue-400 mb-3"><span>user@portfolio:~$</span> <span className="text-gray-400">edu</span></p>
                <div className="grid grid-cols-1 gap-2">
                  {resumeData.educations.map((education, index) => (
                    <div key={index} className="p-4 border border-gray-600 rounded" style={{ backgroundColor: '#1E1E1E' }}>
                      <p className="text-blue-400 font-bold">{education.university}</p>
                      <p className="text-yellow-400 font-bold">{education.location}</p>
                      <p className="text-gray-400">{education.degree} in <span className="text-green-400">{education.major}</span></p>
                      <p className="text-gray-400"><span className="text-red-500">{education.start}</span> - <span className="text-red-500">{education.end}</span></p>
                      <p className="text-gray-400 italic">{education.grade}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of educations */}

              {/* start of experiences */}
             <hr className="border-red-500 my-5" style={{ height: '0.5px' }} />
              <div className="flex flex-col">
                <p className="text-blue-400 mb-3"><span>user@portfolio:~$</span> <span className="text-gray-400">exp</span></p>
                <div className="grid grid-cols-1 gap-2">
                  {resumeData.experiences.map((experience, index) => (
                    <div key={index} className="p-[15px] m-[5px] border border-gray-600 rounded" style={{ backgroundColor: '#1E1E1E' }}>
                      <p className="text-green-400 font-bold mb-[10px] font-size-[13px]">{experience.position} <span className="text-gray-400">at</span> <span className="text-purple-400">{experience.company}</span></p>
                      <p className="text-yellow-400 mb-[10px] italic font-size-[12px]">{experience.start_date} - {experience.end_date} <span className="text-red-500">({experience.duration})</span></p>
                      <p className="text-gray-400 mb-[10px] font-size-[11px]">{experience.summary}</p>
                      <ul className="pl-[20px] list-disc text-gray-400 mb-[0px]">
                        {experience.workarounds.map((workaround, index) => (
                          <li key={index} className="text-gray-400 mb-[5px] font-size-[11px]">{workaround}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of experiences */}

              {/* start of languages */}
             <hr className="border-red-500 my-5" style={{ height: '0.5px' }} />
              <div className="flex flex-col">
                <p className="text-blue-400 mb-3"><span>user@portfolio:~$</span> <span className="text-gray-400">lang</span></p>
                <div className="grid grid-cols-1 gap-2">
                  {resumeData.languages.map((language, index) => (
                    <div key={index} className="flex justify-between p-2 rounded" style={{ backgroundColor: '#2E2E2E' }}>
                      <p className="text-blue-400 font-bold">{language.language}</p>
                      <p className="text-yellow-400 font-bold">{language.proficiency}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of languages */}
              
              {/* start of footer */}
             <hr className="border-red-500 my-5" style={{ height: '0.5px' }} />
              <div className="flex flex-col">
                <p className="text-gray-400 text-center font-bold text-xs" style={{ fontSize: '10px' }}>
                  Copyright © {new Date().getFullYear()} Fathiraz. <br />
                  Made with 🩵 using React JS framework with Vite and {cssFramework.charAt(0).toUpperCase() + cssFramework.slice(1)} CSS framework
                </p>
              </div>
              {/* end of footer */}
            </div>
          </div>
        </div>
      </div>

      {/* start of floating button */}
      <div className="fixed top-5 right-5 z-50 bg-gray-700 border border-blue-400 rounded-lg">
        <div className="p-3">
          <h6 className="text-gray-400 text-xs">
            <i className="devicon-css3-plain mr-1"></i> CSS Framework
          </h6>
          <select className="form-select form-select-sm text-xs text-gray-900" onChange={(e) => handleFrameworkChange({ name: e.target.value })} aria-label="CSS"
            style={{
              fontSize: '0.7rem',
            }}
            value={cssFramework}
            >
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
      {/* end of floating button */}
      
    </div>
  );
}

export default ResumeTailwind;