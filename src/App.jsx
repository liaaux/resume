import React, { useRef, useState } from 'react';
import { useResume } from './hooks/useResume';
import Wizard from './components/Wizard';
import ResumePreview from './components/ResumePreview';
import { useReactToPrint } from 'react-to-print';
import { Download, Eye, Edit3 } from 'lucide-react';

function App() {
  const resumeProps = useResume();
  const componentRef = useRef(null);
  const [showPreviewMobile, setShowPreviewMobile] = useState(false);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `${resumeProps.resumeData.personalInfo.name || 'Resume'}_${resumeProps.resumeData.template}`,
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">R</div>
            <h1 className="text-xl font-bold tracking-tight">Resume <span className="text-blue-600">Builder</span></h1>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setShowPreviewMobile(!showPreviewMobile)}
              className="xl:hidden flex items-center gap-2 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all font-medium text-sm"
            >
              {showPreviewMobile ? <Edit3 size={18} /> : <Eye size={18} />}
              {showPreviewMobile ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={() => handlePrint()}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 md:px-5 py-2 rounded-lg hover:bg-blue-700 transition-all font-bold shadow-md shadow-blue-100 text-sm md:text-base"
            >
              <Download size={18} />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-[1600px] mx-auto w-full p-4 md:p-6 overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-full items-start">
          {/* Left Side: Wizard */}
          <div className={`h-full overflow-hidden ${showPreviewMobile ? 'hidden' : 'block'} xl:block sticky top-24`}>
            <Wizard {...resumeProps} />
          </div>

          {/* Right Side: Preview */}
          <div className={`h-full flex flex-col gap-4 ${!showPreviewMobile ? 'hidden' : 'block'} xl:block`}>
             <div className="bg-gray-200 rounded-xl shadow-inner p-4 md:p-8 overflow-y-auto h-full min-h-[500px] flex justify-center">
                <div className="origin-top transition-transform duration-300 transform-gpu scale-[0.6] sm:scale-[0.7] md:scale-[0.85] lg:scale-[0.9] xl:scale-[0.7] 2xl:scale-[0.85]">
                   <ResumePreview ref={componentRef} data={resumeProps.resumeData} />
                </div>
             </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-3 px-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Resume Builder - Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
