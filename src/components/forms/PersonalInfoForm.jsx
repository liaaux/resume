import React from 'react';
import FormSection from './FormSection';

const PersonalInfoForm = ({ data, updateData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <FormSection title="Personal Information" description="How can recruiters contact you?">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={data.name || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={data.email || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={data.phone || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
            placeholder="(555) 000-0000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={data.location || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
            placeholder="City, State"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            value={data.linkedin || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
            placeholder="linkedin.com/in/username"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Website</label>
          <input
            type="text"
            name="website"
            value={data.website || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
            placeholder="portfolio.com"
          />
        </div>
      </div>
    </FormSection>
  );
};

export default PersonalInfoForm;
