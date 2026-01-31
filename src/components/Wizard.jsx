import React, { useState } from 'react';
import PersonalInfoForm from './forms/PersonalInfoForm';
import SummaryForm from './forms/SummaryForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import LanguagesForm from './forms/LanguagesForm';
import CertificationsForm from './forms/CertificationsForm';
import ReferencesForm from './forms/ReferencesForm';
import TemplateSelector from './forms/TemplateSelector';
import { ChevronLeft, ChevronRight, RotateCcw, FileText } from 'lucide-react';
import { sampleData } from '../data/initialData';

const steps = [
  { id: 'personal', title: 'Personal Info' },
  { id: 'summary', title: 'Summary' },
  { id: 'experience', title: 'Experience' },
  { id: 'education', title: 'Education' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'languages', title: 'Languages' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'references', title: 'References' },
  { id: 'template', title: 'Template' },
];

const Wizard = ({
  resumeData,
  updatePersonalInfo,
  updateSection,
  addItem,
  updateItem,
  removeItem,
  setTemplate,
  loadSampleData,
  resetData,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (steps[currentStep].id) {
      case 'personal':
        return <PersonalInfoForm data={resumeData.personalInfo} updateData={updatePersonalInfo} />;
      case 'summary':
        return <SummaryForm data={resumeData.personalInfo} updateData={updatePersonalInfo} />;
      case 'experience':
        return (
          <ExperienceForm
            items={resumeData.experience}
            onAdd={(item) => addItem('experience', item)}
            onRemove={(id) => removeItem('experience', id)}
            onChange={(id, fields) => updateItem('experience', id, fields)}
          />
        );
      case 'education':
        return (
          <EducationForm
            items={resumeData.education}
            onAdd={(item) => addItem('education', item)}
            onRemove={(id) => removeItem('education', id)}
            onChange={(id, fields) => updateItem('education', id, fields)}
          />
        );
      case 'skills':
        return (
          <SkillsForm
            items={resumeData.skills}
            onAdd={(item) => addItem('skills', item)}
            onRemove={(id) => removeItem('skills', id)}
            onChange={(id, fields) => updateItem('skills', id, fields)}
          />
        );
      case 'projects':
        return (
          <ProjectsForm
            items={resumeData.projects}
            onAdd={(item) => addItem('projects', item)}
            onRemove={(id) => removeItem('projects', id)}
            onChange={(id, fields) => updateItem('projects', id, fields)}
          />
        );
      case 'languages':
        return (
          <LanguagesForm
            items={resumeData.languages}
            onAdd={(item) => addItem('languages', item)}
            onRemove={(id) => removeItem('languages', id)}
            onChange={(id, fields) => updateItem('languages', id, fields)}
          />
        );
      case 'certifications':
        return (
          <CertificationsForm
            items={resumeData.certifications}
            onAdd={(item) => addItem('certifications', item)}
            onRemove={(id) => removeItem('certifications', id)}
            onChange={(id, fields) => updateItem('certifications', id, fields)}
          />
        );
      case 'references':
        return (
          <ReferencesForm
            items={resumeData.references}
            onAdd={(item) => addItem('references', item)}
            onRemove={(id) => removeItem('references', id)}
            onChange={(id, fields) => updateItem('references', id, fields)}
          />
        );
      case 'template':
        return <TemplateSelector selected={resumeData.template} onSelect={setTemplate} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 p-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="text-blue-600" />
          <h2 className="font-bold text-gray-800">Step {currentStep + 1} of {steps.length}</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => loadSampleData(sampleData)}
            className="text-xs flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-gray-600"
          >
            Load Sample
          </button>
          <button
            onClick={resetData}
            className="text-xs flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-red-600"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        {renderStep()}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-100 p-4 px-6 flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:hover:text-gray-600 transition-colors font-medium"
        >
          <ChevronLeft size={20} />
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="flex items-center gap-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors font-bold shadow-md shadow-blue-100"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Wizard;
