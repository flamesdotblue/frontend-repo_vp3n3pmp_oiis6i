import React from 'react';
import { User, Settings } from 'lucide-react';

const ProfileHeader = ({ name, email, avatarColor = '#4f46e5' }) => {
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0]?.toUpperCase())
        .slice(0, 2)
        .join('')
    : 'ST';

  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className="grid h-14 w-14 place-items-center rounded-full text-white"
          style={{ backgroundColor: avatarColor }}
          aria-label="Avatar"
        >
          <span className="text-lg font-semibold">{initials}</span>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{name || 'Student Candidate'}</h1>
          <p className="text-sm text-gray-500">{email || 'name@example.com'}</p>
        </div>
      </div>

      <div className="hidden items-center gap-2 sm:flex">
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
          <Settings className="h-4 w-4" />
          Settings
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          <User className="h-4 w-4" />
          Student
        </span>
      </div>
    </div>
  );
};

export default ProfileHeader;
