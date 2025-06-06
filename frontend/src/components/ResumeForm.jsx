// ResumeForm.jsx
import React from 'react';
import axios from 'axios';

function ResumeForm({ formData, setFormData }) {
  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const addEducation = () => {
    const newEducation = [...formData.education, { institution: '', degree: '', year: '' }];
    setFormData({ ...formData, education: newEducation });
  };

  const addExperience = () => {
    const newExperience = [...formData.experience, { company: '', role: '', duration: '', details: [] }];
    setFormData({ ...formData, experience: newExperience });
  };

  const updateEducation = (index, field, value) => {
    const updated = [...formData.education];
    updated[index][field] = value;
    setFormData({ ...formData, education: updated });
  };

  const updateExperience = (index, field, value) => {
    const updated = [...formData.experience];
    updated[index][field] = value;
    setFormData({ ...formData, experience: updated });
  };

  const addSkill = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      const newSkills = [...formData.skills, e.target.value.trim()];
      setFormData({ ...formData, skills: newSkills });
      e.target.value = '';
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post('api/resume/save', formData);
      alert('Resume saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save resume');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Personal Information</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Full Name"
          className="input w-64"
          onChange={(e) => updateField('name', e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input w-64"
          onChange={(e) => updateField('email', e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          className="input w-64"
          onChange={(e) => updateField('phone', e.target.value)}
        />
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Education</h2>
      {formData.education.map((edu, i) => (
        <div key={i} className="mb-3 space-y-1 flex flex-wrap gap-4">
          <input className="input w-64" placeholder="Institution" onChange={(e) => updateEducation(i, 'institution', e.target.value)} />
          <input className="input w-64" placeholder="Degree" onChange={(e) => updateEducation(i, 'degree', e.target.value)} />
          <input className="input w-32" placeholder="Year" onChange={(e) => updateEducation(i, 'year', e.target.value)} />
        </div>
      ))}
      <button className="btn" onClick={addEducation}>+ Add Education</button>

      <h2 className="text-xl font-semibold mt-6 mb-2">Experience</h2>
      {formData.experience.map((exp, i) => (
        <div key={i} className="mb-3 space-y-1">
          <input className="input" placeholder="Company" onChange={(e) => updateExperience(i, 'company', e.target.value)} />
          <input className="input" placeholder="Role" onChange={(e) => updateExperience(i, 'role', e.target.value)} />
          <input className="input" placeholder="Duration" onChange={(e) => updateExperience(i, 'duration', e.target.value)} />
        </div>
      ))}
      <button className="btn" onClick={addExperience}>+ Add Experience</button>

      <h2 className="text-xl font-semibold mt-6 mb-2">Skills</h2>
      <input
        type="text"
        placeholder="Type skill and press Enter"
        className="input"
        onKeyDown={addSkill}
      />
      <div className="flex flex-wrap gap-2 mt-2">
        {formData.skills.map((skill, i) => (
          <span key={i} className="px-2 py-1 bg-blue-100 rounded text-sm">{skill}</span>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 mt-6 rounded hover:bg-green-700"
      >
        Save Resume
      </button>
    </div>
  );
}

export default ResumeForm;

/* Add this to index.css or use Tailwind if available */
// .input {
//   @apply block px-4 py-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500;
// }
// .btn {
//   @apply bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4;
// }
