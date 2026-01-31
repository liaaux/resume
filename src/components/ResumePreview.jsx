import React, { forwardRef } from 'react';
import ModernTemplate from './previews/ModernTemplate';
import TraditionalTemplate from './previews/TraditionalTemplate';
import CreativeTemplate from './previews/CreativeTemplate';

const ResumePreview = forwardRef(({ data }, ref) => {
  const renderTemplate = () => {
    switch (data.template) {
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'traditional':
        return <TraditionalTemplate data={data} />;
      case 'creative':
        return <CreativeTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div
      ref={ref}
      className="bg-white shadow-2xl w-full max-w-[210mm] min-h-[297mm] h-fit p-12 print:p-0 print:shadow-none mx-auto"
      style={{
        aspectRatio: '1/1.414',
      }}
    >
      {renderTemplate()}
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
