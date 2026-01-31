import React from 'react';

const CreativeTemplate = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, languages, certifications, references } = data;

  return (
    <div className="flex h-full min-h-[1000px] text-gray-800 font-sans">
      {/* Sidebar */}
      <aside className="w-1/3 bg-gray-900 text-white p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold leading-tight break-words">{personalInfo.name || 'Your Name'}</h1>
        </div>

        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 border-b border-gray-700 pb-1">Contact</h2>
          <div className="space-y-2 text-xs text-gray-300">
            {personalInfo.email && <p className="break-all">{personalInfo.email}</p>}
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.location && <p>{personalInfo.location}</p>}
            {personalInfo.linkedin && <p className="break-all">{personalInfo.linkedin}</p>}
            {personalInfo.website && <p className="break-all">{personalInfo.website}</p>}
          </div>
        </section>

        {skills.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 border-b border-gray-700 pb-1">Skills</h2>
            <div className="space-y-3">
              {skills.map(skill => (
                <div key={skill.id}>
                  <p className="text-xs font-medium">{skill.name}</p>
                  <div className="w-full bg-gray-700 h-1 mt-1">
                    <div
                      className="bg-blue-400 h-full"
                      style={{
                        width: skill.level === 'Expert' ? '100%' :
                               skill.level === 'Advanced' ? '75%' :
                               skill.level === 'Intermediate' ? '50%' : '25%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {languages.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 border-b border-gray-700 pb-1">Languages</h2>
            <div className="space-y-2">
              {languages.map(lang => (
                <div key={lang.id} className="text-xs">
                  <p className="font-bold">{lang.name}</p>
                  <p className="text-gray-400">{lang.level}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </aside>

      {/* Main Content */}
      <main className="w-2/3 p-8 space-y-8 bg-white">
        {personalInfo.summary && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Profile</h2>
            <p className="text-sm leading-relaxed text-gray-600">{personalInfo.summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="space-y-6">
              {experience.map(exp => (
                <div key={exp.id} className="relative pl-6 border-l-2 border-gray-100">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 mb-2">{exp.company} | {exp.location}</p>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id}>
                  <h3 className="font-bold text-gray-900">{edu.degree} in {edu.field}</h3>
                  <p className="text-sm text-gray-500">{edu.school} | {edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="grid grid-cols-1 gap-4">
              {projects.map(project => (
                <div key={project.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900">{project.name}</h3>
                  <p className="text-xs text-blue-600 mb-1">{project.technologies}</p>
                  <p className="text-xs text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default CreativeTemplate;
