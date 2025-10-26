import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader.jsx';
import AccountDetailsForm from './components/AccountDetailsForm.jsx';
import PreferencesPanel from './components/PreferencesPanel.jsx';
import SecuritySection from './components/SecuritySection.jsx';

function App() {
  const [profile, setProfile] = useState({
    fullName: 'Taylor Student',
    email: 'taylor@student.edu',
    phone: '',
    university: 'Lakeside University',
  });

  const [prefs, setPrefs] = useState({});

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <ProfileHeader name={profile.fullName} email={profile.email} />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-6">
            <AccountDetailsForm
              initial={profile}
              onSave={(data) => setProfile((prev) => ({ ...prev, ...data }))}
            />
            <SecuritySection />
          </div>
          <div className="lg:col-span-1">
            <PreferencesPanel initial={prefs} onChange={setPrefs} />
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-gray-500">
          Your changes are stored locally for this demo.
        </footer>
      </div>
    </div>
  );
}

export default App;
