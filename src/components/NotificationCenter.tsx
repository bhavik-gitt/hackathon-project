import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { X, Bell, CheckCircle, AlertCircle, Info, Star, Building2, Calendar } from 'lucide-react';

interface NotificationCenterProps {
  onClose: () => void;
  userRole: string;
}

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'application';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionLabel?: string;
  actionUrl?: string;
}

export function NotificationCenter({ onClose, userRole }: NotificationCenterProps) {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'application',
      title: 'Application Status Update',
      message: 'Your application for Frontend Developer Intern at TechCorp Solutions has been shortlisted!',
      timestamp: '2 hours ago',
      read: false,
      actionLabel: 'View Details',
    },
    {
      id: '2',
      type: 'success',
      title: 'Profile Updated Successfully',
      message: 'Your skill assessment results have been added to your profile.',
      timestamp: '5 hours ago',
      read: false,
    },
    {
      id: '3',
      type: 'info',
      title: 'New Internship Match',
      message: 'We found 2 new internships that match your skills and preferences.',
      timestamp: '1 day ago',
      read: true,
      actionLabel: 'View Matches',
    },
    {
      id: '4',
      type: 'warning',
      title: 'Application Deadline Reminder',
      message: 'UI/UX Design Intern application deadline is in 3 days.',
      timestamp: '2 days ago',
      read: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'application':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Sheet open onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-96 p-0">
        <SheetHeader className="p-6 pb-4 border-b border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-blue-600" />
              <SheetTitle className="text-blue-900">Notifications</SheetTitle>
              {unreadCount > 0 && (
                <Badge variant="destructive" className="bg-red-500 text-white">
                  {unreadCount}
                </Badge>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
              <X className="w-4 h-4" />
            </Button>
          </div>
          <SheetDescription className="text-blue-600">
            Stay updated with your applications and opportunities
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
              <Bell className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-600">You're all caught up! Check back later for updates.</p>
            </div>
          ) : (
            <div className="divide-y divide-blue-50">
              {notifications.map((notification, index) => (
                <div
                  key={notification.id}
                  className={`p-6 hover:bg-blue-25 transition-colors ${
                    !notification.read ? 'bg-blue-25 border-l-4 border-l-blue-500' : ''
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-medium text-blue-900 leading-5">
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                        )}
                      </div>
                      <p className="text-sm text-blue-700 mb-3 leading-relaxed">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-blue-500">
                          {notification.timestamp}
                        </span>
                        {notification.actionLabel && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-xs border-blue-200 text-blue-600 hover:bg-blue-50"
                          >
                            {notification.actionLabel}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {notifications.length > 0 && (
          <div className="border-t border-blue-100 p-6">
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Mark All Read
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                View All
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}