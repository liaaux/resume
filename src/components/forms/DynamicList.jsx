import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const DynamicList = ({ items, onAdd, onRemove, onChange, renderItem, title, description, emptyItem }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {description && <p className="text-gray-500 text-sm">{description}</p>}
      </div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative p-4 border rounded-lg bg-gray-50 space-y-4">
            <button
              onClick={() => onRemove(item.id)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors"
            >
              <Trash2 size={20} />
            </button>
            {renderItem(item, (updatedFields) => onChange(item.id, updatedFields))}
          </div>
        ))}
      </div>

      <button
        onClick={() => onAdd(emptyItem)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <Plus size={20} />
        Add Item
      </button>
    </div>
  );
};

export default DynamicList;
