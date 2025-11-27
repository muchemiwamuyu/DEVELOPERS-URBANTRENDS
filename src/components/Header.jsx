import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Bell, Settings, User, Menu, X, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const notificationCount = 3;

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dev-charcoal bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-dev-light to-dev-grey">
              <Code2 className="h-6 w-6 text-dev-dark" />
            </div>
            <span className="font-mono text-xl">Urbantrends-Developers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/projects"
              className={`transition-colors hover:text-dev-light ${
                isActive('/projects') ? 'text-white' : 'text-text-secondary'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/dashboard"
              className={`transition-colors hover:text-dev-light ${
                isActive('/dashboard') ? 'text-white' : 'text-text-secondary'
              }`}
            >
              Dashboard
            </Link>
            <Link to="/add-project">
              <Button className="bg-dev-light hover:bg-dev-light/80 text-dev-dark">
                Add Project
              </Button>
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface-hover transition-colors">
              <Search className="h-5 w-5 text-text-secondary" />
            </button>
            
            <Link
              to="/notifications"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface-hover transition-colors relative"
            >
              <Bell className="h-5 w-5 text-text-secondary" />
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-error border-none text-white text-xs">
                  {notificationCount}
                </Badge>
              )}
            </Link>

            <Link
              to="/settings"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface-hover transition-colors"
            >
              <Settings className="h-5 w-5 text-text-secondary" />
            </Link>

            <Link
              to="/dashboard"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg bg-dev-grey hover:bg-dev-grey/80 transition-colors"
            >
              <User className="h-5 w-5 text-white" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg hover:bg-surface-hover transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-dev-charcoal py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link
                to="/projects"
                className="px-4 py-2 rounded-lg hover:bg-surface-hover transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-lg hover:bg-surface-hover transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/notifications"
                className="px-4 py-2 rounded-lg hover:bg-surface-hover transition-colors flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                Notifications
                {notificationCount > 0 && (
                  <Badge className="bg-error border-none text-white">
                    {notificationCount}
                  </Badge>
                )}
              </Link>
              <Link
                to="/settings"
                className="px-4 py-2 rounded-lg hover:bg-surface-hover transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Settings
              </Link>
              <Link to="/add-project" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-dev-light hover:bg-dev-light/80 text-dev-dark">
                  Add Project
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}