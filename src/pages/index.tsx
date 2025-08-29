import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { StripePricingSection } from '../components/StripeEmbeddedButtons';
import { MCPStatusPanel } from '../components/MCPStatusPanel';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CreditCardIcon,
  BoltIcon,
  CalendarIcon,
  PresentationChartLineIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeDemo, setActiveDemo] = useState('dashboard');
  const [contentStats, setContentStats] = useState({
    generated: 1247,
    scheduled: 89,
    reach: 24500,
    engagement: 4.2
  });

  useEffect(() => {
    setMounted(true);
    // Simulate real-time updates
    const interval = setInterval(() => {
      setContentStats(prev => ({
        generated: prev.generated + Math.floor(Math.random() * 3),
        scheduled: prev.scheduled + Math.floor(Math.random() * 2),
        reach: prev.reach + Math.floor(Math.random() * 100),
        engagement: parseFloat((prev.engagement + (Math.random() * 0.2 - 0.1)).toFixed(1))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: BoltIcon,
      title: 'AI Content Generator',
      description: 'GPT-4 powered content creation with MCP memory for consistent brand voice',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CalendarIcon,
      title: 'Smart Scheduling',
      description: 'AI-optimized posting times using deep learning and audience analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: PresentationChartLineIcon,
      title: 'Advanced Analytics',
      description: 'Real-time engagement tracking with predictive performance insights',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Multi-Platform Management',
      description: 'Unified dashboard for Twitter/X, LinkedIn, Instagram, Facebook, TikTok',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with role-based access and content approval workflows',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: CpuChipIcon,
      title: 'MCP Integration',
      description: 'Deep memory system with 30+ connected servers for enhanced automation',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const pricingTiers = [
    {
      name: 'Creator',
      price: 29,
      description: 'Perfect for individual creators and small businesses',
      features: ['5 Social Accounts', '100 Posts/Month', 'Basic Analytics', 'Email Support', 'Content Templates', 'Basic Scheduling'],
      highlighted: false,
      priceId: 'price_creator_monthly'
    },
    {
      name: 'Professional',
      price: 79,
      description: 'Advanced features for growing businesses and agencies',
      features: ['25 Social Accounts', '1000 Posts/Month', 'Advanced Analytics', 'Priority Support', 'Custom Branding', 'Team Collaboration', 'API Access', 'MCP Integration'],
      highlighted: true,
      priceId: 'price_professional_monthly'
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'Complete solution for large organizations',
      features: ['Unlimited Accounts', 'Unlimited Posts', 'Custom Analytics', 'Dedicated Support', 'White Label', 'Advanced Security', 'Custom Integrations', 'Full MCP Suite', 'SLA Guarantee'],
      highlighted: false,
      priceId: 'price_enterprise_monthly'
    }
  ];

  const handleSubscribe = async (priceId: string) => {
    console.log('Subscribing to:', priceId);
    // In production, redirect to Stripe Checkout
    window.open(`https://buy.stripe.com/test_${priceId}`, '_blank');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>AI Social Automation - Enterprise MCP-Powered Social Media Management</title>
        <meta name="description" content="Create, schedule & analyze AI-generated content with enterprise MCP integration. Advanced social media automation for businesses." />
        <meta name="keywords" content="AI social media, content automation, MCP integration, social media management, enterprise automation" />
        <meta property="og:title" content="AI Social Automation - Enterprise Social Media Management" />
        <meta property="og:description" content="Create, schedule & analyze AI-generated content with enterprise MCP integration." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <SparklesIcon className="h-8 w-8 text-cyan-400" />
                <span className="text-white font-bold text-xl">AI Social Automation</span>
                <div className="ml-2 px-2 py-1 bg-green-500/20 rounded-full">
                  <span className="text-xs text-green-300 font-bold">LIVE</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#analytics" className="text-gray-300 hover:text-white transition-colors">Analytics</a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enterprise Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-8"
              >
                <SparklesIcon className="h-5 w-5 text-cyan-400 mr-2" />
                <span className="text-white font-semibold">Enterprise AI Social Automation</span>
                <div className="ml-3 px-2 py-1 bg-green-500/20 rounded-full">
                  <span className="text-xs text-green-300 font-bold">v2.0 LIVE</span>
                </div>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                AI Social Automation
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Create, Schedule & Analyze
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Enterprise-grade social media automation with <strong className="text-cyan-400">AI content generation</strong>, 
                <strong className="text-purple-400"> smart scheduling</strong>, and 
                <strong className="text-blue-400"> advanced analytics</strong>.
                <br />
                <span className="text-lg text-gray-400 mt-2 block">
                  Powered by MCP SuperPowers • 30+ Connected Servers
                </span>
              </p>

              {/* Live Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto"
              >
                <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-cyan-400">{contentStats.generated.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Content Generated</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-purple-400">{contentStats.scheduled}</div>
                  <div className="text-sm text-gray-400">Posts Scheduled</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-blue-400">{(contentStats.reach / 1000).toFixed(1)}K</div>
                  <div className="text-sm text-gray-400">Total Reach</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-green-400">{contentStats.engagement}%</div>
                  <div className="text-sm text-gray-400">Engagement Rate</div>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button 
                  onClick={() => handleSubscribe('price_professional_monthly')}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/25"
                >
                  <div className="flex items-center justify-center">
                    <RocketLaunchIcon className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Start Free Trial - $79/month
                  </div>
                </button>
                <button 
                  onClick={() => window.open('https://v0-futuristic-dashboard-delta-flax-89.vercel.app/', '_blank')}
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center">
                    <GlobeAltIcon className="h-5 w-5 mr-2" />
                    View Live Demo
                  </div>
                </button>
              </div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-400 text-sm"
              >
                <p className="mb-2">✅ Multi-Platform Support • ✅ Enterprise Security • ✅ MCP Integration</p>
                <p>🚀 Real-time Analytics • 💰 Revenue-Optimized • 🔒 SOC 2 Compliant</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* MCP Status Panel */}
        <section className="py-10 px-4" id="analytics">
          <div className="max-w-7xl mx-auto">
            <MCPStatusPanel />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Enterprise Features</h2>
              <p className="text-gray-300 text-xl">AI-powered social media automation with MCP integration</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-cyan-500/50 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stripe Pricing Section */}
        <section id="pricing">
          <StripePricingSection />
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30"
            >
              <RocketLaunchIcon className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Social Media?</h2>
              <p className="text-gray-300 text-xl mb-8">
                Join thousands of businesses using AI Social Automation to grow their social presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleSubscribe('price_professional_monthly')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Free Trial Today
                </button>
                <button 
                  onClick={() => window.open('https://v0-futuristic-dashboard-delta-flax-89.vercel.app/', '_blank')}
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Live Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <SparklesIcon className="h-6 w-6 text-cyan-400" />
                <span className="text-white font-semibold">AI Social Automation</span>
                <div className="ml-2 px-2 py-1 bg-green-500/20 rounded-full">
                  <span className="text-xs text-green-300 font-bold">Enterprise</span>
                </div>
              </div>
              <div className="flex space-x-6 text-gray-400">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                <a href="https://github.com/neuranest-enterprise" className="hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
              <p>&copy; 2025 AI Social Automation by NeuraNest Enterprise. All rights reserved.</p>
              <p className="mt-2 text-sm">Powered by MCP SuperPowers • Enterprise-grade social media automation</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}