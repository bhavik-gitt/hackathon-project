import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { User } from '../App';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  Users, 
  TrendingUp, 
  MapPin, 
  GraduationCap, 
  Building2, 
  Target,
  Award,
  IndianRupee,
  Activity
} from 'lucide-react';

interface GovernmentDashboardProps {
  user: User;
}

const skillDemandData = [
  { skill: 'IT & Software', demand: 45, supply: 32 },
  { skill: 'Healthcare', demand: 38, supply: 28 },
  { skill: 'Agriculture', demand: 25, supply: 35 },
  { skill: 'Manufacturing', demand: 42, supply: 18 },
  { skill: 'Education', demand: 30, supply: 25 },
  { skill: 'Finance', demand: 35, supply: 20 }
];

const regionalData = [
  { name: 'North India', students: 15000, placements: 8500, color: '#3B82F6' },
  { name: 'South India', students: 18000, placements: 12000, color: '#10B981' },
  { name: 'West India', students: 12000, placements: 7200, color: '#F59E0B' },
  { name: 'East India', students: 9000, placements: 4500, color: '#EF4444' },
  { name: 'Northeast', students: 3000, placements: 1800, color: '#8B5CF6' }
];

const diversityData = [
  { name: 'General', value: 45, color: '#3B82F6' },
  { name: 'OBC', value: 27, color: '#10B981' },
  { name: 'SC', value: 16, color: '#F59E0B' },
  { name: 'ST', value: 8, color: '#EF4444' },
  { name: 'Others', value: 4, color: '#8B5CF6' }
];

const monthlyTrends = [
  { month: 'Jan', applications: 1200, placements: 800, funding: 2.5 },
  { month: 'Feb', applications: 1500, placements: 950, funding: 3.2 },
  { month: 'Mar', applications: 1800, placements: 1200, funding: 4.1 },
  { month: 'Apr', applications: 2200, placements: 1500, funding: 5.2 },
  { month: 'May', applications: 2800, placements: 1900, funding: 6.8 },
  { month: 'Jun', applications: 3200, placements: 2300, funding: 8.1 }
];

export function GovernmentDashboard({ user }: GovernmentDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h1>Government Dashboard</h1>
            <p className="text-purple-100">National Skill Development & Employment Analytics</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-purple-200" />
              <span className="text-sm text-purple-200">Total Students</span>
            </div>
            <div className="text-2xl font-bold">57,000</div>
            <div className="text-xs text-purple-200">↗ +12% this month</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-purple-200" />
              <span className="text-sm text-purple-200">Placements</span>
            </div>
            <div className="text-2xl font-bold">34,200</div>
            <div className="text-xs text-purple-200">60% success rate</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-purple-200" />
              <span className="text-sm text-purple-200">Partner Companies</span>
            </div>
            <div className="text-2xl font-bold">2,400</div>
            <div className="text-xs text-purple-200">Across all sectors</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <IndianRupee className="w-5 h-5 text-purple-200" />
              <span className="text-sm text-purple-200">Funding Deployed</span>
            </div>
            <div className="text-2xl font-bold">₹84.5Cr</div>
            <div className="text-xs text-purple-200">This fiscal year</div>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm border">
          <TabsTrigger value="overview">Analytics Overview</TabsTrigger>
          <TabsTrigger value="skills">Skill Analysis</TabsTrigger>
          <TabsTrigger value="regional">Regional Data</TabsTrigger>
          <TabsTrigger value="programs">Programs & Schemes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Monthly Trends
                </CardTitle>
                <CardDescription>Applications vs Placements over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="applications" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      name="Applications"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="placements" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      name="Placements"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Diversity Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-purple-600" />
                  Diversity Analysis
                </CardTitle>
                <CardDescription>Student distribution by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={diversityData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {diversityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Key Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Employment Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">67.8%</div>
                <Progress value={67.8} className="mb-2" />
                <p className="text-sm text-gray-600">Target: 75% by end of year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Rural Participation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">42.3%</div>
                <Progress value={42.3} className="mb-2" />
                <p className="text-sm text-gray-600">Improving rural access</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Female Participation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-pink-600 mb-2">38.5%</div>
                <Progress value={38.5} className="mb-2" />
                <p className="text-sm text-gray-600">Target: 50% by 2025</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Skill Demand vs Supply Analysis
              </CardTitle>
              <CardDescription>
                Understanding skill gaps in the job market
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={skillDemandData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="skill" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="demand" fill="#EF4444" name="Market Demand" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="supply" fill="#10B981" name="Current Supply" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Critical Skills Alert */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">High Demand Skills</CardTitle>
                <CardDescription className="text-red-600">
                  Skills with significant supply gap
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Manufacturing</span>
                    <Badge variant="destructive">24% Gap</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>IT & Software</span>
                    <Badge variant="destructive">13% Gap</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Healthcare</span>
                    <Badge variant="destructive">10% Gap</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Surplus Skills</CardTitle>
                <CardDescription className="text-green-600">
                  Skills with adequate or excess supply
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Agriculture</span>
                    <Badge className="bg-green-600">10% Surplus</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Finance</span>
                    <Badge variant="secondary">15% Gap</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Education</span>
                    <Badge variant="secondary">5% Gap</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="regional" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Regional Performance Heatmap
              </CardTitle>
              <CardDescription>
                Student enrollment and placement rates by region
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="students" fill="#3B82F6" name="Total Students" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="placements" fill="#10B981" name="Placements" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {regionalData.map((region, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg" style={{ color: region.color }}>
                    {region.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{region.students.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 mb-2">Students Enrolled</div>
                  <div className="text-lg text-green-600 font-semibold">
                    {((region.placements / region.students) * 100).toFixed(1)}%
                  </div>
                  <div className="text-xs text-gray-500">Placement Rate</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="programs" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Government Schemes</CardTitle>
                <CardDescription>Current skill development programs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-blue-800">Pradhan Mantri Kaushal Vikas Yojana</h4>
                    <Badge className="bg-blue-600">Active</Badge>
                  </div>
                  <p className="text-sm text-blue-600 mb-2">Short-term skill training programs</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">25,000</span> students enrolled
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-green-800">Skill India Digital</h4>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                  <p className="text-sm text-green-600 mb-2">Digital skill development platform</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">18,500</span> students enrolled
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-purple-800">Jan Aushadhi Program</h4>
                    <Badge className="bg-purple-600">Active</Badge>
                  </div>
                  <p className="text-sm text-purple-600 mb-2">Healthcare sector skill development</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">12,200</span> students enrolled
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Program Performance</CardTitle>
                <CardDescription>Success metrics by scheme</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>PMKVY Completion Rate</span>
                      <span>84%</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Digital Platform Engagement</span>
                      <span>72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Healthcare Program Success</span>
                      <span>91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <h5 className="font-semibold text-orange-800 mb-2">Upcoming Initiatives</h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Green Jobs Training Program (Q3 2024)</li>
                    <li>• Rural Entrepreneurship Scheme (Q4 2024)</li>
                    <li>• AI/ML Skill Development (Q1 2025)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}