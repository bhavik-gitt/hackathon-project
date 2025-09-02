import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { User } from '../App';
import { 
  Bell, 
  LogOut, 
  Globe, 
  Mic, 
  MapPin, 
  Clock, 
  Star, 
  TrendingUp, 
  BookOpen,
  Award,
  Building2,
  Calendar,
  Heart,
  Share2,
  Volume2,
  GraduationCap,
  Code,
  Palette,
  BarChart3
} from 'lucide-react';


interface StudentDashboardProps {
  user: User;
}

interface InternshipCard {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  skills: string[];
  matchScore: number;
  logo: string;
  description: string;
  deadline: string;
}

interface SkillProgress {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
}

export function StudentDashboard({ user }: StudentDashboardProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);

  const internships: InternshipCard[] = [
    {
      id: '1',
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Bangalore, Karnataka',
      type: 'Remote',
      duration: '6 months',
      stipend: '₹25,000/month',
      skills: ['React', 'JavaScript', 'CSS'],
      matchScore: 94,
      logo: 'https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxvZmZpY2UlMjB3b3JrcGxhY2UlMjB0ZWFtfGVufDF8fHx8MTc1Njc0OTY5OHww&ixlib=rb-4.1.0&q=80&w=100',
      description: 'Build modern web applications using React and TypeScript.',
      deadline: '2025-02-15'
    },
    {
      id: '2',
      title: 'UI/UX Design Intern',
      company: 'DesignFlow Inc',
      location: 'Mumbai, Maharashtra',
      type: 'Hybrid',
      duration: '4 months',
      stipend: '₹20,000/month',
      skills: ['Figma', 'Design Systems', 'User Research'],
      matchScore: 87,
      logo: 'https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxvZmZpY2UlMjB3b3JrcGxhY2UlMjB0ZWFtfGVufDF8fHx8MTc1Njc0OTY5OHww&ixlib=rb-4.1.0&q=80&w=100',
      description: 'Create intuitive user experiences for mobile and web platforms.',
      deadline: '2025-02-20'
    },
    {
      id: '3',
      title: 'Data Analytics Intern',
      company: 'DataViz Pro',
      location: 'Hyderabad, Telangana',
      type: 'On-site',
      duration: '5 months',
      stipend: '₹22,000/month',
      skills: ['Python', 'SQL', 'Tableau'],
      matchScore: 82,
      logo: 'https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxvZmZpY2UlMjB3b3JrcGxhY2UlMjB0ZWFtfGVufDF8fHx8MTc1Njc0OTY5OHww&ixlib=rb-4.1.0&q=80&w=100',
      description: 'Analyze complex datasets and create insightful visualizations.',
      deadline: '2025-02-25'
    }
  ];

  const skillsProgress: SkillProgress[] = [
    { name: 'JavaScript', level: 78, icon: Code, color: 'text-yellow-600' },
    { name: 'React', level: 85, icon: Code, color: 'text-blue-600' },
    { name: 'UI/UX Design', level: 72, icon: Palette, color: 'text-purple-600' },
    { name: 'Data Analysis', level: 65, icon: BarChart3, color: 'text-green-600' },
  ];

  const confidenceScore = 87;

  const handleVoiceMode = () => {
    setVoiceMode(!voiceMode);
    // Mock voice functionality
    if (!voiceMode) {
      console.log('Voice mode activated');
    }
  };

  const handleApply = (internshipId: string) => {
    console.log('Applying for internship:', internshipId);
  };

  return (
    <div className="space-y-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                Welcome back, {user.name}!
              </h1>
              <p className="text-blue-700">
                Discover your next career opportunity
              </p>
            </div>
            
            {/* Voice Support Button */}
            <Button
              onClick={handleVoiceMode}
              className={`self-start md:self-auto ${voiceMode ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
            >
              <Volume2 className="w-4 h-4 mr-2" />
              {voiceMode ? 'Stop Voice' : 'Voice Support'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Confidence Score */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Your Confidence Score</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Based on your skills, experience, and profile completeness
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold">{confidenceScore}%</div>
                      <TrendingUp className="w-6 h-6 text-green-300" />
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full border-4 border-blue-300 flex items-center justify-center bg-blue-500">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Internships */}
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                Recommended for You
              </h2>
              <div className="space-y-4">
                {internships.map((internship) => (
                  <Card key={internship.id} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Company Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-blue-600" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                            <div>
                              <h3 className="font-semibold text-lg text-blue-900 mb-1">
                                {internship.title}
                              </h3>
                              <p className="text-blue-700 font-medium">{internship.company}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className={`w-12 h-12 rounded-full border-4 ${
                                internship.matchScore >= 90 ? 'border-green-500' : 
                                internship.matchScore >= 80 ? 'border-yellow-500' : 'border-blue-500'
                              } flex items-center justify-center text-sm font-bold ${
                                internship.matchScore >= 90 ? 'text-green-600' : 
                                internship.matchScore >= 80 ? 'text-yellow-600' : 'text-blue-600'
                              }`}>
                                {internship.matchScore}%
                              </div>
                              <Button variant="ghost" size="sm" className="p-2">
                                <Volume2 className="w-4 h-4 text-blue-600" />
                              </Button>
                            </div>
                          </div>

                          {/* Details */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-blue-600 mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {internship.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {internship.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              {internship.stipend}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Due: {internship.deadline}
                            </div>
                          </div>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {internship.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-700">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          {/* Description */}
                          <p className="text-sm text-gray-600 mb-4 overflow-hidden">
                            {internship.description}
                          </p>

                          {/* Actions */}
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button 
                              onClick={() => handleApply(internship.id)}
                              className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                            >
                              Apply Now
                            </Button>
                            <Button variant="outline" className="border-blue-200 text-blue-600">
                              <Heart className="w-4 h-4 mr-2" />
                              Save
                            </Button>
                            <Button variant="outline" className="border-blue-200 text-blue-600">
                              <Share2 className="w-4 h-4 mr-2" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card className="border-0 shadow-md bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Profile Completion</CardTitle>
                <CardDescription className="text-blue-600">
                  Complete your profile to get better matches
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Overall Progress</span>
                    <span className="font-semibold text-blue-900">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600">✓ Basic Info</span>
                    <span className="text-green-600">Complete</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600">✓ Education</span>
                    <span className="text-green-600">Complete</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600">• Skills</span>
                    <span className="text-yellow-600">Partial</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600">○ Projects</span>
                    <span className="text-gray-500">Pending</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-blue-200 text-blue-600">
                  Complete Profile
                </Button>
              </CardContent>
            </Card>

            {/* Skills Progress */}
            <Card className="border-0 shadow-md bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Skill Progress</CardTitle>
                <CardDescription className="text-blue-600">
                  Your current skill levels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillsProgress.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${skill.color}`} />
                          <span className="text-sm font-medium text-blue-900">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-blue-700">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  );
                })}
                <Button variant="outline" className="w-full border-blue-200 text-blue-600 mt-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Skill Guidance
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-md bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-blue-200 text-blue-600">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Browse Courses
                </Button>
                <Button variant="outline" className="w-full justify-start border-blue-200 text-blue-600">
                  <Building2 className="w-4 h-4 mr-2" />
                  Company Reviews
                </Button>
                <Button variant="outline" className="w-full justify-start border-blue-200 text-blue-600">
                  <Award className="w-4 h-4 mr-2" />
                  Skill Assessments
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  );
}