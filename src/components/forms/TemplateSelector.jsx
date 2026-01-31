import React from 'react';
import FormSection from './FormSection';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';

const TemplateSelector = ({ selected, onSelect }) => {
  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and professional' },
    { id: 'traditional', name: 'Traditional', description: 'Classic and reliable' },
    { id: 'creative', name: 'Creative', description: 'Bold and unique' },
  ];

  return (
    <FormSection title="Choose a Template" description="Select the design that best fits your industry.">
      <div className="grid grid-cols-1 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={clsx(
              'flex items-center justify-between p-4 border-2 rounded-lg text-left transition-all',
              selected === template.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            )}
          >
            <div>
              <h3 className="font-bold text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-500">{template.description}</p>
            </div>
            {selected === template.id && (
              <div className="bg-blue-600 text-white rounded-full p-1">
                <Check size={20} />
              </div>
            )}
          </button>
        ))}
      </div>
    </FormSection>
  );
};

export default TemplateSelector;
