import React, { useState } from 'react';
import { Shield, Lock } from 'lucide-react';

const SecuritySection = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!password || password.length < 8) {
      setMessage('Password must be at least 8 characters');
      return;
    }
    if (password !== confirm) {
      setMessage('Passwords do not match');
      return;
    }
    setSaving(true);
    await new Promise((r) => setTimeout(r, 600));
    setSaving(false);
    setPassword('');
    setConfirm('');
    setMessage('Password updated successfully');
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Shield className="h-5 w-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Security</h2>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-gray-700">New password</span>
          <div className="flex items-center rounded-lg border border-gray-300 bg-white px-3">
            <Lock className="mr-2 h-4 w-4 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              required
              minLength={8}
            />
          </div>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-gray-700">Confirm password</span>
          <div className="flex items-center rounded-lg border border-gray-300 bg-white px-3">
            <Lock className="mr-2 h-4 w-4 text-gray-400" />
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="••••••••"
              className="w-full py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              required
              minLength={8}
            />
          </div>
        </label>

        <div className="sm:col-span-2 mt-2 flex items-center justify-between">
          <p className={`text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-gray-500'}`}>{message}</p>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {saving ? 'Updating...' : 'Update password'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecuritySection;
