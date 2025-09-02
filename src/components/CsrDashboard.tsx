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
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Heart, 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  IndianRupee,
  MapPin,
  BookOpen,
  Building2,
  Star
} from 'lucide-react';

interface CsrDashboardProps {
  user: User;
}

const impactData = [
  { month: 'Jan', studentsSupported: 120, coursesSponsored: 15, placementRate: 68 },
  { month: 'Feb', studentsSupported: 180, coursesSponsored: 22, placementRate: 72 },
  { month: 'Mar', studentsSupported: 250, coursesSponsored: 28, placementRate: 75 },
  { month: 'Apr', studentsSupported: 320, coursesSponsored: 35, placementRate: 78 },
  { month: 'May', studentsSupported: 410, coursesSponsored: 42, placementRate: 81 },
  { month: 'Jun', studentsSupported: 520, coursesSponsored: 48, placementRate: 84 }
];

const fundingAllocation = [
  { category: 'Skill Training', amount: 25, color: '#3B82F6' },
  { category: 'Digital Literacy', amount: 20, color: '#10B981' },
  { category: 'Rural Programs', amount: 18, color: '#F59E0B' },
  { category: 'Women Empowerment', amount: 15, color: '#EF4444' },
  { category: 'Healthcare Training', amount: 12, color: '#8B5CF6' },
  { category: 'Other Initiatives', amount: 10, color: '#6B7280' }
];

const partnershipData = [
  { partner: 'Skill India', students: 1200, budget: 2.5, impact: 'High' },
  { partner: 'Local NGOs', students: 800, budget: 1.8, impact: 'Medium' },
  { partner: 'Technical Institutes', students: 600, budget: 1.2, impact: 'High' },
  { partner: 'Online Platforms', students: 1500, budget: 0.8, impact: 'Medium' }
];

const brandVisibilityData = [
  { metric: 'Social Media Reach', value: '2.3M', change: '+18%' },
  { metric: 'Press Coverage', value: '45', change: '+22%' },
  { metric: 'Award Recognition', value: '8', change: '+100%' },
  { metric: 'Stakeholder Engagement', value: '89%', change: '+12%' }
];

