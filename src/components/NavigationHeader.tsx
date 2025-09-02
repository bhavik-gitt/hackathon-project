import React from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { User } from '../App';
import { Bell, LogOut, Settings, User as UserIcon, GraduationCap } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';

interface NavigationHeaderProps {
  user: User;
  onLogout: () => void;
  onShowNotifications: () => void;
}

export function NavigationHeader({ 
  user, 
  onLogout, 
  onShowNotifications 
}: NavigationHeaderProps) {
  const getRoleBadge = (role: string) => {
    const roleColors: Record<string, string> = {
      student: 'bg-blue-100 text-blue-700',
      company: 'bg-green-100 text-green-700',
      ngo: 'bg-red-100 text-red-700',
      government: 'bg-purple-100 text-purple-700',
      csr: 'bg-orange-100 text-orange-700',
    };
    return roleColors[role] || 'bg-gray-100 text-gray-700';
  };

  const getRoleDisplayName = (role: string) => {
    const roleNames: Record<string, string> = {
      student: 'Student',
      company: 'Company',
      ngo: 'NGO',
      government: 'Government',
      csr: 'CSR Stakeholder',
    };
    return roleNames[role] || role;
  };

  return (
    <header className="bg-white border-b border-blue-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-blue-900">Zero2Legacy</h1>
              <p className="text-xs text-blue-600 hidden sm:block">Right internship. Right youth. Right time.</p>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Toggle */}
            <LanguageToggle />

            {/* Notifications */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onShowNotifications}
              className="relative text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </Button>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <p className="font-medium text-sm text-blue-900">{user.name}</p>
                <Badge variant="secondary" className={`text-xs ${getRoleBadge(user.role)}`}>
                  {getRoleDisplayName(user.role)}
                </Badge>
              </div>
              
              <Avatar className="w-8 h-8 md:w-10 md:h-10">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-blue-100 text-blue-700">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Settings */}
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <Settings className="w-5 h-5" />
            </Button>

            {/* Logout */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden md:inline ml-2">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}