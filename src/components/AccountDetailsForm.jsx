import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Input = ({ label, type = 'text', value, onChange, placeholder, required = false }) => (
  <label className="grid gap-2">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
    />
  </label>
);

const AccountDetailsForm = ({ onSave, initial = {} }) => {
  const [form, setForm] = useState({
    fullName: initial.fullName || '',
    email: initial.email || '',
    phone: initial.phone || '',
    university: initial.university || '',
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      await new Promise((r) => setTimeout(r, 600));
      onSave?.(form);
      setMessage('Account details saved');
    } catch (err) {
      setMessage('Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Mail className="h-5 w-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Account Details</h2>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Full name" value={form.fullName} onChange={update('fullName')} placeholder="Alex Johnson" required />
        <Input label="Email" type="email" value={form.email} onChange={update('email')} placeholder="alex@email.com" required />
        <Input label="Phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="(555) 000-0000" />
        <Input label="University" value={form.university} onChange={update('university')} placeholder="State University" />

        <div className="sm:col-span-2 mt-2 flex items-center justify-between">
          <p className={`text-sm ${message.includes('saved') ? 'text-green-600' : 'text-gray-500'}`}>{message}</p>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {saving ? 'Saving...' : 'Save changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetailsForm;
