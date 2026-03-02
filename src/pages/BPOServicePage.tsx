import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { bpoServicesContent } from '../data/bpoServices';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BPOServicePage() {
  const { serviceId, industryId } = useParams();
  
  // Determine the key to use for looking up content
  const contentKey = industryId || serviceId;
  
  if (!contentKey || !bpoServicesContent[contentKey]) {
    return <Navigate to="/" replace />;
  }

  const content = bpoServicesContent[contentKey];
  const Icon = content.icon;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                <Icon className="w-4 h-4" />
                {industryId ? 'Industry Solution' : 'BPO Service'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {content.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                {content.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/demo" 
                  className="px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition-colors uppercase tracking-wide text-center"
                >
                  Request a Demo
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 border border-gray-300 text-gray-700 font-bold rounded-md hover:bg-gray-50 transition-colors uppercase tracking-wide text-center"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src={content.image} 
                alt={content.title} 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                {content.description}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-16">
                {content.features.map((feature: string, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-800">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {content.benefits && (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Business Benefits</h3>
                  <div className="grid sm:grid-cols-2 gap-6 mb-16">
                    {content.benefits.map((benefit: string, index: number) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="font-medium text-gray-800">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {content.metrics && (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Proven Results</h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {content.metrics.map((metric: { label: string, value: string }, index: number) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm text-center"
                      >
                        <div className="text-3xl font-black text-primary mb-2">{metric.value}</div>
                        <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="lg:col-span-5">
              <div className="bg-primary-bg rounded-2xl p-8 border border-primary/10 sticky top-24">
                <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Workholo?</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Expert Teams</h4>
                      <p className="text-sm text-gray-600">Highly trained professionals dedicated to your specific industry and service needs.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Scalable Solutions</h4>
                      <p className="text-sm text-gray-600">Easily scale your operations up or down based on seasonal demands or business growth.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Advanced Technology</h4>
                      <p className="text-sm text-gray-600">Powered by the latest AI and communication tools to ensure maximum efficiency.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-primary/10">
                  <p className="text-sm text-gray-600 mb-4">Ready to transform your operations?</p>
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-50 transition-colors border border-gray-200"
                  >
                    Talk to an Expert <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
