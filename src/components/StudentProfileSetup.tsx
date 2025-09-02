import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  User,
  MapPin,
  GraduationCap,
  Code,
  Stethoscope,
  Palette,
  Calculator,
  Users,
  Building2,
  Wrench,
  Heart,
  Globe,
  Mic,
  Volume2,
  Star,
  Trophy,
  Target,
  Zap
} from 'lucide-react';

interface Sector {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

interface ProfileSetupProps {
  onComplete: (profileData: any) => void;
  onClose: () => void;
}

const sectors: Sector[] = [
  { id: 'it', name: 'IT & Software', icon: Code, color: 'bg-blue-500', description: 'Programming, Web Dev, AI/ML' },
  { id: 'healthcare', name: 'Healthcare', icon: Stethoscope, color: 'bg-red-500', description: 'Medical, Nursing, Lab Tech' },
  { id: 'design', name: 'Design & Creative', icon: Palette, color: 'bg-purple-500', description: 'UI/UX, Graphics, Video' },
  { id: 'finance', name: 'Finance & Banking', icon: Calculator, color: 'bg-green-500', description: 'Accounting, Investment, Insurance' },
  { id: 'marketing', name: 'Marketing & Sales', icon: Users, color: 'bg-orange-500', description: 'Digital Marketing, Sales, PR' },
  { id: 'engineering', name: 'Engineering', icon: Wrench, color: 'bg-gray-500', description: 'Mechanical, Civil, Electrical' },
  { id: 'education', name: 'Education & Training', icon: GraduationCap, color: 'bg-indigo-500', description: 'Teaching, Training, Curriculum' },
  { id: 'social', name: 'Social Work & NGO', icon: Heart, color: 'bg-pink-500', description: 'Community Service, Welfare' }
];

const skillLevels = [
  { value: 'beginner', label: 'Beginner', description: 'Just starting out' },
  { value: 'intermediate', label: 'Intermediate', description: 'Some experience' },
  { value: 'advanced', label: 'Advanced', description: 'Very experienced' },
  { value: 'expert', label: 'Expert', description: 'Professional level' }
];

const locations = [
  'Mumbai, Maharashtra', 'Delhi, NCR', 'Bangalore, Karnataka', 'Hyderabad, Telangana',
  'Chennai, Tamil Nadu', 'Pune, Maharashtra', 'Kolkata, West Bengal', 'Ahmedabad, Gujarat',
  'Jaipur, Rajasthan', 'Lucknow, Uttar Pradesh', 'Remote Work', 'Open to Relocate'
];

export function StudentProfileSetup({ onComplete, onClose }: ProfileSetupProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [voiceMode, setVoiceMode] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: { fullName: '', email: '', phone: '', location: '' },
    education: { degree: '', college: '', year: '', gpa: '' },
    interests: { sectors: [], skills: [], experience: '' },
    preferences: { workType: '', salary: '', availability: '' }
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleSectorSelect = (sectorId: string) => {
    const updatedSectors = formData.interests.sectors.includes(sectorId)
      ? formData.interests.sectors.filter(id => id !== sectorId)
      : [...formData.interests.sectors, sectorId];
    
    setFormData({
      ...formData,
      interests: { ...formData.interests, sectors: updatedSectors }
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleVoiceMode = () => {
    setVoiceMode(!voiceMode);
    // Mock voice functionality
    console.log(voiceMode ? 'Voice mode deactivated' : 'Voice mode activated');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Complete Your Profile</h1>
          <p className="text-blue-700">Help us find the perfect opportunities for you</p>
          
          {/* Voice Support */}
          <Button
            onClick={handleVoiceMode}
            className={`mt-4 ${voiceMode ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
          >
            {voiceMode ? <Volume2 className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
            {voiceMode ? 'Voice Mode Active' : 'Enable Voice Input'}
          </Button>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-700">{Math.round(progress)}% Complete</span>
              </div>
            </div>
            <Progress value={progress} className="h-3" />
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Personal Info</span>
              <span>Education</span>
              <span>Interests</span>
              <span>Preferences</span>
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
              {currentStep === 1 && <><User className="w-5 h-5" /> Personal Information</>}
              {currentStep === 2 && <><GraduationCap className="w-5 h-5" /> Education Background</>}
              {currentStep === 3 && <><Target className="w-5 h-5" /> Career Interests</>}
              {currentStep === 4 && <><Zap className="w-5 h-5" /> Work Preferences</>}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Tell us about yourself"}
              {currentStep === 2 && "Your educational qualifications"}
              {currentStep === 3 && "What sectors and skills interest you?"}
              {currentStep === 4 && "Your work preferences and availability"}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.personalInfo.fullName}
                      onChange={(e) => setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, fullName: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.personalInfo.email}
                      onChange={(e) => setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, email: e.target.value }
                      })}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+91 9876543210"
                      value={formData.personalInfo.phone}
                      onChange={(e) => setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, phone: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Preferred Location *</Label>
                    <Select 
                      value={formData.personalInfo.location}
                      onValueChange={(value) => setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, location: value }
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>{location}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Education */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="degree">Degree/Course *</Label>
                    <Input
                      id="degree"
                      placeholder="e.g., B.Tech Computer Science"
                      value={formData.education.degree}
                      onChange={(e) => setFormData({
                        ...formData,
                        education: { ...formData.education, degree: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="college">College/University *</Label>
                    <Input
                      id="college"
                      placeholder="Your institution name"
                      value={formData.education.college}
                      onChange={(e) => setFormData({
                        ...formData,
                        education: { ...formData.education, college: e.target.value }
                      })}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="year">Graduation Year *</Label>
                    <Select 
                      value={formData.education.year}
                      onValueChange={(value) => setFormData({
                        ...formData,
                        education: { ...formData.education, year: value }
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {[2024, 2025, 2026, 2027, 2028].map((year) => (
                          <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="gpa">GPA/Percentage</Label>
                    <Input
                      id="gpa"
                      placeholder="e.g., 8.5 CGPA or 85%"
                      value={formData.education.gpa}
                      onChange={(e) => setFormData({
                        ...formData,
                        education: { ...formData.education, gpa: e.target.value }
                      })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Interests */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-4 block">Select Your Sectors of Interest *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sectors.map((sector) => {
                      const Icon = sector.icon;
                      const isSelected = formData.interests.sectors.includes(sector.id);
                      
                      return (
                        <Card
                          key={sector.id}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                          }`}
                          onClick={() => handleSectorSelect(sector.id)}
                        >
                          <CardContent className="p-4 text-center">
                            <div className={`w-12 h-12 ${sector.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-semibold text-sm mb-1">{sector.name}</h4>
                            <p className="text-xs text-gray-600">{sector.description}</p>
                            {isSelected && (
                              <Badge className="mt-2 bg-blue-600">Selected</Badge>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="skills">Key Skills (comma separated)</Label>
                  <Input
                    id="skills"
                    placeholder="e.g., JavaScript, React, Python, Design Thinking"
                    value={formData.interests.skills.join(', ')}
                    onChange={(e) => setFormData({
                      ...formData,
                      interests: { 
                        ...formData.interests, 
                        skills: e.target.value.split(',').map(s => s.trim()).filter(s => s)
                      }
                    })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="experience">Previous Experience (Optional)</Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe any internships, projects, or relevant experience..."
                    value={formData.interests.experience}
                    onChange={(e) => setFormData({
                      ...formData,
                      interests: { ...formData.interests, experience: e.target.value }
                    })}
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Preferences */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="workType">Preferred Work Type *</Label>
                    <Select 
                      value={formData.preferences.workType}
                      onValueChange={(value) => setFormData({
                        ...formData,
                        preferences: { ...formData.preferences, workType: value }
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select work type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="onsite">On-site</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="salary">Expected Stipend *</Label>
                    <Select 
                      value={formData.preferences.salary}
                      onValueChange={(value) => setFormData({
                        ...formData,
                        preferences: { ...formData.preferences, salary: value }
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select salary range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unpaid">Unpaid (Learning focused)</SelectItem>
                        <SelectItem value="5000-15000">₹5,000 - ₹15,000</SelectItem>
                        <SelectItem value="15000-25000">₹15,000 - ₹25,000</SelectItem>
                        <SelectItem value="25000-35000">₹25,000 - ₹35,000</SelectItem>
                        <SelectItem value="35000+">₹35,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="availability">When can you start? *</Label>
                  <Select 
                    value={formData.preferences.availability}
                    onValueChange={(value) => setFormData({
                      ...formData,
                      preferences: { ...formData.preferences, availability: value }
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediately">Immediately</SelectItem>
                      <SelectItem value="1month">Within 1 month</SelectItem>
                      <SelectItem value="2months">Within 2 months</SelectItem>
                      <SelectItem value="3months">Within 3 months</SelectItem>
                      <SelectItem value="after-graduation">After graduation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-6 border-t">
              <div className="flex gap-2">
                {currentStep > 1 && (
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                )}
                <Button variant="ghost" onClick={onClose}>
                  Skip for now
                </Button>
              </div>
              
              <Button 
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                {currentStep === totalSteps ? (
                  <>
                    <Trophy className="w-4 h-4 mr-2" />
                    Complete Profile
                  </>
                ) : (
                  'Next Step'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}