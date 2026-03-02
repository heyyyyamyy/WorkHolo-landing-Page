import { useState } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuresData = {
  communication: [
    { title: 'Team Channels', desc: 'Organized department channels', path: '/features/channels' },
    { title: 'Direct Messaging', desc: '1-on-1 private chat', path: '/features/messaging' },
    { title: 'Real-Time Messaging', desc: 'Instant team communication', path: '/features/real-time' },
    { title: 'Message History', desc: 'Searchable past conversations', path: '/features/history' },
    { title: '@Mentions', desc: 'Instant team notifications', path: '/features/mentions' },
  ],
  media: [
    { title: 'File Sharing', desc: 'Share documents and media', path: '/features/file-sharing' },
    { title: 'Media Preview', desc: 'Preview images and videos', path: '/features/media-preview' },
    { title: 'Drag & Drop', desc: 'Easy file uploads', path: '/features/drag-drop' },
  ],
  management: [
    { title: 'User Management', desc: 'Create and delete users', path: '/features/user-management' },
    { title: 'Role-Based Access', desc: 'Granular team permissions', path: '/features/rbac' },
    { title: 'Workspace Control', desc: 'Manage your entire team', path: '/features/workspace' },
    { title: 'Admin Dashboard', desc: 'Centralized admin controls', path: '/features/admin' },
  ],
  productivity: [
    { title: 'Structured Comm', desc: 'Organized team collaboration', path: '/features/structured-comm' },
    { title: 'Centralized Workspace', desc: 'Everything in one place', path: '/features/centralized' },
    { title: 'Mobile Responsive', desc: 'Work from anywhere', path: '/features/mobile' },
  ],
  intelligence: [
    { title: 'AI Summaries', desc: 'Catch up on missed messages', path: '/features/ai-summaries', icon: '✨' },
    { title: 'Smart Replies', desc: 'AI-powered response suggestions', path: '/features/smart-replies', icon: '🤖' },
    { title: 'AI Search', desc: 'Find exactly what you need', path: '/features/ai-search' },
    { title: 'Automated Notes', desc: 'AI-generated meeting notes', path: '/features/automated-notes' },
  ],
  security: [
    { title: 'Single Sign-On (SSO)', desc: 'Secure enterprise login', path: '/features/sso' },
    { title: 'Two-Factor Auth', desc: 'Extra layer of security', path: '/features/2fa' },
    { title: 'Data Encryption', desc: '256-bit secure encryption', path: '/features/encryption' },
    { title: 'Audit Logs', desc: 'Track workspace activity', path: '/features/audit-logs' },
  ]
};

const solutionsData = {
  departments: [
    { title: 'Engineering', path: '/solutions/engineering' },
    { title: 'IT', path: '/solutions/it' },
    { title: 'Customer service', path: '/solutions/customer-service' },
    { title: 'Sales', path: '/solutions/sales' },
    { title: 'Project management', path: '/solutions/project-management' },
    { title: 'Marketing', path: '/solutions/marketing' },
    { title: 'Human Resources', path: '/solutions/hr' },
    { title: 'Security', path: '/solutions/security' },
  ],
  industries: [
    { title: 'Manufacturing, auto and energy', path: '/solutions/manufacturing' },
    { title: 'Technology', path: '/solutions/technology' },
    { title: 'Media', path: '/solutions/media' },
    { title: 'Small business', path: '/solutions/small-business' },
    { title: 'Financial services', path: '/solutions/financial-services' },
    { title: 'Retail', path: '/solutions/retail' },
    { title: 'Education', path: '/solutions/education' },
    { title: 'Health and life sciences', path: '/solutions/health' },
  ]
};

const resourcesData = [
  [
    { title: 'Resources library', path: '/resources/library' },
    { title: 'Events', path: '/resources/events' },
    { title: 'Customer stories', path: '/resources/stories' },
    { title: 'Blog', path: '/resources/blog' },
  ],
  [
    { title: 'What\'s new', path: '/resources/whats-new' },
    { title: 'Developers', path: '/resources/developers' },
    { title: 'Community', path: '/resources/community' },
    { title: 'Workholo Marketplace', path: '/resources/marketplace' },
  ],
  [
    { title: 'Product tour', path: '/resources/tour' },
    { title: 'Partners', path: '/resources/partners' },
    { title: 'Workholo Certified', path: '/resources/certified' },
  ]
];

