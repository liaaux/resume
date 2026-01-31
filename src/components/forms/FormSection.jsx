import React from 'react';

const FormSection = ({ title, children, description }) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {description && <p className="text-gray-500 text-sm">{description}</p>}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
