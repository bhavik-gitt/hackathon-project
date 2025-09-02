import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { User, UserRole } from '../App';
import { GraduationCap, Building2, Heart, Shield, Users, Mail, Lock, Eye, EyeOff, Globe } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (user: User) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [activeTab, setActiveTab] = useState('login');
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState('en');

  const roles = [
    { value: 'student', label: 'Student', icon: GraduationCap, color: 'text-blue-600' },
    { value: 'company', label: 'Company', icon: Building2, color: 'text-green-600' },
    { value: 'ngo', label: 'NGO', icon: Heart, color: 'text-red-600' },
    { value: 'government', label: 'Government', icon: Shield, color: 'text-purple-600' },
    { value: 'csr', label: 'CSR Stakeholder', icon: Users, color: 'text-orange-600' },
  ];

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'हिन्दी' },
    { value: 'te', label: 'తెలుగు' },
    { value: 'ta', label: 'தமிழ்' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication
    const user: User = {
      id: Date.now().toString(),
      name: activeTab === 'login' ? 'Demo User' : name,
      email,
      role: selectedRole,
    };

    onLogin(user);
  };

  const getRoleColor = (role: UserRole) => {
    const roleData = roles.find(r => r.value === role);
    return roleData?.color || 'text-blue-600';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="w-full max-w-md">
        {/* Language Selector */}
        <div className="flex justify-end mb-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-32">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-blue-900">
              AI Internship Platform
            </CardTitle>
            <CardDescription className="text-blue-700">
              Connecting talent with opportunities
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-blue-50">
                <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              {/* Role Selection */}
              <div className="mt-6">
                <Label className="text-sm text-blue-900 mb-3 block">Select Your Role</Label>
                <div className="grid grid-cols-2 gap-2">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <Button
                        key={role.value}
                        variant={selectedRole === role.value ? 'default' : 'outline'}
                        className={`h-16 flex flex-col gap-1 ${
                          selectedRole === role.value 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white hover:bg-blue-50 text-blue-700 border-blue-200'
                        }`}
                        onClick={() => setSelectedRole(role.value as UserRole)}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-xs">{role.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              <TabsContent value="login" className="space-y-4 mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-900">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-500" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 border-blue-200 focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-blue-900">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-500" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 border-blue-200 focus:border-blue-500"
                        placeholder="Enter your password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 text-blue-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
                  >
                    Login as {roles.find(r => r.value === selectedRole)?.label}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-900">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-blue-900">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-500" />
                      <Input
                        id="signup-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 border-blue-200 focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-blue-900">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-500" />
                      <Input
                        id="signup-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 border-blue-200 focus:border-blue-500"
                        placeholder="Create a password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 text-blue-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
                  >
                    Sign Up as {roles.find(r => r.value === selectedRole)?.label}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Demo Login Buttons */}
            <div className="pt-4 border-t border-blue-100">
              <p className="text-xs text-blue-600 text-center mb-3">Quick Demo Access:</p>
              <div className="grid grid-cols-2 gap-2">
                {roles.slice(0, 4).map((role) => (
                  <Button
                    key={role.value}
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-200 text-blue-600 hover:bg-blue-50"
                    onClick={() => {
                      const user: User = {
                        id: Date.now().toString(),
                        name: `Demo ${role.label}`,
                        email: `demo@${role.value}.com`,
                        role: role.value as UserRole,
                      };
                      onLogin(user);
                    }}
                  >
                    {role.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}