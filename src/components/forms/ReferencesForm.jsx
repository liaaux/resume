import React from 'react';
import DynamicList from './DynamicList';

const ReferencesForm = ({ items, onAdd, onRemove, onChange }) => {
  const emptyItem = { name: '', position: '', company: '', contact: '' };

  const renderItem = (item, updateItem) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={item.name}
          onChange={(e) => updateItem({ name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Position</label>
        <input
          type="text"
          value={item.position}
          onChange={(e) => updateItem({ position: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          value={item.company}
          onChange={(e) => updateItem({ company: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Contact Info (Email/Phone)</label>
        <input
          type="text"
          value={item.contact}
          onChange={(e) => updateItem({ contact: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
    </div>
  );

  return (
    <DynamicList
      title="References"
      description="List people who can vouch for your work."
      items={items}
      onAdd={onAdd}
      onRemove={onRemove}
      onChange={onChange}
      renderItem={renderItem}
      emptyItem={emptyItem}
    />
  );
};

export default ReferencesForm;
