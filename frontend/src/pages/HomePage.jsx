import React, { useState, useRef } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import { useReactToPrint } from 'react-to-print';

const HomePage = () => {
  const [resumeData, setResumeData] = useState({});
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResumeForm onDataChange={setResumeData} />
        <div ref={resumeRef}>
          <ResumePreview data={resumeData} />
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default HomePage;
