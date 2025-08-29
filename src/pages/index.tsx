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
  CreditCardIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeDemo, setActiveDemo] = useState('dashboard');

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Real-time data visualization with predictive insights and AI-powered forecasting',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Intelligence',
      description: 'Machine learning algorithms with GPT-4 integration for smart decision making',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Connectivity',
      description: 'Multi-cloud deployment with 99.99% uptime SLA across 50+ regions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliant with zero-trust architecture and encryption',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: LightBulbIcon,
      title: 'Custom Automation',
      description: 'No-code workflow builder with 500+ integrations and API webhooks',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: CreditCardIcon,
      title: 'Revenue Analytics',
      description: 'Advanced billing, subscription management, and financial forecasting',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 29,
      description: 'Perfect for individuals and small teams',
      features: ['5 Dashboards', '10GB Storage', 'Basic Analytics', 'Email Support', 'Mobile App', 'Slack Integration'],
      highlighted: false,
      priceId: 'price_starter_monthly'
    },
    {
      name: 'Professional',
      price: 79,
      description: 'Advanced features for growing businesses',
      features: ['25 Dashboards', '100GB Storage', 'Advanced Analytics', 'Priority Support', 'API Access', 'Custom Integrations', 'Team Collaboration', 'Automated Reports'],
      highlighted: true,
      priceId: 'price_professional_monthly'
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'Comprehensive solution for large organizations',
      features: ['Unlimited Dashboards', '1TB Storage', 'Custom Analytics', '24/7 Support', 'Full API', 'White Label', 'SSO Integration', 'Custom AI Models', 'Dedicated Success Manager', 'SLA Guarantee'],
      highlighted: false,
      priceId: 'price_enterprise_monthly'
    }
  ];

  const handleSubscribe = async (priceId: string) => {
    // In production, this would integrate with Stripe
    console.log('Subscribing to:', priceId);
    // Redirect to Stripe Checkout
    window.location.href = `/api/stripe/checkout?price=${priceId}`;
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }

  return (
    <>
      <Head>
        <title>V0 Futuristic Dashboard - Professional Analytics Platform</title>
        <meta name="description" content="Transform your data into actionable insights with our advanced futuristic dashboard platform. Real-time analytics, AI-powered intelligence, and enterprise-grade security." />
        <meta name="keywords" content="dashboard, analytics, business intelligence, real-time data, AI insights" />
        <meta property="og:title" content="V0 Futuristic Dashboard - Professional Analytics Platform" />
        <meta property="og:description" content="Transform your data into actionable insights with our advanced dashboard platform." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://v0-dashboard.vercel.app" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <SparklesIcon className="h-8 w-8 text-cyan-400" />
                <span className="text-white font-bold text-xl">V0 Dashboard</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                The Future of
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Analytics</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced futuristic dashboard platform. 
                Real-time analytics, AI-powered intelligence, and enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleSubscribe('price_professional_monthly')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MCP Status Panel */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <MCPStatusPanel />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Enterprise SuperPowers</h2>
              <p className="text-gray-300 text-xl">MCP-powered features with AI orchestration and deep reasoning</p>
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

        {/* Stripe Embedded Pricing Section */}
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Analytics?</h2>
              <p className="text-gray-300 text-xl mb-8">
                Join thousands of companies already using V0 Dashboard to make better decisions.
              </p>
              <button 
                onClick={() => handleSubscribe('price_professional_monthly')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial Today
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <SparklesIcon className="h-6 w-6 text-cyan-400" />
                <span className="text-white font-semibold">V0 Dashboard</span>
              </div>
              <div className="flex space-x-6 text-gray-400">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
              <p>&copy; 2025 V0 Dashboard by NeuraNest AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}