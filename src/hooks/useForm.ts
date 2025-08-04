// useForm Hook
import { useState } from 'react';
import type { FormData } from '../types';

export const useForm = (initialState: FormData) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData(initialState);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const reset = () => setFormData(initialState);

  return { formData, handleChange, handleSubmit, reset };
};
