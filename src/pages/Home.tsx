import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
          Workholo is your team's<br />collective <span className="text-pink-500">🧠</span> brain.
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Move faster and work smarter, with people, apps and AI at your side.
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
            Reimagine what's possible<br />with AI and agents.
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            AI in Workholo doesn't make you think, it helps you do. It summarises and searches based on actual conversations, making every app and agent more helpful and contextually aware than ever.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="p-6 border-b border-gray-100 bg-primary-bg">
              <h3 className="text-xl font-bold text-primary">Organise your day with Workholobot</h3>
            </div>
            <div className="p-6 space-y-6 text-gray-600">
              <div className="pb-6 border-b border-gray-100 font-medium hover:text-primary cursor-pointer transition-colors">Summarise a conversation you missed</div>
              <div className="pb-6 border-b border-gray-100 font-medium hover:text-primary cursor-pointer transition-colors">Get fast answers with Claude</div>
              <div className="pb-6 border-b border-gray-100 font-medium hover:text-primary cursor-pointer transition-colors">Turn on AI note-taking in huddles</div>
              <div className="font-medium hover:text-primary cursor-pointer transition-colors">Review code with GitHub Copilot</div>
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
            <button className="px-6 py-2 rounded-full bg-white text-primary font-bold shadow-sm">Knowledge</button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium hover:text-primary transition-colors">People</button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium hover:text-primary transition-colors">Process</button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium hover:text-primary transition-colors">Platform</button>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Give everyone instant context.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get access to every file, decision and conversation, so you can build on past work instead of recreating it.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-primary mb-3">Meet Workholobot: Your personal agent for work.</h3>
              <p className="text-gray-600 text-lg mb-4">
                Workholobot isn't just any AI. It's AI that knows your team inside and out. It adapts to your style, finds what you need and helps to get work done faster.
              </p>
              <Link to="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
                Learn more about Workholobot <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">One search to rule them all.</h3>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Bring CRM data to the conversation.</h3>
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
            Let your people connect like people.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Workholo's conversational UI makes collaborating more approachable, whether you're working with a colleague or an agent.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-primary mb-3">It all starts with a channel.</h3>
              <p className="text-gray-600 text-lg mb-4">
                Channels are flexible, transparent spaces for working with your team, AI assistants and agents.
              </p>
              <Link to="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
                Learn about channels <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">When talking is easier than typing...</h3>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Bring conversations out of the inbox.</h3>
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
            Manage all your work from one place.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automate daily stand-up meetings, project updates and approvals so your team can focus on growth instead of guesswork.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-primary mb-3">Anyone can automate in Workholo.</h3>
              <p className="text-gray-600 text-lg mb-4">
                By click or by code, Workholo makes it easy for anyone to build time-saving automations of their own.
              </p>
              <Link to="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
                Learn about workflows <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Manage projects and tasks.</h3>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">A simpler way to get started.</h3>
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
            Secure. Scaleable. Silo-free.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our flexible, open platform is purpose-built for bringing the best agents and AI to every business, and can be tailored to fit however your teams work best.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-primary mb-3">From Atlassian to Zoom.</h3>
              <p className="text-gray-600 text-lg mb-4">
                Google Drive. ChatGPT. Vercel. Box. Asana. Workday. You name it, it works in Workholo.
              </p>
              <Link to="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
                See all integrations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Customise Workholo to fit your needs.</h3>
            </div>
            <div className="pl-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Work without worry.</h3>
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
            We're in the business of growing businesses.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-7xl font-bold text-primary-light mb-6">90%</div>
              <p className="text-xl font-medium max-w-xs mx-auto">
                of users say that Workholo helps them to stay more connected⁴
              </p>
            </div>
            <div>
              <div className="text-7xl font-bold text-primary-light mb-6">43</div>
              <p className="text-xl font-medium max-w-xs mx-auto">
                The average number of apps used by teams in Workholo³
              </p>
            </div>
            <div>
              <div className="text-7xl font-bold text-primary-light mb-6">87%</div>
              <p className="text-xl font-medium max-w-xs mx-auto">
                of users say that Workholo helps them to collaborate more efficiently⁴
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
