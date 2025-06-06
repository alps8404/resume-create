// ResumePreview.jsx
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumePreview = ({ data }) => {
  const previewRef = useRef();

  const handleDownload = () => {
    html2canvas(previewRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <div ref={previewRef} className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg text-gray-800">
        <h1 className="text-4xl font-bold text-center text-blue-700">{data.name}</h1>
        <p className="text-center mt-1">{data.location} | {data.email} | {data.phone}</p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2 text-blue-600">Summary</h2>
          <p>{data.summary}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2 text-blue-600">Education</h2>
          {data.education?.map((edu, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold text-lg">{edu.degree}, {edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.year}</p>
            </div>
          ))}
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2 text-blue-600">Experience</h2>
          {data.experience?.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold text-lg">{exp.role} at {exp.company}</p>
              <p className="text-sm text-gray-600">{exp.duration}</p>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                {exp.details?.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2 text-blue-600">Projects</h2>
          {data.projects?.map((proj, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold text-lg">{proj.name}</p>
              <p className="text-sm text-gray-600 italic">{proj.description}</p>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                {proj.bullets?.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2 text-blue-600">Achievements</h2>
          <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
            {data.achievements?.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2 text-blue-600">Programming Knowledge</h2>
          <p><strong>Skills:</strong> {data.skills?.join(', ')}</p>
          <p><strong>Technologies:</strong> {data.technologies?.join(', ')}</p>
        </section>
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;
