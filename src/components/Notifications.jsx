import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, MessageSquare, UserPlus, Bell, Check, Trash2, Settings } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'star',
      icon: Star,
      user: 'Sarah Chen',
      userAvatar: 'SC',
      action: 'starred your project',
      project: 'React Dashboard Kit',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'comment',
      icon: MessageSquare,
      user: 'Marcus Johnson',
      userAvatar: 'MJ',
      action: 'commented on',
      project: 'API Testing Tool',
      comment: 'This is exactly what I was looking for! Great work!',
      time: '5 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'follow',
      icon: UserPlus,
      user: 'Emily Rodriguez',
      userAvatar: 'ER',
      action: 'started following you',
      time: '1 day ago',
      read: false,
    },
    {
      id: 4,
      type: 'like',
      icon: Heart,
      user: 'David Kim',
      userAvatar: 'DK',
      action: 'liked your project',
      project: 'Design System Library',
      time: '2 days ago',
      read: true,
    },
    {
      id: 5,
      type: 'star',
      icon: Star,
      user: 'Lisa Wang',
      userAvatar: 'LW',
      action: 'starred your project',
      project: 'API Testing Tool',
      time: '3 days ago',
      read: true,
    },
    {
      id: 6,
      type: 'comment',
      icon: MessageSquare,
      user: 'James Anderson',
      userAvatar: 'JA',
      action: 'commented on',
      project: 'React Dashboard Kit',
      comment: 'Would love to see more examples in the documentation.',
      time: '4 days ago',
      read: true,
    },
    {
      id: 7,
      type: 'follow',
      icon: UserPlus,
      user: 'Sophie Miller',
      userAvatar: 'SM',
      action: 'started following you',
      time: '5 days ago',
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIconColor = (type) => {
    switch (type) {
      case 'star':
        return 'text-warning';
      case 'like':
        return 'text-error';
      case 'comment':
        return 'text-info';
      case 'follow':
        return 'text-success';
      default:
        return 'text-dev-light';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="mb-2">Notifications</h1>
            <p className="text-text-secondary">
              Stay updated with your projects and community
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={markAllAsRead}
              className="border-dev-charcoal hover:border-dev-light"
              disabled={unreadCount === 0}
            >
              <Check className="h-4 w-4 mr-2" />
              Mark all as read
            </Button>
            <Link to="/settings">
              <Button variant="outline" className="border-dev-charcoal hover:border-dev-light">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-surface border-dev-charcoal p-4">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="h-4 w-4 text-dev-light" />
              <span className="text-sm text-text-secondary">Total</span>
            </div>
            <div className="font-mono text-2xl text-white">{notifications.length}</div>
          </Card>
          <Card className="bg-surface border-dev-charcoal p-4">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="h-4 w-4 text-error" />
              <span className="text-sm text-text-secondary">Unread</span>
            </div>
            <div className="font-mono text-2xl text-gray-400">{unreadCount}</div>
          </Card>
          <Card className="bg-surface border-dev-charcoal p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-4 w-4 text-info" />
              <span className="text-sm text-text-secondary">Comments</span>
            </div>
            <div className="font-mono text-2xl text-gray-400">
              {notifications.filter(n => n.type === 'comment').length}
            </div>
          </Card>
          <Card className="bg-surface border-dev-charcoal p-4">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-warning" />
              <span className="text-sm text-text-secondary ">Stars</span>
            </div>
            <div className="font-mono text-2xl text-gray-400">
              {notifications.filter(n => n.type === 'star').length}
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-surface border border-dev-charcoal mb-6">
            <TabsTrigger value="all" className="data-[state=active]:bg-dev-grey text-gray-400">
              All
              {unreadCount > 0 && (
                <Badge className="ml-2 bg-error border-none text-white text-xs h-5 px-2">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="unread" className="data-[state=active]:bg-dev-grey text-gray-400">
              Unread
            </TabsTrigger>
            <TabsTrigger value="stars" className="data-[state=active]:bg-dev-grey text-gray-400">
              Stars
            </TabsTrigger>
            <TabsTrigger value="comments" className="data-[state=active]:bg-dev-grey text-gray-400">
              Comments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {notifications.length === 0 ? (
              <Card className="bg-surface border-dev-charcoal p-12 text-center">
                <Bell className="h-16 w-16 mx-auto mb-4 text-text-muted" />
                <h3 className="mb-2">No notifications</h3>
                <p className="text-text-secondary">
                  You're all caught up! Check back later for updates.
                </p>
              </Card>
            ) : (
              notifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  getIconColor={getIconColor}
                  markAsRead={markAsRead}
                  deleteNotification={deleteNotification}
                />
              ))
            )}
          </TabsContent>

          <TabsContent value="unread" className="space-y-3">
            {notifications.filter(n => !n.read).map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                getIconColor={getIconColor}
                markAsRead={markAsRead}
                deleteNotification={deleteNotification}
              />
            ))}
          </TabsContent>

          <TabsContent value="stars" className="space-y-3">
            {notifications.filter(n => n.type === 'star').map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                getIconColor={getIconColor}
                markAsRead={markAsRead}
                deleteNotification={deleteNotification}
              />
            ))}
          </TabsContent>

          <TabsContent value="comments" className="space-y-3">
            {notifications.filter(n => n.type === 'comment').map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                getIconColor={getIconColor}
                markAsRead={markAsRead}
                deleteNotification={deleteNotification}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}


function NotificationCard({ notification, getIconColor, markAsRead, deleteNotification }) {
  const Icon = notification.icon;

  return (
    <Card
      className={`border-dev-charcoal hover:border-dev-light transition-all duration-300 p-4 group ${
        !notification.read ? 'bg-surface' : 'bg-background'
      }`}
    >
      <div className="flex gap-4">
        {/* Icon */}
        <div className={`h-10 w-10 rounded-lg bg-dev-grey/20 flex items-center justify-center flex-shrink-0 ${getIconColor(notification.type)}`}>
          <Icon className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-grow">
              <p className="mb-1">
                <span className="text-dev-light">{notification.user}</span>
                {' '}<span className="text-text-secondary">{notification.action}</span>
                {notification.project && (
                  <>
                    {' '}<Link to="/project/1" className="text-white hover:text-dev-light transition-colors">
                      {notification.project}
                    </Link>
                  </>
                )}
              </p>
              {notification.comment && (
                <p className="text-sm text-text-secondary bg-background/50 p-3 rounded-lg mb-2">
                  "{notification.comment}"
                </p>
              )}
              <p className="text-sm text-text-muted">{notification.time}</p>
            </div>

            {/* Unread Indicator */}
            {!notification.read && (
              <div className="h-2 w-2 rounded-full bg-error flex-shrink-0 mt-2" />
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex-shrink-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {!notification.read && (
            <button
              onClick={() => markAsRead(notification.id)}
              className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-surface-hover text-text-secondary hover:text-dev-light transition-colors"
              title="Mark as read"
            >
              <Check className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => deleteNotification(notification.id)}
            className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-surface-hover text-text-secondary hover:text-error transition-colors"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Card>
  );
}