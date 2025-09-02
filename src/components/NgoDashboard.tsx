import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { User } from '../App';
import { 
  Heart, 
  Users, 
  MapPin, 
  TrendingUp, 
  Target, 
  Award,
  School,
  Globe2,
  Phone,
  Mail,
  Calendar,
  BarChart3,
  PieChart,
  FileText,
  Download,
  Filter,
  Search,
  ExternalLink
} from 'lucide-react';


interface NgoDashboardProps {
  user: User;
}

interface OutreachData {
  totalReached: number;
  ruralStudents: number;
  tribalStudents: number;
  applicationsSent: number;
  successfulPlacements: number;
  activePrograms: number;
}

interface RegionalData {
  state: string;
  rural: number;
  tribal: number;
  total: number;
  successRate: number;
}

interface Student {
  id: string;
  name: string;
  location: string;
  category: 'Rural' | 'Tribal';
  education: string;
  status: 'Contacted' | 'Applied' | 'Shortlisted' | 'Placed';
  program: string;
  contactDate: string;
  phone?: string;
  email?: string;
}

export function NgoDashboard({ user }: NgoDashboardProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const outreachData: OutreachData = {
    totalReached: 2847,
    ruralStudents: 1923,
    tribalStudents: 924,
    applicationsSent: 1456,
    successfulPlacements: 187,
    activePrograms: 12
  };

  const regionalData: RegionalData[] = [
    { state: 'Odisha', rural: 456, tribal: 234, total: 690, successRate: 23.5 },
    { state: 'Jharkhand', rural: 389, tribal: 178, total: 567, successRate: 19.8 },
    { state: 'Chhattisgarh', rural: 298, tribal: 156, total: 454, successRate: 21.2 },
    { state: 'West Bengal', rural: 234, tribal: 98, total: 332, successRate: 18.7 },
    { state: 'Rajasthan', rural: 298, tribal: 67, total: 365, successRate: 16.4 },
    { state: 'Maharashtra', rural: 248, tribal: 191, total: 439, successRate: 25.1 }
  ];

  const students: Student[] = [
    {
      id: '1',
      name: 'Meera Oram',
      location: 'Keonjhar, Odisha',
      category: 'Tribal',
      education: 'B.Sc Computer Science',
      status: 'Placed',
      program: 'Tech Inclusion Initiative',
      contactDate: '2025-01-15',
      email: 'meera.oram@email.com',
      phone: '+91 9876543210'
    },
    {
      id: '2',
      name: 'Ravi Mandal',
      location: 'Ranchi, Jharkhand',
      category: 'Rural',
      education: 'BCA Final Year',
      status: 'Shortlisted',
      program: 'Digital Skills Program',
      contactDate: '2025-01-20',
      email: 'ravi.mandal@email.com',
      phone: '+91 9876543211'
    },
    {
      id: '3',
      name: 'Priya Bhil',
      location: 'Jhabua, Madhya Pradesh',
      category: 'Tribal',
      education: 'Polytechnic Diploma',
      status: 'Applied',
      program: 'Skill Bridge Initiative',
      contactDate: '2025-01-22',
      email: 'priya.bhil@email.com',
      phone: '+91 9876543212'
    },
    {
      id: '4',
      name: 'Amit Kumar',
      location: 'Sundargarh, Odisha',
      category: 'Rural',
      education: 'ITI Electronics',
      status: 'Contacted',
      program: 'Rural Tech Connect',
      contactDate: '2025-01-25',
      phone: '+91 9876543213'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Placed': return 'bg-green-100 text-green-700';
      case 'Shortlisted': return 'bg-blue-100 text-blue-700';
      case 'Applied': return 'bg-purple-100 text-purple-700';
      case 'Contacted': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category: string) => {
    return category === 'Tribal' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700';
  };

  return (
    <div className="space-y-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                NGO Outreach Dashboard
              </h1>
              <p className="text-blue-700">
                Monitor rural and tribal student engagement
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" className="border-blue-200 text-blue-600">
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Heart className="w-4 h-4 mr-2" />
                New Outreach
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600">Total Reached</p>
                  <p className="text-xl font-bold text-blue-900">{outreachData.totalReached.toLocaleString()}</p>
                </div>
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12% this month
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-yellow-600">Rural Students</p>
                  <p className="text-xl font-bold text-yellow-700">{outreachData.ruralStudents.toLocaleString()}</p>
                </div>
                <School className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-xs text-yellow-600 mt-1">
                67.5% of total
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-600">Tribal Students</p>
                  <p className="text-xl font-bold text-red-700">{outreachData.tribalStudents.toLocaleString()}</p>
                </div>
                <Globe2 className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-xs text-red-600 mt-1">
                32.5% of total
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600">Applications</p>
                  <p className="text-xl font-bold text-purple-700">{outreachData.applicationsSent.toLocaleString()}</p>
                </div>
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-xs text-purple-600 mt-1">
                51% conversion
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600">Placements</p>
                  <p className="text-xl font-bold text-green-700">{outreachData.successfulPlacements}</p>
                </div>
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-xs text-green-600 mt-1">
                12.8% success rate
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-600">Programs</p>
                  <p className="text-xl font-bold text-orange-700">{outreachData.activePrograms}</p>
                </div>
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-xs text-orange-600 mt-1">
                Active outreach
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-blue-100">
            <TabsTrigger value="overview" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="regional" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Regional Data
            </TabsTrigger>
            <TabsTrigger value="students" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Students
            </TabsTrigger>
            <TabsTrigger value="programs" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Programs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Geographic Distribution */}
              <Card className="border-0 shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    Geographic Distribution
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    Student outreach across regions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg flex items-center justify-center border-2 border-dashed border-red-200">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-red-400 mx-auto mb-2" />
                      <p className="text-red-600 font-medium">Interactive Map</p>
                      <p className="text-sm text-red-500">Showing rural & tribal student distribution</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <div className="font-semibold text-yellow-700">Rural Areas</div>
                      <div className="text-2xl font-bold text-yellow-800">{outreachData.ruralStudents}</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="font-semibold text-red-700">Tribal Areas</div>
                      <div className="text-2xl font-bold text-red-800">{outreachData.tribalStudents}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Outreach Progress */}
              <Card className="border-0 shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-600" />
                    Outreach Progress
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    Monthly targets and achievements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-blue-700">Student Contacts</span>
                        <span className="font-semibold text-blue-900">2,847 / 3,000</span>
                      </div>
                      <Progress value={94.9} className="h-3" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-blue-700">Applications Facilitated</span>
                        <span className="font-semibold text-blue-900">1,456 / 1,500</span>
                      </div>
                      <Progress value={97.1} className="h-3" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-blue-700">Successful Placements</span>
                        <span className="font-semibold text-blue-900">187 / 200</span>
                      </div>
                      <Progress value={93.5} className="h-3" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-blue-700">Program Coverage</span>
                        <span className="font-semibold text-blue-900">12 / 15 districts</span>
                      </div>
                      <Progress value={80} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Success Stories */}
            <Card className="border-0 shadow-md bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-600" />
                  Recent Success Stories
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Latest student placements and achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.filter(s => s.status === 'Placed').map((student) => (
                    <div key={student.id} className="flex items-center gap-4 p-4 bg-green-25 rounded-lg border border-green-100">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-medium text-green-900">{student.name}</h4>
                          <Badge className={getCategoryColor(student.category)}>
                            {student.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-green-700">{student.location}</p>
                        <p className="text-sm text-green-600">{student.education} → Successfully placed through {student.program}</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-700">
                          Placed
                        </Badge>
                        <p className="text-xs text-green-600 mt-1">{student.contactDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="regional" className="space-y-6">
            <Card className="border-0 shadow-md bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg text-blue-900">Regional Analytics</CardTitle>
                    <CardDescription className="text-blue-600">
                      State-wise outreach performance
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-blue-200 text-blue-600">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="border-blue-200 text-blue-600">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalData.map((region) => (
                    <div key={region.state} className="border border-blue-100 rounded-lg p-4 hover:bg-blue-25 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-blue-900 mb-2">{region.state}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-2 bg-yellow-50 rounded">
                              <div className="text-sm text-yellow-600">Rural</div>
                              <div className="font-semibold text-yellow-700">{region.rural}</div>
                            </div>
                            <div className="text-center p-2 bg-red-50 rounded">
                              <div className="text-sm text-red-600">Tribal</div>
                              <div className="font-semibold text-red-700">{region.tribal}</div>
                            </div>
                            <div className="text-center p-2 bg-blue-50 rounded">
                              <div className="text-sm text-blue-600">Total</div>
                              <div className="font-semibold text-blue-700">{region.total}</div>
                            </div>
                            <div className="text-center p-2 bg-green-50 rounded">
                              <div className="text-sm text-green-600">Success Rate</div>
                              <div className="font-semibold text-green-700">{region.successRate}%</div>
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-blue-200 text-blue-600"
                          onClick={() => setSelectedRegion(region.state)}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card className="border-0 shadow-md bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg text-blue-900">Student Database</CardTitle>
                    <CardDescription className="text-blue-600">
                      Track individual student progress
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
                      <input 
                        type="text"
                        placeholder="Search students..." 
                        className="pl-10 pr-4 py-2 border border-blue-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="border-blue-200 text-blue-600">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="border border-blue-100 rounded-lg p-4 hover:bg-blue-25 transition-colors">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-blue-900">{student.name}</h3>
                            <Badge className={getCategoryColor(student.category)}>
                              {student.category}
                            </Badge>
                            <Badge className={getStatusColor(student.status)}>
                              {student.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-600 mb-2">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {student.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <School className="w-4 h-4" />
                              {student.education}
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="w-4 h-4" />
                              {student.program}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Contacted: {student.contactDate}
                            </div>
                          </div>
                          {student.email && (
                            <div className="flex items-center gap-1 text-sm text-blue-600">
                              <Mail className="w-4 h-4" />
                              {student.email}
                            </div>
                          )}
                          {student.phone && (
                            <div className="flex items-center gap-1 text-sm text-blue-600 mt-1">
                              <Phone className="w-4 h-4" />
                              {student.phone}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 lg:flex-col">
                          <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                            Contact
                          </Button>
                          <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                            View Profile
                          </Button>
                          <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                            Update Status
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Active Programs</CardTitle>
                  <CardDescription className="text-blue-600">
                    Current outreach initiatives
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-red-25 rounded-lg border border-red-100">
                    <h4 className="font-medium text-red-900 mb-1">Tech Inclusion Initiative</h4>
                    <p className="text-sm text-red-700">Focus on tribal communities in Odisha</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-red-600">234 students reached</span>
                      <Badge className="bg-green-100 text-green-700">Active</Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-yellow-25 rounded-lg border border-yellow-100">
                    <h4 className="font-medium text-yellow-900 mb-1">Rural Tech Connect</h4>
                    <p className="text-sm text-yellow-700">Digital skills for rural youth</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-yellow-600">456 students reached</span>
                      <Badge className="bg-green-100 text-green-700">Active</Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-25 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-900 mb-1">Skill Bridge Initiative</h4>
                    <p className="text-sm text-blue-700">Connecting students to internships</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-blue-600">189 students reached</span>
                      <Badge className="bg-green-100 text-green-700">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Impact Metrics</CardTitle>
                  <CardDescription className="text-blue-600">
                    Program effectiveness analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-25 rounded-lg">
                      <span className="text-green-700">Average Success Rate</span>
                      <span className="font-bold text-green-800">21.2%</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-blue-25 rounded-lg">
                      <span className="text-blue-700">Application Conversion</span>
                      <span className="font-bold text-blue-800">51.1%</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-orange-25 rounded-lg">
                      <span className="text-orange-700">Student Satisfaction</span>
                      <span className="font-bold text-orange-800">4.7/5</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-purple-25 rounded-lg">
                      <span className="text-purple-700">Program Completion</span>
                      <span className="font-bold text-purple-800">87.3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
    </div>
  );
}