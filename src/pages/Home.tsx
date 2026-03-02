import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
          WorkHolo is your team's<br />central <span className="text-primary">workspace</span>.
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Experience real-time messaging, seamless file sharing, and intelligent collaboration in one unified, cloud-based platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            to="/signup" 
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition-colors uppercase tracking-wide"
          >
            Get started
          </Link>
          <Link 
            to="/pricing" 
            className="w-full sm:w-auto px-8 py-4 border border-primary text-primary font-bold rounded-md hover:bg-primary-bg transition-colors flex items-center justify-center gap-2 uppercase tracking-wide"
          >
            Find your subscription <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="mb-16">
          <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">Trusted by top teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale">
            {/* Placeholder logos */}
            <div className="text-xl font-bold">GM</div>
            <div className="text-xl font-bold">OpenAI</div>
            <div className="text-xl font-bold">Target</div>
            <div className="text-xl font-bold">Paramount</div>
            <div className="text-xl font-bold">stripe</div>
            <div className="text-xl font-bold">IBM</div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1 border border-gray-200 shadow-sm">
            <PlayCircle className="w-3 h-3 text-green-500" /> Download this video
          </div>
          <img 
            src="https://picsum.photos/seed/dashboard/1200/800" 
            alt="Workholo App Interface" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* AI Section */}
      <section className="bg-primary text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Work smarter with<br />AI-powered communication.
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Elevate your team's productivity with intelligent features designed to save time and streamline workflows. From automated summaries to smart suggestions, AI is built into the core of WorkHolo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="p-6 border-b border-gray-100 bg-primary-bg">
              <h3 className="text-xl font-bold text-primary">Smart & AI Features</h3>
            </div>
            <div className="p-6 space-y-6 text-gray-600">
              <div className="pb-6 border-b border-gray-100 font-medium hover:text-primary cursor-pointer transition-colors">AI Message Summaries: Catch up instantly</div>
              <div className="pb-6 border-b border-gray-100 font-medium hover:text-primary cursor-pointer transition-colors">Smart Reply Suggestions: Respond faster</div>
              <div className="pb-6 border-b border-gray-100 font-medium hover:text-primary cursor-pointer transition-colors">Automated Meeting Notes: Focus on the discussion</div>
              <div className="font-medium hover:text-primary cursor-pointer transition-colors">AI-Powered Search: Find exactly what you need</div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/ai-agent/800/600" 
              alt="AI Agent Interface" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-1 bg-primary-bg rounded-full mb-12 shadow-sm border border-primary/10">
            <button className="px-6 py-2 rounded-full bg-white text-primary font-bold shadow-sm">Communication</button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium hover:text-primary transition-colors">Media</button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium hover:text-primary transition-colors">Productivity</button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium hover:text-primary transition-colors">Management</button>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Structured communication for focused teams.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organize your work with dedicated channels, direct messaging, and rich media sharing capabilities designed for modern collaboration.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-primary mb-3">Core Communication & Channels</h3>
              <p className="text-gray-600 text-lg mb-4">
                Keep conversations organized with department-based channels and 1-on-1 direct messaging. Utilize @mentions, emoji reactions, and pinned messages to keep everyone aligned.
              </p>
              <Link to="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
                Explore communication features <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Rich Media & File Sharing.</h3>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Instant Notifications & Search.</h3>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <img 
              src="https://picsum.photos/seed/search/800/600" 
              alt="Search Interface" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empower your organization with granular control.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage your workspace efficiently with robust user management, role-based access controls, and comprehensive team permissions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-primary mb-3">Team & User Management</h3>
              <p className="text-gray-600 text-lg mb-4">
                Easily handle user creation, deletion, and member invitations. Implement role-based access control to ensure the right people have the right access.
              </p>
              <Link to="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
                Learn about access controls <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Department-Based Channels.</h3>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Workspace Management.</h3>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <img 
              src="https://picsum.photos/seed/channels/800/600" 
              alt="Channels Interface" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Manage Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete visibility and control over your workspace.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Equip your administrators with powerful tools to manage channels, monitor activity, and track productivity through detailed analytics.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-primary mb-3">Admin Controls & Analytics</h3>
              <p className="text-gray-600 text-lg mb-4">
                Utilize the Admin Dashboard for channel creation, team moderation, and user activity control. Access usage reports and communication analytics to track productivity.
              </p>
              <Link to="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
                Explore admin features <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Enable / Disable 1-on-1 Chat.</h3>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Admin Insights Dashboard.</h3>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <img 
              src="https://picsum.photos/seed/workflows/800/600" 
              alt="Workflows Interface" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Secure Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Enterprise-grade security meets seamless integration.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your data with advanced security measures while connecting WorkHolo to the tools you already use every day.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-primary mb-3">Security & Integrations</h3>
              <p className="text-gray-600 text-lg mb-4">
                Ensure compliance with SSO, 2FA, data encryption, and audit logs. Integrate seamlessly with Google Drive, Calendar, Email, and third-party apps via API and Webhooks.
              </p>
              <Link to="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
                See all integrations & security <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Retention Policies.</h3>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Access Controls.</h3>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <img 
              src="https://picsum.photos/seed/integrations/800/600" 
              alt="Integrations Interface" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">Coming Soon</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The future of collaboration is coming.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're constantly evolving. Here's a sneak peek at the advanced communication features on our roadmap.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-2">Voice & Video Calling</h4>
            <p className="text-sm text-gray-500">Connect face-to-face instantly.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-2">Screen Sharing</h4>
            <p className="text-sm text-gray-500">Collaborate visually in real-time.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-2">Threaded Conversations</h4>
            <p className="text-sm text-gray-500">Keep discussions organized.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-2">Message Scheduling</h4>
            <p className="text-sm text-gray-500">Send messages at the perfect time.</p>
          </div>
        </div>
      </section>

      {/* Innovative Companies Section */}
      <section className="bg-primary text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-12">
        {/* Curved top edge */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gray-50" style={{ borderBottomLeftRadius: '50% 100%', borderBottomRightRadius: '50% 100%' }}></div>
        
        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            The most innovative companies run<br />their business in Workholo.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer aspect-[16/9] md:aspect-auto">
              <img src="https://picsum.photos/seed/mrbeast/800/600" alt="MrBeast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-left">
                <h3 className="text-2xl font-bold mb-2">Workholobot helps MrBeast to create viral videos.</h3>
                <PlayCircle className="w-12 h-12 text-white absolute bottom-8 right-8" />
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square md:aspect-[3/4]">
              <img src="https://picsum.photos/seed/box/400/600" alt="Box" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-3xl font-bold tracking-widest">box</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square md:aspect-[3/4]">
              <img src="https://picsum.photos/seed/caraway/400/600" alt="Caraway" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-2xl font-serif">Caraway</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square md:aspect-[3/4]">
              <img src="https://picsum.photos/seed/rivian/400/600" alt="Rivian" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-2xl font-bold tracking-widest uppercase">Rivian</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-20">
            Built for productivity and scale.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-7xl font-bold text-primary-light mb-6">100%</div>
              <p className="text-xl font-medium max-w-xs mx-auto">
                Cloud-based platform ensuring uptime and reliability.
              </p>
            </div>
            <div>
              <div className="text-7xl font-bold text-primary-light mb-6">256</div>
              <p className="text-xl font-medium max-w-xs mx-auto">
                Bit data encryption keeping your enterprise secure.
              </p>
            </div>
            <div>
              <div className="text-7xl font-bold text-primary-light mb-6">24/7</div>
              <p className="text-xl font-medium max-w-xs mx-auto">
                Real-time messaging and instant notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-primary text-white pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 pb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            See all that you can accomplish in Workholo.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition-colors uppercase tracking-wide"
            >
              Get started
            </Link>
            <Link 
              to="/demo" 
              className="w-full sm:w-auto px-8 py-4 border border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors uppercase tracking-wide"
            >
              Request a demo
            </Link>
          </div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' }}></div>
      </section>
    </div>
  );
}
