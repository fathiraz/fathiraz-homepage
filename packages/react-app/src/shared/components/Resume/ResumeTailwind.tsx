import { useResumeData } from '../../utils/DataProvider';
import { AppConfig } from '../../types/Common';
import { Education, Experience, Language } from '../../../../../shared/utils/Api';
import { useTheme } from '../Navigation/UseTheme';
import { useRef } from 'react';
import NavTailwind from '../Navigation/NavTailwind';

function ResumeTailwind({ AppConfig }: { AppConfig: AppConfig }) {
    const { resumeData, configData, loading } = useResumeData();
    const { theme, toggleTheme } = useTheme();
    const terminalRef = useRef<HTMLDivElement>(null);

    if (loading) {
        return (
            <div className="container mx-auto px-4 my-24 animate__animated animate__fadeIn">
                <div className="flex justify-center">
                    <span className="loading loading-spinner loading-md text-primary">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 my-24">
            <NavTailwind AppConfig={AppConfig} configData={configData} />
            <div className="flex justify-center">
                <div className="w-full lg:w-3/4">
                    <div
                        className={`terminal-window shadow-xl rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                        <div
                            className="terminal-header flex items-center justify-between px-5 py-3 border-b border-gray-700">
                            <div className="terminal-buttons flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-error opacity-90 terminal-button close"></div>
                                <div
                                    className="w-3 h-3 rounded-full bg-warning opacity-90 terminal-button minimize"></div>
                                <div
                                    className="w-3 h-3 rounded-full bg-success opacity-90 terminal-button maximize"></div>
                            </div>
                            <div className="command-line terminal-title text-gray-400 font-mono">portfolio.sh</div>
                            <div className="w-[52px]"></div>
                        </div>
                        <div className="terminal-body">
                            <div className="command-output">

                                {/* start of whoami */}
                                <div className="p-6">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="space-y-2">
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <span className="text-blue-500">user@portfolio:~$</span> <span>whoami</span>
                                                </p>
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    👋🏻 Hello, I&apos;m <span
                                                        className="text-[#4ade80]">{resumeData.name}</span>
                                                </p>
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    📕 <span className="text-[#facc15]">{resumeData.title}</span>
                                                </p>
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    📖 <span>{resumeData.summary}</span>
                                                </p>
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    🌏 <span>{resumeData.work_preference}</span>
                                                </p>
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    🔗 <a
                                                        className="text-[#67e8f9] hover:underline"
                                                        href={`https://${resumeData.contact.linkedin}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {resumeData.contact.linkedin}
                                                    </a>
                                                </p>
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    🐙 <a
                                                        className="text-[#67e8f9] hover:underline"
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
                                </div>
                                {/* end of whoami */}

                                {/* start of techstack */}
                                <hr className="border-gray-700 mb-3 mt-3 h-[0.5px]" />
                                <div className="px-6 pb-6">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="space-y-2">
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <span className="text-blue-500">user@portfolio:~$</span> <span>techstack</span>
                                                </p>
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                    {resumeData.technology_stack.map((tech: string, index: number) => (
                                                        <div key={index}
                                                            className={`flex items-center p-1 border border-gray-700 rounded ${theme === 'dark' ? 'text-gray-300 bg-slate-950' : 'text-gray-600 bg-gray-100'}`}>
                                                            <i className={`devicon-${tech.toLowerCase().replace(/\s+/g, '')}-plain colored text-xs mr-2`}></i>
                                                            <span className="font-mono text-xs sm:text-sm">{tech}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of techstack */}

                                {/* start of tools */}
                                <hr className="border-gray-700 mb-3 mt-3 h-[0.5px]" />
                                <div className="px-6 pb-6">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="space-y-2">
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <span className="text-blue-500">user@portfolio:~$</span> <span>tools</span>
                                                </p>
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                    {resumeData.tools.map((tool: string, index: number) => (
                                                        <div key={index}
                                                            className={`flex items-center p-1 border border-gray-700 rounded ${theme === 'dark' ? 'text-gray-300 bg-slate-950' : 'text-gray-600 bg-gray-100'}`}>
                                                            <i className={`devicon-${tool.toLowerCase().replace(/\s+/g, '')}-plain colored text-xs mr-2`}></i>
                                                            <span className="font-mono text-xs sm:text-sm">{tool}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of tools */}

                                {/* start of educations */}
                                <hr className="border-gray-700 mb-3 mt-3 h-[0.5px]" />
                                <div className="px-6 pb-6">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="space-y-2">
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <span className="text-blue-500">user@portfolio:~$</span> <span>edu</span>
                                                </p>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {resumeData.educations.map((education: Education, index: number) => (
                                                        <div key={index}
                                                            className={`p-4 border border-gray-700 rounded mt-1 mb-1 ${theme === 'dark' ? 'text-gray-300 bg-slate-950' : 'text-gray-600 bg-gray-100'}`}>
                                                            <p className="text-[#4ade80] font-bold mb-2"
                                                                style={{ fontSize: '15px' }}>{education.university}</p>
                                                            <p className="text-[#facc15] font-bold mb-1 text-sm">{education.location}</p>
                                                            <p className="font-bold mb-1 text-sm">{education.degree} in <span
                                                                className="text-[#4ade80]">{education.major}</span></p>
                                                            <p className="text-gray-300 mb-1 text-sm">
                                                                <span
                                                                    className="text-red-500">{education.start}</span> - <span
                                                                        className="text-red-500">{education.end}</span>
                                                            </p>
                                                            <p className="text-gray-400 italic mb-1 text-sm">{education.grade}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of educations */}

                                {/* start of experiences */}
                                <hr className="border-gray-700 mb-3 mt-3 h-[0.5px]" />
                                <div className="px-6 pb-6">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="space-y-2">
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <span className="text-blue-500">user@portfolio:~$</span> <span>exp</span>
                                                </p>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {resumeData.experiences.map((experience: Experience, index: number) => (
                                                        <div key={index}
                                                            className={`p-4 border border-gray-700 rounded mt-1 mb-1 ${theme === 'dark' ? 'text-gray-300 bg-slate-950' : 'text-gray-600 bg-gray-100'}`}>
                                                            <p className="text-[#4ade80] font-bold mb-2"
                                                                style={{ fontSize: '15px' }}>
                                                                {experience.position} <span
                                                                    className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>at</span>
                                                                <span
                                                                    className="text-[#facc15]"> {experience.company}</span>
                                                            </p>
                                                            <p className="text-[#facc15] mb-1 italic text-sm">
                                                                {experience.start_date} - {experience.end_date} <span
                                                                    className="text-red-500">({experience.duration})</span>
                                                            </p>
                                                            <p className="text-gray-300 mb-1"
                                                                style={{ fontSize: '13px' }}>{experience.summary}</p>
                                                            <ul className="pl-5 list-disc text-gray-400 mb-0">
                                                                {experience.workarounds.map((workaround: string, index: number) => (
                                                                    <li key={index} className="text-gray-400 mb-1"
                                                                        style={{ fontSize: '13px' }}>{workaround}</li>
                                                                ))}
                                                            </ul>
                                                            <div className="mt-2">
                                                                {experience.skills_used.map((skill: string, i: number) => (
                                                                    <span key={i}
                                                                        className="badge badge-xs badge-primary mr-2 mb-2 font-bold text-white p-2"
                                                                        style={{ fontSize: '11px' }}>{skill}</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of experiences */}

                                {/* start of languages */}
                                <hr className="border-gray-700 mb-3 mt-3 h-[0.5px]" />
                                <div className="px-6 pb-6">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="space-y-2">
                                                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <span className="text-blue-500">user@portfolio:~$</span> <span>lang</span>
                                                </p>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {resumeData.languages.map((language: Language, index: number) => (
                                                        <div key={index}
                                                            className={`flex border border-gray-700 justify-between p-1 mt-1 mb-1 rounded ${theme === 'dark' ? 'text-gray-300 bg-slate-950' : 'text-gray-600 bg-gray-100'}`}>
                                                            <p className="text-[#4ade80] font-bold">{language.language}</p>
                                                            <p className="text-[#facc15] font-bold">{language.proficiency}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of languages */}

                                {/* start of footer */}
                                <hr className="border-white mb-3 mt-3 h-[0.5px]" />
                                <div className="flex flex-col">
                                    <p className="text-gray-300 text-center font-bold mb-3"
                                        style={{ fontSize: '10px' }}>
                                        Copyright &copy; {new Date().getFullYear()} Fathiraz. <br />
                                        Made with &hearts; using React JS framework with Vite
                                        and {AppConfig.CssFramework.charAt(0).toUpperCase() + AppConfig.CssFramework.slice(1)} CSS
                                        framework
                                    </p>
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

export default ResumeTailwind;
