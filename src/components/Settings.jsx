import { useState } from 'react';
import { User, Bell, Lock, Palette, Globe, Mail, Shield, Eye, EyeOff } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';

export function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    comments: true,
    likes: true,
    followers: true,
    projects: false,
  });

  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    showEmail: false,
    showProjects: true,
    allowComments: true,
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Settings</h1>
          <p className="text-text-secondary">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="bg-surface border border-dev-charcoal mb-8 flex-wrap h-auto">
            <TabsTrigger value="profile" className="data-[state=active]:bg-dev-grey text-gray-400">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="account" className="data-[state=active]:bg-dev-grey text-gray-400">
              <Lock className="h-4 w-4 mr-2" />
              Account
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-dev-grey text-gray-400">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-dev-grey text-gray-400">
              <Shield className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="appearance" className="data-[state=active]:bg-dev-grey text-gray-400">
              <Palette className="h-4 w-4 mr-2" />
              Appearance
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-surface border-dev-charcoal p-6">
              <h3 className="mb-6 text-white">Profile Information</h3>

              <div className="space-y-6">
                {/* Avatar */}
                <div>
                  <Label className="text-text-secondary mb-2 block text-gray-400">Profile Picture</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-dev-light to-dev-grey flex items-center justify-center text-2xl">
                      EM
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="border-dev-charcoal hover:border-dev-light text-gray-400">
                        Upload New
                      </Button>
                      <Button variant="outline" className="border-dev-charcoal hover:border-error hover:text-error text-gray-400">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator className="bg-dev-charcoal" />

                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-text-secondary mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    defaultValue="Edwin Muchemi"
                    className="bg-background border-dev-charcoal focus:border-dev-light text-white"
                  />
                </div>

                {/* Username */}
                <div>
                  <Label htmlFor="username" className="text-text-secondary mb-2 block">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    defaultValue="edwin"
                    className="bg-background border-dev-charcoal focus:border-dev-light font-mono text-white"
                  />
                </div>

                {/* Bio */}
                <div>
                  <Label htmlFor="bio" className="text-text-secondary mb-2 block">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    defaultValue="Full-stack developer passionate about building innovative solutions. Open source contributor and tech enthusiast."
                    className="bg-background border-dev-charcoal focus:border-dev-light text-white"
                  />
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location" className="text-text-secondary mb-2 block">
                    Location
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    defaultValue="Nairobi, kenya"
                    className="bg-background border-dev-charcoal focus:border-dev-light text-white"
                  />
                </div>

                {/* Website */}
                <div>
                  <Label htmlFor="website" className="text-text-secondary mb-2 block">
                    Website
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    defaultValue="https://urbantrends.dev"
                    className="bg-background border-dev-charcoal focus:border-dev-light text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" className="border-dev-charcoal hover:border-dev-light text-gray-400">
                  Cancel
                </Button>
                <Button className="bg-dev-light hover:bg-dev-light/80 text-dev-dark">
                  Save Changes
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Account Settings */}
          <TabsContent value="account" className="space-y-6">
            <Card className="bg-surface border-dev-charcoal p-6">
              <h3 className="mb-6 text-white">Account Settings</h3>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-text-secondary mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="urbantrendsorganization@gmail.com"
                    className="bg-background border-dev-charcoal focus:border-dev-light text-gray-400"
                  />
                  <p className="text-xs text-text-muted mt-2">
                    Your email is used for login and notifications
                  </p>
                </div>

                <Separator className="bg-dev-charcoal" />

                {/* Change Password */}
                <div>
                  <h4 className="mb-4">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="current-password" className="text-text-secondary mb-2 block">
                        Current Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="current-password"
                          type={showPassword ? 'text' : 'password'}
                          className="bg-background border-dev-charcoal focus:border-dev-light pr-10 text-gray-400"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-dev-light"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="new-password" className="text-text-secondary mb-2 block">
                        New Password
                      </Label>
                      <Input
                        id="new-password"
                        type="password"
                        className="bg-background border-dev-charcoal focus:border-dev-light text-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password" className="text-text-secondary mb-2 block">
                        Confirm New Password
                      </Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        className="bg-background border-dev-charcoal focus:border-dev-light text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" className="border-dev-charcoal hover:border-dev-light text-gray-500">
                  Cancel
                </Button>
                <Button className="bg-dev-light hover:bg-dev-light/80 text-dev-dark">
                  Update Password
                </Button>
              </div>
            </Card>

            <Card className="bg-surface border-dev-charcoal p-6">
              <h3 className="mb-4 text-error">Danger Zone</h3>
              <p className="text-text-secondary mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button variant="outline" className="border-error text-error hover:bg-error/10">
                Delete Account
              </Button>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-surface border-dev-charcoal p-6">
              <h3 className="mb-6 text-white">Notification Preferences</h3>

              <div className="space-y-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Email Notifications</p>
                    <p className="text-sm text-text-secondary">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>

                <Separator className="bg-dev-charcoal" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Push Notifications</p>
                    <p className="text-sm text-text-secondary">
                      Receive push notifications in your browser
                    </p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>

                <Separator className="bg-dev-charcoal" />

                <div>
                  <h4 className="mb-4">Activity Notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium mb-1">Comments</p>
                        <p className="text-sm text-text-secondary">
                          When someone comments on your project
                        </p>
                      </div>
                      <Switch
                        checked={notifications.comments}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, comments: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium mb-1">Likes</p>
                        <p className="text-sm text-text-secondary">
                          When someone likes your project
                        </p>
                      </div>
                      <Switch
                        checked={notifications.likes}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, likes: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium mb-1">New Followers</p>
                        <p className="text-sm text-text-secondary">
                          When someone follows you
                        </p>
                      </div>
                      <Switch
                        checked={notifications.followers}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, followers: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium mb-1">Project Updates</p>
                        <p className="text-sm text-text-secondary">
                          Weekly digest of trending projects
                        </p>
                      </div>
                      <Switch
                        checked={notifications.projects}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, projects: checked })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="bg-surface border-dev-charcoal p-6 text-white">
              <h3 className="mb-6 text-white">Privacy Settings</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Public Profile</p>
                    <p className="text-sm text-text-secondary">
                      Make your profile visible to everyone
                    </p>
                  </div>
                  <Switch
                    checked={privacy.publicProfile}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, publicProfile: checked })}
                  />
                </div>

                <Separator className="bg-dev-charcoal" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Show Email Address</p>
                    <p className="text-sm text-text-secondary">
                      Display your email on your public profile
                    </p>
                  </div>
                  <Switch
                    checked={privacy.showEmail}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showEmail: checked })}
                  />
                </div>

                <Separator className="bg-dev-charcoal" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Show Projects</p>
                    <p className="text-sm text-text-secondary">
                      Display your projects on your profile
                    </p>
                  </div>
                  <Switch
                    checked={privacy.showProjects}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showProjects: checked })}
                  />
                </div>

                <Separator className="bg-dev-charcoal" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Allow Comments</p>
                    <p className="text-sm text-text-secondary">
                      Let others comment on your projects
                    </p>
                  </div>
                  <Switch
                    checked={privacy.allowComments}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, allowComments: checked })}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="bg-surface border-dev-charcoal p-6">
              <h3 className="mb-6">Appearance</h3>

              <div className="space-y-6">
                <div>
                  <Label className="text-text-secondary mb-3 block">Theme</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <button className="p-4 border-2 border-dev-light rounded-lg bg-background hover:bg-surface-hover transition-colors">
                      <div className="h-12 w-full bg-dev-dark rounded mb-2" />
                      <p className="text-sm">Dark</p>
                    </button>
                    <button className="p-4 border border-dev-charcoal rounded-lg bg-background hover:bg-surface-hover transition-colors">
                      <div className="h-12 w-full bg-white rounded mb-2" />
                      <p className="text-sm text-text-secondary">Light</p>
                    </button>
                    <button className="p-4 border border-dev-charcoal rounded-lg bg-background hover:bg-surface-hover transition-colors">
                      <div className="h-12 w-full bg-gradient-to-r from-dev-dark to-white rounded mb-2" />
                      <p className="text-sm text-text-secondary">Auto</p>
                    </button>
                  </div>
                </div>

                <Separator className="bg-dev-charcoal" />

                <div>
                  <Label className="text-text-secondary mb-3 block">Font Size</Label>
                  <div className="flex gap-2">
                    <Button variant="outline" className="border-dev-charcoal hover:border-dev-light">
                      Small
                    </Button>
                    <Button className="bg-dev-light text-dev-dark hover:bg-dev-light/80">
                      Medium
                    </Button>
                    <Button variant="outline" className="border-dev-charcoal hover:border-dev-light">
                      Large
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}