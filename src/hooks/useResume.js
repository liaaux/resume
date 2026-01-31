import { useState, useEffect } from 'react';
import { initialData } from '../data/initialData';

export const useResume = () => {
  const [resumeData, setResumeData] = useState(() => {
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const updatePersonalInfo = (info) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const updateSection = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const addItem = (section, item) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: [...prev[section], { ...item, id: crypto.randomUUID() }],
    }));
  };

  const updateItem = (section, id, updatedItem) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      ),
    }));
  };

  const removeItem = (section, id) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  const setTemplate = (template) => {
    setResumeData((prev) => ({ ...prev, template }));
  };

  const loadSampleData = (sample) => {
    setResumeData(sample);
  };

  const resetData = () => {
    setResumeData(initialData);
  };

  return {
    resumeData,
    updatePersonalInfo,
    updateSection,
    addItem,
    updateItem,
    removeItem,
    setTemplate,
    loadSampleData,
    resetData,
  };
};
