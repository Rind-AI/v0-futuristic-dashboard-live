import React, { useEffect } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': any
    }
  }
}

interface StripeButtonProps {
  priceId: string
  publishableKey: string
  plan: 'starter' | 'professional' | 'enterprise'
}

const StripeEmbeddedButton: React.FC<StripeButtonProps> = ({ 
  priceId, 
  publishableKey, 
  plan 
}) => {
  useEffect(() => {
    // Load Stripe.js script if not already loaded
    const existingScript = document.querySelector('script[src*="stripe.com/v3/buy-button.js"]')
    
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://js.stripe.com/v3/buy-button.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  const getPlanDetails = () => {
    switch (plan) {
      case 'starter':
        return {
          name: 'Starter Plan',
          price: '$29',
          description: 'Perfect for individuals and small projects',
          features: [
            'Basic Dashboard Access',
            'Core Analytics Tools', 
            '5 Projects Limit',
            'Email Support',
            'Mobile App Access'
          ]
        }
      case 'professional':
        return {
          name: 'Professional Plan',
          price: '$79',
          description: 'Best for growing businesses',
          features: [
            'Advanced Dashboard Suite',
            'Real-time Analytics',
            'Unlimited Projects', 
            'Priority Support',
            'Custom Integrations',
            'Team Collaboration',
            'API Access'
          ]
        }
      case 'enterprise':
        return {
          name: 'Enterprise Plan',
          price: '$199',
          description: 'For large organizations',
          features: [
            'Full Platform Access',
            'AI-Powered Insights',
            'White-label Solution',
            'Dedicated Account Manager',
            'Custom Development',
            'SLA Guarantee', 
            'On-premise Deployment',
            '24/7 Phone Support'
          ]
        }
    }
  }

  const planDetails = getPlanDetails()

  return (
    <div className={`pricing-card ${plan} bg-white rounded-xl shadow-lg p-8 border-2 ${
      plan === 'professional' ? 'border-blue-500 scale-105' : 'border-gray-200'
    }`}>
      {plan === 'professional' && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            🔥 MOST POPULAR
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {planDetails.name}
        </h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {planDetails.price}
          <span className="text-lg text-gray-500 font-normal">/month</span>
        </div>
        <p className="text-gray-600">{planDetails.description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {planDetails.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Temporary Demo Button - Replace with real Stripe integration */}
      <div className="text-center">
        <button
          onClick={() => {
            alert(`Demo: You selected ${planDetails.name} for ${planDetails.price}/month\n\nTo enable real payments:\n1. Create actual Stripe products\n2. Replace buy-button-id with real IDs\n3. Configure webhook endpoints`)
          }}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
        >
          Get Started with {planDetails.name}
        </button>
        <p className="mt-2 text-xs text-gray-500">
          🧪 Demo Mode - Click to see pricing details
        </p>
      </div>
    </div>
  )
}

export const StripePricingSection: React.FC = () => {
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_51RbXu23iFqttcbW7sfS2Xkd2ZmWIduYBWs02NL9hkuVVBI2WXXZ40pHSxCM9n5xhYvsLcTvmbrommBpg3NWKBBxr001wJCiaJo'

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey to success with our powerful dashboard platform. 
            Choose the plan that fits your needs and scale as you grow.
          </p>
          <div className="mt-4 p-4 bg-green-100 rounded-lg inline-block">
            <p className="text-green-800 font-semibold">
              🧪 <strong>Test Mode:</strong> Safe to test - No real charges will be made
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <StripeEmbeddedButton
            plan="starter"
            priceId="demo-starter"  // Demo mode
            publishableKey={publishableKey}
          />
          <StripeEmbeddedButton
            plan="professional"  
            priceId="demo-professional"  // Demo mode
            publishableKey={publishableKey}
          />
          <StripeEmbeddedButton
            plan="enterprise"
            priceId="demo-enterprise"  // Demo mode
            publishableKey={publishableKey}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            🔒 Secure payments powered by Stripe • 30-day money-back guarantee
          </p>
          <div className="flex justify-center space-x-4 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StripeEmbeddedButton