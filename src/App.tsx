import React, { useState, useEffect } from 'react';
import { NavigationHeader } from './components/NavigationHeader';
import { LoginScreen } from './components/LoginScreen';
import { StudentDashboard } from './components/StudentDashboard';
import { CompanyDashboard } from './components/CompanyDashboard';
import { NgoDashboard } from './components/NgoDashboard';
import { GovernmentDashboard } from './components/GovernmentDashboard';
import { CsrDashboard } from './components/CsrDashboard';
import { NotificationCenter } from './components/NotificationCenter';
import { LanguageToggle } from './components/LanguageToggle';
import { Toaster } from './components/ui/sonner';

export type UserRole = 'student' | 'company' | 'ngo' | 'government' | 'csr';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  profile?: any;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    // Simulate loading user session
    setTimeout(() => {
      const savedUser = localStorage.getItem('zero2legacy_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('zero2legacy_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('zero2legacy_user');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl text-gray-600">Loading Zero2Legacy...</h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'student':
        return <StudentDashboard user={user} />;
      case 'company':
        return <CompanyDashboard user={user} />;
      case 'ngo':
        return <NgoDashboard user={user} />;
      case 'government':
        return <GovernmentDashboard user={user} />;
      case 'csr':
        return <CsrDashboard user={user} />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <NavigationHeader 
        user={user} 
        onLogout={handleLogout}
        onShowNotifications={() => setShowNotifications(true)}
      />
      
      <main className="container mx-auto px-4 py-6">
        {renderDashboard()}
      </main>

      {showNotifications && (
        <NotificationCenter 
          onClose={() => setShowNotifications(false)}
          userRole={user.role}
        />
      )}

      <LanguageToggle />
      <Toaster />
    </div>
  );
}