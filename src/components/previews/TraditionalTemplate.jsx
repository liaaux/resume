import React from 'react';

const TraditionalTemplate = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, languages, certifications, references } = data;

  return (
    <div className="text-black font-serif p-4">
      {/* Header */}
      <header className="text-center mb-6 space-y-1">
        <h1 className="text-3xl font-bold uppercase">{personalInfo.name || 'Your Name'}</h1>
        <div className="text-sm flex flex-wrap justify-center gap-2">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.location && <span>|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && <span>|</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
        </div>
        <div className="text-sm flex flex-wrap justify-center gap-2">
          {personalInfo.linkedin && <span>LinkedIn: {personalInfo.linkedin}</span>}
          {personalInfo.website && <span>| Website: {personalInfo.website}</span>}
        </div>
      </header>

      <div className="space-y-6">
        {/* Summary */}
        {personalInfo.summary && (
          <section>
            <h2 className="text-sm font-bold uppercase border-b border-black mb-1">Professional Summary</h2>
            <p className="text-sm italic">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase border-b border-black mb-2">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between font-bold text-sm">
                    <span>{exp.company}</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex justify-between italic text-sm">
                    <span>{exp.role}</span>
                    <span>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p className="mt-1 text-sm whitespace-pre-line text-justify leading-snug">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase border-b border-black mb-2">Education</h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between font-bold text-sm">
                    <span>{edu.school}</span>
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex justify-between italic text-sm">
                    <span>{edu.degree} in {edu.field}</span>
                    <span>{edu.startDate} — {edu.current ? 'Present' : edu.endDate}</span>
                  </div>
                  {edu.description && <p className="text-sm mt-0.5">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase border-b border-black mb-1">Technical Skills</h2>
            <p className="text-sm">
              {skills.map((skill, i) => (
                <span key={skill.id}>
                  <span className="font-bold">{skill.name}</span> ({skill.level}){i < skills.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase border-b border-black mb-2">Relevant Projects</h2>
            <div className="space-y-2">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between items-baseline font-bold text-sm">
                    <span>{project.name}</span>
                    {project.link && <span className="text-xs font-normal underline">{project.link}</span>}
                  </div>
                  {project.technologies && <p className="text-xs italic">Technologies: {project.technologies}</p>}
                  <p className="text-sm text-justify">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certs & Languages */}
        <div className="grid grid-cols-2 gap-4">
           {certifications.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase border-b border-black mb-1">Certifications</h2>
              <ul className="text-sm list-disc ml-4">
                {certifications.map(cert => (
                  <li key={cert.id}>{cert.name} ({cert.issuer})</li>
                ))}
              </ul>
            </section>
          )}
          {languages.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase border-b border-black mb-1">Languages</h2>
              <ul className="text-sm list-disc ml-4">
                {languages.map(lang => (
                  <li key={lang.id}>{lang.name} — {lang.level}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {references.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase border-b border-black mb-1">References</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {references.map(ref => (
                <div key={ref.id}>
                  <strong>{ref.name}</strong>, {ref.position} at {ref.company} ({ref.contact})
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TraditionalTemplate;
