import React from 'react';

const ModernTemplate = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, languages, certifications, references } = data;

  return (
    <div className="text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b-4 border-blue-600 pb-6 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 uppercase tracking-tight">{personalInfo.name || 'Your Name'}</h1>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {/* Summary */}
        {personalInfo.summary && (
          <section>
            <h2 className="text-lg font-bold text-blue-600 uppercase border-b border-gray-200 mb-2">Summary</h2>
            <p className="text-sm leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-blue-600 uppercase border-b border-gray-200 mb-3">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-xs font-medium text-gray-500">
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm text-gray-700 italic">
                    <span>{exp.company}</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="mt-2 text-sm whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-blue-600 uppercase border-b border-gray-200 mb-3">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900">{edu.degree} in {edu.field}</h3>
                    <span className="text-xs font-medium text-gray-500">
                      {edu.startDate} — {edu.current ? 'Present' : edu.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm text-gray-700 italic">
                    <span>{edu.school}</span>
                    <span>{edu.location}</span>
                  </div>
                  {edu.description && <p className="mt-1 text-sm">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills & Others in a grid */}
        <div className="grid grid-cols-2 gap-8">
          {skills.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-blue-600 uppercase border-b border-gray-200 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {skill.name} • <span className="text-gray-500">{skill.level}</span>
                  </span>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-blue-600 uppercase border-b border-gray-200 mb-3">Projects</h2>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id}>
                    <h3 className="text-sm font-bold text-gray-900">{project.name}</h3>
                    {project.technologies && <p className="text-[10px] text-blue-500 font-medium uppercase">{project.technologies}</p>}
                    <p className="text-xs mt-1 italic">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8">
          {certifications.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-blue-600 uppercase border-b border-gray-200 mb-3">Certifications</h2>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.id} className="text-sm">
                    <span className="font-bold text-gray-900">{cert.name}</span>
                    <p className="text-xs text-gray-600">{cert.issuer} | {cert.date}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {languages.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-blue-600 uppercase border-b border-gray-200 mb-3">Languages</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {languages.map((lang) => (
                  <div key={lang.id} className="text-sm">
                    <span className="font-bold text-gray-900">{lang.name}</span> — <span className="text-gray-600">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {references.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-blue-600 uppercase border-b border-gray-200 mb-3">References</h2>
            <div className="grid grid-cols-2 gap-4">
              {references.map((ref) => (
                <div key={ref.id} className="text-sm">
                  <p className="font-bold text-gray-900">{ref.name}</p>
                  <p className="text-gray-600 text-xs">{ref.position}, {ref.company}</p>
                  <p className="text-gray-500 text-xs italic">{ref.contact}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