const bpoServicesData = {
  outbound: [
    { title: 'Customer Retention', path: '/bpo/customer-retention' },
    { title: 'Outbound Sales', path: '/bpo/outbound-sales' },
    { title: 'Lead Generation', path: '/bpo/lead-generation' },
  ],
  inbound: [
    { title: 'Customer Service', path: '/bpo/customer-service' },
    { title: 'Technical Support', path: '/bpo/technical-support' },
    { title: 'Payment Processing', path: '/bpo/payment-processing' },
  ],
  other1: [
    { title: 'Accounting and Collections', path: '/bpo/accounting-collections' },
    { title: 'Inbound Sales', path: '/bpo/inbound-sales' },
    { title: 'Facility and Procurement', path: '/bpo/facility-procurement' },
  ],
  other2: [
    { title: 'Direct Response Marketing', path: '/bpo/direct-response-marketing' },
    { title: 'Back Office Processing', path: '/bpo/back-office-processing' },
    { title: 'Claims Processing', path: '/bpo/claims-processing' },
  ],
  industries: [
    { title: 'Healthcare & Life Sciences', path: '/bpo/industries/healthcare' },
    { title: 'Banking & Financial Services', path: '/bpo/industries/finance' },
    { title: 'Retail & E-commerce', path: '/bpo/industries/retail' },
    { title: 'Technology & Telecom', path: '/bpo/industries/technology' },
    { title: 'Travel & Hospitality', path: '/bpo/industries/travel' },
    { title: 'Manufacturing & Logistics', path: '/bpo/industries/manufacturing' },
  ]
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      <nav className="bg-white rounded-full shadow-lg border border-gray-200 relative">
        <div className="flex justify-between items-center h-16 px-4 lg:px-8">
          {/* Logo and primary nav */}
          <div className="flex items-center gap-8 h-full">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight">Workholo</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-6 h-full">
              {/* Features Dropdown */}
              <div 
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('features')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`text-sm font-bold flex items-center gap-1 h-full ${activeDropdown === 'features' ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}>
                  Features <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'features' && (
                  <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white shadow-2xl rounded-2xl border border-gray-100 flex justify-center max-h-[calc(100vh-6rem)] overflow-y-auto">
                    <div className="max-w-7xl w-full flex flex-col mx-auto">
                      <div className="flex">
                        <div className="flex-1 p-8 grid grid-cols-3 gap-8">
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Core Communication</h4>
                              <ul className="space-y-4">
                                {featuresData.communication.map(item => (
                                  <li key={item.title}>
                                    <Link to={item.path} className="block group">
                                      <div className="font-medium text-gray-900 group-hover:text-primary">{item.title}</div>
                                      <div className="text-sm text-gray-500">{item.desc}</div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Media & Attachments</h4>
                              <ul className="space-y-4">
                                {featuresData.media.map(item => (
                                  <li key={item.title}>
                                    <Link to={item.path} className="block group">
                                      <div className="font-medium text-gray-900 group-hover:text-primary">{item.title}</div>
                                      <div className="text-sm text-gray-500">{item.desc}</div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Team & Admin Management</h4>
                              <ul className="space-y-4">
                                {featuresData.management.map(item => (
                                  <li key={item.title}>
                                    <Link to={item.path} className="block group">
                                      <div className="font-medium text-gray-900 group-hover:text-primary">{item.title}</div>
                                      <div className="text-sm text-gray-500">{item.desc}</div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Productivity</h4>
                              <ul className="space-y-4">
                                {featuresData.productivity.map(item => (
                                  <li key={item.title}>
                                    <Link to={item.path} className="block group">
                                      <div className="font-medium text-gray-900 group-hover:text-primary">{item.title}</div>
                                      <div className="text-sm text-gray-500">{item.desc}</div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-8">
                            <div>
                              <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Smart & AI Features</h4>
                              <ul className="space-y-4">
                                {featuresData.intelligence.map(item => (
                                  <li key={item.title}>
                                    <Link to={item.path} className="block group">
                                      <div className="font-medium text-gray-900 group-hover:text-primary flex items-center gap-2">
                                        {item.icon && <span>{item.icon}</span>}
                                        {item.title}
                                      </div>
                                      <div className="text-sm text-gray-500">{item.desc}</div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Enterprise Security</h4>
                              <ul className="space-y-4">
                                {featuresData.security.map(item => (
                                  <li key={item.title}>
                                    <Link to={item.path} className="block group">
                                      <div className="font-medium text-gray-900 group-hover:text-primary">{item.title}</div>
                                      <div className="text-sm text-gray-500">{item.desc}</div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="w-80 bg-gray-50 p-8 border-l border-gray-100 flex flex-col">
                          <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Workholo Marketplace</h4>
                          <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                            <img src="https://picsum.photos/seed/marketplace/300/150" alt="Marketplace" className="w-full h-auto rounded-md mb-4" />
                            <p className="text-sm text-gray-900 mb-2">Find new agents and apps that fit your team's needs.</p>
                            <Link to="/marketplace" className="text-primary font-medium text-sm flex items-center gap-1 hover:underline">
                              Browse marketplace <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                          <div className="mt-auto space-y-3">
                            <Link to="/what-is-workholo" className="block text-sm text-gray-700 hover:text-primary">What is Workholo?</Link>
                            <Link to="/vs-email" className="block text-sm text-gray-700 hover:text-primary">Workholo vs email</Link>
                            <Link to="/accessibility" className="block text-sm text-gray-700 hover:text-primary">Accessibility</Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-white border-t border-gray-100 py-4 px-8 flex items-center gap-6">
                        <Link to="/demo" className="text-sm font-medium text-primary hover:underline">Watch demo</Link>
                        <Link to="/download" className="text-sm font-medium text-primary hover:underline">Download Workholo</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div 
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`text-sm font-bold flex items-center gap-1 h-full ${activeDropdown === 'solutions' ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}>
                  Solutions <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white shadow-2xl rounded-2xl border border-gray-100 flex justify-center max-h-[calc(100vh-6rem)] overflow-y-auto">
                    <div className="max-w-7xl w-full flex flex-col mx-auto">
                      <div className="flex">
                        <div className="flex-1 p-8 grid grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">By Department</h4>
                            <ul className="space-y-4">
                              {solutionsData.departments.map(item => (
                                <li key={item.title}>
                                  <Link to={item.path} className="block text-gray-700 hover:text-primary">{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">By Industry</h4>
                            <ul className="space-y-4">
                              {solutionsData.industries.map(item => (
                                <li key={item.title}>
                                  <Link to={item.path} className="block text-gray-700 hover:text-primary">{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="w-80 bg-gray-50 p-8 border-l border-gray-100 flex flex-col">
                          <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Template Gallery</h4>
                          <div className="mb-6">
                            <img src="https://picsum.photos/seed/templates/300/150" alt="Templates" className="w-full h-auto rounded-md mb-4" />
                            <p className="text-sm text-gray-900 mb-2">Start work faster with pre-made templates for every task.</p>
                            <Link to="/templates" className="text-primary font-medium text-sm flex items-center gap-1 hover:underline">
                              See all templates <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                          <div className="mt-auto space-y-3 pt-6 border-t border-gray-200">
                            <Link to="/templates/task-management" className="block text-sm text-gray-700 hover:text-primary">Task management</Link>
                            <Link to="/templates/scale" className="block text-sm text-gray-700 hover:text-primary">Scale</Link>
                            <Link to="/templates/engagement" className="block text-sm text-gray-700 hover:text-primary">Engagement</Link>
                            <Link to="/templates/trust" className="block text-sm text-gray-700 hover:text-primary">Trust</Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-white border-t border-gray-100 py-4 px-8 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <Link to="/demo" className="text-sm font-medium text-primary hover:underline">Watch demo</Link>
                          <Link to="/download" className="text-sm font-medium text-primary hover:underline">Download Workholo</Link>
                        </div>
                        <Link to="/solutions" className="text-sm font-medium text-gray-700 hover:text-primary">See all solutions</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* BPO Services Dropdown */}
              <div 
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('bpo')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`text-sm font-bold flex items-center gap-1 h-full ${activeDropdown === 'bpo' ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}>
                  BPO Services <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'bpo' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'bpo' && (
                  <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white shadow-2xl rounded-2xl border border-gray-100 flex justify-center max-h-[calc(100vh-6rem)] overflow-y-auto">
                    <div className="max-w-7xl w-full flex flex-col mx-auto">
                      <div className="flex">
                        <div className="flex-1 p-8 grid grid-cols-4 gap-8">
                          <div>
                            <h4 className="text-sm font-bold text-primary-dark mb-6">Outbound Services</h4>
                            <ul className="space-y-4">
                              {bpoServicesData.outbound.map(item => (
                                <li key={item.title}>
                                  <Link to={item.path} className="block text-gray-700 hover:text-primary">{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-primary-dark mb-6">Inbound Services</h4>
                            <ul className="space-y-4">
                              {bpoServicesData.inbound.map(item => (
                                <li key={item.title}>
                                  <Link to={item.path} className="block text-gray-700 hover:text-primary">{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-transparent mb-6 select-none">Other Services</h4>
                            <ul className="space-y-4">
                              {bpoServicesData.other1.map(item => (
                                <li key={item.title}>
                                  <Link to={item.path} className="block text-gray-700 hover:text-primary">{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-transparent mb-6 select-none">Other Services</h4>
                            <ul className="space-y-4">
                              {bpoServicesData.other2.map(item => (
                                <li key={item.title}>
                                  <Link to={item.path} className="block text-gray-700 hover:text-primary">{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="w-80 bg-gray-50 p-8 border-l border-gray-100 flex flex-col">
                          <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Industries</h4>
                          <ul className="space-y-4">
                            {bpoServicesData.industries.map(item => (
                              <li key={item.title}>
                                <Link to={item.path} className="block text-gray-700 hover:text-primary">{item.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/enterprise" className="text-sm font-bold text-gray-800 hover:text-primary h-full flex items-center">
                Enterprise
              </Link>

              {/* Resources Dropdown */}
              <div 
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`text-sm font-bold flex items-center gap-1 h-full ${activeDropdown === 'resources' ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}>
                  Resources <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white shadow-2xl rounded-2xl border border-gray-100 flex justify-center max-h-[calc(100vh-6rem)] overflow-y-auto">
                    <div className="max-w-7xl w-full flex flex-col mx-auto">
                      <div className="flex">
                        <div className="flex-1 p-8 grid grid-cols-3 gap-8">
                          {resourcesData.map((col, idx) => (
                            <ul key={idx} className="space-y-4">
                              {col.map(item => (
                                <li key={item.title}>
                                  <Link to={item.path} className="block text-gray-700 hover:text-primary">{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                        <div className="w-80 bg-gray-50 p-8 border-l border-gray-100 flex flex-col">
                          <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Featured</h4>
                          <div className="mb-6">
                            <img src="https://picsum.photos/seed/featured/300/150" alt="Featured" className="w-full h-auto rounded-md mb-4" />
                            <p className="text-sm text-gray-900 mb-2">Winning in the AI era of work.</p>
                            <Link to="/resources/featured" className="text-primary font-medium text-sm flex items-center gap-1 hover:underline">
                              Learn more <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                          <div className="mt-auto space-y-3 pt-6 border-t border-gray-200">
                            <Link to="/help" className="block text-sm text-gray-700 hover:text-primary">Help Centre</Link>
                            <Link to="/support" className="block text-sm text-gray-700 hover:text-primary">Customer support</Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-white border-t border-gray-100 py-4 px-8 flex items-center gap-6">
                        <Link to="/demo" className="text-sm font-medium text-primary hover:underline">Watch demo</Link>
                        <Link to="/download" className="text-sm font-medium text-primary hover:underline">Download Workholo</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/pricing" className="text-sm font-bold text-gray-800 hover:text-primary h-full flex items-center">
                Pricing
              </Link>
            </div>
          </div>

          {/* Secondary nav (Desktop) */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-3 ml-2">
              <Link 
                to="/demo" 
                className="text-xs font-bold text-primary border border-primary px-5 py-2.5 rounded hover:bg-primary-bg transition-colors uppercase tracking-wider"
              >
                REQUEST A DEMO
              </Link>
              <Link 
                to="/signup" 
                className="text-xs font-bold text-white bg-primary px-5 py-2.5 rounded hover:bg-primary-dark transition-colors uppercase tracking-wider"
              >
                GET STARTED
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-900">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white shadow-2xl rounded-2xl border border-gray-100 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-6">
            {/* Features Mobile */}
            <div>
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'features-mobile' ? null : 'features-mobile')}
                className="flex items-center justify-between w-full text-lg font-bold"
              >
                Features <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'features-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'features-mobile' && (
                <div className="mt-4 pl-4 space-y-4">
                  <div className="font-bold text-sm text-gray-500 uppercase tracking-wider">Core Communication</div>
                  {featuresData.communication.map(item => (
                    <Link key={item.title} to={item.path} className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>{item.title}</Link>
                  ))}
                  <div className="font-bold text-sm text-gray-500 uppercase tracking-wider mt-6">Smart & AI Features</div>
                  {featuresData.intelligence.map(item => (
                    <Link key={item.title} to={item.path} className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>{item.title}</Link>
                  ))}
                  <Link to="/features" className="block text-primary font-medium mt-4" onClick={() => setMobileMenuOpen(false)}>See all features →</Link>
                </div>
              )}
            </div>

            {/* Solutions Mobile */}
            <div>
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'solutions-mobile' ? null : 'solutions-mobile')}
                className="flex items-center justify-between w-full text-lg font-bold"
              >
                Solutions <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'solutions-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'solutions-mobile' && (
                <div className="mt-4 pl-4 space-y-4">
                  <div className="font-bold text-sm text-gray-500 uppercase tracking-wider">By Department</div>
                  {solutionsData.departments.map(item => (
                    <Link key={item.title} to={item.path} className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>{item.title}</Link>
                  ))}
                  <Link to="/solutions" className="block text-primary font-medium mt-4" onClick={() => setMobileMenuOpen(false)}>See all solutions →</Link>
                </div>
              )}
            </div>

            {/* BPO Services Mobile */}
            <div>
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'bpo-mobile' ? null : 'bpo-mobile')}
                className="flex items-center justify-between w-full text-lg font-bold"
              >
                BPO Services <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'bpo-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'bpo-mobile' && (
                <div className="mt-4 pl-4 space-y-4">
                  <div className="font-bold text-sm text-gray-500 uppercase tracking-wider">Outbound Services</div>
                  {bpoServicesData.outbound.map(item => (
                    <Link key={item.title} to={item.path} className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>{item.title}</Link>
                  ))}
                  <div className="font-bold text-sm text-gray-500 uppercase tracking-wider mt-6">Inbound Services</div>
                  {bpoServicesData.inbound.map(item => (
                    <Link key={item.title} to={item.path} className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>{item.title}</Link>
                  ))}
                  <div className="font-bold text-sm text-gray-500 uppercase tracking-wider mt-6">More Services</div>
                  {bpoServicesData.other1.map(item => (
                    <Link key={item.title} to={item.path} className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>{item.title}</Link>
                  ))}
                  {bpoServicesData.other2.map(item => (
                    <Link key={item.title} to={item.path} className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>{item.title}</Link>
                  ))}
                  <div className="font-bold text-sm text-gray-500 uppercase tracking-wider mt-6">Industries</div>
                  {bpoServicesData.industries.map(item => (
                    <Link key={item.title} to={item.path} className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>{item.title}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/enterprise" className="block text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Enterprise</Link>

            {/* Resources Mobile */}
            <div>
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'resources-mobile' ? null : 'resources-mobile')}
                className="flex items-center justify-between w-full text-lg font-bold"
              >
                Resources <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'resources-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'resources-mobile' && (
                <div className="mt-4 pl-4 space-y-4">
                  {resourcesData[0].map(item => (
                    <Link key={item.title} to={item.path} className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>{item.title}</Link>
                  ))}
                  {resourcesData[1].map(item => (
                    <Link key={item.title} to={item.path} className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>{item.title}</Link>
                  ))}
                  <Link to="/resources" className="block text-primary font-medium mt-4" onClick={() => setMobileMenuOpen(false)}>See all resources →</Link>
                </div>
              )}
            </div>

            <Link to="/pricing" className="block text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>

            <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
              <Link to="/signup" className="text-center font-bold py-3 bg-primary text-white rounded-md" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
