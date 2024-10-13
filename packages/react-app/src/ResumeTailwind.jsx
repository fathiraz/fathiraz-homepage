// this component displays the resume information in a terminal-like interface using the Tailwind CSS framework.
// it allows users to view personal details, tech stack, tools, education, experiences, languages, 
// and provides an option to change the CSS framework dynamically.

import PropTypes from 'prop-types';
import { useResumeData } from './DataProvider';

function ResumeTailwind({ cssFramework }) {
  const { resumeData, configData, loading } = useResumeData();

  const handleFrameworkChange = (framework) => {
    const url = new URL(window.location);
    url.searchParams.set('css', framework.name);
    window.location.href = url.toString(); // Redirect to the new URL
  };

  if (loading) {
    return (
      <div className="container mx-auto mt-5 mb-5 max-w-[1300px] ">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-8/12">
            <div className="terminal-window bg-neutral-900 rounded-lg p-5 text-base-content font-mono shadow-lg text-xs mx-2 sm:mx-0">
            <div className="terminal-header flex justify-between m-1">
              <div className="terminal-buttons flex space-x-2">
                <span className="bg-error rounded-full w-3 h-3"></span>
                <span className="bg-warning rounded-full w-3 h-3"></span>
                <span className="bg-success rounded-full w-3 h-3"></span>
              </div>
              <div className="terminal-tile text-white">Resume Terminal</div>
            </div>
            <hr className="border-white mb-3 mt-3 h-[0.5px]" />
            <div className="terminal-body space-y-5">
              {Array.from({ length: 10 }, (_, index) => (
                <div key={index} className="space-y-3">
                  <div className="skeleton h-3 w-full"></div>
                  <div className="skeleton h-3 w-3/4"></div>
                  <div className="skeleton h-3 w-1/2"></div>
                  <hr className="border-white mb-3 mt-3 h-[0.5px]" />
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
    <div className="container mx-auto mt-5 mb-5 max-w-[1300px]">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-8/12">
          <div className="terminal-window bg-neutral-900 rounded-lg p-5 text-base-content font-mono shadow-lg text-xs mx-2 sm:mx-0">
            <div className="terminal-header flex justify-between m-1">
              <div className="terminal-buttons flex space-x-2">
                <span className="bg-error rounded-full w-3 h-3"></span>
                <span className="bg-warning rounded-full w-3 h-3"></span>
                <span className="bg-success rounded-full w-3 h-3"></span>
              </div>
              <div className="terminal-tile text-white">Resume Terminal</div>
            </div>
            <hr className="border-white mb-3 mt-3 h-[0.5px]" />
            <div className="terminal-body">

              {/* start of whoami */}
              <div className="flex flex-col gap-1">
                <p className="text-neutral-content mb-1 m-0">
                  <span className="text-primary">user@portfolio:~$</span> <span>whoami</span>
                </p>
                <p className="text-neutral-content m-0">
                  👋🏻 Hello, I&apos;m <span className="text-success">{resumeData.name}</span>
                </p>
                <p className="text-neutral-content m-0">
                  📕 <span className="text-warning">{resumeData.title}</span>
                </p>
                <p className="text-neutral-content m-0">
                  📖 <span>{resumeData.summary}</span>
                </p>
                <p className="text-neutral-content m-0">
                  🌏 <span>{resumeData.work_preference}</span>
                </p>
                <p className="text-neutral-content m-0">
                  🔗 <a className="text-info no-underline" href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.linkedin}</a>
                </p>
                <p className="text-neutral-content m-0">
                  🐙 <a className="text-info no-underline" href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.github}</a>
                </p>
              </div>
              {/* end of whoami */}

              {/* start of techstack */}
              <hr className="border-red-900 mb-3 mt-3 h-[0.5px]" />
              <div className="flex flex-col">
                <p className="text-neutral-content mb-1 m-0">
                  <span className="text-primary">user@portfolio:~$</span> <span>techstack</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {resumeData.technology_stack.map((tech, index) => (
                    <div key={index} className="flex items-center p-1 border border-neutral-content rounded text-neutral-content bg-gray-950">
                      <i className={`devicon-${tech.toLowerCase().replace(/\s+/g, '')}-plain text-xs mr-2`}></i>
                      <span className="font-mono text-xs sm:text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of techstack */}

              {/* start of tools */}
              <hr className="border-red-900 mb-3 mt-3 h-[0.5px]" />
              <div className="flex flex-col">
                <p className="text-neutral-content mb-1 m-0">
                  <span className="text-primary">user@portfolio:~$</span> <span>tools</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {resumeData.tools.map((tool, index) => (
                    <div key={index} className="flex items-center p-1 border border-neutral-content rounded text-neutral-content bg-gray-950">
                      <i className={`devicon-${tool.toLowerCase().replace(/\s+/g, '')}-plain text-xs mr-2`}></i>
                      <span className="font-mono text-xs sm:text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of tools */}

              {/* start of educations */}
              <hr className="border-red-900 mb-3 mt-3 h-[0.5px]" />
              <div className="flex flex-col">
                <p className="text-neutral-content mb-1 m-0">
                  <span className="text-primary">user@portfolio:~$</span> <span>edu</span>
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {resumeData.educations.map((education, index) => (
                    <div key={index} className="p-4 border border-neutral-content rounded text-neutral-content bg-gray-950 mt-1 mb-1">
                      <p className="text-info font-bold mb-2" style={{ fontSize: '13px' }}>{education.university}</p>
                      <p className="text-warning font-bold mb-1 text-xs">{education.location}</p>
                      <p className="font-bold mb-1 text-xs">{education.degree} in <span className="text-success">{education.major}</span></p>
                      <p className="text-neutral-content mb-1 text-xs">
                        <span className="text-red-500">{education.start}</span> - <span className="text-red-500">{education.end}</span>
                      </p>
                      <p className="text-neutral-content italic mb-1 text-xs">{education.grade}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of educations */}

              {/* start of experiences */}
              <hr className="border-red-900 mb-3 mt-3 h-[0.5px]" />
              <div className="flex flex-col">
                <p className="text-neutral-content mb-1 m-0">
                  <span className="text-primary">user@portfolio:~$</span> <span>exp</span>
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {resumeData.experiences.map((experience, index) => (
                    <div key={index} className="p-4 border border-neutral-content rounded text-neutral-content bg-gray-950 mt-1 mb-1">
                      <p className="text-success font-bold mb-2" style={{ fontSize: '13px' }}>
                        {experience.position} <span className="text-neutral-content">at</span> <span className="text-purple-400">{experience.company}</span>
                      </p>
                      <p className="text-warning mb-1 italic text-xs">
                        {experience.start_date} - {experience.end_date} <span className="text-danger">({experience.duration})</span>
                      </p>
                      <p className="text-neutral-content mb-1" style={{ fontSize: '11px' }}>{experience.summary}</p>
                      <ul className="pl-5 list-disc text-neutral-content mb-0">
                        {experience.workarounds.map((workaround, index) => (
                          <li key={index} className="text-neutral-content mb-1" style={{ fontSize: '11px' }}>{workaround}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of experiences */}

              {/* start of languages */}
              <hr className="border-red-900 mb-3 mt-3 h-[0.5px]" />
              <div className="flex flex-col">
                <p className="text-neutral-content mb-1 m-0">
                  <span className="text-primary">user@portfolio:~$</span> <span>lang</span>
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {resumeData.languages.map((language, index) => (
                    <div key={index} className="flex border border-neutral-content justify-between p-1 mt-1 mb-1 rounded text-neutral-content bg-gray-950">
                      <p className="text-info font-bold">{language.language}</p>
                      <p className="text-warning font-bold">{language.proficiency}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of languages */}
              
              {/* start of footer */}
              <hr className="border-white mb-3 mt-3 h-[0.5px]" />
              <div className="flex flex-col">
                <p className="text-neutral-content text-center font-bold mb-3" style={{ fontSize: '10px' }}>
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
      <div className="fixed m-2 top-1 right-1 z-50 bg-neutral-900/75 border border-neutral-content rounded-lg w-[150px]">
        <div className="card shadow-xl flex flex-col items-center">
          <div className="card-body p-3">
            <h6 className="card-title" style={{ fontSize: '0.7rem' }}>
              <i className="devicon-css3-plain mr-1"></i> CSS Framework
            </h6>
            <select 
              className="select select-bordered select-xs w-full max-w-xs text-black"
              style={{ fontSize: '0.6rem' }}
              onChange={(e) => handleFrameworkChange({ name: e.target.value })}
              aria-label="CSS"
              value={cssFramework}
            >
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
      {/* end of floating button */}
      
    </div>
  );
}

ResumeTailwind.propTypes = {
  cssFramework: PropTypes.string.isRequired,
};

export default ResumeTailwind;