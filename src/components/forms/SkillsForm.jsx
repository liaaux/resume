import React from 'react';
import DynamicList from './DynamicList';

const SkillsForm = ({ items, onAdd, onRemove, onChange }) => {
  const emptyItem = { name: '', level: 'Intermediate' };

  const renderItem = (item, updateItem) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Skill Name</label>
        <input
          type="text"
          value={item.name}
          onChange={(e) => updateItem({ name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
          placeholder="e.g. React"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Level</label>
        <select
          value={item.level}
          onChange={(e) => updateItem({ level: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Expert</option>
        </select>
      </div>
    </div>
  );

  return (
    <DynamicList
      title="Skills"
      description="List your technical or soft skills."
      items={items}
      onAdd={onAdd}
      onRemove={onRemove}
      onChange={onChange}
      renderItem={renderItem}
      emptyItem={emptyItem}
    />
  );
};

export default SkillsForm;
