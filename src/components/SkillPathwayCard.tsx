import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  BookOpen, 
  Clock, 
  Star, 
  Trophy, 
  Users,
  ArrowRight,
  PlayCircle,
  Heart,
  Award,
  Zap
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  rating: number;
  students: number;
  price: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  sponsoredBy?: string;
  free?: boolean;
  certificate: boolean;
}

interface SkillPathwayCardProps {
  skill: string;
  currentLevel: number;
  targetLevel: number;
  internshipTitle: string;
  courses: Course[];
  estimatedTime: string;
  onStartPath: () => void;
}

export function SkillPathwayCard({ 
  skill, 
  currentLevel, 
  targetLevel, 
  internshipTitle, 
  courses, 
  estimatedTime,
  onStartPath 
}: SkillPathwayCardProps) {
  const progressGap = targetLevel - currentLevel;
  
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg text-orange-800 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-600" />
              Skill Pathway: {skill}
            </CardTitle>
            <CardDescription className="text-orange-600 mt-1">
              Boost your skills to unlock: {internshipTitle}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-orange-600">{progressGap}%</div>
            <div className="text-xs text-orange-500">Gap to fill</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Progress Visualization */}
        <div className="bg-white rounded-lg p-4 border border-orange-200">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-orange-700">Current Level: {currentLevel}%</span>
            <span className="text-orange-800 font-semibold">Target: {targetLevel}%</span>
          </div>
          <Progress value={currentLevel} className="h-3 mb-2" />
          <div className="flex items-center gap-2 text-xs text-orange-600">
            <Clock className="w-4 h-4" />
            <span>Estimated completion: {estimatedTime}</span>
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="space-y-3">
          <h4 className="font-semibold text-orange-800 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Recommended Courses
          </h4>
          
          {courses.slice(0, 2).map((course, index) => (
            <div key={course.id} className="bg-white rounded-lg p-4 border border-orange-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-1">{course.title}</h5>
                  <p className="text-sm text-gray-600 mb-2">{course.provider}</p>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant={course.level === 'Beginner' ? 'default' : course.level === 'Intermediate' ? 'secondary' : 'destructive'} className="text-xs">
                      {course.level}
                    </Badge>
                    
                    {course.free && (
                      <Badge className="bg-green-600 text-xs">Free</Badge>
                    )}
                    
                    {course.certificate && (
                      <Badge variant="outline" className="text-xs border-orange-300 text-orange-700">
                        <Award className="w-3 h-3 mr-1" />
                        Certificate
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-lg text-orange-600 mb-1">
                    {course.price}
                  </div>
                  {course.sponsoredBy && (
                    <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                      Sponsored by {course.sponsoredBy}
                    </div>
                  )}
                </div>
              </div>
              
              {course.sponsoredBy && (
                <div className="flex items-center gap-2 mb-3 p-2 bg-green-50 rounded border border-green-200">
                  <Heart className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-green-700">
                    This course is fully sponsored by {course.sponsoredBy} for students from rural areas
                  </span>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white flex-1">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Start Course
                </Button>
                <Button size="sm" variant="outline" className="border-orange-300 text-orange-700">
                  Preview
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-orange-100 rounded-lg p-4 border border-orange-300">
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="w-6 h-6 text-orange-600" />
            <div>
              <h4 className="font-semibold text-orange-800">Complete the pathway and unlock:</h4>
              <p className="text-sm text-orange-700">{internshipTitle}</p>
            </div>
          </div>
          
          <Button onClick={onStartPath} className="w-full bg-orange-600 hover:bg-orange-700 text-white">
            Start Skill Pathway
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        {courses.length > 2 && (
          <Button variant="ghost" className="w-full text-orange-600 hover:bg-orange-50">
            View {courses.length - 2} more courses
          </Button>
        )}
      </CardContent>
    </Card>
  );
}