export function CsrDashboard({ user }: CsrDashboardProps) {
  const [activeTab, setActiveTab] = useState('impact');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
            <Heart className="w-8 h-8" />
          </div>
          <div>
            <h1>CSR Impact Dashboard</h1>
            <p className="text-orange-100">Corporate Social Responsibility Analytics & Brand Impact</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-orange-200" />
              <span className="text-sm text-orange-200">Students Supported</span>
            </div>
            <div className="text-2xl font-bold">2,480</div>
            <div className="text-xs text-orange-200">↗ +35% vs last year</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <IndianRupee className="w-5 h-5 text-orange-200" />
              <span className="text-sm text-orange-200">Total Investment</span>
            </div>
            <div className="text-2xl font-bold">₹6.8Cr</div>
            <div className="text-xs text-orange-200">FY 2024-25</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-orange-200" />
              <span className="text-sm text-orange-200">Placement Success</span>
            </div>
            <div className="text-2xl font-bold">84%</div>
            <div className="text-xs text-orange-200">Above industry avg</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-orange-200" />
              <span className="text-sm text-orange-200">Brand Visibility</span>
            </div>
            <div className="text-2xl font-bold">2.3M</div>
            <div className="text-xs text-orange-200">Social media reach</div>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm border">
          <TabsTrigger value="impact">Impact Analytics</TabsTrigger>
          <TabsTrigger value="funding">Funding Overview</TabsTrigger>
          <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
          <TabsTrigger value="branding">Brand Visibility</TabsTrigger>
        </TabsList>

        <TabsContent value="impact" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Impact Growth */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  Impact Growth Over Time
                </CardTitle>
                <CardDescription>Students supported and placement success rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={impactData}>
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
                      dataKey="studentsSupported" 
                      stroke="#F97316" 
                      strokeWidth={3}
                      name="Students Supported"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="placementRate" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      name="Placement Rate (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  Success Stories
                </CardTitle>
                <CardDescription>Recent impact highlights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800">Rural Tech Training</h4>
                  <p className="text-sm text-green-700 mt-1">
                    350 students from rural areas completed digital literacy programs
                  </p>
                  <div className="text-xs text-green-600 mt-2">90% placement rate achieved</div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800">Women in Tech Initiative</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    280 women trained in software development and data analytics
                  </p>
                  <div className="text-xs text-blue-600 mt-2">Featured in 15 media outlets</div>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-800">Healthcare Skills Program</h4>
                  <p className="text-sm text-purple-700 mt-1">
                    150 students certified in healthcare support roles
                  </p>
                  <div className="text-xs text-purple-600 mt-2">100% job placement within 30 days</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">SDG Goal Progress</CardTitle>
                <CardDescription>Sustainable Development Goals alignment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Quality Education (SDG 4)</span>
                      <span>82%</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Decent Work (SDG 8)</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Gender Equality (SDG 5)</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Geographic Reach</CardTitle>
                <CardDescription>States and regions covered</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600 mb-2">12 States</div>
                <div className="text-sm text-gray-600 mb-4">45 Districts covered</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Rural Areas</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tier-2 Cities</span>
                    <span className="font-semibold">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Metro Cities</span>
                    <span className="font-semibold">7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Return on Investment</CardTitle>
                <CardDescription>CSR investment efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">4.2x</div>
                <div className="text-sm text-gray-600 mb-4">Social ROI multiplier</div>
                <div className="text-sm text-green-600 font-semibold mb-2">
                  ₹2,742 cost per successful placement
                </div>
                <div className="text-xs text-gray-500">
                  Industry benchmark: ₹3,500
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="funding" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Funding Allocation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-orange-600" />
                  Funding Allocation
                </CardTitle>
                <CardDescription>CSR budget distribution across programs</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={fundingAllocation}
                      dataKey="amount"
                      nameKey="category"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label={({ category, amount }) => `${category}: ${amount}%`}
                    >
                      {fundingAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Budget Utilization */}
            <Card>
              <CardHeader>
                <CardTitle>Budget Utilization</CardTitle>
                <CardDescription>Current year spending vs allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fundingAllocation.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.category}</span>
                        <span>₹{(item.amount * 0.272).toFixed(1)}Cr / ₹{(item.amount * 0.272).toFixed(1)}Cr</span>
                      </div>
                      <Progress 
                        value={Math.min(100, (item.amount / 25) * 100 + Math.random() * 20)} 
                        className="h-2" 
                      />
                    </div>
                  ))}
                  
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <div className="text-lg font-semibold text-orange-800">Total Budget: ₹6.8 Crores</div>
                    <div className="text-sm text-orange-600">Utilized: ₹5.9 Crores (87%)</div>
                    <div className="text-sm text-orange-600">Remaining: ₹0.9 Crores</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Funding Plans */}
          <Card>
            <CardHeader>
              <CardTitle>Future Funding Pipeline</CardTitle>
              <CardDescription>Planned investments for next fiscal year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Emerging Technologies</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1">₹2.5Cr</div>
                  <p className="text-sm text-blue-700">AI, ML, and Blockchain training programs</p>
                  <Badge className="bg-blue-600 mt-2">Q1 2025</Badge>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Green Skills Initiative</h4>
                  <div className="text-2xl font-bold text-green-600 mb-1">₹1.8Cr</div>
                  <p className="text-sm text-green-700">Renewable energy and sustainability training</p>
                  <Badge className="bg-green-600 mt-2">Q2 2025</Badge>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Rural Entrepreneurship</h4>
                  <div className="text-2xl font-bold text-purple-600 mb-1">₹1.2Cr</div>
                  <p className="text-sm text-purple-700">Business skills and startup incubation</p>
                  <Badge className="bg-purple-600 mt-2">Q3 2025</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="partnerships" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-orange-600" />
                Partnership Performance
              </CardTitle>
              <CardDescription>Impact and efficiency of CSR partnerships</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Partner</th>
                      <th className="text-left p-3">Students Impacted</th>
                      <th className="text-left p-3">Investment</th>
                      <th className="text-left p-3">Impact Level</th>
                      <th className="text-left p-3">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partnershipData.map((partner, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{partner.partner}</td>
                        <td className="p-3">{partner.students.toLocaleString()}</td>
                        <td className="p-3">₹{partner.budget}Cr</td>
                        <td className="p-3">
                          <Badge 
                            variant={partner.impact === 'High' ? 'default' : 'secondary'}
                            className={partner.impact === 'High' ? 'bg-green-600' : ''}
                          >
                            {partner.impact}
                          </Badge>
                        </td>
                        <td className="p-3 text-green-600 font-semibold">
                          {(partner.students / (partner.budget * 100)).toFixed(1)}x
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Partnership Opportunities</CardTitle>
                <CardDescription>Potential new collaborations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-800">EdTech Platforms</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Scale digital learning with AI-powered platforms
                  </p>
                  <div className="text-xs text-yellow-600 mt-2">Estimated reach: 5,000+ students</div>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                  <h4 className="font-semibold text-indigo-800">International Organizations</h4>
                  <p className="text-sm text-indigo-700 mt-1">
                    Global certification and best practices exchange
                  </p>
                  <div className="text-xs text-indigo-600 mt-2">Focus: IT and healthcare sectors</div>
                </div>
                
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-semibold text-teal-800">Industry Associations</h4>
                  <p className="text-sm text-teal-700 mt-1">
                    Direct industry connect and placement guarantee
                  </p>
                  <div className="text-xs text-teal-600 mt-2">Target: 90%+ placement rates</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Partnership Success Metrics</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">Partner Satisfaction</div>
                      <div className="text-sm text-gray-600">Avg. rating from partners</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">4.7/5</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">Program Completion Rate</div>
                      <div className="text-sm text-gray-600">Across all partnerships</div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">89%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">Partnership Renewal Rate</div>
                      <div className="text-sm text-gray-600">Year-over-year retention</div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">94%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="branding" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandVisibilityData.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{metric.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{metric.value}</div>
                  <div className={`text-sm font-semibold ${
                    metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change} from last quarter
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Mentions & Sentiment</CardTitle>
                <CardDescription>Social media and news coverage analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-green-800">Positive Mentions</h4>
                      <span className="text-2xl font-bold text-green-600">78%</span>
                    </div>
                    <Progress value={78} className="mb-2" />
                    <p className="text-sm text-green-700">
                      CSR programs widely appreciated for impact and transparency
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-blue-800">Neutral Mentions</h4>
                      <span className="text-2xl font-bold text-blue-600">18%</span>
                    </div>
                    <Progress value={18} className="mb-2" />
                    <p className="text-sm text-blue-700">
                      Factual reporting and general program announcements
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-yellow-800">Areas for Improvement</h4>
                      <span className="text-2xl font-bold text-yellow-600">4%</span>
                    </div>
                    <Progress value={4} className="mb-2" />
                    <p className="text-sm text-yellow-700">
                      Suggestions for broader geographic coverage
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Awards & Recognition</CardTitle>
                <CardDescription>Industry acknowledgments and certifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gold-50 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-800">Best CSR Initiative 2024</h4>
                  </div>
                  <p className="text-sm text-yellow-700">
                    CII Foundation - Excellence in Skill Development
                  </p>
                  <div className="text-xs text-yellow-600 mt-1">April 2024</div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-green-800">Sustainable Impact Award</h4>
                  </div>
                  <p className="text-sm text-green-700">
                    ASSOCHAM - Rural Development Excellence
                  </p>
                  <div className="text-xs text-green-600 mt-1">March 2024</div>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-purple-800">Digital Innovation Award</h4>
                  </div>
                  <p className="text-sm text-purple-700">
                    NASSCOM - Technology for Social Good
                  </p>
                  <div className="text-xs text-purple-600 mt-1">February 2024</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>CSR Report & Compliance</CardTitle>
              <CardDescription>Regulatory compliance and transparency metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="font-semibold mb-1">Compliance Score</div>
                  <div className="text-sm text-gray-600">All regulatory requirements met</div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">95%</div>
                  <div className="font-semibold mb-1">Transparency Rating</div>
                  <div className="text-sm text-gray-600">Third-party assessment</div>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">A+</div>
                  <div className="font-semibold mb-1">Impact Rating</div>
                  <div className="text-sm text-gray-600">External audit score</div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Download Annual CSR Report 2024
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}