import { useResumeData } from '../../utils/DataProvider';
import { AppConfig } from '../../types/Common';
import { Helper } from '../../utils/Helper';
import { Education, Experience, Language } from '../../../../../shared/utils/Api';

// this component displays the resume information in a terminal-like interface using the UIkit CSS framework
// allowing users to view personal details, tech stack, tools, education, experiences, languages, 
// and provides an option to change the CSS framework dynamically
function ResumeUIkit({ AppConfig }: { AppConfig: AppConfig }) {
  const { resumeData, configData, loading } = useResumeData();

  if (loading) {
    return (
      <div className="uk-container uk-container-small uk-margin-medium-top uk-margin-medium-bottom uk-animation-fade animate__animated animate__fadeIn" style={{ maxWidth: '1300px' }}>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded" style={{ fontFamily: 'monospace', backgroundColor: '#212529', fontSize: '0.875rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
          <div className="uk-flex uk-flex-between uk-margin-small-bottom">
            <div>
              <span className="uk-margin-small-right" style={{ width: '12px', height: '12px', backgroundColor: '#f0506e', borderRadius: '50%', display: 'inline-block' }}></span>
              <span className="uk-margin-small-right" style={{ width: '12px', height: '12px', backgroundColor: '#faa05a', borderRadius: '50%', display: 'inline-block' }}></span>
              <span style={{ width: '12px', height: '12px', backgroundColor: '#32d296', borderRadius: '50%', display: 'inline-block' }}></span>
            </div>
            <div style={{ color: '#fff', marginLeft: '10px' }}>Resume Terminal</div>
          </div>
          <hr style={{ border: '1px solid #333' }} />
          <div className="uk-margin">
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index} className="uk-grid-small uk-grid-match uk-margin-small uk-width-2xlarge@l uk-width-xlarge@m uk-width-large@s">
                <div className="uk-width-1-1">
                  <progress className="uk-progress" value="0" max="100"></progress>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="uk-container uk-container-small uk-margin-medium-top uk-margin-medium-bottom">
      <div className="uk-card uk-card-body uk-border-rounded" style={{ fontFamily: 'monospace', backgroundColor: '#212529', fontSize: '0.875rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
        <div className="uk-flex uk-flex-between uk-margin-small-bottom">
          <div>
            <span className="uk-margin-small-right" style={{ width: '12px', height: '12px', backgroundColor: '#f0506e', borderRadius: '50%', display: 'inline-block' }}></span>
            <span className="uk-margin-small-right" style={{ width: '12px', height: '12px', backgroundColor: '#faa05a', borderRadius: '50%', display: 'inline-block' }}></span>
            <span style={{ width: '12px', height: '12px', backgroundColor: '#32d296', borderRadius: '50%', display: 'inline-block' }}></span>
          </div>
          <div style={{ color: '#fff' }}>Resume Terminal</div>
        </div>
        <hr />

        {/* whoami section */}
        <div className="uk-margin">
          <p className="uk-text-muted uk-margin-small-bottom">
            <span className="uk-text-primary">user@portfolio:~$</span> whoami
          </p>
          <p className="uk-text-muted uk-margin-remove">👋🏻 Hello, I'm <span className="uk-text-success">{resumeData.name}</span></p>
          <p className="uk-text-muted uk-margin-remove">📕 <span className="uk-text-warning">{resumeData.title}</span></p>
          <p className="uk-text-muted uk-margin-remove">📖 <span>{resumeData.summary}</span></p>
          <p className="uk-text-muted uk-margin-remove">🌏 <span>{resumeData.work_preference}</span></p>
          <p className="uk-margin-remove" style={{ color: '#17a2b8' }}>
            🔗 <a className="uk-link-text" href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.linkedin}</a>
          </p>
          <p className="uk-margin-remove" style={{ color: '#17a2b8' }}>
            🐙 <a className="uk-link-text" href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.github}</a>
          </p>
        </div>

        {/* techstack section */}
        <hr style={{ border: '1px solid #333' }} />
        <div className="uk-margin">
          <p className="uk-text-muted uk-margin-small-bottom">
            <span className="uk-text-primary">user@portfolio:~$</span> techstack
          </p>
          <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-2 uk-child-width-1-4@m uk-text-small" style={{ backgroundColor: '#222', border: '1px solid #333', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
            {resumeData.technology_stack.map((tech: string, index: number) => (
              <div key={index}>
                <div className="uk-card uk-card-secondary uk-card-body uk-card-small uk-flex uk-flex-middle uk-height-1-1">
                  <i className={`devicon-${tech.toLowerCase().replace(/\s+/g, '')}-plain uk-margin-small-right`}></i>
                  <span>{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* tools section */}
        <hr style={{ border: '1px solid #333' }} />
        <div className="uk-margin">
          <p className="uk-text-muted uk-margin-small-bottom">
            <span className="uk-text-primary">user@portfolio:~$</span> tools
          </p>
          <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-2 uk-child-width-1-4@m uk-text-small" style={{ backgroundColor: '#222', border: '1px solid #333', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
            {resumeData.tools.map((tool: string, index: number) => (
              <div key={index}>
                <div className="uk-card uk-card-secondary uk-card-body uk-card-small uk-flex uk-flex-middle uk-height-1-1">
                  <i className={`devicon-${tool.toLowerCase().replace(/\s+/g, '')}-plain uk-margin-small-right`}></i>
                  <span>{tool}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* educations section */}
        <hr style={{ border: '1px solid #333' }} />
        <div className="uk-margin">
          <p className="uk-text-muted uk-margin-remove-bottom">
            <span className="uk-text-primary">user@portfolio:~$</span> edu
          </p>
          {resumeData.educations.map((education: Education, index: number) => (
            <div key={index} className="uk-card uk-card-secondary uk-card-body uk-card-small uk-margin-small-top" style={{ backgroundColor: '#222', border: '1px solid #333', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
              <h4 className="uk-card-title uk-margin-remove-bottom uk-text-bold" style={{ color: '#17a2b8' }}>{education.university}</h4>
              <p className="uk-text-meta uk-margin-remove-top uk-text-bold uk-text-warning">{education.location}</p>
              <p className="uk-text-bold uk-text-default">{education.degree} in <span className="uk-text-success">{education.major}</span></p>
              <p className="uk-text-danger uk-text-bold">{education.start} - {education.end}</p>
              <p className="uk-text-italic">{education.grade}</p>
            </div>
          ))}
        </div>

        {/* experiences section */}
        <hr style={{ border: '1px solid #333' }} />
        <div className="uk-margin">
          <p className="uk-text-muted uk-margin-remove-bottom">
            <span className="uk-text-primary">user@portfolio:~$</span> exp
          </p>
          {resumeData.experiences.map((experience: Experience, index: number) => (
            <div key={index} className="uk-card uk-card-body uk-card-small uk-margin-small-top uk-text-muted" style={{ backgroundColor: '#222', border: '1px solid #333', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
              <h4 className="uk-card-title uk-margin-remove-bottom uk-text-bold uk-text-success">
                {experience.position} <span className="uk-text-default">at</span> <span style={{ color: '#C678DD' }}>{experience.company}</span>
              </h4>
              <p className="uk-text-meta uk-margin-remove-top uk-text-warning">
                {experience.start_date} - {experience.end_date} <span className="uk-text-danger">({experience.duration})</span>
              </p>
              <p>{experience.summary}</p>
              <ul className="uk-list uk-list-bullet">
                {experience.workarounds.map((workaround: string, i: number) => (
                  <li key={i}>{workaround}</li>
                ))}
              </ul>
              <div>
                {experience.skills_used.map((skill: string, i: number) => (
                  <span key={i} className="uk-label uk-background-primary uk-margin-small-right uk-margin-small-bottom uk-text-small">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* languages section */}
        <hr style={{ border: '1px solid #333' }} />
        <div className="uk-margin">
          <p className="uk-text-muted uk-margin-small-bottom">
            <span className="uk-text-primary">user@portfolio:~$</span> lang
          </p>
          <div>
            {resumeData.languages.map((language: Language, index: number) => (
              <div key={index} className="uk-margin-small-bottom">
                <div className="uk-card uk-card-secondary uk-card-body uk-card-small uk-flex uk-flex-between uk-flex-middle uk-text-small" style={{ backgroundColor: '#222', border: '1px solid #333', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
                  <span className="uk-text-bold" style={{ color: '#17a2b8' }}>{language.language}</span>
                  <span className="uk-text-warning">{language.proficiency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <hr />
        <div className="uk-text-center uk-text-small" style={{ color: '#fff' }}>
          <p>
            Copyright © {new Date().getFullYear()} Fathiraz. <br />
            Made with 🩵 using React JS framework with Vite and {AppConfig.CssFramework.charAt(0).toUpperCase() + AppConfig.CssFramework.slice(1)} CSS framework
          </p>
        </div>
      </div>

      {/* floating button */}
      <div className="uk-position-fixed uk-position-top-right uk-margin-small-top uk-margin-small-right" style={{ border: '1px solid #333', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
        <div className="uk-card uk-card-secondary uk-card-body uk-card-small">
          <h6 className="uk-card-title uk-text-small" style={{ fontSize: '0.7rem' }}>
            <i className="devicon-css3-plain uk-margin-small-right"></i> CSS Framework
          </h6>
          <select
            className="uk-select uk-form-small"
            onChange={(e) => Helper.handleFrameworkChange(e.target.value)}
            style={{ fontSize: '0.6rem' }}
            value={AppConfig.CssFramework}
          >
            <option value="" disabled>CSS Framework</option>
            {configData.frameworks.css.map((framework) => (
              <option key={framework.name} value={framework.name}>
                {framework.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ResumeUIkit;