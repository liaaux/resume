import React from 'react';
import DynamicList from './DynamicList';

const LanguagesForm = ({ items, onAdd, onRemove, onChange }) => {
  const emptyItem = { name: '', level: 'Full Professional Proficiency' };

  const renderItem = (item, updateItem) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Language</label>
        <input
          type="text"
          value={item.name}
          onChange={(e) => updateItem({ name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Level</label>
        <input
          type="text"
          value={item.level}
          onChange={(e) => updateItem({ level: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
          placeholder="e.g. Native, Fluent"
        />
      </div>
    </div>
  );

  return (
    <DynamicList
      title="Languages"
      description="List the languages you speak."
      items={items}
      onAdd={onAdd}
      onRemove={onRemove}
      onChange={onChange}
      renderItem={renderItem}
      emptyItem={emptyItem}
    />
  );
};

export default LanguagesForm;
