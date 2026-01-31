import React from 'react';
import DynamicList from './DynamicList';

const CertificationsForm = ({ items, onAdd, onRemove, onChange }) => {
  const emptyItem = { name: '', issuer: '', date: '' };

  const renderItem = (item, updateItem) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Certification Name</label>
        <input
          type="text"
          value={item.name}
          onChange={(e) => updateItem({ name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Issuer</label>
        <input
          type="text"
          value={item.issuer}
          onChange={(e) => updateItem({ issuer: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="month"
          value={item.date}
          onChange={(e) => updateItem({ date: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
    </div>
  );

  return (
    <DynamicList
      title="Certifications"
      description="List your professional certifications."
      items={items}
      onAdd={onAdd}
      onRemove={onRemove}
      onChange={onChange}
      renderItem={renderItem}
      emptyItem={emptyItem}
    />
  );
};

export default CertificationsForm;
