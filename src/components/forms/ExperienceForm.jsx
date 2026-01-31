import React from 'react';
import DynamicList from './DynamicList';

const ExperienceForm = ({ items, onAdd, onRemove, onChange }) => {
  const emptyItem = {
    company: '',
    role: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
  };

  const renderItem = (item, updateItem) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          value={item.company}
          onChange={(e) => updateItem({ company: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <input
          type="text"
          value={item.role}
          onChange={(e) => updateItem({ role: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={item.location}
          onChange={(e) => updateItem({ location: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="month"
          value={item.startDate}
          onChange={(e) => updateItem({ startDate: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <div className="space-y-2">
          <input
            type="month"
            value={item.endDate}
            disabled={item.current}
            onChange={(e) => updateItem({ endDate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border disabled:bg-gray-200"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={item.current}
              onChange={(e) => updateItem({ current: e.target.checked, endDate: e.target.checked ? '' : item.endDate })}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600">I currently work here</span>
          </label>
        </div>
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          rows={4}
          value={item.description}
          onChange={(e) => updateItem({ description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
          placeholder="Describe your achievements and responsibilities..."
        />
      </div>
    </div>
  );

  return (
    <DynamicList
      title="Work Experience"
      description="List your relevant work history."
      items={items}
      onAdd={onAdd}
      onRemove={onRemove}
      onChange={onChange}
      renderItem={renderItem}
      emptyItem={emptyItem}
    />
  );
};

export default ExperienceForm;
