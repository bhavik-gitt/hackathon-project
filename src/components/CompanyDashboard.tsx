import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { User } from '../App';
import { 
  Plus, 
  Users, 
  Eye, 
  Star, 
  MapPin, 
  Calendar, 
  Clock, 
  Building2, 
  TrendingUp,
  Filter,
  Search,
  Download,
  Mail,
  Phone,
  GraduationCap,
  Award,
  CheckCircle,
  XCircle,
  FileText
} from 'lucide-react';


interface CompanyDashboardProps {
  user: User;
}

interface InternshipPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  duration: string;
  stipend: string;
  deadline: string;
  status: 'Active' | 'Draft' | 'Closed';
  applicants: number;
  shortlisted: number;
}

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  skills: string[];
  experience: string;
  matchScore: number;
  status: 'Applied' | 'Shortlisted' | 'Interview' | 'Selected' | 'Rejected';
  appliedFor: string;
  appliedDate: string;
  avatar?: string;
}

export function CompanyDashboard({ user }: CompanyDashboardProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddInternship, setShowAddInternship] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const internships: InternshipPosting[] = [
    {
      id: '1',
      title: 'Frontend Developer Intern',
      department: 'Engineering',
      location: 'Bangalore, Karnataka',
      type: 'Hybrid',
      duration: '6 months',
      stipend: '₹25,000/month',
      deadline: '2025-02-15',
      status: 'Active',
      applicants: 124,
      shortlisted: 18
    },
    {
      id: '2',
      title: 'Marketing Intern',
      department: 'Marketing',
      location: 'Mumbai, Maharashtra',
      type: 'On-site',
      duration: '4 months',
      stipend: '₹18,000/month',
      deadline: '2025-02-20',
      status: 'Active',
      applicants: 87,
      shortlisted: 12
    },
    {
      id: '3',
      title: 'Data Science Intern',
      department: 'Analytics',
      location: 'Remote',
      type: 'Remote',
      duration: '5 months',
      stipend: '₹30,000/month',
      deadline: '2025-02-10',
      status: 'Draft',
      applicants: 0,
      shortlisted: 0
    }
  ];

  const candidates: Candidate[] = [
    {
      id: '1',
      name: 'Arjun Patel',
      email: 'arjun.patel@email.com',
      phone: '+91 9876543210',
      location: 'Bangalore, Karnataka',
      education: 'B.Tech Computer Science - VIT University',
      skills: ['React', 'JavaScript', 'Node.js', 'Python'],
      experience: 'Fresher with internship at local startup',
      matchScore: 94,
      status: 'Shortlisted',
      appliedFor: 'Frontend Developer Intern',
      appliedDate: '2025-01-28',
    },
    {
      id: '2',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 9876543211',
      location: 'Mumbai, Maharashtra',
      education: 'BBA Marketing - Mumbai University',
      skills: ['Digital Marketing', 'Content Creation', 'Analytics', 'Social Media'],
      experience: 'Freelance social media manager for 1 year',
      matchScore: 87,
      status: 'Interview',
      appliedFor: 'Marketing Intern',
      appliedDate: '2025-01-27',
    },
    {
      id: '3',
      name: 'Ravi Kumar',
      email: 'ravi.kumar@email.com',
      phone: '+91 9876543212',
      location: 'Chennai, Tamil Nadu',
      education: 'M.Tech Data Science - IIT Madras',
      skills: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
      experience: 'Research assistant at IIT for 2 years',
      matchScore: 96,
      status: 'Applied',
      appliedFor: 'Frontend Developer Intern',
      appliedDate: '2025-01-26',
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Draft': return 'bg-yellow-100 text-yellow-700';
      case 'Closed': return 'bg-gray-100 text-gray-700';
      case 'Applied': return 'bg-blue-100 text-blue-700';
      case 'Shortlisted': return 'bg-purple-100 text-purple-700';
      case 'Interview': return 'bg-orange-100 text-orange-700';
      case 'Selected': return 'bg-green-100 text-green-700';
      case 'Rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleCandidateAction = (candidateId: string, action: string) => {
    console.log(`${action} candidate:`, candidateId);
  };

  return (
    <div className="space-y-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                Company Dashboard
              </h1>
              <p className="text-blue-700">
                Manage your internship postings and candidates
              </p>
            </div>
            
            <Dialog open={showAddInternship} onOpenChange={setShowAddInternship}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Internship
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-blue-900">Create New Internship</DialogTitle>
                  <DialogDescription className="text-blue-600">
                    Fill in the details to post a new internship opportunity
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" placeholder="e.g. Frontend Developer Intern" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g. Bangalore, Karnataka" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="work-type">Work Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="on-site">On-site</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input id="duration" placeholder="e.g. 6 months" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stipend">Stipend</Label>
                    <Input id="stipend" placeholder="e.g. ₹25,000/month" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="description">Job Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe the role, responsibilities, and requirements..."
                      className="min-h-32"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skills">Required Skills</Label>
                    <Input id="skills" placeholder="e.g. React, JavaScript, CSS" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Application Deadline</Label>
                    <Input id="deadline" type="date" />
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button 
                    onClick={() => setShowAddInternship(false)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Post Internship
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAddInternship(false)}
                    className="flex-1 border-blue-200 text-blue-600"
                  >
                    Save as Draft
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600">Active Internships</p>
                  <p className="text-2xl font-bold text-blue-900">12</p>
                </div>
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +2 this week
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600">Total Applications</p>
                  <p className="text-2xl font-bold text-blue-900">347</p>
                </div>
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +23 today
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600">Shortlisted</p>
                  <p className="text-2xl font-bold text-blue-900">45</p>
                </div>
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="flex items-center mt-2 text-sm text-blue-600">
                <Eye className="w-4 h-4 mr-1" />
                13% rate
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600">Hired</p>
                  <p className="text-2xl font-bold text-blue-900">8</p>
                </div>
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                2.3% rate
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-blue-100">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="internships" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Internships
            </TabsTrigger>
            <TabsTrigger value="candidates" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Candidates
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Internships */}
              <Card className="border-0 shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Recent Internships</CardTitle>
                  <CardDescription className="text-blue-600">
                    Your latest postings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {internships.slice(0, 3).map((internship) => (
                    <div key={internship.id} className="flex items-center justify-between p-3 bg-blue-25 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-blue-900 mb-1">{internship.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-blue-600">
                          <span>{internship.applicants} applicants</span>
                          <Badge className={getStatusColor(internship.status)}>
                            {internship.status}
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                        View
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Candidates */}
              <Card className="border-0 shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Top Candidates</CardTitle>
                  <CardDescription className="text-blue-600">
                    Highest matching candidates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {candidates.slice(0, 3).map((candidate) => (
                    <div key={candidate.id} className="flex items-center gap-3 p-3 bg-blue-25 rounded-lg">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={candidate.avatar} alt={candidate.name} />
                        <AvatarFallback className="bg-blue-100 text-blue-700">
                          {candidate.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-blue-900">{candidate.name}</h4>
                        <p className="text-sm text-blue-600">{candidate.appliedFor}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-blue-900">{candidate.matchScore}%</div>
                        <Badge className={getStatusColor(candidate.status)}>
                          {candidate.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="internships" className="space-y-6">
            <Card className="border-0 shadow-md bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg text-blue-900">Internship Postings</CardTitle>
                    <CardDescription className="text-blue-600">
                      Manage your internship opportunities
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
                  {internships.map((internship) => (
                    <div key={internship.id} className="border border-blue-100 rounded-lg p-4 hover:bg-blue-25 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg text-blue-900">{internship.title}</h3>
                            <Badge className={getStatusColor(internship.status)}>
                              {internship.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-blue-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {internship.department}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {internship.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {internship.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Due: {internship.deadline}
                            </div>
                          </div>
                          <div className="flex items-center gap-6 text-sm">
                            <span className="text-blue-900">
                              <strong>{internship.applicants}</strong> applications
                            </span>
                            <span className="text-blue-900">
                              <strong>{internship.shortlisted}</strong> shortlisted
                            </span>
                            <span className="text-blue-700">{internship.stipend}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                            <Users className="w-4 h-4 mr-2" />
                            Candidates
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
            <Card className="border-0 shadow-md bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg text-blue-900">Candidate Pipeline</CardTitle>
                    <CardDescription className="text-blue-600">
                      Review and manage applicants
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
                      <Input 
                        placeholder="Search candidates..." 
                        className="pl-10 w-64 border-blue-200"
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
                  {candidates.map((candidate) => (
                    <div key={candidate.id} className="border border-blue-100 rounded-lg p-4 hover:bg-blue-25 transition-colors">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={candidate.avatar} alt={candidate.name} />
                            <AvatarFallback className="bg-blue-100 text-blue-700">
                              {candidate.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-blue-900">{candidate.name}</h3>
                              <Badge className={getStatusColor(candidate.status)}>
                                {candidate.status}
                              </Badge>
                              <div className="text-sm font-semibold text-blue-700">
                                {candidate.matchScore}% match
                              </div>
                            </div>
                            <p className="text-sm text-blue-700 mb-2">{candidate.appliedFor}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-600 mb-2">
                              <div className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {candidate.email}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {candidate.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <GraduationCap className="w-4 h-4" />
                                {candidate.education}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                Applied: {candidate.appliedDate}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {candidate.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 lg:flex-col">
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => handleCandidateAction(candidate.id, 'shortlist')}
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Shortlist
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-blue-200 text-blue-600"
                            onClick={() => setSelectedCandidate(candidate)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Profile
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-red-200 text-red-600"
                            onClick={() => handleCandidateAction(candidate.id, 'reject')}
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Application Trends</CardTitle>
                  <CardDescription className="text-blue-600">
                    Applications over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-blue-25 rounded-lg flex items-center justify-center">
                    <p className="text-blue-600">Chart placeholder - Applications trend</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Top Skills in Demand</CardTitle>
                  <CardDescription className="text-blue-600">
                    Most requested skills by candidates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-900">React</span>
                    <div className="flex items-center gap-2">
                      <Progress value={85} className="w-24 h-2" />
                      <span className="text-sm text-blue-600">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-900">JavaScript</span>
                    <div className="flex items-center gap-2">
                      <Progress value={75} className="w-24 h-2" />
                      <span className="text-sm text-blue-600">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-900">Python</span>
                    <div className="flex items-center gap-2">
                      <Progress value={65} className="w-24 h-2" />
                      <span className="text-sm text-blue-600">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-900">Digital Marketing</span>
                    <div className="flex items-center gap-2">
                      <Progress value={55} className="w-24 h-2" />
                      <span className="text-sm text-blue-600">55%</span>
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