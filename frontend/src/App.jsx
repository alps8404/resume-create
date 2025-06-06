import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';



// import React, { useState } from 'react';
// import ResumeForm from './ResumeForm';
// import ResumePreview from './ResumePreview';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: [],
    experience: [],
    skills: []
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResumeForm formData={formData} setFormData={setFormData} />
        <ResumePreview data={formData} />
      </div>

      {/* 🟢 Live JSON Preview */}
      <div className="mt-10 bg-gray-100 p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-2">Live JSON Preview</h2>
        <pre className="bg-white p-4 rounded text-sm overflow-auto max-h-96">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
