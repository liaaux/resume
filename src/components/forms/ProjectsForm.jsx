import React from 'react';
import DynamicList from './DynamicList';

const ProjectsForm = ({ items, onAdd, onRemove, onChange }) => {
  const emptyItem = { name: '', description: '', link: '', technologies: '' };

  const renderItem = (item, updateItem) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Project Name</label>
        <input
          type="text"
          value={item.name}
          onChange={(e) => updateItem({ name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Link (Optional)</label>
        <input
          type="text"
          value={item.link}
          onChange={(e) => updateItem({ link: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Technologies</label>
        <input
          type="text"
          value={item.technologies}
          onChange={(e) => updateItem({ technologies: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
          placeholder="e.g. React, Node.js, Tailwind"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          rows={3}
          value={item.description}
          onChange={(e) => updateItem({ description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white p-2 border"
        />
      </div>
    </div>
  );

  return (
    <DynamicList
      title="Projects"
      description="Showcase your personal or professional projects."
      items={items}
      onAdd={onAdd}
      onRemove={onRemove}
      onChange={onChange}
      renderItem={renderItem}
      emptyItem={emptyItem}
    />
  );
};

export default ProjectsForm;
