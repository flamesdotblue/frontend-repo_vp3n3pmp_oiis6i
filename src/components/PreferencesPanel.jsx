import React, { useState } from 'react';
import { Bell } from 'lucide-react';

const Toggle = ({ label, helper, checked, onChange }) => (
  <div className="flex items-start justify-between gap-4 rounded-xl border border-gray-200 p-4">
    <div>
      <p className="text-sm font-medium text-gray-900">{label}</p>
      {helper ? <p className="text-xs text-gray-500">{helper}</p> : null}
    </div>
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${checked ? 'bg-indigo-600' : 'bg-gray-300'}`}
      aria-pressed={checked}
      aria-label={`Toggle ${label}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${checked ? 'translate-x-5' : 'translate-x-1'}`}
      />
    </button>
  </div>
);

const PreferencesPanel = ({ initial = {}, onChange }) => {
  const [prefs, setPrefs] = useState({
    emailUpdates: initial.emailUpdates ?? true,
    smsAlerts: initial.smsAlerts ?? false,
    applicationReminders: initial.applicationReminders ?? true,
  });

  const set = (key) => (val) => {
    const next = { ...prefs, [key]: val };
    setPrefs(next);
    onChange?.(next);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Bell className="h-5 w-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
      </div>
      <div className="grid gap-3">
        <Toggle
          label="Email updates"
          helper="Receive updates about deadlines and opportunities."
          checked={prefs.emailUpdates}
          onChange={set('emailUpdates')}
        />
        <Toggle
          label="SMS alerts"
          helper="Get important notifications via text message."
          checked={prefs.smsAlerts}
          onChange={set('smsAlerts')}
        />
        <Toggle
          label="Application reminders"
          helper="Be reminded before application due dates."
          checked={prefs.applicationReminders}
          onChange={set('applicationReminders')}
        />
      </div>
    </div>
  );
};

export default PreferencesPanel;
