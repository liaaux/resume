import React from 'react';
import FormSection from './FormSection';

const SummaryForm = ({ data, updateData }) => {
  return (
    <FormSection title="Professional Summary" description="Briefly describe your career and key achievements.">
      <div>
        <label className="block text-sm font-medium text-gray-700">Summary</label>
        <textarea
          rows={5}
          value={data.summary || ''}
          onChange={(e) => updateData({ summary: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
          placeholder="Professional summary..."
        />
      </div>
    </FormSection>
  );
};

export default SummaryForm;
